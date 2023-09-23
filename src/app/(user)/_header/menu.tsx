"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Services from "./services";
import { usePathname, useSearchParams } from "next/navigation";

export default function Menu({ services }: { services: any }) {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const pathname = usePathname();
	const searchParams = useSearchParams(); // <-- Initialize useRouter

	useEffect(() => {
		const url = `${pathname}?${searchParams}`;

		const handleCloseOnRouteChange = () => {
			setMobileNavOpen(false);
		};

		handleCloseOnRouteChange();

		// You can now use the current URL
		// ...
	}, [pathname, searchParams]);

	const variants = {
		open: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 50,
			},
		},
		closed: {
			x: "100%",
			opacity: 0,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 50,
			},
		},
	};

	return (
		<>
			<button
				className="md:hidden text-gray-500 hover:text-gray-800"
				onClick={() => setMobileNavOpen(!mobileNavOpen)}
			>
				<FiMenu size={20} />
			</button>

			<motion.div
				className="fixed top-0 right-0 h-screen w-[170px] bg-white z-500 shadow-xl md:hidden"
				initial="closed"
				animate={mobileNavOpen ? "open" : "closed"}
				variants={variants}
				transition={{ duration: 0.5 }}
			>
				<nav className="relative flex flex-col space-y-6 py-8 pr-4 pl-4 text-sm items-start font-semibold">
					<Link href="/about">
						<div className="text-gray-500 hover:text-black">About</div>
					</Link>
					<Link href="/portfolio">
						<div className="text-gray-500 hover:text-black">Portfolio</div>
					</Link>
					<Services services={services}></Services>
					<Link href="/articles">
						<div className="text-gray-500 hover:text-black">Articles</div>
					</Link>
					<div className="w-full">
						<Link href={"/contact"}>
							<div className="w-full text-center py-4 rounded-[5px] bg-[#1B5D1D] text-white font-semibold">
								<span>Lets talk!</span>
							</div>
						</Link>
					</div>
					<button
						className="fixed top-[6px] right-0 self-end mr-4 text-gray-400 hover:text-gray-800"
						onClick={() => setMobileNavOpen(false)}
					>
						<FiX size={22} />
					</button>
				</nav>
			</motion.div>
		</>
	);
}
