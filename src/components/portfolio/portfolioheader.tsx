import React from "react";
import Animated from "../global/animation";
import Link from "next/link";

export default function abouthero() {
	return (
		<div className="content">
			<Animated>
				<div className="text-black flex flex-col pt-12 pb-10 md:pt-20 md:pb-16 text-center items-center justify-center">
					<h1 className="text-center text-3xl sb:text-4xl xl:text-5xl">
						{"See the projects we've "}
						<span className="font-semibold">delivered</span>
					</h1>
					<h2 className="text-md text-center md:text-xl mt-6 2xl:mt-7 max-w-[600px]">
						Each project shows the{" "}
						<span className="font-semibold">outstanding work we do.</span> Take
						a look at the projects weve completed below!
					</h2>
					<h2 className="text-gray-500 font-semibold text-md text-center mt-2">
						or
					</h2>
					<div className="mt-3">
						<Link href={"/contact"}>
							<div className="text-sm md:text-md inline-block px-6 py-4 rounded-[5px] bg-[#1B5D1D] text-white font-semibold">
								<span>See our services!</span>
							</div>
						</Link>
					</div>
				</div>
			</Animated>
		</div>
	);
}
