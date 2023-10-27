import React from "react";
import { urlForImage } from "../../../../../sanity/lib/image";
import Categories from "../_articles/categories";
import Link from "next/link";
import Animated from "../../_components/animation";

export default function Featured({ featured }: { featured: any }) {
	return (
		<div className="py-4 sm:py-6 lg:py-8 2xl:py-10 mx-auto ">
			{featured.length > 0 && (
				<div
					className={`flex flex-col-reverse text-center md:text-left my-7 md:my-8 md:grid md:gap-8 ${
						featured[0]?.image ? "md:grid-cols-2" : "md:grid-cols-1"
					} `}
				>
					<div
						className={`flex flex-col justify-center space-y-4 ${
							featured[0]?.image ? "lg:w-4/5" : "text-center max-w-xl mx-auto"
						}`}
					>
						<Animated>
							<h1 className="mb-5 text-3xl lg:text-4xl font-medium">
								{featured[0].title}
							</h1>
							<p className="text-md lg:text-xl">{featured[0].summary}</p>
							<div className="flex items-center space-x-4 mt-5">
								<Link href={`/articles/${featured[0].slug.current}`}>
									<div className="bg-[#1B5D1D] text-white text-sm px-6 py-3 rounded mr-6 whitespace-nowrap flex-shrink-0">
										Read More
									</div>
								</Link>
								<Categories items={featured[0].categories}></Categories>
							</div>
						</Animated>
					</div>
					<Animated delay={0.25}>
						{featured[0]?.image && (
							<div className="relative mb-8 md:mb-0 h-[300px] sb:h-[350px] md:h-full bg-gray-100 rounded-md shadow-md aspect-w-7 aspect-h-5">
								<img
									src={urlForImage(featured[0]?.image).url() || ""}
									alt={featured[0].title}
									className="md:absolute inset-0 w-full h-full rounded-md object-cover" // added object-cover here
								/>
							</div>
						)}
					</Animated>
				</div>
			)}
		</div>
	);
}
