import {
  Container,
  Heading,
  Html,
  Link,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function Email() {
  return (
    <Html>
      <Container>
        <Section>
          <Heading>Hello World</Heading>
          <Text>Hello World</Text>
        </Section>
      </Container>

      <Link href="https://react.email/docs/introduction">Documentation</Link>
    </Html>
  );
}
