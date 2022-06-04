import Link from "next/link";

interface Props {
	to: string;
	page: string;
}

const PageLink: React.VFC<Props> = ({ to, page }) => {
	return (
		<Link href={to}>
			<a className="rounded-xl underline decoration-dotted hover:decoration-solid text-gray-800">
				{page}
			</a>
		</Link>
	);
};

export default PageLink;
