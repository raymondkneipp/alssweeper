import { NextApiRequest, NextApiResponse } from "next";
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req: NextApiRequest, res: NextApiResponse) => {
	const body = JSON.parse(req.body);

	const honeyPot = body.Fax;

	if (honeyPot !== "") {
		return res.status(422).json({ message: "stop messing with me" });
	}

	const message = `
		Name: ${body["Full Name"]}\r\n
		Email: ${body.Email}\r\n
		Message: ${body.Message}
	`;

	const data = {
		to: process.env.EMAIL,
		from: "hello@alssweepersales.com",
		subject: "New web form message!",
		text: message,
		html: message.replace(/\r\n/g, "<br>"),
	};

	mail.send(data);

	res.status(200).json({ statas: "Ok" });
};
