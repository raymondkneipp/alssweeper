import { Banner, Cart, Footer, NavBar, Typography } from "@components";

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Cart />
			<Banner>
				<Typography variant="p">
					We&apos;re offering 25% off all products &amp; services!
				</Typography>
			</Banner>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
