import { DyondzisaniCommerceTemplate } from "@/components/EmailTemplates";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend: any = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Dyodzisani Commerce Website <enquiries@dyondzisanicommerce.co.za>",
      to: ["info@dyondzisanicommerce.co.za", "jchademwiri@gmail.com"],
      replyTo: ["info@dyondzisanicommerce.co.za"],
      subject: "API Email Banner: New Student Enrolment",
      react: DyondzisaniCommerceTemplate({
        firstName: "Rose",
        lastName: "Dlamini",
        email: "rosedlamini@gmail.com",
        phone: "0123456789",
        learnerFullName: "Mike Dlamini",
        learnerGrade: "Grade 10",
        curriculum: "CAPS",
        subjects: ["Accounts", "Economics"],
        medicalCondition: "None",
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
