import { getAllServices } from "@/_sanityservices/services";

const URL = "https://ksweb.services";

export default async function sitemap() {
	// Fetch services from Sanity
	const services = await getAllServices();

	// Construct URLs for each service
	const serviceUrls = services.map((service: any) => ({
		url: `${URL}/services/${service.slug.current}`,
		lastModified: new Date().toISOString(),
	}));

	const routes = [
		"",
		"/about",
		"/portfolio",
		"/services",
		"/articles",
		"/contact",
	].map((route) => ({
		url: `${URL}${route}`,
		lastModified: new Date().toISOString(),
	}));

	return [...routes, ...serviceUrls];
}
