/** @type {import('next').NextConfig} */
const { createClient } = require("next-sanity");

function assertValue(v, errorMessage) {
	if (v === undefined) {
		throw new Error(errorMessage);
	}
	return v;
}

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-08-26";
const dataset = assertValue(
	process.env.NEXT_PUBLIC_SANITY_DATASET,
	"Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);
const projectId = assertValue(
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	"Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);
const useCdn = false;

const client = createClient({
	apiVersion,
	dataset,
	projectId,
	useCdn,
});

async function getAllRedirects() {
	const query = `*[_type == "redirects"]{from, to}`;
	const redirects = await client.fetch(query);
	return redirects;
}

const nextConfig = {
	experimental: {
		serverActions: true,
	},
	images: {
		domains: ["cdn.sanity.io"],
	},
	async redirects() {
		const redirectsFromSanity = await getAllRedirects();
		const redirects = redirectsFromSanity.map((redirect) => ({
			source: redirect.from,
			destination: redirect.to,
			permanent: true,
		}));
		return redirects;
	},
};

module.exports = nextConfig;
