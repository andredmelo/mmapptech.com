import { Transition } from "@headlessui/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils"
import React, { Fragment, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { BookADemoFormSchema } from '@/lib/schema'
import { sendEmail, sendEmailBookADemo } from '@/app/_actions'
import { toast } from 'sonner'

export type BookADemoFormInputs = z.infer<typeof BookADemoFormSchema>

import { CardCallToActionButton } from '@/components/ui/card-call-to-action'

const AllCountries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Angola",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Belgium",
  "Bosnia & Herzegovina",
  "Bulgaria",
  "Cameroon",
  "China",
  "Cote D'Ivoire",
  "Croatia",
  "Czechia",
  "Democratic Republic of Congo",
  "Denmark",
  "Egypt",
  "England",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Guinea",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Israel",
  "Italy",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kuwait",
  "Kyrgyzstan",
  "Lebanon",
  "Madagascar",
  "Macedonia",
  "Malaysia",
  "Mauritius",
  "Mongolia",
  "Morocco",
  "Namibia",
  "Nepal",
  "Nigeria",
  "Pakistan",
  "Peru",
  "Philippines",
  "Romania",
  "Saint Martin",
  "Saudi Arabia",
  "Scotland",
  "Senegal",
  "Serbia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "The Seychelles",
  "Thailand",
  "Trinidad and Tobago",
  "Turkey",
  "Turkmenistan",
  "USA",
  "Ukraine",
  "Uruguay",
  "Venezuela",
  "Wales",
  "Zambia",
  "Zimbabwe"
];

const AllCountriesTimeZones = [
  "Afghanistan (UTC+4:30)",
  "Albania (UTC+1)",
  "Algeria (UTC+1)",
  "Angola (UTC+1)",
  "Armenia (UTC+4)",
  "Austria (UTC+1)",
  "Azerbaijan (UTC+4)",
  "Bahrain (UTC+3)",
  "Belgium (UTC+1)",
  "Bosnia & Herzegovina (UTC+1)",
  "Bulgaria (UTC+2)",
  "Cameroon (UTC+1)",
  "China (UTC+8)",
  "Cote D'Ivoire (UTC)",
  "Croatia (UTC+1)",
  "Czechia (UTC+1)",
  "Democratic Republic of Congo (UTC+1)",
  "Denmark (UTC+1)",
  "Egypt (UTC+2)",
  "England (UTC)",
  "Estonia (UTC+2)",
  "Finland (UTC+2)",
  "France (UTC+1)",
  "Georgia (UTC+4)",
  "Germany (UTC+1)",
  "Ghana (UTC)",
  "Greece (UTC+2)",
  "Guinea (UTC)",
  "Hong Kong (UTC+8)",
  "Hungary (UTC+1)",
  "Iceland (UTC)",
  "India (UTC+5:30)",
  "Indonesia (UTC+7)",
  "Iran (UTC+3:30)",
  "Iraq (UTC+3)",
  "Israel (UTC+2)",
  "Italy (UTC+1)",
  "Japan (UTC+9)",
  "Jordan (UTC+2)",
  "Kazakhstan (UTC+6)",
  "Kuwait (UTC+3)",
  "Kyrgyzstan (UTC+6)",
  "Lebanon (UTC+2)",
  "Madagascar (UTC+3)",
  "Macedonia (UTC+1)",
  "Malaysia (UTC+8)",
  "Mauritius (UTC+4)",
  "Mongolia (UTC+8)",
  "Morocco (UTC)",
  "Namibia (UTC+2)",
  "Nepal (UTC+5:45)",
  "Nigeria (UTC+1)",
  "Pakistan (UTC+5)",
  "Peru (UTC-5)",
  "Philippines (UTC+8)",
  "Romania (UTC+2)",
  "Saint Martin (UTC-4)",
  "Saudi Arabia (UTC+3)",
  "Scotland (UTC)",
  "Senegal (UTC)",
  "Serbia (UTC+1)",
  "Singapore (UTC+8)",
  "Slovakia (UTC+1)",
  "Slovenia (UTC+1)",
  "South Africa (UTC+2)",
  "South Korea (UTC+9)",
  "Spain (UTC+1)",
  "Sweden (UTC+1)",
  "Switzerland (UTC+1)",
  "The Seychelles (UTC+4)",
  "Thailand (UTC+7)",
  "Trinidad and Tobago (UTC-4)",
  "Turkey (UTC+3)",
  "Turkmenistan (UTC+5)",
  "USA (UTC-4 to -10)",
  "Ukraine (UTC+2)",
  "Uruguay (UTC-3)",
  "Venezuela (UTC-4)",
  "Wales (UTC)",
  "Zambia (UTC+2)",
  "Zimbabwe (UTC+2)"
];

interface DialogCTABookADemoProps {
  title: string;
  btnLabel: string;
}

