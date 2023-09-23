"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import React, { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go"; // Import icons from react-icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
				className="w-[auto] h-[auto] sb:px-[10%] lg:px-10 sb:h-[250px] mx-auto lg:w-[auto] lg:h-[auto]"
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
		arrows: false,
		speed: 500,
		dots: true,
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
			<div className="px-2 lg:px-0 ">
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
			<div className="mt-8 text-black hidden lg:flex justify-center">
				<button
					onClick={goToPrevSlide}
					className="mr-6 bg-gray-200 p-3 rounded-full"
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
