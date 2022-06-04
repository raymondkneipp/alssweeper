import { DefaultSeo } from "next-seo";

const SEO: React.VFC = () => {
	const defaultSeo = {
		titleTemplate: "%s | Al's Sweeper & Sewing Center",
		description:
			"Al's has been providing quality vacuums, parts, supplies, and cleaners as well as vacuum and sewing machine repair services in Wilmington, Ohio.",
		// twitter: {
		// 	handle: "@handle",
		// 	site: "@site",
		// 	cardType: "summary_large_image",
		// },
		openGraph: {
			images: [
				{
					url: "http://localhost:3000/img/hero.jpg",
					alt: "Industry Leading Experts & Trusted Family Owned Business Since 1987",
				},
			],
		},
		additionalLinkTags: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/img/favicon.svg",
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/img/favicon.png",
			},
		],
		additionalMetaTags: [
			{
				name: "theme-color",
				content: "rgb(250 204 21)",
			},
		],
	};

	return <DefaultSeo {...defaultSeo} />;
};

export default SEO;
