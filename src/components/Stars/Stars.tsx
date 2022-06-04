import { FaStar } from "react-icons/fa";

interface Props {
	count?: number;
}

const Stars: React.VFC<Props> = ({ count = 5 }) => {
	return (
		<div className="flex space-x-2 text-gray-600">
			{[...Array(count)].map((e, i) => (
				<FaStar key={i} size={20} />
			))}
		</div>
	);
};

export default Stars;
