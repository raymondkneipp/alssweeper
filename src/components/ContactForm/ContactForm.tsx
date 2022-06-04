import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Textarea, Button } from "@components";

interface IFormValues {
	"Full Name": string;
	Email: string;
	Message: string;
}

const ContactForm: React.VFC = () => {
	const { register, handleSubmit } = useForm<IFormValues>();

	const onSubmit: SubmitHandler<IFormValues> = (data) => {
		// TODO
		// Send email via Sendgrid
		alert(JSON.stringify(data));
	};

	return (
		<form
			className="flex flex-col space-y-6 col-span-2"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input register={register} label="Full Name" />
			<Input register={register} label="Email" type="email" />
			<Textarea register={register} label="Message" />
			<Button type="submit">Send</Button>
		</form>
	);
};

export default ContactForm;
