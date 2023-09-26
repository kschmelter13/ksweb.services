import React from "react";
import { FiMenu } from "react-icons/fi";

export default function menufallback() {
	return (
		<button className="md:hidden text-gray-500 hover:text-gray-800">
			<FiMenu size={20} />
		</button>
	);
}
