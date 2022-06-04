import Image from "next/image";
import { FaBullseye, FaHandHoldingHeart, FaUsers } from "react-icons/fa";
import { Container, IconCard, Typography, Spacing, Tall } from "@components";

const About: React.VFC = () => {
	return (
		<Spacing>
			<Container>
				<Tall
					masterExtended={true}
					master={
						<>
							<Typography variant="h1">About Us</Typography>
							<Typography variant="lead">
								Since we opened, Al&apos;s has been providing quality vacuums,
								parts, supplies, and cleaners as well as vacuum and sewing
								machine repair services in Wilmington, Ohio. Our goal is to
								provide exceptional service to anyone who walks through our
								door.
							</Typography>
							<div className="rounded-xl overflow-hidden relative h-80">
								<Image
									src="/img/storefront.png"
									layout="fill"
									objectFit="cover"
									alt="Al's Sweeper & Sewing Center Store"
								/>
							</div>
						</>
					}
					slave={
						<>
							<IconCard
								title="Trusted Experts"
								content="We have over 20 years of experience servicing vacuums and sewing machines. You can trust us to get the job done right!"
								icon={FaUsers}
							/>
							<IconCard
								title="Our Mission"
								content="We want to make getting a vacuum cleaner or getting one serviced as easy as possible."
								icon={FaBullseye}
							/>
							<IconCard
								title="What We Value"
								content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
								icon={FaHandHoldingHeart}
							/>
						</>
					}
				/>
			</Container>
		</Spacing>
	);
};

export default About;
