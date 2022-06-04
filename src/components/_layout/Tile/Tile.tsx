const Tile: React.FC = ({ children }) => {
	return (
		<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
	);
};

export default Tile;
