import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '.././components/ui/card'
import styles from "./general.module.css";

export default function General() {
  /* async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data: FormData = new FormData(e.currentTarget);
    console.log(data);
    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert('Thanks for contacting us, we will get back to you soon!');
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  } */

  return (
    <Card>
      <CardHeader>
        <CardTitle>General Inquiries</CardTitle>
        <CardDescription>
          If you would like an electronic response please enter your comments or questions in the space provided below.<br/>
          In cases where you wish to receive a written response please include your mailing address.
        </CardDescription>
      </CardHeader>
      <CardContent className='h-full space-y-2'>
        <div className='h-full rounded-lg bg-emerald-100 p-4'>

          <form className="container p-5 rounded-[1rem]">
            <div className="email flex flex-col">
              <label htmlFor="frm-email">Email</label>
              <input className="form-input"
                id="form-email"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="phone flex flex-col">
              <label htmlFor="frm-phone">Phone</label>
              <input
                id="form-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                required
              />
            </div>
            <div className="justify-between flex flex-row gap-x-16">
              <div className="w-full flex flex-col">
                <label htmlFor="frm-first">First Name</label>
                <input className="w-full"
                  id="form-first"
                  type="text"
                  name="first"
                  autoComplete="given-name"
                  required
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="frm-last">Last Name</label>
                <input className="w-full"
                  id="form-last"
                  type="text"
                  name="last"
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>
            <div className="message flex flex-col">
              <label htmlFor="frm-message">Message</label>
              <textarea id="frm-message" rows="6" name="message"></textarea>
            </div>
            <div className="flex flex-col items-center">
              <button className="bg-neutral-100 hover:bg-neutral-50 text-neutral-600 hover:text-neutral-800 hover:ring-2 ring-blue-700 ring-opacity-75 p-4 rounded-lg" type="submit">Submit</button>
            </div>
          </form>

        </div>
      </CardContent>
      <CardFooter className='border-t border-neutral-800 pt-6'>
        <p className='text-sm italic text-neutral-400'>General Inquiries Submission Form</p>
      </CardFooter>
    </Card>
  )
}
