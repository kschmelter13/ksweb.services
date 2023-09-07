import React from "react";
import KSLogoTitle from "./kslogotitle";
import Link from "next/link";

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 bg-white bg-opacity-86 backdrop-blur-md h-[80px] flex items-center justify-between shadow-lg px-[10%] w-full">
			<KSLogoTitle width={133} height={133} />

			<nav className="flex space-x-7 text-sm items-center">
				<Link href={"/about"}>
					<div className="text-gray-500 hover:text-black">About</div>
				</Link>
				<Link href={"/portfolio"}>
					<div className="text-gray-500 hover:text-black">Portfolio</div>
				</Link>
				<button className="flex justify-center items-center">
					<span className="text-gray-500 hover:text-black">Services</span>
				</button>
				<Link href={"/blog"}>
					<div className="text-gray-500 hover:text-black">Blog</div>
				</Link>
				<Link href={"/contact"}>
					<div className="flex justify-center items-center px-6 py-4 rounded-[5px] bg-[#1B5D1D]">
						<span className="text-white">Let's talk!</span>
					</div>
				</Link>
			</nav>
		</header>
	);
}
