import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Info() {
	return (
		<div className="">
			<h2 className="text-black text-3xl lg:text-4xl  font-medium mb-4">
				Let's Work Together
			</h2>
			<p className="text-black mb-8 text-md lg:text-xl">
				We're excited to help you build your next big idea. Get in touch with us
				today and let's transform your visions into reality.
			</p>
			<ul>
				<li className="flex items-center mb-4">
					<span className="bg-[#1B5D1D] p-2 rounded-full mr-4">
						<FaEnvelope className="text-white" />
					</span>
					<a
						href="mailto:kevin@ksweb.services"
						className="text-[#1B5D1D] font-medium"
					>
						kevin@ksweb.services
					</a>
				</li>
				<li className="flex items-center mb-4">
					<span className="bg-[#1B5D1D] p-2 rounded-full mr-4">
						<FaPhoneAlt className="text-white" />
					</span>
					<a href="tel:8609936787" className="text-[#1B5D1D] font-medium">
						(860) 993-6787
					</a>
				</li>
				<li className="flex items-center mb-4">
					<span className="bg-[#1B5D1D] p-2 rounded-full mr-4">
						<FaMapMarkerAlt className="text-white" />
					</span>
					<span className="text-[#1B5D1D] font-medium">
						Ellington, Connecticut 06029
					</span>
				</li>
			</ul>
		</div>
	);
}
