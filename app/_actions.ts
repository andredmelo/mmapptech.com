'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, FormDataSchema } from '@/lib/schema'
import ContactFormEmail from '@/emails/contact-form-email'

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

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    try {
      const response = await fetch('https://formsubmit.co/your_email_address', {
        method: 'POST',
        headers: {
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
}

// API Key : 're_3vjNoqFu_2WDWW5HhF5v6DinNMQ2U3EiP'