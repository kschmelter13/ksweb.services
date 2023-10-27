import React from "react";
import { getArticleContent, getAllArticles } from "@/_sanityservices/services";
import { notFound } from "next/navigation";
import ArticleBlock from "../_articles/article";

export async function generateStaticParams() {
	const articles = await getAllArticles();

	// Return an array of possible slug values for static generation.
	return articles.map((article: any) => ({
		slug: article.slug.current,
	}));
}

export default async function page({ params }: { params: any }) {
	const slug = params.slug;

	const articles = await getAllArticles().then((data) => {
		return data.map((page: any) => page);
	});

	const article = articles.find(
		(service: any) => service.slug.current === slug
	);

	if (!article) {
		return notFound();
	}
	// const content = await getArticleContent();

	return (
		<div>
			<section>
				<div className="page-block page-block--text">
					<div className="container mx-auto my-12">
						<div>
							<header className="mb-8 mx-auto prose-sm prose sm:prose sm:max-w-3xl">
								<h1 className="mb-3 text-4xl font-medium">{article.title}</h1>
							</header>
						</div>
					</div>
				</div>
				<div className="container page-block">
					<div className="mx-auto my-8 md:my-12 lg:my-16 prose-sm prose sm:prose sm:max-w-3xl "></div>
				</div>
			</section>
			<ArticleBlock text={article.blocks}></ArticleBlock>
		</div>
	);
}
