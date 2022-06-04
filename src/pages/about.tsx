import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { About, CTA, Layout, Testimonials } from "@components";

const AboutPage: NextPage = () => {
	return (
		<Layout>
			<NextSeo title="About Us" />
			<About />
			<Testimonials />
			<CTA />
		</Layout>
	);
};

export default AboutPage;
