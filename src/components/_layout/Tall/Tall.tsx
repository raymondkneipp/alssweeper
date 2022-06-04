import cn from "variant-classnames";

interface Props {
	master: React.ReactNode;
	slave: React.ReactNode;
	masterExtended?: boolean;
}

const Tall: React.VFC<Props> = ({ master, slave, masterExtended = false }) => {
	return (
		<div className="grid grid-cols-1 gap-y-12 lg:gap-12 lg:grid-cols-3">
			<div
				className={cn(
					{
						$all: "space-y-6",
						masterExtended: { true: "lg:col-span-2", false: "" },
					},
					{ masterExtended }
				)}
			>
				{master}
			</div>
			<div
				className={cn(
					{
						masterExtended: {
							$all: "grid gap-6",
							true: "",
							false: "lg:col-span-2 sm:grid-cols-2",
						},
					},
					{ masterExtended }
				)}
			>
				{slave}
			</div>
		</div>
	);
};

export default Tall;
