import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";



function ContactForm() {
	const [state, handleSubmit] = useForm("xpwypkvy");

	if (state.succeeded) {
		return (
			<p className="success-message">
				Merci! Votre message a été envoyé. Nous vous répondrons sous peu.
			</p>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="contact-form-ads">
			<div className="form-group">
				<label htmlFor="name">Nom / Nom de l'entreprise</label>
				<input id="name" type="text" name="name" required />
			</div>

			<div className="form-group">
				<label htmlFor="email">Adresse Courriel</label>
				<input id="email" type="email" name="email" required />
				<ValidationError prefix="Email" field="email" errors={state.errors} />
			</div>

			<div className="form-group">
				<label htmlFor="phone">Numéro de téléphone</label>
				<input id="phone" type="tel" name="phone" required />
			</div>

			<div className="form-group">
				<label htmlFor="message">Que pouvons-nous faire pour vous ? </label>
				<textarea id="message" name="message" rows="5" required />
				<ValidationError prefix="Message" field="message" errors={state.errors} />
			</div>

			<button type="submit" disabled={state.submitting} className="submit-button">
				{state.submitting ? "Envoi en cours..." : "Envoyer mon message"}
			</button>
			<ValidationError errors={state.errors} />
		</form>
	);
}

export default ContactForm;
