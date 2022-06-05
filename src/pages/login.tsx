import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import {
	Layout,
	Spacing,
	Typography,
	Container,
	PageLink,
	Wide,
	List,
	ListItem,
	Card,
} from "@components";

const LoginPage: NextPage = () => {
	return (
		<Layout>
			<NextSeo title="Manage Store" noindex nofollow />

			<Spacing>
				<Container>
					<Wide
						master={
							<>
								<Typography variant="h1">Manage Your Online Store</Typography>
							</>
						}
						slave={
							<>
								<Card title="Login" image="instructions/login.png">
									<Typography variant="p">
										Visit the following link to sign in to your Chec account:{" "}
										<PageLink
											to="https://authorize.chec.io/login"
											page="Login"
											external
										/>
									</Typography>
								</Card>

								<Card title="View Products" image="instructions/products.png">
									<Typography variant="p">
										To view your products visit the following link or navigate
										to products via menu{" "}
										<PageLink
											to="https://dashboard.chec.io/products"
											page="View Products"
											external
										/>
									</Typography>
								</Card>

								<Card title="Add a Product" image="instructions/add.png">
									<List>
										<ListItem>
											1. Visit the following link:{" "}
											<PageLink
												to="https://dashboard.chec.io/products/add"
												page="Add Product"
												external
											/>
										</ListItem>
										<ListItem>
											2. Fill out the following feilds:
											<List>
												<ListItem>a. Name</ListItem>
												<ListItem>b. Description</ListItem>
												<ListItem>c. Price</ListItem>
												<ListItem>d. Image</ListItem>
											</List>
										</ListItem>
										<ListItem>3. Select "Require Shipping Address"</ListItem>
										<ListItem>4. Select "Require Billing Address"</ListItem>
										<ListItem>5. Select a category for the product</ListItem>
										<ListItem>
											6. Click the green "Save changes" button
										</ListItem>
									</List>
								</Card>

								<Card
									title="Manage Categories"
									image="instructions/categories.png"
								>
									<Typography variant="p">
										Here you can add, delete, and edit categories. Categories
										are simply groups for related products.{" "}
										<PageLink
											to="https://dashboard.chec.io/categories/"
											page="Manage Categories"
											external
										/>
									</Typography>
								</Card>

								<Card title="View Orders" image="instructions/orders.png">
									<Typography variant="p">
										When a customer buys a product there order will be available
										on this page. You can then click on an order and view
										information reguarding the customer including their shipping
										address.{" "}
										<PageLink
											to="https://dashboard.chec.io/orders"
											page="View Orders"
											external
										/>
									</Typography>
								</Card>
							</>
						}
					/>
				</Container>
			</Spacing>
		</Layout>
	);
};

export default LoginPage;
