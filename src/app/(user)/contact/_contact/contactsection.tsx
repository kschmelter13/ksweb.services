import React from "react";
import Info from "./info";
import Form from "./form";
import Animated from "../../_components/animation";

export default function ContactSection() {
	return (
		<div className="content py-16">
			<div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
				<div className="flex-1">
					<Animated>
						<Info />
					</Animated>
				</div>
				<div className="flex-1">
					<Animated delay={0.25}>
						<Form />
					</Animated>
				</div>
			</div>
		</div>
	);
}
