"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa"; // Import the icon
import { usePathname, useSearchParams } from "next/navigation";

export default function Services() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const timeoutRef = useRef<number | null>(null);
	const pathname = usePathname();
	const searchParams = useSearchParams(); // <-- Initialize useRouter

	useEffect(() => {
		const url = `${pathname}?${searchParams}`;
		console.log(url);
		const handleCloseOnRouteChange = () => {
			setDropdownOpen(false);
		};

		handleCloseOnRouteChange();

		// You can now use the current URL
		// ...
	}, [pathname, searchParams]);

	const handleToggleDropdown = () => {
		setDropdownOpen((prev) => !prev);
	};

	const handleOpenDropdown = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setDropdownOpen(true);
	};

	const handleCloseDropdown = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = window.setTimeout(() => {
			setDropdownOpen(false);
		}, 75);
	};

	return (
		<div className="relative group">
			<button
				onMouseEnter={handleOpenDropdown}
				onMouseLeave={handleCloseDropdown}
				onClick={handleToggleDropdown}
				className="flex justify-center items-center text-gray-500 hover:text-black"
			>
				Services <FaChevronDown size={11} className="ml-[6px] mt-[2px]" />
			</button>
			{dropdownOpen && (
				<div
					onMouseEnter={handleOpenDropdown}
					onMouseLeave={handleCloseDropdown}
					className="absolute text-[13px] mt-2 space-y-2 w-[140px] bg-white border text-gray-800 border-gray-300 rounded shadow-md"
				>
					{/* Add services links here */}
					<Link href="/services/design">
						<div className="block px-3 py-2 hover:bg-gray-100">Web Design</div>
					</Link>
					<Link href="/services/development">
						<div className="block px-3 py-2 hover:bg-gray-100">
							Web Development
						</div>
					</Link>
					<Link href="/services/analysis">
						<div className="block px-3 py-2 hover:bg-gray-100">
							Free Analysis
						</div>
					</Link>
					<Link href="/services">
						<div className="block px-3 py-2 hover:bg-gray-100">
							All Services
						</div>
					</Link>
				</div>
			)}
		</div>
	);
}
