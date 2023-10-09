import React from "react";
import Animated from "../../_components/animation";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import { urlForImage } from "../../../../../sanity/lib/image";

export default function Section({
	section,
	index,
}: {
	section: any;
	index: number;
}) {
	const isEven = index % 2 === 0;

	const bgColor = isEven ? "bg-gray-100" : "";
	const textClass = isEven ? "md:order-2" : "md:order-1";
	const imageClass = isEven ? "md:order-1" : "md:order-2";
	const imagePadding = isEven ? "md:pr-[15%]" : "md:pl-[15%]";

	return (
		<div id={section.id} className={bgColor}>
			<div className="text-black content lg:px-[15%] 2xl:px-[20%] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 py-10 md:py-14 lg:py-20">
				<div className={`${textClass} order-2`}>
					<Animated delay={0.25}>
						<h1 className="font-medium text-[24px] mb-6 md:text-3xl xl:text-4xl">
							{section?.title}
						</h1>
						<h2 className="text-md sb:text-lg lg:text-xl mt-4 lg:mt-8">
							{section?.description}
						</h2>
						{/* Features list */}
						<div className="mt-6 ">
							<ul className="list-disc inline-block list-inside">
								{section?.features?.map((feature: any, index: any) => (
									<li key={index} className="flex items-center mt-2 ">
										<FaCheck className="text-black mr-4 w-4 h-4 flex-shrink-0" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>
					</Animated>
				</div>

				<div className={`${imageClass} order-1`}>
					<Animated delay={0.3} yChange={50}>
						<div className="flex justify-center">
							<Image
								src={urlForImage(section?.image).url() || ""}
								alt={""}
								width={500}
								height={500}
								className={`w-1/2 md:w-full ${imagePadding}`}
							/>
						</div>
					</Animated>
				</div>
			</div>
		</div>
	);
}
