import { ProseableText } from "@/app/(user)/_components/portabletext";

type ArticleBlockProps = {
	text: any;
};

function ArticleBlock(props: ArticleBlockProps) {
	const { text } = props;

	return (
		<div className="page-block page-block--text">
			<div className="container mx-auto my-12 text-black">
				<div>
					{text && (
						<ProseableText
							value={text[0].text}
							className={`mx-auto prose-sm prose sm:prose sm:max-w-3xl`}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default ArticleBlock;