const DialogCTABookADemo = (props: DialogCTABookADemoProps) => {
  let [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<BookADemoFormInputs>({
    resolver: zodResolver(BookADemoFormSchema)
  })

  const processForm: SubmitHandler<BookADemoFormInputs> = async data => {
    const result = await sendEmailBookADemo(data)

    if (result?.success) {
      console.log({ data: result.data })
      toast.success('Booking Email sent!')
      reset()
      return
    }

    // toast error
    console.log(result?.error)
    toast.error('Something went wrong!')
  }


  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        {/* <Button>Open {props.btnLabel} Dialog</Button> */}
        <CardCallToActionButton>
          {props.btnLabel}
        </CardCallToActionButton>
      </Dialog.Trigger>
      <Dialog.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              forceMount
              className="fixed w-full h-full inset-0 z-20 bg-[var(--background-grey-95)]" // bg-[var(--background-grey-95)]
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-50"
          >
            {/* <Dialog.Overlay className="fixed z-50 inset-0 top-0 left-0 right-0 bottom-0 pt-[120px] grid place-items-center overflow-y-auto bg-white/50 dark:bg-neutral-900/95"> */}
              <Dialog.Content
                forceMount
                className={cn(
                  "fixed z-50",
                  "w-[95vw] max-w-[1375px] min-h-[5vh] rounded-xl my-[20px]", // my-[20px]
                  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  "bg-neutral-900 border-2 border-fuchsia-700/50",
                  //"bg-neutral-100 dark:bg-neutral-900 border-2 border-fuchsia-700/50",
                  "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                  "overflow-y-auto"
                )}
              >
                <div className={cn(
                  "flex flex-col items-left min-w-full h-full max-h-[75svh] portrait:max-h-[88dvh] sm:max-h-[90svh] md:max-h-[85svh]",
                  /* "pt-12 md:pt-16", */  // mt-12
                  )}>
                  {/* <Dialog.Title className="block md:hidden pb-4 md:pb-6 lg:pb-8 text-[1.75rem] text-center text-transparent bg-clip-text bg-gradient-to-br from-[var(--purple-350)] to-purple-100">
                    Book a Demo
                  </Dialog.Title> */}

                  <div className="flex flex-col h-full md:flex-row items-stretch gap-x-16 px-10 md:px-14 lg:px-20 py-10 md:py-10">

                    <div className={cn(
                    "basis-1/2 flex flex-col inset-0 items-left w-full h-full overflow-y-auto",
                    )}>
                      <Dialog.Title className="2xl:pt-6 pb-6 md:pb-8 lg:pb-10 text-[3.5rem] sm:text-[4rem] md:text-[3.5rem] lg:text-[4.6rem] xl:text-2xl text-center text-neutral-100"> {/* // text-neutral-900 */}
                        We’d love to show you around
                      </Dialog.Title>
                      <Dialog.Description className="pb-12 md:pb-16 lg:pb-12 xl:pb-16 text-[1.65rem] sm:text-[1.85rem] md:text-[1.75rem] lg:text-[2rem] xl:text-[2.2rem] 2xl:text-[2.4rem] text-left font-normal leading-tight text-neutral-300"> {/* //text-neutral-700 */}
                        Sign up for a personalised demo today to see how MMAPP can help Federations automate repetitive tasks and help you focus on what’s important. Our friendly team of experts will be in touch to provide your personalised demo based on your needs.<br/>
                      </Dialog.Description>
                      <Dialog.Title className="pb-4 md:pb-4 lg:pb-6 text-[2.25rem] sm:text-[2.5rem] md:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.39rem] 2xl:text-[2.6rem] pr-0 lg:pr-0 xl:pr-0 text-left text-neutral-100"> {/* // text-neutral-900 */}
                        YOUR CUSTOM DEMO WILL SHOW YOU HOW TO:
                      </Dialog.Title>
                      <Dialog.Description className="pb-10 md:pb-0 pl-1 text-[1.5rem] sm:text-[1.75rem] md:text-[1.65rem] lg:text-[2rem] text-left font-normal leading-normal text-neutral-200"> {/* //text-neutral-700 */}
                        {/* ➤ */} <span className="mr-3">➣</span> Manage sign-up forms<br/>
                        {/* ➤ */} <span className="mr-3">➣</span> Approve and Manage your members<br/>
                        {/* ➤ */} <span className="mr-3">➣</span> Approve Events and view Fight Cards<br/>
                        {/* ➤ */} <span className="mr-3">➣</span> How the MMAPP Methodology works<br/>
                        {/* ➤ */} <span className="mr-3">➣</span> How the Judge and RecordKeeper apps help during events<br/>
                        {/* ➤ */} <span className="mr-3">➣</span> Manage your profile<br/>
                        {/* ➤ */} <span className="mr-3">➣</span> Send event hosting requests<br/>
                        {/* ➤ */} {/* <span className="mr-3">➣</span> Change your details/submit new documents<br/> */}
                        {/* ➤ */} {/* <span className="mr-3">➣</span> View user history<br/> */}
                      </Dialog.Description>
                    </div>

                    <div id="divider " className="hidden md:block flex-grow my-8 border-l border-white/5"></div>

                    <div className={cn(
                      "basis-1/2 flex flex-col inset-0 items-left w-full h-full overflow-y-auto pb-2",
                    )}>
                      <Dialog.Title className="pb-4 md:pb-6 lg:pb-8 text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[var(--purple-350)] to-purple-100"> {/* // text-neutral-900 */}
                        Book a Demo
                      </Dialog.Title>
                      <form
                        onSubmit={handleSubmit(processForm)}
                        className="rounded-[1rem]"
                      >
                        <input type="hidden" {...register('kind', { value: 'Book a Demo' })} />
                        <div className="name flex flex-col">
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
                        <div className="email flex flex-col mb-1">
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
                          <div className="subscribe items-start space-x-3 mt-[-0.75rem] mb-8 xl:mb-0 leading-[0rem]">
                            <input
                              type="checkbox"
                              id="form-subscribe"
                              defaultChecked
                              {...register('subscribe')}
                            />
                            <label
                              htmlFor="form-subscribe"
                              className="text-[1.1rem] md:text-[1.4rem]"
                            >
                              Yes, I would like to subscribe to updates and news from MMAPP.
                            </label>
                          </div>
                        </div>
                        <div className="country flex flex-col xl:flex-row space-x-0 xl:space-x-8">
                          <div className="tel w-full flex flex-col">
                            <label htmlFor="form-tel">Contact Number</label>
                            <input
                              className="w-full"
                              id="form-tel"
                              autoComplete="tel"
                              /* type="text"
                              name="first"
                              required */
                              placeholder='Contact Number'
                              {...register('tel')}
                            />
                            {errors.tel?.message && (
                              <p className='ml-1 mt-1 text-sm text-red-400'>
                                {errors.tel.message}
                              </p>
                            )}
                          </div>
                          <div className="role flex flex-col">
                            <label htmlFor="form-role">Role</label>
                            <select
                              className="max-w-min"
                              id="form-role"
                              {...register('role')}
                            >
                              <option value="Federation Member">Federation Member</option>
                              <option value="Administrator">Administrator</option>
                              <option value="Athlete">Athlete</option>
                              <option value="Coach">Coach</option>
                              <option value="Club">Club</option>
                              <option value="Promoter">Promoter</option>
                            </select>
                          </div>
                        </div>
                        <Dialog.Description className="pt-6 md:pt-8 lg:pt-6 pb-4 text-[2rem] text-left font-semi-bold leading-tight text-neutral-200"> {/* //text-neutral-700 */}
                          Meeting preferences:
                        </Dialog.Description>
                        <div className="country flex flex-col xl:flex-row space-x-0 xl:space-x-8">
                          <div className="country flex flex-col">
                            <label htmlFor="form-country">Country/Timezone</label>
                            <select
                              className="max-w-min"
                              id="form-country"
                              {...register('country')}
                            >
                              {AllCountriesTimeZones.map(country => (
                                <option key={country} value={country}>{country}</option>
                              ))}
                            </select>
                          </div>
                          <div className="time flex flex-col pb-6 md:pb-8 lg:pb-10">
                            <label htmlFor="form-time">Preferred time</label>
                            <select
                              className="max-w-min"
                              id="form-time"
                              {...register('time')}
                            >
                              <option value="9am-12pm">9am-12pm</option>
                              <option value="12pm-3pm">12pm-3pm</option>
                              <option value="3pm-6pm">3pm-6pm</option>
                            </select>
                          </div>
                        </div>
                        {/* <div className="message flex flex-col">
                          <label htmlFor="form-message">Message</label>
                          <textarea
                            id="form-message"
                            rows={6}
                            placeholder='Your Message'
                            {...register('message')}
                          />
                          {errors.message?.message && (
                            <p className='ml-1 text-sm text-red-400'>{errors.message.message}</p>
                          )}
                        </div> */}
                        <div className="flex flex-col items-center">
                          {/* <CardContactUsButton disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                          </CardContactUsButton> */}
                          <CardCallToActionButton disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting Booking...' : 'Submit Booking Request'}
                          </CardCallToActionButton>
                        </div>
                      </form>
                    </div>

                  </div>


                  <Dialog.Close
                    className={cn(
                      "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
                      "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    )}
                  >
                    <Cross1Icon className="h-4 w-4 text-neutral-500 hover:text-neutral-400" /> {/* //text-neutral-500 hover:text-neutral-700 */}
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            {/* </Dialog.Overlay> */}
          </Transition.Child>
        </Transition.Root>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { DialogCTABookADemo };

