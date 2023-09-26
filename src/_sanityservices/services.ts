import { client } from "../../sanity/lib/client";

export const getAllServices = async () => {
	const query = `
        *[_type == "pages"]{
            "services": services[]->{
                title,
                slug,
                seo,
                "service": pageService->{
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
        }
    `;

	const pagesData = await client.fetch(query);
	// Flatten the services array from all pages documents
	const services = pagesData.flatMap((page: any) => page.services);

	return services;
};

export const getMainPages = async () => {
	const query = `
        *[_type == "pages"]{
            "mainPages": main[]->{
                title,
                slug,
                seo,
            }
        }
    `;

	const pagesData = await client.fetch(query);

	// Flatten the services array from all pages documents
	const services = pagesData.flatMap((page: any) => page.mainPages);

	return services;
};

export const getAllArticles = async () => {
	const query = `
        *[_type == "pages"]{
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
