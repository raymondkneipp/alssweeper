import { Typography } from "@components";

interface Props {
	title: string;
	content: string;
}

const StatsItem: React.VFC<Props> = ({ title, content }) => {
	return (
		<article className="flex items-center flex-col">
			<Typography variant="h1" element="h3">
				{title}
			</Typography>
			<Typography variant="p">{content}</Typography>
		</article>
	);
};

export default StatsItem;
