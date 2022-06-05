import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Input, Textarea, Button } from "@components";

interface IFormValues {
	"Full Name": string;
	Email: string;
	Message: string;
}

const ContactForm: React.VFC = () => {
	const { register, handleSubmit, reset } = useForm<IFormValues>();
	const [loading, setLoading] = useState(false);

	const onSubmit: SubmitHandler<IFormValues> = (data, e) => {
		setLoading(true);

		toast
			.promise(
				fetch("/api/mail", {
					method: "POST",
					body: JSON.stringify(data),
				}),
				{
					loading: "Sending message...",
					success: "Message Sent!",
					error: "Something went wrong, please try again.",
				}
			)
			.then(() => {
				setLoading(false);
				reset();
			});
	};

	return (
		<form
			className="flex flex-col space-y-6 col-span-2"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input register={register} label="Full Name" />
			<Input register={register} label="Email" type="email" />
			<Textarea register={register} label="Message" />
			<Button type="submit" disabled={loading}>
				Send
			</Button>
		</form>
	);
};

export default ContactForm;
