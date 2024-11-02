"use server";

import BasicEducationEnrolmentEmail from "@/emails/BasicEducationEnrolmentEmail";

import { TBasicEducationFormSchema } from "@/lib/validation";
import { Resend } from "resend";
export const SendBasicEducationEmail = async ({
  firstName,
  lastName,
  email,
  phone,
  learnerFullName,
  learnerGrade,
  curriculum,
  subjects,
  medicalCondition,
}: TBasicEducationFormSchema) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: `Dyodzisani Commerce Website <enquiries@dyondzisanicommerce.co.za>`,
      to: `info@dyondzisanicommerce.co.za`,
      cc: `${email}`,
      replyTo: `info@dyondzisanicommerce.co.za`,
      subject: `Basic Education Student Enrolment`,
      react: BasicEducationEnrolmentEmail({
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
    return console.log(`Basic Education Email Sent`);
  } catch (error) {
    return console.log(error);
  }
};
