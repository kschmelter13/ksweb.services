import React from "react";
import Image from "next/image";
import AnimatedContainer from "@/components/global/animation";
import ScrollBubbleGrid from "./bubblegrid";
import { urlForImage } from "../../../sanity/lib/image";

export default function SubServiceHero({ service }: { service: any }) {
	const image = urlForImage(service?.mainImage).url();

	return (
		<div className="content flex flex-row py-10 md:py-16 xl:py-18 ">
			<div className="text-black w-full md:w-1/2 flex flex-col items-center justify-start md:justify-center">
				<AnimatedContainer>
					<div className="md:hidden float-right w-[150px] sb:w-[175px] pl-9 pr-3 sb:px-8">
						<Image
							src={image}
							alt={service?.mainImage.alt}
							width={500}
							height={500}
						/>
					</div>
					<h1 className="text-centered font-medium md:text-left text-3xl sb:text-4xl xl:text-5xl">
						{service?.title}
					</h1>
					<h2 className="text-xl mt-6 2xl:mt-7 max-w-[600px]">
						{service?.subtitle}
					</h2>
					<div className="mt-6 md:mt-8 2xl:mt-9 max-w-[500px]">
						<ScrollBubbleGrid
							items={service?.sections.map((section: any) => ({
								text: section.title,
								id: section.id,
							}))}
						/>
					</div>
				</AnimatedContainer>
			</div>
			{/* Image on medium screens and above */}
			<div className="flex md:w-1/2 items-start justify-center">
				<AnimatedContainer delay={0.25} yChange={50}>
					<div className="flex items-center justify-center">
						<div className="md:block hidden md:w-3/5 lg:w-1/2">
							<Image
								src={image}
								width={700}
								height={700}
								alt={service?.mainImage.alt}
								className=""
							/>
						</div>
					</div>
				</AnimatedContainer>
			</div>
		</div>
	);
}
