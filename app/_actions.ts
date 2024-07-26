'use server'

import { z } from 'zod';
import { render, renderAsync } from '@react-email/render';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { ContactFormSchema, FormDataSchema, BookADemoFormSchema } from '@/lib/schema'
import MMAPPContactFormEmail from '@/emails/mmapp-contactus-form-email'
import MMAPPBookADemoFormEmail from '@/emails/mmapp-bookademo-form-email'

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


// Contact Form
type ContactFormInputs = z.infer<typeof ContactFormSchema>

const mailerSend = new MailerSend({
  apiKey: 'mlsn.07e27fa464e2d75484a582b57df9fb7adea894054dc54695c4fb20b68b99637e' || '',
});

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.success) {
    const { kind, name, email, message, subscribe } = result.data
    try {
      const emailHtml = await renderAsync(MMAPPContactFormEmail(result.data));

      const sentFrom = new Sender(`forms@mmapptech.com`, 'MMAPP Tech');
      const recipients = [
          new Recipient("info@mmapptech.com", 'MMAPP Tech')
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


// Book a Demo Form
type BookADemoFormInputs = z.infer<typeof BookADemoFormSchema>

export async function sendEmailBookADemo(data: BookADemoFormInputs) {
  const result = BookADemoFormSchema.safeParse(data)

  if (result.success) {
    const { kind, name, email, subscribe, tel, role, country, time } = result.data
    try {
      const emailHtml = await renderAsync(MMAPPBookADemoFormEmail(result.data));
      //console.log("result.data are "+kind+name+email+message)

      const sentFrom = new Sender(`forms@mmapptech.com`, 'MMAPP Tech');
      const recipients = [
          new Recipient("info@mmapptech.com", 'MMAPP Tech')
      ];
      const emailParams = new EmailParams()
          .setFrom(sentFrom)
          .setTo(recipients)
          .setSubject(`${kind} form submission`)
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