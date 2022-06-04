import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import {
	CTA,
	Hero,
	Layout,
	Services,
	Testimonials,
	Stats,
	Brands,
} from "@components";

const Home: NextPage = () => {
	return (
		<Layout>
			<NextSeo title="Home" />
			<Hero />
			<Brands />
			<Services simple />
			<Stats />
			<Testimonials simple />
			<CTA />
		</Layout>
	);
};

export default Home;
