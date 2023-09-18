import React from "react";
import Animated from "@/components/global/animation";
import Image from "next/image";
import Me from "public/me.jpg";

export default function content() {
	return (
		<div className="bg-white pb-8">
			<div className="content">
				<div className="flex flex-col md:flex-row">
					<div className="flex items-center justify-center w-full md:w-1/2 mb-4 sb:mb-0">
						<Animated delay={0.25}>
							<div className="w-full p-[10%]">
								<Image
									className="rounded-xl"
									src={Me}
									alt={"Kevin Schmelter"}
								></Image>
							</div>
						</Animated>
					</div>
					<div className="flex items-center justify-center w-full md:w-1/2 space-y-6 text-black">
						<Animated delay={0.3}>
							<h3 className="text-center text-2xl xl:text-3xl mb-6 lg:mb-8 font-medium">
								Hey! My name is Kevin Schmelter.
							</h3>
							<p className="text-center text-[16px] md:text-[18px] xl:text-xl">
								{
									"I'm a (mostly) self taught web developer with an Associates Degree in Computer Science based in Ellington, Connecticut. I started web development in 2021 and fell in love with being able to create something aesthetically pleasing, and powerfully functional. I absolutely love improving peoples lives with technology, but am also a huge music fan, tennis player, comedy fan, and love to hang out with my friends."
								}
							</p>
						</Animated>
					</div>
				</div>
				<p className="text-sm md:text-md text-center mt-12">
					Picture by Pasini Productions LLC
				</p>
			</div>
		</div>
	);
}
