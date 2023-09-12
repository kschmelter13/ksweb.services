import React from "react";
import Image from "next/image";
import heromocks from "public/heromocks.webp";
import phone from "public/phone3.png";
import Link from "next/link";
import AnimatedContainer from "@/components/animation";

export default function HomeHero() {
	return (
		<div className="content flex flex-row pb-12 pt-10 lg:pb-8 lg:pt-6 ">
			<div className="text-black w-3/5 md:w-1/2 flex flex-col items-center justify-center">
				<AnimatedContainer>
					<h1 className="text-centered md:text-left text-3xl sm:text-4xl xl:text-5xl">
						Web solutions that <span className="font-semibold">jumpstart</span> your business

					</h1>

					<p className="text-md md:block hidden md:text-xl mt-6 2xl:mt-7 max-w-[700px]">
						<span className="font-semibold">Improve your business </span>
						and connect with your customers, using the best custom web design and development services.
					</p>
					<div className="mt-11 sm:mt-14 md:mt-8 2xl:mt-9">
						<Link href={"/contact"}>
							<div className="inline-block px-6 py-4 rounded-[5px] bg-[#1B5D1D] text-white font-semibold">
								<span>Lets talk!</span>
							</div>
						</Link>
					</div>
				</AnimatedContainer>
			</div>
			{/* Image on medium screens and above */}
			<div className="flex w-2/5 md:w-1/2  lg:p-2 2xl:p-6  lg:pl-4 2xl:pl-8 items-center justify-center">
				<AnimatedContainer delay={0.3} yChange={50}>
					<div className="md:hidden inline-block sm:pl-8 sm:pr-8">
						<Image src={phone} alt="phone" className="sb:max-w-[180px] md:w-[100%] md:h-[100%]"/>
					</div>
					<div className="md:block hidden">
						<Image  src={heromocks} alt="website" />
					</div>
				</AnimatedContainer>
			</div>
		</div>
	);
}
