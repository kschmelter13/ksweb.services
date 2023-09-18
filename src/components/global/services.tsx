import React from "react";
import ServiceCard from "./service";
import Dev from "public/design.png";
import AppDev from "public/dev.png";
import Design from "public/redesign.png";
import Analysis from "public/analysis.png";

export default function Services() {
	return (
		<div className="bg-[#EBEBEB]">
			<div className="content p-4 py-10 md:py-14 2xl:py-20">
				<h1 className="text-black font-medium md:font-normal text-2xl sm:text-3xl xl:text-4xl text-center mb-6 md:w-4/5 mx-auto max-w-[700px]">
					Custom web solutions made for anyone and any business!
				</h1>
				<div className="grid md:grid-cols-2 gap-8 mt-10 md:mt-14 2xl:mt-20">
					<ServiceCard
						title="Web Design"
						imageSrc={Design}
						text="Does your website need an update?"
						url={"/services/design"}
					/>
					<ServiceCard
						title="Web Development"
						imageSrc={Dev}
						text="Looking to upgrade or start a website?"
						url={"/services/development"}
					/>
					<ServiceCard
						title="App Development"
						imageSrc={AppDev}
						text="Need a custom application or system built?"
						url={"/services/applications"}
					/>
					<ServiceCard
						title="FREE Analysis"
						imageSrc={Analysis}
						text="Want FREE insights on your website?"
						url={"/services/analysis"}
					/>
					{/* You can add more ServiceCard components as needed */}
				</div>
			</div>
		</div>
	);
}
