import React from "react";
import Animated from "../global/animation";
import Link from "next/link";
import Carousel from "./carousel";
import { FaCheck } from "react-icons/fa"; // Importing the check icon

export default function Project({ project }: { project: any }) {
	return (
		<div className={`${project?.carousel === "left" ? "bg-gray-100" : ""}`}>
			<div className="content flex flex-col lg:flex-row py-12 lg:py-16">
				<h1 className="block lg:hidden font-medium text-center text-3xl xl:text-4xl mb-12">
					{project?.title}
				</h1>
				<div
					className={`order-2 text-black w-full lg:w-1/2 flex flex-col items-center justify-center ${
						project?.carousel === "right" ? "lg:pr-6" : "lg:order-2 lg:pl-6"
					}`}
				>
					<Animated>
						<h1 className="hidden lg:block font-medium text-center text-2xl sb:text-3xl xl:text-4xl">
							{project?.title}
						</h1>
						<h2 className="text-center text-lg lg:text-xl mt-10 2xl:mt-7 max-w-[600px]">
							{project?.description}
						</h2>

						{/* Features list */}
						<div className="flex items-center text-lg xl:text-xl justify-center ml-8">
							<ul className="list-disc inline-block list-inside mt-6">
								{project?.features?.map((feature: any, index: any) => (
									<li key={index} className="flex items-center mt-2">
										<FaCheck className="text-black mr-4 w-4 h-4" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="flex items-center justify-center mt-12">
							<Link href={project?.url}>
								<div className="inline-block px-6 py-4 rounded-[5px] bg-[#1B5D1D] text-white font-semibold">
									<span>{project?.button}</span>
								</div>
							</Link>
						</div>
					</Animated>
				</div>

				<div
					className={`flex-grow lg:w-1/2 items-center justify-center ${
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
