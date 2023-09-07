import Image from "next/image";
import Link from "next/link";
import KSWebLogoTitle from "../../public/ksweblogotitle.svg";

export default function KSLogoTitle({
	width,
	height,
}: {
	width: number;
	height: number;
}) {
	return (
		<Link href="/">
			<Image
				src={KSWebLogoTitle}
				alt="KS Web Services Logo"
				width={width}
				height={height}
			/>
		</Link>
	);
}
