import React from "react";
import Image from "next/image";
import {
	getAllArticles,
	getArticlePage,
	getMainPages,
} from "@/_sanityservices/services";
import { Metadata } from "next";
import { urlForImage } from "../../../../sanity/lib/image";
import Categories from "./_articles/categories";
import Link from "next/link";
import Featured from "./_articles/featured";
import ArticleGrid from "./_articles/grid";
import Animated from "../_components/animation";

type Props = {
	params: { slug: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
	const page = await getMainPages().then((pages) => {
		return pages.find((page: any) => page.slug.current === "articles");
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

export default async function Page() {
	const allArticles = await getAllArticles();

	const featured = allArticles.filter(
		(article: any) => article.featured === true
	);
	const articles = allArticles.filter(
		(article: any) => article.featured === false
	);

	return (
		<div>
			<div className="content">
				<div className="2xl:px-[10%]">
					<Featured featured={featured}></Featured>
				</div>
			</div>
			<div className="bg-[#EBEBEB]">
				<div className="py-10 content">
					<div className="2xl:px-[10%]">
						<Animated delay={0.3}>
							<ArticleGrid articles={articles}></ArticleGrid>
						</Animated>
					</div>
				</div>
			</div>
		</div>
	);
}
