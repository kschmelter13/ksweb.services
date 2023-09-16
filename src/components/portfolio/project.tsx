import React from "react";
import Animated from "../global/animation";
import Carousel from "./carousel";
import { FaCheck } from "react-icons/fa6"; // Importing the check icon

export default function Project({ project }: { project: any }) {
	return (
		<div className={`${project?.carousel === "left" ? "bg-gray-100" : ""}`}>
			<div className="content flex flex-col lg:flex-row py-14 lg:py-20">
				<h1 className="text-black block lg:hidden font-medium text-center text-[24px] sb:text-3xl mb-10">
					{project?.title}
				</h1>
				<div
					className={`order-2 text-black w-full lg:w-1/2 flex flex-col items-center justify-center ${
						project?.carousel === "right" ? "lg:pr-6" : "lg:order-2 lg:pl-6"
					}`}
				>
					<Animated>
						<h1 className="hidden lg:block font-medium text-center md:text-3xl xl:text-4xl">
							{project?.title}
						</h1>
						<h2 className="text-center text-md sb:text-lg lg:text-xl mt-4 lg:mt-8 max-w-[600px]">
							{project?.description}
						</h2>

						{/* Features list */}
						<div className="flex items-center text-[14px] sb:text-[16px] xl:text-xl justify-center ml-8">
							<ul className="list-disc inline-block list-inside mt-6">
								{project?.features?.map((feature: any, index: any) => (
									<li key={index} className="flex items-center mt-2">
										<FaCheck className="text-black mr-4 w-4 h-4 flex-shrink-0" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="flex items-center justify-center mt-12">
							<a
								href={project?.url}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block px-6 py-4 rounded-[5px] bg-[#1B5D1D] text-white font-semibold"
							>
								<span>{project?.button}</span>
							</a>
						</div>
					</Animated>
				</div>

				<div
					className={`flex-grow lg:w-1/2 my-auto ${
						project?.carousel === "right" ? "lg:order-2 lg:pl-6" : "lg:pr-6"
					}`}
				>
					<Animated delay={0.3} yChange={50}>
						<Carousel
							photos={project?.photos}
							title={project?.title}
						></Carousel>
					</Animated>
				</div>
			</div>
		</div>
	);
}
