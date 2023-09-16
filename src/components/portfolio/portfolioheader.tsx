import React from "react";
import Animated from "../global/animation";
import Link from "next/link";

export default function abouthero() {
	return (
		<div className="content">
			<Animated>
				<div className="flex flex-col pt-12 pb-6 md:pt-20 md:pb-16 text-center items-center justify-center">
					<h1 className="text-center text-3xl sb:text-4xl xl:text-5xl">
						{"See the projects we've "}
						<span className="font-semibold">delivered</span>
					</h1>
					<h2 className="text-md text-center md:text-xl mt-6 2xl:mt-7 max-w-[600px]">
						<span className="font-semibold">Improve your business </span>with
						the best custom web design and development services.
					</h2>
					<div className="mt-11 sm:mt-14 md:mt-8 2xl:mt-9">
						<Link href={"/contact"}>
							<div className="inline-block px-6 py-4 rounded-[5px] bg-[#1B5D1D] text-white font-semibold">
								<span>Lets talk!</span>
							</div>
						</Link>
					</div>
				</div>
			</Animated>
		</div>
	);
}
