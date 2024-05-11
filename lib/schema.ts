import { z } from 'zod'

export const FormDataSchema = z.object({
  kind: z.string().min(1, { message: 'Kind is required.' }),
  name: z.string().min(1, { message: 'Name is required.' }),
  message: z
    .string()
    .min(1, { message: 'Message is required.' })
    .min(6, { message: 'Message must be at least 6 characters.' })
})

export const ContactFormSchema = z.object({
  kind: z.string().min(1, { message: 'Kind is required.' }),
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z.string().min(1, { message: 'Email is required.' }).email('Invalid email.'),
  message: z
    .string()
    .min(1, { message: 'Message is required.' })
    .min(6, { message: 'Message must be at least 6 characters.' }),
  subscribe: z.boolean(),
})

export const BookADemoFormSchema = z.object({
  kind: z.string().min(1, { message: 'Kind is required.' }),
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z.string().min(1, { message: 'Email is required.' }).email('Invalid email.'),
  subscribe: z.boolean(),
  tel: z.string().min(4, { message: 'Contact number is required.' }),
  role: z.string().min(1, { message: 'Role is required.' }),
  country: z.string().min(1, { message: 'Country is required.' }),
  time: z.string().min(1, { message: 'Time is required.' }),
})


//z.string().min(1)