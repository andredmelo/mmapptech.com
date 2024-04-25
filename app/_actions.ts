'use server'

import { z } from 'zod';
/* import { Resend } from 'resend'; */
import { render, renderAsync } from '@react-email/render';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { ContactFormSchema, FormDataSchema } from '@/lib/schema'
//import ContactFormEmail from '@/emails/contact-form-email'
import MMAPPContactFormEmail from '@/emails/mmapp-contactus-form-email'
/* import MMAPPContactFormEmail from '@/emails/simple-mmapp-form-email' */

type Inputs = z.infer<typeof FormDataSchema>

export async function addEntry(data: Inputs) {
  const result = FormDataSchema.safeParse(data)

  if (result.success) {
    return { success: true, data: result.data }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}

type ContactFormInputs = z.infer<typeof ContactFormSchema>

/* const resend = new Resend('re_YMaYMgiq_Q965UrGUTjZPfzRqb8PnxndJ') */

const mailerSend = new MailerSend({
  apiKey: 'mlsn.07e27fa464e2d75484a582b57df9fb7adea894054dc54695c4fb20b68b99637e' || '',
});

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.success) {
    const { kind, name, email, message, subscribe } = result.data
    try {
      const emailHtml = await renderAsync(MMAPPContactFormEmail(result.data));
      //console.log("result.data are "+kind+name+email+message)
       /* kind={kind} name={name} email={email} message={message} */

      const sentFrom = new Sender(`forms@mmapptech.com`, `${name}`);
      const recipients = [
          new Recipient("andre1melo@proton.me", 'André Melo'),
          //new Recipient("pedro@mmapptech.com", 'Pedro Marques'),
          //new Recipient("info@mmapptech.com", 'MMAPP Tech')
      ];
      const emailParams = new EmailParams()
          .setFrom(sentFrom)
          .setTo(recipients)
          .setSubject(`${kind} Contact form submission`)
          .setHtml(emailHtml)


      const data = await mailerSend.email.send(emailParams);

      return { success: true, data }
    } catch (error) {
      return { success: false, error }
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}

/* export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.success) {
    const { kind, name, email, message } = result.data
    try {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "delivered@resend.dev" ,
        subject: `${kind} Contact form submission`,
        text: `Kind: ${kind}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: MMAPPContactFormEmail({ kind, name, email, message })
      })
      
      return { success: true, data }
    } catch (error) {
      return { success: false, error }
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
} */

/* ['Pedro Marques <pedro@mmapptech.com>'] *//* 'Andre Melo <andre1melo@proton.me>' */
// API Key : 're_3vjNoqFu_2WDWW5HhF5v6DinNMQ2U3EiP'



/* export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    const { kind, name, email, message } = result.data
    try {
      const response = await fetch('https://api.mailersend.com/v1/andre1melo@proton.me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(result.data),
      });

      // Check if the response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.error('Received non-JSON response', await response.text());
        return { success: false, error: 'Non-JSON response received' };
      }

      const responseData = await response.json();
      return { success: true, data: responseData };
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return { success: false, error: 'Error parsing JSON' };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
} */