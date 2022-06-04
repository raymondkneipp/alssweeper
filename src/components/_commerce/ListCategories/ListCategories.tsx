import { Category } from "@chec/commerce.js/types/category";
import { ActiveLink } from "@components";

interface Props {
	categories: Category[];
}

const ListCategories: React.VFC<Props> = ({ categories }) => {
	return (
		<div className="gap-4 flex flex-wrap">
			<ActiveLink to="/shop">All</ActiveLink>
			{categories.map((category) => (
				<ActiveLink to={`/shop/${category.slug}`} key={category.id}>
					{category.name}
				</ActiveLink>
			))}
		</div>
	);
};

export default ListCategories;
