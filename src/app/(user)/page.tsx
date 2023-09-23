import HomeHero from "@/app/(user)/_components/homehero";
import Logobar from "@/app/(user)/_components/logobar";
import Services from "@/app/(user)/_components/services";
import About from "@/app/(user)/_components/about";

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
