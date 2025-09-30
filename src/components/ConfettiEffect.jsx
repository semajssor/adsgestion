import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function ConfettiEffect() {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const handleResize = () => {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (dimensions.width === 0 || dimensions.height === 0) {
		return null; 
	}

	return (
		<Confetti
			width={dimensions.width}
			height={dimensions.height}
			recycle={false}
			numberOfPieces={300}
			gravity={0.3}
		/>
	);
}
