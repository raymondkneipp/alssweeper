import cn from "variant-classnames";

interface Props {
	prose?: boolean;
	className?: string;
}

const Container: React.FC<Props> = ({ className, prose, children }) => {
	const variants = {
		$all: `container mx-auto px-2 ${className}`,
		prose: "lg:max-w-screen-lg max-w-screen-sm",
	};
	return <div className={cn(variants, { prose })}>{children}</div>;
};

export default Container;
