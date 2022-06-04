import { Container } from "@components";

const Banner: React.FC = ({ children }) => {
	return (
		<aside className="bg-yellow-400 text-center py-3">
			<Container>
				<div className="flex items-center justify-center space-x-4">
					{children}
				</div>
			</Container>
		</aside>
	);
};

export default Banner;
