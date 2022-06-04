import Image from "next/image";
import { Stars, Typography } from "@components";
import styles from "./TestimonialItem.module.css";

interface Props {
	quote: string;
	name: string;
	image: string;
	stars: number;
}

const TestimonialItem: React.VFC<Props> = ({ quote, name, image, stars }) => {
	return (
		<figure className={styles.testimonialItem__grid}>
			<div className={styles.testimonialItem__image}>
				<Image
					src={`/img/testimonials/${image}`}
					layout="fill"
					objectFit="contain"
					alt={`${name}'s testimonial`}
					priority={false}
				/>
			</div>
			<div className={styles.testimonialItem__header}>
				<Typography variant="p" element="figcaption">
					{name}
				</Typography>
				<Stars count={stars} />
			</div>
			<div className={styles.testimonialItem__quote}>
				<Typography variant="p" element="blockquote">
					&quot;{quote}&quot;
				</Typography>
			</div>
		</figure>
	);
};

export default TestimonialItem;
