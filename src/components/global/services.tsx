import React from "react";
import ServiceCard from "./service";
import Design from "public/design.png";
import AppDev from "public/appdev.png";
import Dev from "public/dev.png";
import Analysis from "public/analysis.png";
import { client } from "../../../sanity/lib/client";
import { notFound } from "next/navigation";
import { urlForImage } from "../../../sanity/lib/image";

export default async function Services() {
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
		<div className="bg-[#EBEBEB]">
			<div className="content p-4 py-10 md:py-14 2xl:py-20">
				<h1 className="text-black font-medium md:font-normal text-2xl sm:text-3xl xl:text-4xl text-center mb-6 md:w-4/5 mx-auto max-w-[700px]">
					Custom web solutions made for anyone and any business!
				</h1>
				<div className="grid md:grid-cols-2 gap-8 mt-10 md:mt-14 2xl:mt-20">
					{services.map((service: any, index: number) => (
						<ServiceCard
							key={index}
							title={service.title}
							imageSrc={urlForImage(service?.mainImage).url()}
							text={service.tagline}
							url={`/services/${service.slug.current}`}
						/>
					))}

					{/* You can add more ServiceCard components as needed */}
				</div>
			</div>
		</div>
	);
}
