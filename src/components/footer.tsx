import React from "react";
import KSLogoTitle from "./kslogotitle";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="bg-[#CCCCCC] pt-10">
			<div>
				<div className="sm:px-[3%] md:content flex justify-between items-center">
					<footer className="flex justify-between flex-col space-y-10 sm:space-y-0 mx-auto sm:mx-0 sm:flex-row w-full">
						<div className="flex items-center mx-auto sm:mx-0">
							<KSLogoTitle width={170} height={170} />
						</div>
						<div className="flex space-x-14 sm:mr-[75px] mx-auto sm:ml-0">
							<div>
								<h3 className="text-md font-medium mb-4">Company</h3>
								<ul className="space-y-2">
									<li>
										<Link href="/portfolio">
											<div className="hover:text-gray-700">Portfolio</div>
										</Link>
									</li>
									<li>
										<Link href="/services">
											<div className="hover:text-gray-700">Services</div>
										</Link>
									</li>
									<li>
										<Link href="/services">
											<div className="hover:text-gray-700">Articles</div>
										</Link>
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-md font-medium mb-4">Team</h3>
								<ul className="space-y-2">
									<li>
										<Link href="/about">
											<div className="hover:text-gray-700">About</div>
										</Link>
									</li>
									<li>
										<Link href="/contact">
											<div className="hover:text-gray-700">Contact</div>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="flex items-center space-x-4 mx-auto sm:mx-0">
							<a
								href="https://www.linkedin.com/company/ks-web-services-llc/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-xl"
							>
								<FaLinkedin />
							</a>
							<a
								href="https://www.facebook.com/kswebservices"
								target="_blank"
								rel="noopener noreferrer"
								className="text-xl"
							>
								<FaFacebook />
							</a>
							<a
								href="https://www.instagram.com/kswebservices/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-xl"
							>
								<FaInstagram />
							</a>
						</div>
					</footer>
				</div>
				<div className="content sm:px-[4%] pb-4">
					<hr className="mt-10 border-t-1 border-gray-400" />
					<p className="text-sm text-center mt-4">
						Copyright © 2023 KS Web Services
					</p>
				</div>
			</div>
		</div>
	);
}
