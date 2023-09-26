import Header from "@/app/(user)/portfolio/_portfolio/portfolioheader";
import LogoBar from "../_components/logobar";
import React from "react";
import MPSPhone from "public/mpsphone.png";
import MPSLaptop from "public/mpslaptop.png";
import MPSTablet from "public/mpstablet.png";
import TrendnestLaptop from "public/trendnestlaptop.png";
import TrendnestTablet from "public/trendnesttablet.png";
import TrendnestPhone from "public/trendnestphone.png";
import Project from "@/app/(user)/portfolio/_portfolio/project";
import { getMainPages } from "@/_sanityservices/services";
import { Metadata } from "next";

type Props = {
	params: { slug: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
	const page = await getMainPages().then((pages) => {
		return pages.find((page: any) => page.slug.current === "portfolio");
	});
	if (page?.seo) {
		return {
			title: `${page?.seo?.metaTitle}`,
			description: `${page?.seo?.metaDesc}`,
		};
	} else {
		// Handle the case where no page is found
		return {
			title: "CT Web Design & Web Development Solutions | KS Web Services",
			description:
				"Elevate your brand with CT web design & development solutions from KS Web Services. Stunning websites, powerful applications, proven results. Contact us today!",
		};
	}
};

const projects = [
	{
		title: "Monark Lake Houses",
		description:
			"Custom built for Monark Property Services, this 5 page website showcases their lake houses on Wangumbaug Lake.",
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
			"Custom built for Trendnest, this web application sends personalized live-data newsletters powered by AI, straight to your inbox.",
		features: [
			"Frontend built with Next.js and Tailwind",
			"Backend built with Supabase, Azure, OpenAI and more",
			"Payments and subscriptions integrated with Stripe",
			"Beautiful, responsive design",
			"Entire branding",
		],
		button: "Trendnest.io",
		url: "https://trendnest.io/",
		photos: [TrendnestLaptop, TrendnestPhone, TrendnestTablet],
		carousel: "left",
	},
	// {
	// 	title: "Vernon Greenways Volunteers",
	// 	description:
	// 		"Custom built for Vernon Greenways Volunteers, this website displays information to its sponsors and commmunity.",
	// 	features: [
	// 		"Re-designed 3 pages using existing Wordpress theme",
	// 		"Updated and added content site-wide",
	// 		"Added donation button integrated with Stripe",
	// 		"Beautiful, responsive design",
	// 		"Logo re-design",
	// 	],
	// 	button: "VernonGreenways.org",
	// 	url: "https://vernongreenways.org/",
	// 	photos: [MPSLaptop, MPSPhone, MPSTablet],
	// 	carousel: "right",
	// },

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
