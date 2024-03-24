"use server";
import { DyondzisaniCommerceTemplate } from "@/components/EmailTemplates";
import { TFormSchema } from "@/lib/validation";
import { NextResponse } from "next/server";
import { Resend } from "resend";
export const SendEmail = async (data: TFormSchema) => {
  console.log(data);
  try {
    const resend: any = new Resend(process.env.RESEND_API_KEY);
    const emailBody = await resend.emails.send({
      from: "Dyodzisani Commerce Website <enquiries@dyondzisanicommerce.co.za>",
      to: ["info@dyondzisanicommerce.co.za", "jchademwiri@gmail.com"],
      replyTo: ["info@dyondzisanicommerce.co.za"],
      subject: "Local Dev Test: New Student Enrolment",
      react: DyondzisaniCommerceTemplate({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        learnerFullName: data.learnerFullName,
        learnerGrade: data.learnerGrade,
        curriculum: data.curriculum,
        subjects: data.subjects,
        medicalCondition: data.medicalCondition,
      }),
    });
    return console.log("Server Action:", emailBody);
  } catch (error) {
    return console.log(error);
  }
};
