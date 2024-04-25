import * as React from 'react';
import { Html, Head, Heading, Text, Container, Section, Preview, Body, Row, Img} from '@react-email/components';
import { Tailwind } from "@react-email/tailwind";

export default function MMAPPContactFormEmail(props: any) {
  const { kind, name, email, message, subscribe } = props;

  /* const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ""; */

  const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

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
                primaryFuchsia: "#800080",
                primaryFuchsiaDark1: "#660066",
                primaryFuchsiaDark2: "#570057",
                primaryFuchsiaDark3: "#4d004d",
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
            src={`${baseUrl}/images/logos/mmapp/logo_lg.webp`}
            //src={`https://mmapp-beta.vercel.app/images/logos/mmapp/logo_lg.webp`}
            width="200"
            height="41"
            alt="MMAPP Logo"
            className="mx-auto my-20"
          />
          <Container className="bg-white">
            <Heading className="mt-4 text-center leading-8">
              {kind}<br/>
              <span className="text-primaryFuchsia">Contact form submission</span>
            </Heading>
            {/* <Section>
              <Row>
                <Text className="text-base">
                  Hello Pedro, here below is the latest {kind} contact form submission.
                </Text>
              </Row>
            </Section> */}
            <Heading as="h3" className="text-left mt-16">
              <span className="text-primaryFuchsia">From:</span> {name}
            </Heading>
            <Heading as="h3" className="text-left">
              <span className="text-primaryFuchsia">@:</span> <a href={`mailto:${email}`}>{email}</a>
            </Heading>
            {subscribe && (
              <Heading as="h4" className="text-left">
                <span className="text-primaryFuchsia">Subscribed:</span> Yes
              </Heading>
            )}
            {!subscribe && (
              <Heading as="h4" className="text-left">
                <span className="text-primaryFuchsia">Subscribed:</span> No
              </Heading>
            )}
            <Heading as="h4" className="text-left text-primaryFuchsia mt-12">
              Message:<br/>
              <Text className="font-medium text-black">{message}</Text>
            </Heading>
          </Container>
          <Container className="mt-12 mb-0">
              <Text className="text-center text-neutral-400">
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