import React from "react";
import { IconType } from "react-icons";
import cn from "variant-classnames";
import { Typography } from "@components";

interface Props {
	icon: IconType;
	title: string;
	content: string;
	stack?: boolean;
	light?: boolean;
	center?: boolean;
}

const IconCard: React.VFC<Props> = ({
	icon,
	title,
	content,
	stack = false,
	light = false,
	center = false,
}) => (
	<article
		className={cn(
			{
				$all: "flex space-x-6",
				stack: "flex-col space-x-0 space-y-6",
				center: {
					true: "items-center text-center",
					false: "items-start",
				},
			},
			{ stack, center }
		)}
	>
		<div className="bg-yellow-400 rounded-xl inline-block p-4">
			{React.createElement(icon, { color: "black", size: "32" })}
		</div>
		<div className="space-y-2">
			<Typography variant="h3" color={light ? "light" : "dark"}>
				{title}
			</Typography>
			<Typography variant="p" color={light ? "light" : "dark"}>
				{content}
			</Typography>
		</div>
	</article>
);

export default IconCard;
