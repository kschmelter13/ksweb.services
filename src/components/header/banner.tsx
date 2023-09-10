"use client";

import { useState } from "react";
import Link from "next/link";
import { IoIosClose } from "react-icons/io"; // Import the close icon

export default function Banner() {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<div
			className={`${
				isVisible ? "block" : "hidden"
			} h-[50px] flex items-center justify-center space-x-[8px] bg-black px-4`}
		>
			<div className="text-white">
				<span className="text-md font-medium">FREE website analysis</span>
			</div>
			<div className="border-l border-white h-[15px] mx-4"></div>
			<div className="text-white">
				<Link href={"/analysis"}>
					<div className="text-[12px] font-semibold px-[14px] py-[6px] rounded-[5px] bg-[#1B5D1D]">
						Get FREE analysis
					</div>
				</Link>
			</div>
			<div className="border-l border-white h-[15px] mx-4"></div>
			<button onClick={() => setIsVisible(false)} className="text-white">
				<IoIosClose className="w-[26px] h-[26px]" />
			</button>
		</div>
	);
}
