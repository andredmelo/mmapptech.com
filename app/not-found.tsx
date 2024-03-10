import Link from 'next/link'
 
export default function NotFound() {
  return (
    <>
    {/* <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div> */}
    <main className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-blue-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-50 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-neutral-400">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="w-[20%] hover:w-[20.5%] rounded-lg border-solid border-2 border-neutral-200 hover:border-fuchsia-100 text-sm md:text-sm lg:text-md
              bg-white hover:bg-fuchsia-50 dark:bg-neutral-100
              text-neutral-600 hover:text-fuchsia-800
              hover:ring-4 ring-fuchsia-700 ring-opacity-75
              px-3.5 py-2.5 font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  )
}