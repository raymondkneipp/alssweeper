import { UseFormRegister } from "react-hook-form";

interface Props {
	label: string;
	register: UseFormRegister<any>;
}

const HoneyPot: React.VFC<Props> = ({ label, register }) => {
	return (
		<input
			type="text"
			id={label.replace(/\s/g, "")}
			tabIndex={-1}
			autoComplete="off"
			className="hidden"
			{...register(label, { required: false })}
		/>
	);
};

export default HoneyPot;
