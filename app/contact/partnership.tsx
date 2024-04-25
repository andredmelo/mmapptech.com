import {
  CardContactUs,
  CardContactUsContent,
  CardContactUsDescription,
  CardContactUsFooter,
  CardContactUsHeader,
  CardContactUsTitle,
  CardContactUsButton
} from '@/components/ui/card-contact-us'
import { useForm, SubmitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { ContactFormSchema } from '@/lib/schema'
import { sendEmail } from '@/app/_actions'
import { toast } from 'sonner'

export type ContactFormInputs = z.infer<typeof ContactFormSchema>

export default function Partnership() {
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
    <CardContactUs>
      <CardContactUsHeader>
        <CardContactUsTitle>Partnership Inquiries</CardContactUsTitle>
        {/* <CardContactUsDescription>
          Inquire about partnership questions.<br/>
          Any information solicited will be used solely to provide requester with the information they have requested.
        </CardContactUsDescription> */}
      </CardContactUsHeader>
      <CardContactUsContent className='h-full'>
        <div className='h-full rounded-lg bg-emerald-100'>

          <form
            onSubmit={handleSubmit(processForm)}
            className="container rounded-[1rem]"
          >
            <input type="hidden" {...register('kind', { value: 'Partnership Inquiries' })} />
            <div className="name flex flex-col">
              <label htmlFor="form-name">Name</label>
              <input
                className="w-full"
                id="form-name"
                autoComplete="name"
                /* type="text"
                name="first"
                required */
                placeholder='Your Name'
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
                placeholder='Your Email Address'
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
                placeholder='Your Message'
                {...register('message')}
              />
              {errors.message?.message && (
                <p className='ml-1 text-sm text-red-400'>{errors.message.message}</p>
              )}
            </div>
            <div className="subscribe inline-block items-end space-x-3 mb-2">
              <input
                type="checkbox"
                id="form-subscribe"
                defaultChecked
                {...register('subscribe')}
              />
              <label htmlFor="form-subscribe">Yes, I would like to subscribe to updates, promotions, and news from MMAPP.</label>
            </div>
            <div className="flex flex-col items-center">
              {/* <button
                disabled={isSubmitting}
                className=""
                // type="submit"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button> */}
              <CardContactUsButton disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </CardContactUsButton>
            </div>
          </form>

        </div>
      </CardContactUsContent>
      <CardContactUsFooter className='border-t border-neutral-300 dark:border-neutral-800 p-6 pl-10'>
        <p className='text-sm italic text-neutral-400 dark:text-neutral-500'>Partnership Inquiries Submission Form</p>
      </CardContactUsFooter>
    </CardContactUs>
  )
}