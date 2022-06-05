import Link from "next/link";

interface Props {
	to: string;
	page: string;
	external?: boolean;
}

const PageLink: React.VFC<Props> = ({ to, page, external = false }) => {
	const props = external
		? { target: "_blank", rel: "noopener noreferrer", href: to }
		: {};

	const styles =
		"rounded-xl underline decoration-dotted hover:decoration-solid text-gray-800";

	if (external) {
		return (
			<a className={styles} {...props}>
				{page}
			</a>
		);
	}

	return (
		<Link href={to}>
			<a className={styles}>{page}</a>
		</Link>
	);
};

export default PageLink;
