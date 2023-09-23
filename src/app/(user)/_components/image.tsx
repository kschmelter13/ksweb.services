import React from "react";
import Image from "next/image";

export default function image({
	width,
	height,
	source,
}: {
	width: number;
	height: number;
	source: any;
}) {
	return (
		<Image
			src={source}
			alt="KS Web Services Logo"
			width={width}
			height={height}
		/>
	);
}
