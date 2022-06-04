import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Button, Centered, Container, Logo, Typography } from "@components";

const Custom404: NextPage = () => {
	return (
		<Container>
			<NextSeo title="404 Page Not Found" />
			<Centered className="min-h-screen">
				<div className="flex flex-col space-y-4 items-center justify-center text-center">
					<Logo />
					<span className="bg-gray-800 py-1 px-2 rounded-xl">
						<Typography color="primary" variant="h6" element="h1">
							404 ERROR
						</Typography>
					</span>
					<Typography variant="h1" element="h2">
						This page does not exist.
					</Typography>
					<Typography variant="p">
						The page you are looking for could not be found.
					</Typography>
					<Button to="/" size="lg">
						Back to Home
					</Button>
				</div>
			</Centered>
		</Container>
	);
};

export default Custom404;
