import { Suspense } from "react";
import "../globals.css";
import Header from "@/components/header/header";
import Analytics from "@/components/client/analytics";
import Calendly from "@/components/client/calendlybutton";
import Script from "next/script";
import Head from "next/head";
import Footer from "@/components/footer";

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
			<Head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</Head>
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
