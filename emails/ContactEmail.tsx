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

interface ContactEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactEmail = ({
  firstName = "John",
  lastName = "Doe",
  email = "john.doe@example.com",
  phone = "065 723 6771",
  subject = "Enquiry",
  message = "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ",
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>Dyondzisani Commerce Contact</Preview>
    <Tailwind>
      <Body className="bg-gray-100 font-sans text-gray-600">
        <Container className="my-6 rounded-md bg-white shadow-sm">
          <Img
            src={`https://dyondzisanicommerce.co.za/email/email-banner.png`}
            width="100%"
            height="auto"
            className="rounded-t-md bg-cover object-cover"
            alt="Dyondzisani Commerce Email banner Image"
          />
          <Section className="px-6 text-[16px] leading-6">
            <Section>
              <Heading as="h3" className="text-[#F26222]">
                Contact Details
              </Heading>
              <Text>
                Full Name: {firstName} {lastName}
              </Text>
              <Text>Email Address: {email}</Text>
              <Text>Phone Number: {phone}</Text>
              <Hr className="border-[#F26222]" />
              <Heading as="h3" className="text-[#F26222]">
                Message Details
              </Heading>
              <Text>Subject: {subject}</Text>
              <Text>Message: {message}</Text>
            </Section>
            <Hr className="border-[#EFAD2B]" />
            <Section>
              <Row>
                <Text>065 723 6771 | info@dyondzisanicommerce.co.za</Text>
              </Row>
            </Section>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ContactEmail;
