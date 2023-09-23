import { client } from "../../sanity/lib/client";

export const getAllServices = async () => {
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

	return services;
};
