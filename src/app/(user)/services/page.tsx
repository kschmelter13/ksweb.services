import Services from "@/app/(user)/_components/services";
import ServicesHeader from "@/app/(user)/services/_services/mainservicesheader";
import React from "react";

export default function page() {
	return (
		<div>
			<ServicesHeader></ServicesHeader>
			<Services></Services>
		</div>
	);
}
