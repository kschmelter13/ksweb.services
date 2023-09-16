"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go"; // Import icons from react-icons

const CustomSlide = ({
	imageSrc,
	alt,
	...props
}: {
	imageSrc: StaticImageData;
	alt: string;
}) => {
	return (
		<div {...props} className="flex items-center justify-center">
			<Image
				src={imageSrc}
				alt={alt}
				className="w-[auto] h-[auto] lg:p-10 sb:h-[250px] mx-auto lg:w-[auto] lg:h-[auto]"
			/>
		</div>
	);
};

interface CarouselProps {
	photos: any;
	title: string;
	showArrows?: boolean;
	autoPlay?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
	photos,
	title,
	showArrows = true,
	autoPlay = true,
}) => {
	const sliderRef = useRef<Slider | null>(null);

	const settings = {
		ref: sliderRef,
		touchMove: true,
		infinite: true,
		pauseOnHover: false,
		arrows: showArrows,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		centerMode: true,
		centerPadding: "0px",
		edgePadding: "0px",
		className: "overflow-hidden-y",
	};

	const goToNextSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	const goToPrevSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};

	return (
		<div>
			<div className="">
				<Slider {...settings}>
					{photos.map((photo: any, index: any) => (
						<CustomSlide
							key={index}
							imageSrc={photo}
							alt={`${title} ${index + 1}`}
						/>
					))}
				</Slider>
			</div>
			<div className="hidden lg:flex justify-center">
				<button
					onClick={goToPrevSlide}
					className="mr-4 bg-gray-200 p-3 rounded-full"
				>
					<GoArrowLeft size={24} /> {/* Use the FaArrowLeft icon */}
				</button>
				<button
					onClick={goToNextSlide}
					className="bg-gray-200 p-3 rounded-full"
				>
					<GoArrowRight size={24} /> {/* Use the FaArrowRight icon */}
				</button>
			</div>
		</div>
	);
};

export default Carousel;
