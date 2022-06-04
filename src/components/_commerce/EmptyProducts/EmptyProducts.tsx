import { Typography, Button, Spacing } from "@components";

const EmptyProducts: React.VFC = () => {
	return (
		<div className="col-span-full bg-gray-100 w-full rounded-xl">
			<Spacing>
				<div className="space-y-6 px-6 flex flex-col items-center">
					<Typography variant="h2">No Items Found</Typography>
					<Typography variant="lead">
						We were not able to find any items in this category.
					</Typography>
					<Button to="/shop">Shop All Products</Button>
				</div>
			</Spacing>
		</div>
	);
};

export default EmptyProducts;
