import Marquee from "react-fast-marquee";
import { Spacing } from "@components";
import BrandItem from "./BrandItem/BrandItem";

const Brands: React.VFC = () => {
	return (
		<Spacing>
			<Marquee>
				<BrandItem src="bissell.png" alt="Bissell" />
				<BrandItem src="dirt-devil.png" alt="Dirt Devil" />
				<BrandItem src="dyson.png" alt="Dyson" />
				<BrandItem src="eureka.png" alt="Eureka" />
				<BrandItem src="fuller.png" alt="Fuller Brush" />
				<BrandItem src="hoover.png" alt="Hoover" />
				<BrandItem src="kenmore.png" alt="Kenmore" />
				<BrandItem src="oreck.png" alt="Oreck" />
				<BrandItem src="royal.png" alt="Royal" />
				<BrandItem src="shark.png" alt="Shark" />
				<BrandItem src="pro-team.png" alt="Pro Team" />
				<BrandItem src="windsor.jpg" alt="Windsor" />
				<BrandItem src="sanitaire.png" alt="Sanitaire" />
				<BrandItem src="titan.jpg" alt="Titan" />
				<BrandItem src="rainbow.png" alt="Rainbow" />
				<BrandItem src="sirena.png" alt="Sirena" />
			</Marquee>
		</Spacing>
	);
};

export default Brands;
