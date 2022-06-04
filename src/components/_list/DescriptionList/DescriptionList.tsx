import { Typography } from "@components";

interface Props {
	header: string;
}

const DescriptionList: React.FC<Props> = ({ header, children }) => (
	<dl className="space-y-4">
		<Typography variant="h6" element="dt">
			{header}
		</Typography>

		{children}
	</dl>
);

export default DescriptionList;
