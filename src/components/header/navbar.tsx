import React from "react";
import KSLogoTitle from "../kslogotitle";
import Link from "next/link";
import Menu from "./menu";
import Services from "./services";
import { client } from "../../../sanity/lib/client";
import { notFound } from "next/navigation";

export default async function Navbar() {
	const query = `
  *[_type == "services"]{
    title,
    servicesList[]->{
      title,
      subtitle,
      slug,
      tagline,
      mainImage,
      sections
    }
  }
`;

	const serviceData = await client.fetch(query);
	const services = serviceData[0].servicesList;

	if (!services || services.length === 0) {
		return notFound();
	}
	return (
		<header className="sticky top-0 z-50 bg-white bg-opacity-86 backdrop-blur-md h-[80px] flex items-center justify-between shadow-lg px-[8%] w-full">
			<KSLogoTitle width={133} height={133} />

			<nav className="hidden md:flex space-x-7 text-sm items-center font-semibold">
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
				<Link href="/contact">
					<div className="flex justify-center items-center px-6 py-4 rounded-[5px] bg-[#1B5D1D] text-white">
						Lets talk!
					</div>
				</Link>
			</nav>
			<Menu services={services}></Menu>
		</header>
	);
}
