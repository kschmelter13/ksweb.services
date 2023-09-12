import React from "react";
import KSLogo from "public/ksweblogo.webp";
import Animated from "../global/animation";
import Image from "next/image";

export default function about() {
	return (
		<div className="bg-white py-14 md:py-20">
			<div className="content space-y-8 md:space-y-0 xl:px-[15%] flex flex-col md:flex-row">
				<div className="flex items-center justify-center w-full md:w-1/2 mb-4 md:mb-0">
					<Animated delay={0.35}>
						<div className="max-w-[175px] md:max-w-[230px] xl:max-w-[275px]">
							<Image src={KSLogo} alt={""}></Image>
						</div>
					</Animated>
				</div>
				<div className="flex items-center justify-center w-full md:w-1/2 space-y-6 text-black">
					<Animated delay={0.4}>
						<h3 className="text-center text-2xl md:text-3xl xl:text-4xl mb-6 lg:mb-8 font-medium">
							Is KS Web Services the right fit?
						</h3>
						<p className="text-center text-[18px] xl:text-xl">
							{
								"As a solo web developer based in Ellington, CT, I offer personalized attention to each project I work on. With 3 years of experience in the industry, I have developed a deep understanding of what it takes to create a successful website and web presence that represents your brand and attracts customers."
							}
						</p>
					</Animated>
				</div>
			</div>
		</div>
	);
}
