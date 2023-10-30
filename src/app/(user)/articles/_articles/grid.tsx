import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../../../../sanity/lib/image";

type ArticleProps = {
	image: any;
	title: string;
	snippet: string;
	slug: any; // This will be used to link to the full article
};

const ArticleGrid: React.FC<{ articles: ArticleProps[] }> = ({ articles }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{articles.map((article, index) => (
				<div key={index} className="rounded-md overflow-hidden shadow-lg">
					<Link href={`/articles/${article.slug.current}`}>
						<Image
							src={urlForImage(article?.image).url()}
							alt={article.title}
							className="w-full h-48 object-cover"
							width={400} // Adjust width and height as per requirement
							height={240}
						/>
					</Link>
					<div className="p-4 bg-white">
						<h2 className="text-xl text-black font-medium">{article.title}</h2>
						<p>{article.snippet}</p>
						<Link href={`/articles/${article.slug.current}`}>
							<div className="mt-2 inline-flex items-center bg-[#1B5D1D] text-white px-4 py-2 rounded">
								Read More
							</div>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default ArticleGrid;
