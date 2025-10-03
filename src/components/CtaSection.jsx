export default function CtaSection({ title, buttonText, buttonLink }) {
	return (
		<section className="cta-section">
			<h2>{title}</h2>
			<a href={buttonLink} className="cta-button">
				{buttonText}
			</a>
		</section>
	);
}
