import React from "react";
import KSLogo from "public/ksweblogo.webp";
import Animated from "./animation";
import Image from "next/image";

export default function About() {
	return (
		<div className="bg-white py-14 md:py-20">
			<div className="content xl:px-[15%] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
				<div className="flex justify-center">
					<div className="max-w-[175px] md:max-w-[230px] xl:max-w-[275px]">
						<Image src={KSLogo} alt={""} />
					</div>
				</div>
				<div className="flex flex-col items-center space-y-6 text-black">
					<h3 className="text-center text-2xl md:text-3xl xl:text-4xl mb-6 lg:mb-8 font-medium">
						Is KS Web Services the right fit?
					</h3>
					<p className="text-center text-[18px] xl:text-xl">
						Based in Ellington, CT, KS Web Services specializes in both web
						design and development, ensuring that every project receives
						personalized attention. With 3 years in the industry, we have honed
						our expertise in crafting successful digital solutions that
						authentically represent your brand and effectively engage your
						customers.
					</p>
				</div>
			</div>
		</div>
	);
}
