import Image from "next/image";

import { Typography } from "@components";

interface Props {
	image: string;
	title: string;
}

const Card: React.FC<Props> = ({ image, title, children }) => {
	return (
		<div className="rounded-xl shadow-md flex flex-col transition-colors">
			<div className="h-96 relative rounded-t-xl overflow-hidden bg-gray-100">
				<Image
					src={`/img/${image}`}
					alt={title}
					layout="fill"
					objectFit="contain"
					priority={true}
				/>
			</div>
			<div className="p-4 space-y-2 flex flex-col flex-1">
				<Typography variant="h5" element="h2">
					{title}
				</Typography>
				{children}
			</div>
		</div>
	);
};

export default Card;
