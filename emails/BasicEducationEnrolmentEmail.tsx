import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Row,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface BasicEducationEnrolmentEmailProps {
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

export const BasicEducationEnrolmentEmail = ({
  firstName = "John",
  lastName = "Doe",
  email = "john.doe@example.com",
  phone = "065 723 6771",
  learnerFullName = "John Doe",
  learnerGrade = "12",
  curriculum = "CAPS",
  subjects = ["Accounting", "Business Studies", "Economics"],
  medicalCondition = "No medical conditions",
}: BasicEducationEnrolmentEmailProps) => (
  <Html>
    <Head />
    <Preview>Dyondzisani Commerce Enrolment</Preview>
    <Tailwind>
      <Body className="bg-gray-100 font-sans text-gray-600">
        <Container className="my-6 rounded-t-md bg-white shadow-sm">
          <Img
            src={`https://dev.dyondzisanicommerce.co.za/email/email-banner.png`}
            width="100%"
            height="auto"
            className="bg-cover object-cover"
            alt="Dyondzisani Commerce Email banner Image"
          />
          <Section className="px-6 text-[16px] leading-6">
            <Section>
              <Heading as="h2" className="text-[#F26222]">
                Parent / Guardian Details
              </Heading>
              <Text>
                Full Name: {firstName} {lastName}
              </Text>
              <Text>Email Address: {email}</Text>
              <Text>Phone Number: {phone}</Text>
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
              <Text>Medical Condition: {medicalCondition}</Text>
            </Section>
            <Hr className="border-[#EFAD2B]" />
            <Section>
              <Row>
                <Text>
                  065 723 6771 | info@dyondzisanicommerce.co.za |
                  www.dyondzisanicommerce.co.za
                </Text>
              </Row>
            </Section>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default BasicEducationEnrolmentEmail;
