import { FaChevronDown } from "react-icons/fa";

export default function ServicesFallback() {
	return (
		<button // Use touchstart for both mobile and desktop
			className="flex justify-center items-center text-gray-500 hover:text-black"
		>
			Services <FaChevronDown size={11} className="ml-[6px] mt-[2px]" />
		</button>
	);
}
