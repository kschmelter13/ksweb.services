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
				<span className="text-sm font-medium">FREE website audits</span>
			</div>
			<div className="border-l border-white h-[15px] mx-4"></div>
			<div className="text-white">
				<Link href={"/audit"}>
					<div className="px-[14px] py-[3px] rounded-[5px] bg-[#1B5D1D]">
						<span className="text-[11px]">Get FREE audit</span>
					</div>
				</Link>
			</div>
			<div className="border-l border-white h-[15px] mx-4"></div>
			<button onClick={() => setIsVisible(false)} className="text-white">
				<IoIosClose className="w-7 h-7" />
			</button>
		</div>
	);
}
