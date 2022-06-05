import { NextApiRequest, NextApiResponse } from "next";
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req: NextApiRequest, res: NextApiResponse) => {
	const body = JSON.parse(req.body);

	const message = `
		Name: ${body["Full Name"]}\r\n
		Email: ${body.Email}\r\n
		Message: ${body.Message}
	`;

	const data = {
		to: "dsstazz@gmail.com",
		from: "hello@alssweepersales.com",
		subject: "New web form message!",
		text: message,
		html: message.replace(/\r\n/g, "<br>"),
	};

	mail.send(data);

	res.status(200).json({ statas: "Ok" });
};
