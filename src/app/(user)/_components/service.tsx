import React from "react";
import Animated from "./animation";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
	title: string;
	imageSrc: any;
	text: string;
	width?: number | undefined;
	height?: number | undefined;
	buttonText?: string;
	url: string;
}

export default function ServiceCard({
	title,
	imageSrc,
	text,
	width = 100,
	height = 100,
	buttonText = "Learn More",
	url,
}: ServiceCardProps) {
	return (
		<div className="border bg-white text-black flex flex-col rounded-xl overflow-hidden shadow-md text-center align-middle items-center justify-center p-8 pb-10 space-y-6">
			<h2 className="text-2xl xl:text-3xl font-semibold mb-2">{title}</h2>
			<div>
				<Image src={imageSrc} alt={title} width={width} height={height} />
			</div>
			<p className="text-xl">{text}</p>
			<div>
				<Link href={url}>
					<div className="inline-block px-6 py-4 rounded-[5px] bg-[#1B5D1D] text-white font-semibold">
						<span>{buttonText}</span>
					</div>
				</Link>
			</div>
		</div>
	);
}
