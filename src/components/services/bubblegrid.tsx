"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

interface BubbleInfo {
	text: string;
	id: string;
}

interface ScrollBubbleGridProps {
	items: BubbleInfo[];
}

const ScrollBubbleGrid: React.FC<ScrollBubbleGridProps> = ({ items }) => {
	const handleScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const yOffset = -80; // Adjust the scroll by 80px for the navbar height
			const y =
				element.getBoundingClientRect().top + window.pageYOffset + yOffset;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};

	return (
		<div className="flex flex-wrap">
			{items.map((item, index) => (
				<div
					key={index}
					className="flex items-center justify-between text-[#1B5D1D] bg-white text-sm pl-4 pr-2 py-1 mx-[7px] my-[6px] rounded-full font-medium border-2 border-[#1B5D1D] cursor-pointer"
					onClick={() => handleScroll(item.id)}
				>
					<div className="mb-0.45 text-[14px] md:text-[16px]">{item.text}</div>
					<div className="ml-2 w-3 h-3 rounded-full text-xs flex items-center justify-center">
						<FaChevronDown className="w-4 h-4" />
					</div>
				</div>
			))}
		</div>
	);
};

export default ScrollBubbleGrid;
