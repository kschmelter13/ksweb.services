import { Suspense } from "react";
import "../globals.css";
import Header from "@/app/(user)/_header/header";
import Analytics from "@/app/(user)/_components/analytics";
import Calendly from "@/app/(user)/_components/calendlybutton";
import Script from "next/script";
import Head from "next/head";
import Footer from "@/app/(user)/_components/footer";

export const metadata = {
	title: "CT Web Design & Web Development Solutions | KS Web Services",
	description:
		"Elevate your brand with CT web design & development solutions from KS Web Services. Stunning websites, powerful applications, proven results. Contact us today!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" id="root">
			<Script src="https://assets.calendly.com/assets/external/widget.js"></Script>
			<body className="min-h-screen ">
				<Suspense>
					<Analytics></Analytics>
				</Suspense>
				<Header></Header>
				<div>{children}</div>
				<Footer></Footer>
				<Suspense>
					<Calendly></Calendly>
				</Suspense>
			</body>
		</html>
	);
}

export const revalidate = 10;
