import * as React from 'react';
import { Html, Heading, Text, Container} from '@react-email/components';

interface MMAPPContactFormEmailProps {
  kind: string
  name: string
  email: string
  message: string
}

export const MMAPPContactFormEmail: React.FC<Readonly<MMAPPContactFormEmailProps>> = ({
  kind,
  name,
  email,
  message
}) => (
  <Html lang="en">
    <Container>
      <Heading as="h1">{kind} Contact form submission</Heading>
      <Heading as="h2">
        From <strong>{name}</strong> at <strong>{email}</strong>
      </Heading>
      <Heading as="h3">Message:</Heading>
      <Text>{message}</Text>
    </Container>
  </Html>
)

export default MMAPPContactFormEmail;


/* import * as React from "react";
import { Html } from "@react-email/html";

interface EmailProps {
  url: string;
}

export const Email: React.FC<Readonly<EmailProps>> = ({
  kind,
  name,
  email,
  message
}) => {
  return (
    <Html lang="en">
    <div>
      <h1>{kind} Contact form submission</h1>
      <h2>
        From <strong>{name}</strong> at <strong>{email}</strong>
      </h2>
      <h3>Message:</h3>
      <p>{message}</p>
    </div>
    </Html>
  );
}; */