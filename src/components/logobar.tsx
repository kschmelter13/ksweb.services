import Image from "next/image";
import React from "react";
import Trendnest from "public/trendnest.png";
import MPS from "public/mps.webp";
import VGV from "public/VGV.png";
import Link from "next/link";

export default function LogoBar() {
	return (
		<div className="h-[90px] bg-[#cccccc] flex justify-between items-center px-[10%] sm:px-[22%]">
			<a href="https://monarklakehouses.com/">
				<Image src={MPS} alt="Monark Lake Houses" width={60} height={60} />
			</a>
			<a href="https://trendnest.io">
				<Image src={Trendnest} alt="Trendnest" width={78} height={78} />
			</a>
			<a href="https://vernongreenways.org/">
				<Image
					src={VGV}
					alt="Vernon Greenways Volunteers"
					width={65}
					height={65}
				/>
			</a>
		</div>
	);
}
