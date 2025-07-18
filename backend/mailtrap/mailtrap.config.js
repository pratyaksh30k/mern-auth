import { MailtrapClient } from "mailtrap"; 
import dotenv from "dotenv";
dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;
const END_POINT = process.env.MAILTRAP_ENDPOINT;

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
  endpoint: END_POINT
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};
