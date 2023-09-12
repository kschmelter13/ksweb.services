import React from "react";
import ServiceCard from "../global/service";
import Design from "public/design.png";
import Dev from "public/dev.png";
import Redesign from "public/redesign.png";
import Analysis from "public/analysis.png";

export default function Services() {
	return (
		<div className="bg-[#EBEBEB]">
			<div className="content p-4 py-10 md:py-14 2xl:py-20">
				<h1 className="text-black font-medium text-2xl sm:text-3xl xl:text-4xl text-center mb-6 md:w-4/5 mx-auto max-w-[700px]">
					Custom web solutions made for anyone and any business!
				</h1>
				<div className="grid md:grid-cols-2 gap-8 mt-10 md:mt-14 2xl:mt-20">
					<ServiceCard
						title="Web Design"
						imageSrc={Design}
						text="Looking to start a new website?"
						url={"/services/design"}
					/>
					<ServiceCard
						title="Web Re-design"
						imageSrc={Redesign}
						text="Does your website need an update?"
						url={"/services/redesign"}
					/>
					<ServiceCard
						title="Web Development"
						imageSrc={Dev}
						text="Need an application or integration built?"
						url={"/services/development"}
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
