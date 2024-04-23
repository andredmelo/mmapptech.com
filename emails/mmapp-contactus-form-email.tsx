import * as React from 'react';
import { Html, Head, Heading, Text, Container, Section, Preview, Body, Row, Img} from '@react-email/components';
import { Tailwind } from "@react-email/tailwind";

export default function MMAPPContactFormEmail(props: any) {
  const { kind, name, email, message } = props;

  /* const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ""; */

  const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://mmapp-beta.vercel.app/";

  return (
    <Html lang="en">
      <Head />
      <Preview>MMAPP</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src={`${baseUrl}/images/logo_lg.webp`}
            width="200"
            height="41"
            alt="MMAPP"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-30">
            <Heading className="text-center mb-2 leading-6">
              {kind}<br/>
              Contact form submission
            </Heading>
            <Section>
                <Row>
                  <Text className="text-base">
                    Hello Pedro, here below is the latest {kind} contact form submission from the MMAPP website.
                  </Text>
                </Row>
              </Section>
            <Heading as="h2" className="text-left">
              From: {name}
            </Heading>
            <Heading as="h2" className="text-left">
              @: <a href={`mailto:${email}`}>{email}</a>
            </Heading>
            <Heading as="h3" className="text-left">Message:</Heading>
            <Text>{message}</Text>
          </Container>
          <Container className="mt-15">
              <Text className="text-center text-gray-400 mb-45">
                MMAPP, Avenida da República, 861, Bloco D, 3º Dto., Parede, Lisbon 2775-274
              </Text>
            </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}


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