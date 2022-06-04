import Link from "next/link";
import { useEffect, useState } from "react";
import {
	Container,
	Typography,
	Logo,
	ActiveLink,
	CartButton,
} from "@components";
import cn from "variant-classnames";
import Button from "../Button/Button";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar: React.VFC = () => {
	const [show, setShow] = useState(false);
	const [top, setTop] = useState(true);

	const handleScroll = () => {
		const postition = window.pageYOffset;
		if (postition >= 70) {
			setTop(false);
		} else {
			setTop(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const variants = {
		$all: "py-4 sticky top-0 left-0 right-0 transition z-30",
		top: {
			false: "bg-white shadow-md",
		},
	};

	return (
		<nav className={cn(variants, { top })}>
			<Container>
				<div className="flex items-center justify-between">
					<div className="block md:hidden">
						<Button
							onClick={() => setShow((prev) => !prev)}
							theme="ghost"
							size="sq"
							aria-label="menu"
						>
							{show ? <FaTimes size={20} /> : <FaBars size={20} />}
						</Button>
					</div>

					<Link href="/">
						<a className="flex items-center space-x-2 rounded-xl">
							<div className="flex-1">
								<Logo />
							</div>
							<Typography variant="h4" element="span">
								Al&apos;s Sweeper & <br className="block md:hidden" />
								Sewing Center
							</Typography>
						</a>
					</Link>

					<div
						className={cn(
							{
								$all: "md:block absolute top-full bg-white md:bg-transparent left-0 right-0 p-2 md:relative md:p-1 border-b border-gray-300 md:border-0",
								show: { true: "block", false: "hidden" },
							},
							{ show }
						)}
					>
						<div className="flex flex-col justify-center space-y-2 md:space-y-0 md:flex-row md:flex md:items-center md:space-x-4">
							<ActiveLink to="/">Home</ActiveLink>
							<ActiveLink to="/about">About</ActiveLink>
							<ActiveLink to="/services">Services</ActiveLink>
							<ActiveLink to="/contact">Contact</ActiveLink>
							<ActiveLink to="/shop">Shop</ActiveLink>
						</div>
					</div>
					<CartButton />
				</div>
			</Container>
		</nav>
	);
};

export default NavBar;
