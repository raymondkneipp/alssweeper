import React from "react";
import { IconType } from "react-icons";

import { Typography } from "@components";

interface Props {
	icon?: IconType;
}

const DescriptionListItem: React.FC<Props> = ({ icon, children }) => {
	return (
		<dd className="flex items-center space-x-4">
			{icon && (
				<Typography variant="p" element="span">
					{React.createElement(icon, { size: 18 })}
				</Typography>
			)}
			<Typography variant="p" element="span">
				{children}
			</Typography>
		</dd>
	);
};

export default DescriptionListItem;
