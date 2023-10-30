import { createElement, forwardRef } from "react";
import Link from "next/link";
import { tv } from "tailwind-variants";

const button = tv({
	base: "inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium leading-6 uppercase transition duration-150 ease-in-out bg-white border border-transparent rounded text-theme-dark-blue hover:text-theme-mid-blue focus:outline-none focus:shadow-sm disabled:opacity-30 disabled:pointer-events-none",
	variants: {
		variant: {
			primary:
				"text-white border-black bg-theme-dark-blue hover:text-white hover:bg-[#23468f] focus:bg-[#23468f]",
			secondary:
				"text-white bg-theme-green hover:text-white hover:bg-[#3d812b] focus:bg-[#3d812b]",
		},
		size: {
			small: "px-4 py-2 text-xs rounded",
			large: "text-lg",
			wide: "px-10",
			full: "w-full px-10",
			fullsm: "w-full px-4",
		},
		disabled: "pointer-events-none opacity-30",
	},
});

export const ButtonCVA = forwardRef(
	(
		{
			as = "button",
			children,
			variant,
			size,
			className,
			...rest
		}: {
			children: React.ReactNode;
			variant?: string;
			size?: string;
			[key: string]: any;
		},
		ref: any
	) => {
		return createElement(
			as,
			{
				ref,
				className: button({ variant, size, class: className }),
				...rest,
			},
			children
		);

		// return (
		//   <button className={button({ variant, size, class: className })} {...rest}>
		//     {children}
		//   </button>
		// );
	}
);

ButtonCVA.displayName = "ButtonCVA";

export type ButtonProps = {
	href?: string;
	openInNewWindow?: boolean;
	children: React.ReactNode;
	[key: string]: any;
};

const Button = ({
	href,
	openInNewWindow = false,
	children,
	...rest
}: ButtonProps) => {
	if (!href) {
		return <ButtonCVA {...rest}>{children}</ButtonCVA>;
	}
	if (href?.indexOf("://") > 0 || href?.indexOf("//") === 0) {
		return (
			<ButtonCVA
				as={"a"}
				href={href}
				rel="norefferer"
				target={openInNewWindow ? "_blank" : "_self"}
				{...rest}
			>
				{children}
			</ButtonCVA>
		);
	} else {
		return (
			<Link href={href} scroll={true} passHref legacyBehavior>
				<ButtonCVA {...rest}>{children}</ButtonCVA>
			</Link>
		);
	}
};
export default Button;
