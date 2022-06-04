import Link from "next/link";
import cn from "variant-classnames";

interface Props {
	to?: string;
	theme?: "primary" | "secondary" | "ghost" | "danger";
	size?: "sm" | "md" | "lg" | "sq";
	onClick?: () => void;
	[rest: string]: any;
}

const Button: React.FC<Props> = ({
	to,
	theme = "primary",
	size = "md",
	onClick,
	children,
	...rest
}) => {
	const variants = {
		$all: "text-center rounded-xl transition inline-flex items-center space-x-2 justify-center disabled:opacity-25 disabled:cursor-not-allowed relative",
		theme: {
			primary: "bg-yellow-400 text-gray-800 hover:bg-yellow-300",
			secondary: "bg-gray-800 text-yellow-400 hover:bg-gray-700",
			ghost: "bg-transparent text-gray-800 hover:bg-gray-200",
			danger: "bg-transparent text-red-800 hover:bg-red-200",
		},
		size: {
			sm: "py-1 px-2 font-normal",
			md: "py-2 px-4 font-bold",
			lg: "py-3 px-6 md:py-4 md:px-8 md:text-lg font-bold",
			sq: "p-3",
		},
	};

	if (to) {
		return (
			<Link href={to}>
				<a {...rest} className={cn(variants, { size, theme })}>
					{children}
				</a>
			</Link>
		);
	} else {
		return (
			<button
				{...rest}
				onClick={onClick}
				className={cn(variants, { size, theme })}
			>
				{children}
			</button>
		);
	}
};

export default Button;
