import Header from "@/components/portfolio/portfolioheader";
import LogoBar from "@/components/global/logobar";
import React from "react";
import MPSPhone from "public/mpsphone.png";
import MPSLaptop from "public/mpslaptop.png";
import MPSTablet from "public/mpstablet.png";
import Project from "@/components/portfolio/project";

const projects = [
	{
		title: "Monark Lake Houses",
		description:
			"This is a simple 5 page website that was built for Monark Property Services, and their three lake houses on Wangumbaug Lake in Coventry, Connecticut.",
		features: [
			"Built with Wordpress",
			"Beautiful, responsive design",
			"Display pages for each house",
			"Contact form for tenant engagement",
			"Logo re-design",
		],
		button: "MonarkLakeHouses.com",
		url: "https://monarklakehouses.com/",
		photos: [MPSLaptop, MPSPhone, MPSTablet],
		carousel: "right",
	},
	{
		title: "Trendnest",
		description:
			"Trendnest is a web application that sends personalized live-data newsletters powered by AI, straight to your inbox.",
		features: [
			"Frontend built with Next.js and Tailwind",
			"Backend built with Supabase, Azure, OpenAI and more",
			"Payments and subscriptions integrated with Stripe",
			"Beautiful, responsive design",
			"Entire branding",
		],
		button: "Trendnest.io",
		url: "https://trendnest.io/",
		photos: [MPSLaptop, MPSPhone, MPSTablet],
		carousel: "left",
	},
	{
		title: "Monark Lake Houses",
		description:
			"This is a simple 5 page website that was built for Monark Property Services, and their three lake houses on Wangumbaug Lake in Coventry, Connecticut.",
		features: [
			"Built with Wordpress",
			"Beautiful, responsive design",
			"Display pages for each house",
			"Contact form for tenant engagement",
			"Logo re-design",
		],
		button: "MonarkLakeHouses.com",
		url: "https://monarklakehouses.com/",
		photos: [MPSLaptop, MPSPhone, MPSTablet],
		carousel: "right",
	},

	// {
	// 	title: "Monark Lake Houses",
	// 	description: "",
	// 	features: [],
	// 	button: "",
	// 	url: "",
	// 	photos: [],
	// },
];

export default function page() {
	return (
		<div>
			<Header></Header>
			<LogoBar></LogoBar>
			{projects.map((project, index) => (
				<Project key={index} project={project}></Project>
			))}
		</div>
	);
}
