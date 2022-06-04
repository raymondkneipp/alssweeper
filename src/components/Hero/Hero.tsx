import Image from "next/image";
import { Button, Container, Divider, Typography, Centered } from "@components";

const Hero: React.VFC = () => {
	return (
		<section className="relative">
			<Image
				src="/img/hero.jpg"
				alt="affordable high quality vacuums"
				layout="fill"
				objectFit="cover"
				objectPosition="bottom"
				priority={true}
			/>
			<div className="relative bg-white bg-opacity-80">
				<Container>
					<Centered className="min-h-screen">
						<Typography variant="h1">
							Helping You Make The Most Out Of Your Vacuum
						</Typography>
						<Typography variant="lead">
							Clean your house with confidence by choosing an amazing vacuum.
						</Typography>
						<div className="gap-6 flex items-center flex-row flex-wrap justify-center">
							<Button to="/contact" size="lg">
								Shop Now
							</Button>
							<Button to="/services" theme="ghost" size="lg">
								Find Out More
							</Button>
						</div>
					</Centered>
				</Container>
			</div>
			<Divider color="white" bottom invert />
		</section>
	);
};

export default Hero;
