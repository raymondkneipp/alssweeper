import { Container, Typography, Wide, Spacing } from "@components";
import TestimonialItem from "./TestimonialItem/TestimonialItem";

interface Props {
	simple?: boolean;
}

const Testimonaials: React.VFC<Props> = ({ simple }) => {
	return (
		<Spacing>
			<Container>
				<Wide
					master={
						<Typography variant="h2" className="text-center sm:text-left">
							Testimonials
						</Typography>
					}
					slave={
						<>
							<TestimonialItem
								name="Stephanie H."
								quote="Dustin is very nice, sold me a great vacuum and fixed the belt quickly while we waited! Very reasonable prices."
								image="customer1.png"
								stars={5}
							/>
							<TestimonialItem
								name="Lisa E."
								quote="Nice folks had bags and belts and fixed up my older sweeper. Left my sewing machine for an estimate."
								image="customer2.png"
								stars={5}
							/>
							<TestimonialItem
								name="Kate S."
								quote="Dustin was very helpful in troubleshooting my ancient sewing machine."
								image="customer3.png"
								stars={5}
							/>
							{!simple && (
								<>
									<TestimonialItem
										name="Dennis C."
										quote="I had a great experience at Al's Sweeper. He freed up a stuck wheel on our vacuum and didn't even charge me. We have had our vacuum cleaned there before and he has always done a great job."
										image="customer4.png"
										stars={5}
									/>
									<TestimonialItem
										name="Nick S."
										quote="Al's sweeper store is amazing. They were very friendly and helpful, and there were many vacuums to choose from. It’s basically a vacuum museum! Would definitely come back."
										image="customer5.png"
										stars={5}
									/>
								</>
							)}
						</>
					}
				/>
			</Container>
		</Spacing>
	);
};

export default Testimonaials;
