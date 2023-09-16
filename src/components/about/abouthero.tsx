import React from "react";
import Animated from "../global/animation";

export default function abouthero() {
	return (
		<div className="content">
			<div className="flex pt-12 pb-6 md:pt-20 md:pb-16 text-center items-center justify-center">
				<Animated>
					<h1 className="text-3xl xl:text-4xl">
						Meet the <span className="font-medium">KS</span> in KS Web Services
					</h1>
				</Animated>
			</div>
		</div>
	);
}
