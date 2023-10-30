//// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import cx from "classnames";
import Image from "next/image";

import { buildSrc, buildSizes } from "@/_sanityservices/services";

type PhotoProps = {
	photo: any;
	width?: number;
	height?: number;
	layout?: "intrinsic" | "fill" | "responsive" | "fixed";
	quality?: number;
	hasPlaceholder?: boolean;
	onLoad: () => void;
	className?: string;
};

const Photo = ({
	photo,
	width,
	height,
	layout = "intrinsic",
	quality = 80,
	hasPlaceholder = true,
	onLoad,
	className,
}: PhotoProps) => {
	const [isLoaded, setIsLoaded] = useState(false);

	const src = buildSrc(photo, {
		width,
		height,
		quality,
	});

	function handleLoad() {
		setIsLoaded(true);
	}

	useEffect(() => {
		if (isLoaded && onLoad) onLoad();
	}, [isLoaded]);

	const sizes = buildSizes(layout);
	if (!photo?.asset) return null;

	return (
		<figure className={className ? className : ""}>
			<div className={cx("ar", { "has-fill": layout === "fill" })}>
				<Image
					width={width}
					height={height}
					src={src.url()}
					alt={photo.alt || photo.asset?.altText}
					layout={layout}
					onLoad={handleLoad}
					placeholder={hasPlaceholder ? "blur" : undefined}
					blurDataURL={hasPlaceholder ? photo.lqip : undefined}
					sizes={sizes}
				/>
			</div>
		</figure>
	);
};

export default Photo;
