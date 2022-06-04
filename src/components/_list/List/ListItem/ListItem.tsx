import React from "react";
import { IconType } from "react-icons";
import { Typography } from "@components";

interface Props {
	icon?: IconType;
}

const ListItem: React.FC<Props> = ({ icon, children }) => {
	return (
		<li className="flex items-center space-x-4">
			{icon && (
				<Typography variant="p" element="span" color="primary">
					{React.createElement(icon, { size: 18 })}
				</Typography>
			)}
			<Typography variant="p" element="span">
				{children}
			</Typography>
		</li>
	);
};

export default ListItem;
