import HomeHero from "@/components/home/homehero";
import Logobar from "@/components/global/logobar";
import Services from "@/components/global/services";
import About from "@/components/home/about";

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
