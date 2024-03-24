import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface DyondzisaniCommerceTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  learnerFullName: string;
  learnerGrade: string;
  curriculum: string;
  subjects: string[];
  medicalCondition: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const DyondzisaniCommerceTemplate = ({
  firstName = "Rose",
  lastName = "Dlamini",
  email = "rosedlamini@gmail.com",
  phone = "0123456789",
  learnerFullName = "Mike Dlamini",
  learnerGrade = "Grade 10",
  curriculum = "CAPS",
  subjects = ["Accounts", "Economics"],
  medicalCondition = "None",
}: DyondzisaniCommerceTemplateProps) => (
  <Html>
    <Head />
    <Preview>Dyondzisani Commerce Template</Preview>
    <Tailwind>
      <Body className="bg-gray-100 font-sans text-gray-600">
        <Container className=" my-6 rounded-t-md bg-white shadow-sm">
          <Img
            src={`https://dev.dyondzisanicommerce.co.za/email/email-banner.png`}
            width="100%"
            height="auto"
            className="bg-cover object-cover"
            alt="Dyondzisani Commerce Email banner Image"
          />
          <Section className="px-6 text-[16px] leading-6 ">
            <Section>
              <Heading as="h2" className="text-[#F26222]">
                Parent / Guardian Details
              </Heading>
              <Text>
                Full Name: {(firstName = "Rose")} {(lastName = "Dlamini")}
              </Text>
              <Text>Email Address: {(email = "rose@gmail.com")}</Text>
              <Text>Phone Number: {(phone = "0123456789")}</Text>
            </Section>
            <Hr className="border-[#EFAD2B]" />
            <Section>
              <Heading as="h2" className="text-[#F26222]">
                Learner&apos;s Details
              </Heading>
              <Text>Full Name: {learnerFullName}</Text>
              <Text>Grade: {learnerGrade}</Text>
              <Text>Curriculum: {curriculum}</Text>
              <Text>Subjects: {subjects.join(", ")}</Text>
              <Text>Medical Condition: {(medicalCondition = "None")}</Text>
            </Section>
            <Hr className="border-[#EFAD2B]" />
            <Section>
              <Row>
                <Text>info@dyondzisanicommerce.co.za | 065 723 6771</Text>
              </Row>
            </Section>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default DyondzisaniCommerceTemplate;
