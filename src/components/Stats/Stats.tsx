import { Container, Divider, Typography } from "@components";
import StatsItem from "./StatsItem/StatsItem";

const Stats: React.VFC = () => {
	return (
		<div className="relative">
			<div className="bg-gray-100 my-36 relative">
				<Divider color="white" invert flip />
				<Container>
					<section className="space-y-6 pt-36 pb-28">
						<div className="space-y-2 flex items-center flex-col text-center">
							<Typography variant="h2">
								Vacuum and Sewing Machine Repair Experts
							</Typography>
							<Typography variant="lead">
								Trusted family owned and operated business since 1987
							</Typography>
						</div>
						<div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 items-center justify-around w-full">
							<StatsItem title="20+" content="Years of Experience" />
							<StatsItem title="16+" content="Vacuum Brands" />
							<StatsItem title="100%" content="Satisfaction Guarantee" />
						</div>
					</section>
				</Container>
			</div>
			<Divider color="white" bottom flip />
		</div>
	);
};

export default Stats;
