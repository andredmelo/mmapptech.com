import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { useForm, SubmitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { ContactFormSchema } from '@/lib/schema'
import { sendEmail } from '@/app/_actions'
import { toast } from 'sonner'

export type ContactFormInputs = z.infer<typeof ContactFormSchema>

export default function Sales() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema)
  })

  const processForm: SubmitHandler<ContactFormInputs> = async data => {
    const result = await sendEmail(data)

    if (result?.success) {
      console.log({ data: result.data })
      toast.success('Email sent!')
      reset()
      return
    }

    // toast error
    console.log(result?.error)
    toast.error('Something went wrong!')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Inquiries</CardTitle>
        <CardDescription>
          Inquire about sales.<br/>
          Any information solicited for a sales inquiry will be used solely to provide requester with the information they have requested.
        </CardDescription>
      </CardHeader>
      <CardContent className='h-full'>
        <div className='h-full rounded-lg bg-emerald-100'>

          <form
            onSubmit={handleSubmit(processForm)}
            className="container rounded-[1rem]"
          >
            <input type="hidden" {...register('kind', { value: 'Sales Inquiries' })} />
            <div className="email flex flex-col">
              <label htmlFor="form-name">Name</label>
              <input
                className="w-full"
                id="form-name"
                autoComplete="name"
                /* type="text"
                name="first"
                required */
                placeholder='Name'
                {...register('name')}
              />
              {errors.name?.message && (
                <p className='ml-1 mt-1 text-sm text-red-400'>
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="email flex flex-col">
              <label htmlFor="form-email">Email</label>
              <input
                id="form-email"
                autoComplete="email"
                /* type="email"
                name="email"
                required */
                placeholder='Email'
                {...register('email')}
              />
              {errors.email?.message && (
                <p className='ml-1 mt-1 text-sm text-red-400'>
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* <div className="phone flex flex-col">
              <label htmlFor="frm-phone">Phone</label>
              <input
                id="form-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                required
              />
            </div> */}
            <div className="message flex flex-col">
              <label htmlFor="form-message">Message</label>
              <textarea
                id="form-message"
                /* name="message" */
                rows={6}
                placeholder='Message'
                {...register('message')}
              />
              {errors.message?.message && (
                <p className='ml-1 text-sm text-red-400'>{errors.message.message}</p>
              )}
            </div>
            <div className="flex flex-col items-center">
              <button
                disabled={isSubmitting}
                className="bg-neutral-100 hover:bg-neutral-50 text-neutral-600 hover:text-neutral-800 hover:ring-2 ring-blue-700 ring-opacity-75 p-4 my-4 rounded-lg"
                /* type="submit" */
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>

        </div>
      </CardContent>
      <CardFooter className='border-t border-neutral-800 p-6 pl-10'>
        <p className='text-sm italic text-neutral-500'>Sales Inquiries Submission Form</p>
      </CardFooter>
    </Card>
  )
}
