import React from "react";
import Animated from "../global/animation";
import { FaCheck } from "react-icons/fa6"; // Importing the check icon
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

export default function Section({
	section,
	index,
}: {
	section: any;
	index: number;
}) {
	const isEven = index % 2 === 0;

	const bgColor = isEven ? "bg-gray-100" : "";
	const textPosition = isEven ? "md:order-2 md:pl-6" : "md:pr-6";
	const imagePosition = isEven ? "md:pr-6" : "md:order-2 md:pl-6";
	const bgStyle = isEven
		? "bg-gradient-to-br from-white to-gray-200"
		: "bg-gradient-to-br from-gray-200 to-white";
	const imageLayout = isEven
		? "bg-gradient-to-br from-gray-100 to-gray-200"
		: "bg-gradient-to-br from-white to-gray-100";

	return (
		<div id={section.id} className={bgColor}>
			<div className="px-[15%] flex flex-col md:flex-row py-14 lg:py-20 items-center justify-between">
				<h1 className="text-black block md:hidden font-medium text-center text-[24px] sb:text-3xl mb-10">
					{section?.title}
				</h1>
				<div
					className={`order-2 text-black w-full lg:w-full flex flex-col items-center justify-center ${textPosition}`}
				>
					<Animated delay={0.25}>
						<h1 className="hidden md:block font-medium  md:text-3xl xl:text-4xl">
							{section?.title}
						</h1>
						<h2 className=" text-md sb:text-lg lg:text-xl mt-4 lg:mt-8 max-w-[600px]">
							{section?.description}
						</h2>

						{/* Features list */}
						<div className=" text-[14px] sb:text-[16px] xl:text-xl justify-center">
							<ul className="list-disc inline-block list-inside mt-6">
								{section?.features?.map((feature: any, index: any) => (
									<li key={index} className="flex items-center mt-2">
										<FaCheck className="text-black mr-4 w-4 h-4 flex-shrink-0" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>
					</Animated>
				</div>

				<div className={`h-full w-full my-auto ${imagePosition}`}>
					<Animated delay={0.3} yChange={50}>
						<div className={` flex justify-center`}>
							<Image
								src={urlForImage(section?.image).url() || ""}
								alt={""}
								width={500}
								height={500}
								className="w-3/6"
							></Image>
						</div>
					</Animated>
				</div>
			</div>
		</div>
	);
}
