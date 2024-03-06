import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '.././components/ui/card'

export default function Sales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Enquiries</CardTitle>
        <CardDescription>
          Inquire about product features, pricing, or availability.<br/>
          Any information solicited for a sales inquiry will be used solely to provide requester
        </CardDescription>
      </CardHeader>
      <CardContent className='h-72 space-y-2'>
        <div className='h-full rounded-lg bg-gray-100 p-4'></div>
      </CardContent>
      <CardFooter className='border-t pt-6'>
        <p className='text-sm italic text-gray-400'>Sales Enquiries Section Footer</p>
      </CardFooter>
    </Card>
  )
}
