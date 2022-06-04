interface Props {
	price: number;
}

const Discount: React.VFC<Props> = ({ price }) => {
	return <>${Math.round((price + price * 0.25) * 100) / 100}</>;
};

export default Discount;
