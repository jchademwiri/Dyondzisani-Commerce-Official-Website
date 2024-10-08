"use server";

import HigherEducationEnrolmentEmail from "@/emails/HigherEducationEnrolmentEmail";
import { THigherEducationFormSchema } from "@/lib/validation";
import { Resend } from "resend";

export const SendHigherEducationEmail = async ({
  firstName,
  lastName,
  email,
  phone,
  yearOfStudy,
  modules,
  medicalCondition,
}: THigherEducationFormSchema) => {
  try {
    const resend: any = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: `Dyodzisani Commerce Website <enquiries@dyondzisanicommerce.co.za>`,
      to: `info@dyondzisanicommerce.co.za`,
      cc: `${email}`,
      reply_to: `info@dyondzisanicommerce.co.za`,
      subject: `New Higher Education Student Enrolment`,
      react: HigherEducationEnrolmentEmail({
        firstName,
        lastName,
        email,
        phone,
        yearOfStudy,
        modules,
        medicalCondition,
      }),
    });
    return console.log(`Higher Education Email Sent`);
  } catch (error) {
    return console.log(error);
  }
};
