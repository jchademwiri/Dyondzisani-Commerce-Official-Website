"use server";

import ContactEmail from "@/emails/ContactEmail";
import { TContactFormSchema } from "@/lib/validation";
import { Resend } from "resend";

export const SendContactEmail = async ({
  firstName,
  lastName,
  email,
  phone,
  subject,
  message,
}: TContactFormSchema) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: `Dyodzisani Commerce Website <enquiries@dyondzisanicommerce.co.za>`,
      to: `info@dyondzisanicommerce.co.za`,
      cc: `${email}`,
      replyTo: `info@dyondzisanicommerce.co.za`,
      subject: `Contact Form Submission`,
      react: ContactEmail({
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
      }),
    });

    return console.log(`Contact Email Sent`);
  } catch (error) {
    return console.log(error);
  }
};
