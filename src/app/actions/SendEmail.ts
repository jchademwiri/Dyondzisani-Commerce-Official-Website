"use server";
import { DyondzisaniCommerceTemplate } from "@/components/EmailTemplates";
import { TFormSchema } from "@/lib/validation";
import { Resend } from "resend";
export const SendEmail = async ({
  firstName,
  lastName,
  email,
  phone,
  learnerFullName,
  learnerGrade,
  curriculum,
  subjects,
  medicalCondition,
}: TFormSchema) => {
  try {
    const resend: any = new Resend(process.env.RESEND_API_KEY);
    const emailBody = await resend.emails.send({
      from: `Dyodzisani Commerce Website <enquiries@dyondzisanicommerce.co.za>`,
      to: `info@dyondzisanicommerce.co.za`,
      cc: `${email}`,
      replyTo: `info@dyondzisanicommerce.co.za`,
      subject: `Dev Server Test: New Student Enrolment`,
      react: DyondzisaniCommerceTemplate({
        firstName,
        lastName,
        email,
        phone,
        learnerFullName,
        learnerGrade,
        curriculum,
        subjects,
        medicalCondition,
      }),
    });
    return console.log(`Email Sent`);
  } catch (error) {
    return console.log(error);
  }
};