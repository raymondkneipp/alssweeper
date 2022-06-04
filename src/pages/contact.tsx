import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import {
	ContactForm,
	Layout,
	Container,
	DescriptionList,
	DescriptionListItem,
	Tall,
	Typography,
	PageLink,
	Spacing,
} from "@components";

const ContactPage: NextPage = () => {
	return (
		<Layout>
			<NextSeo
				title="Contact Us"
				description="Al's Sweeper & Sewing Center is here to help. Feel free to contact us if you have any questions about our products or services."
			/>

			<Spacing>
				<Container>
					<Tall
						master={
							<>
								<Typography variant="h1">Contact Us</Typography>
								<Typography variant="lead">
									Al&apos;s Sweeper & Sewing Center is here to help. Please call
									our number or use the form on this page if you have any
									questions about our products or services.
								</Typography>

								<DescriptionList header="OTHER WAYS TO REACH US">
									<DescriptionListItem icon={FaPhone}>
										<PageLink to="tel:(937)382-8162" page="(937) 382-8162" />
									</DescriptionListItem>
									<DescriptionListItem icon={FaEnvelope}>
										<PageLink
											to="mailto:contact@alssweepersales.com"
											page="contact@alssweepersales.com"
										/>
									</DescriptionListItem>
									<DescriptionListItem icon={FaMapMarkerAlt}>
										<PageLink
											to="https://www.google.com/maps/dir/Al's+Sweeper+Sales,+239+W+Locust+St,+Wilmington,+OH+45177/''/@39.4465689,-83.8375522,15z/data=!4m14!4m13!1m5!1m1!1s0x8840c6d8a21da3f9:0xe05e769e45ffa2a7!2m2!1d-83.8326432!2d39.4469868!1m5!1m1!1s0x8840c6d8a21da3f9:0xe05e769e45ffa2a7!2m2!1d-83.8326432!2d39.4469868!3e0"
											page="239 W Locust St, Wilmington, OH 45177"
										/>
									</DescriptionListItem>
								</DescriptionList>
							</>
						}
						slave={<ContactForm />}
					/>
				</Container>
			</Spacing>
		</Layout>
	);
};

export default ContactPage;
