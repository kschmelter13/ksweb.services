import ContactSection from "./_contact/contactsection";
import React from "react";
import { getMainPages } from "../../../_sanityservices/services";
import { Metadata } from "next";

type Props = {
	params: { slug: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
	const page = await getMainPages().then((pages) => {
		return pages.find((page: any) => page.slug.current === "contact");
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

export default function page() {
	return (
		<div>
			<ContactSection></ContactSection>
		</div>
	);
}
