import React from "react";
import { client } from "../../../../../sanity/lib/client";
import { notFound } from "next/navigation";

import SubServiceHero from "@/app/(user)/services/_services/subserviceheader";
import Section from "@/app/(user)/services/_services/section";

// Step 1: Generate all possible slugs for static generation.
export async function generateStaticParams() {
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

	// Return an array of possible slug values for static generation.
	return services.map((service: any) => ({
		slug: service.slug.current,
	}));
}

// Step 2: Fetch the specific service data for a given slug and render the page.
export default async function ServicePage({ params }: { params: any }) {
	const slug = params.slug;

	const query = `
  *[_type == "services"]{
    title,
    servicesList[]->{
      title,
      subtitle,
      slug,
      tagline,
      mainImage,
      sections[]{
        title,
        description,
        id,
        features,
        image
      }
    }
  }
`;

	const serviceData = await client.fetch(query);

	// Now filter the servicesList in JavaScript to get the service with the matching slug
	const services = serviceData[0].servicesList;
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
