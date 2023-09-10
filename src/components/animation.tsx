"use client";
import { motion, Variants } from "framer-motion";
import React, { FC, ReactNode, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedContainerProps {
	children: ReactNode;
	yChange?: number; // Change in Y coordinate. Default to 30 if not provided
	delay?: number; // Delay in seconds. Default to 0.25 if not provided
	duration?: number; // Duration in seconds. Default to 1.5 if not provided
	ease?: [number, number, number, number]; // Easing function. Default to [0.16, 1, 0.3, 1] if not provided
}

const AnimatedContainer: FC<AnimatedContainerProps> = ({
	children,
	yChange = 30,
	delay = 0.25,
	duration = 1.5,
	ease = [0.16, 1, 0.3, 1],
}) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [animationState, setAnimationState] = useState("hidden");

	useEffect(() => {
		if (inView) setAnimationState("visible");
	}, [inView]);

	const containerVariants: Variants = {
		hidden: { opacity: 0, y: yChange },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				damping: 5,
				delay: delay,
				duration: duration,
				ease: ease,
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			variants={containerVariants}
			initial="hidden"
			animate={animationState}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedContainer;
