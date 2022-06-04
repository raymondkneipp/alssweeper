const Badge: React.FC = ({ children }) => {
	return (
		<span className="bg-yellow-400 text-gray-800 rounded-xl p-0.5 px-1.5 text-sm">
			{children}
		</span>
	);
};

export default Badge;
