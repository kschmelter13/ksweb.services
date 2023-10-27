"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

interface BubbleInfo {
	title: string;
}

interface ScrollBubbleGridProps {
	items: BubbleInfo[];
}

const Categories: React.FC<ScrollBubbleGridProps> = ({ items }) => {
	return (
		<div className="flex flex-wrap">
			{items.map((item, index) => (
				<div
					key={index}
					className="flex items-center justify-between text-[#1B5D1D] bg-white text-sm px-2 mr-[8px] my-[4px] rounded-full font-medium border-2 border-[#1B5D1D] cursor-pointer"
				>
					<div className="mb-0.45 text-[12px] lg:text-[14px]">{item.title}</div>
				</div>
			))}
		</div>
	);
};

export default Categories;
