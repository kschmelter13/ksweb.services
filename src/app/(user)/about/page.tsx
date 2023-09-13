import React from "react";
import Abouthero from "@/components/about/abouthero";
import Content from "@/components/about/content";

export const metadata = {
	title: "About KS Web Services",
	description:
		"Learn more about KS Web Services, your trusted partner for web design and development solutions in CT. Discover our team's expertise in creating stunning websites, powerful applications, and our proven track record. Get to know us better today!",
};

export default function page() {
	return (
		<div>
			<Abouthero></Abouthero>
			<Content></Content>
		</div>
	);
}
