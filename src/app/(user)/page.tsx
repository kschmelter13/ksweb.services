import HomeHero from "@/app/(user)/_components/homehero";
import Logobar from "@/app/(user)/_components/logobar";
import Services from "@/app/(user)/_components/services";
import About from "@/app/(user)/_components/about";
import { getMainPages } from "@/_sanityservices/services";
import { Metadata } from "next";

type Props = {
	params: { slug: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
	const page = await getMainPages().then((pages) => {
		return pages.find((page: any) => page.slug.current === "/");
	});
	if (page?.seo) {
		return {
			title: `${page?.seo?.metaTitle}`,
			description: `${page?.seo?.metaDesc}`,
			metadataBase: new URL("https://ksweb.services"),
			alternates: {
				canonical: "/",
				languages: {
					"en-US": "/en-US",
					"de-DE": "/de-DE",
				},
			},
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

export default async function Home() {
	return (
		<div>
			<HomeHero></HomeHero>
			<Logobar></Logobar>
			<Services></Services>
			<About></About>
		</div>
	);
}
