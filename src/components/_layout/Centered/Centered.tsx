interface Props {
	className?: string;
}

const Centered: React.FC<Props> = ({ className = "", children }) => (
	<div
		className={`flex flex-col space-y-6 items-center justify-center text-center max-w-3xl mx-auto ${className}`}
	>
		{children}
	</div>
);

export default Centered;
