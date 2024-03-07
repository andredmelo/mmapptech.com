interface ContactFormEmailProps {
  kind: string
  name: string
  email: string
  message: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  kind,
  name,
  email,
  message
}) => (
  <div>
    <h1>{kind} Contact form submission</h1>
    <h2>
      From <strong>{name}</strong> at <strong>{email}</strong>
    </h2>
    <h3>Message:</h3>
    <p>{message}</p>
  </div>
)

export default ContactFormEmail