import Image from "next/image";

const Logo: React.VFC = () => {
	return (
		<Image
			src="/img/logo.svg"
			alt="Al's Sweeper & Sewing Center Logo"
			width="45"
			height="45"
			layout="fixed"
		/>
	);
};

export default Logo;
