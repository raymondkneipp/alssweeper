import { Button, Container, Divider, Typography, Centered } from "@components";

const CTA: React.VFC = () => {
	return (
		<div className="relative">
			<div className="bg-yellow-400 relative">
				<Divider color="white" />
				<Container>
					<div className="pt-28 pb-36">
						<Centered>
							<Typography variant="h1" element="h2">
								Shop For The Perfect Vacuum
							</Typography>
							<Typography variant="lead">
								We offer many different brands of vacuums and vacuum parts.
							</Typography>
							<div className="flex flex-row flex-wrap gap-6 items-center justify-center">
								<Button to="/shop" theme="secondary" size="lg">
									Shop Now
								</Button>
								<Button
									to="https://www.google.com/maps/dir/Al's+Sweeper+Sales,+239+W+Locust+St,+Wilmington,+OH+45177/@39.4465689,-83.8375522,15.76z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8840c6d8a21da3f9:0xe05e769e45ffa2a7!2m2!1d-83.8326449!2d39.4469675!3e0"
									theme="ghost"
									size="lg"
								>
									Get Directions
								</Button>
							</div>
						</Centered>
					</div>
				</Container>
			</div>
			<Divider color="gray-100" bottom invert />
		</div>
	);
};

export default CTA;
