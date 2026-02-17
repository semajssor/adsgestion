import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { navigate } from "astro/virtual-modules/transitions-router.js";
import { PatternFormat } from "react-number-format";

function ContactForm() {
	const [state, handleSubmit] = useForm("xpwypkvy");

	const customSubmit = async (event) => {
		event.preventDefault();

		// --- AJOUT DU TRACKING GA4 ---
		if (typeof window !== "undefined" && window.gtag) {
			window.gtag("event", "generate_lead", {
				"event_category": "Contact",
				"event_label": "Formulaire ADS Gestion",
				"value": 1.0,
			});
		}
		// -----------------------------

		const form = new FormData(event.target);
		await handleSubmit(form);
	};

	if (state.succeeded) {
		return navigate("/thank-you");
	}

	return (
		<form onSubmit={customSubmit} className="contact-form-ads">
			<div className="form-group">
				<label htmlFor="name">Nom complet / Nom de l'entreprise</label>
				<input id="name" type="text" name="name" required />
			</div>

			<div className="form-group">
				<label htmlFor="email">Adresse Courriel</label>
				<input id="email" type="email" name="email" required />
				<ValidationError prefix="Email" field="email" errors={state.errors} />
			</div>

			<div className="form-group">
				<label htmlFor="phone">Numéro de téléphone</label>
				<PatternFormat
					format="(###) ###-####"
					mask="_"
					id="phone"
					name="phone"
					type="tel"
					required
					className="phone-input"
				/>
			</div>

			<div className="form-group">
				<label htmlFor="message">Que pouvons-nous faire pour vous ?</label>
				<textarea id="message" name="message" rows="5" required placeholder="" />
				<ValidationError prefix="Message" field="message" errors={state.errors} />
			</div>

			{/* Honeypot field */}
			<input type="text" name="_gotcha" style={{ display: "none" }} />

			<button type="submit" disabled={state.submitting} className="submit-button">
				{state.submitting ? "Envoi en cours..." : "Envoyer mon message"}
			</button>

			<ValidationError errors={state.errors} />
		</form>
	);
}

export default ContactForm;
