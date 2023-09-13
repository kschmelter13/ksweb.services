import React from "react";
import Abouthero from "@/components/about/abouthero";
import Content from "@/components/about/content";

export const metadata = {
	title: "CT Web Design & Web Development Solutions | KS Web Services",
	description:
		"Elevate your brand with CT web design & development solutions from KS Web Services. Stunning websites, powerful applications, proven results. Contact us today!",
};

export default function page() {
	return (
		<div>
			<Abouthero></Abouthero>
			<Content></Content>
		</div>
	);
}
