import { FaFacebook, FaLinkedin } from "react-icons/fa";
import {
	Container,
	DescriptionList,
	DescriptionListItem,
	Tall,
	Typography,
	Logo,
	PageLink,
} from "@components";

const Footer: React.VFC = () => {
	return (
		<footer className="py-10 bg-gray-100">
			<Container>
				<Tall
					master={
						<>
							<Logo />
							<Typography variant="p">
								Industry leading experts & trusted family owned business located
								at 239 W Locust St, Wilmington, OH 45177
							</Typography>
						</>
					}
					slave={
						<div className="flex flex-wrap justify-around gap-6 col-span-2">
							<DescriptionList header="PAGES">
								<DescriptionListItem>
									<PageLink to="/" page="Home" />
								</DescriptionListItem>
								<DescriptionListItem>
									<PageLink to="/about" page="About" />
								</DescriptionListItem>
								<DescriptionListItem>
									<PageLink to="/services" page="Services" />
								</DescriptionListItem>
								<DescriptionListItem>
									<PageLink to="/contact" page="Contact" />
								</DescriptionListItem>
								<DescriptionListItem>
									<PageLink to="/shop" page="Shop" />
								</DescriptionListItem>
								<DescriptionListItem>
									<PageLink to="https://authorize.chec.io/login" page="Login" />
								</DescriptionListItem>
							</DescriptionList>
							<DescriptionList header="HOURS">
								<DescriptionListItem>Mon: 9am - 2pm</DescriptionListItem>
								<DescriptionListItem>Tue: 9am - 5pm</DescriptionListItem>
								<DescriptionListItem>Wed: 9am - 5pm</DescriptionListItem>
								<DescriptionListItem>Thu: 9am - 5pm</DescriptionListItem>
								<DescriptionListItem>Fri: 9am - 5pm</DescriptionListItem>
								<DescriptionListItem>Sat: 9am - 2pm</DescriptionListItem>
							</DescriptionList>
							<DescriptionList header="SOCIAL">
								<DescriptionListItem icon={FaFacebook}>
									<PageLink
										to="https://www.facebook.com/AlsSweeper/?hc_ref=ARROVZoQRf0cVIWN4DEplZZvLcLAmPzvcBPTjKQ-bPlz6d0CT3l5YaYForcUAZvnYvc&fref=nf&__xts__[0]=68.ARBU9g4QxB2g2wY1jhAWMt_GctT1lcT9Vu1IqVV2r2WSYYkKW-qAyGxRuUZyLJwoyfLE583tRVEa5jhgLqAz1ZXDVASag-UxNgwhqLxEwQKcd_m0KOEvUtErYOBwiMPFcSmfrjC7I1eWQtu6gTxMvPGHq59Yh_SSVOTLc6dTnPmM280KbMYzcy7Qcme012i4jwkY0QzYsfRqeAN6C8WSN0DgUtW7WA8D2HRyFqJQSkWcY91mKuln5RV9z1ekrvcL-VF1k0vzT9iC3DVI193zALOduk-0upKhqUWfCPPLGa8wGY9ACWIW6A&__tn__=kC-R"
										page="Facebook"
									/>
								</DescriptionListItem>
								<DescriptionListItem icon={FaLinkedin}>
									<PageLink
										to="https://www.linkedin.com/in/dustin-scarpinski-00066552/"
										page="LinkedIn"
									/>
								</DescriptionListItem>
							</DescriptionList>
						</div>
					}
				/>

				<div className="flex flex-col items-center space-y-3 md:space-y-0 md:flex-row justify-between pt-10 text-center">
					<Typography variant="p">
						&copy; 2022 Al&apos;s Sweeper & Sewing Center, Inc. All rights
						reserved.
					</Typography>

					<PageLink
						to="https://raymondkneipp.com"
						page="Website by Raymond Kneipp"
					/>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
