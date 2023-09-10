"use client";
import React, { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";

const App = () => {
	const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setRootElement(document.getElementById("root"));
	}, []);

	if (!rootElement) return null;

	return (
		<div className="App fixed bottom-0 right-0">
			<PopupWidget
				url="https://calendly.com/kswebservices"
				rootElement={rootElement}
				text="Schedule a time to talk!"
				textColor="#ffffff"
				color="#1B5D1D"
			/>
		</div>
	);
};

export default App;
