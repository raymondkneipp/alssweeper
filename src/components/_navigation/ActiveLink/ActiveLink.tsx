import Link from "next/link";
import { useRouter } from "next/router";
import cn from "variant-classnames";

interface Props {
	to: string;
}

const ActiveLink: React.FC<Props> = ({ to, children }) => {
	const router = useRouter();
	const active = router.asPath === to;

	const variants = {
		$all: "text-gray-800 rounded-xl py-2 px-4",
		active: {
			true: "bg-yellow-400",
			false: "hover:bg-gray-200 transition",
		},
	};

	return (
		<Link href={to}>
			<a className={cn(variants, { active })}>{children}</a>
		</Link>
	);
};

export default ActiveLink;
