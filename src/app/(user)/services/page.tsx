import Services from "@/components/global/services";
import ServicesHeader from "@/components/services/mainservicesheader";
import React from "react";

export default function page() {
	return (
		<div>
			<ServicesHeader></ServicesHeader>
			<Services></Services>
		</div>
	);
}
