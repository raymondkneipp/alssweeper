import { Banner, Button, Cart, Footer, NavBar, Typography } from "@components";
import PageLink from "components/_navigation/PageLink/PageLink";

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Cart />
			<Banner>
				<Typography variant="p">
					We&apos;re offering 25% off all{" "}
					<PageLink to="/shop" page="products" /> &amp;{" "}
					<PageLink to="/services" page="services" />!
				</Typography>
			</Banner>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
