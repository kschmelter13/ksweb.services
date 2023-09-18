import React from "react";
import KSLogo from "public/ksweblogo.webp";
import Animated from "../global/animation";
import Image from "next/image";

export default function About() {
	return (
		<div className="bg-white py-14 md:py-20 space-x-4 flex">
			<div className="content space-y-8 md:space-y-0 xl:px-[15%] flex flex-col md:flex-row">
				<div className="flex items-center justify-center w-full md:w-1/2 mb-4 md:mb-0 md:px-4">
					{" "}
					{/* Added md:px-4 */}
					<Animated>
						<div className="max-w-[175px] md:max-w-[230px] xl:max-w-[275px]">
							<Image src={KSLogo} alt={""}></Image>
						</div>
					</Animated>
				</div>
				<div className="flex items-center justify-center w-full md:w-1/2 space-y-6 text-black md:px-4">
					{" "}
					{/* Added md:px-4 */}
					<Animated delay={0.25}>
						<h3 className="text-center text-2xl md:text-3xl xl:text-4xl mb-6 lg:mb-8 font-medium">
							Is KS Web Services the right fit?
						</h3>
						<p className="text-center text-[18px] xl:text-xl">
							{
								"Based in Ellington, CT, KS Web Services specializes in both web design and development, ensuring that every project receives personalized attention. With 3 years in the industry, we have honed our expertise in crafting successful digital solutions that authentically represent your brand and effectively engage your customers."
							}
						</p>
					</Animated>
				</div>
			</div>
		</div>
	);
}
