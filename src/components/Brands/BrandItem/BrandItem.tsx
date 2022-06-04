import Image from "next/image";

interface Props {
	src: string;
	alt: string;
}

const BrandItem: React.VFC<Props> = ({ src, alt }) => {
	return (
		<div className="mx-6 md:mx-12 lg:mx-20">
			<Image
				src={`/img/brands/${src}`}
				layout="fixed"
				width="100"
				height="100"
				objectFit="contain"
				alt={alt}
				priority={true}
			/>
		</div>
	);
};

export default BrandItem;
