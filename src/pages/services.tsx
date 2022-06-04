import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { CTA, Layout, Services } from "@components";

const ServicesPage: NextPage = () => {
	return (
		<Layout>
			<NextSeo
				title="Services"
				description="Al's offers vacuum repair, sewing maching repair, free estimates, same day and next day repairs, and appliance trade in"
			/>
			<Services />
			<CTA />
		</Layout>
	);
};

export default ServicesPage;
