import React from "react";
import { notFound } from "next/navigation";
import { getAllServices } from "@/_sanityservices/services";
import { Metadata } from "next";
import SubServiceHero from "@/app/(user)/services/_services/subserviceheader";
import Section from "@/app/(user)/services/_services/section";

type Props = {
	params: { slug: string };
};

// Step 1: Generate all possible slugs for static generation.
export async function generateStaticParams() {
	const services = await getAllServices();

	// Return an array of possible slug values for static generation.
	return services.map((service: any) => ({
		slug: service.slug.current,
	}));
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
	const { params } = props;
	const service = await getAllServices().then((services) => {
		return services.find((page: any) => page.slug.current === params.slug);
	});

	if (service?.seo) {
		return {
			title: `${service?.seo?.metaTitle}`,
			description: `${service?.seo?.metaDesc}`,
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

// Step 2: Fetch the specific service data for a given slug and render the page.
export default async function ServicePage({ params }: { params: any }) {
	const slug = params.slug;

	const services = await getAllServices().then((data) => {
		return data.map((page: any) => page.service);
	});

	const matchedService = services.find(
		(service: any) => service.slug.current === slug
	);

	if (!matchedService) {
		return notFound();
	}

	return (
		<div>
			<SubServiceHero service={matchedService} />
			{matchedService?.sections?.map((section: any, index: number) => (
				<Section key={index} section={section} index={index} />
			))}
			{/* ... Any other components or content you want to render ... */}
		</div>
	);
}
