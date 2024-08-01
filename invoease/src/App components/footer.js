export default function footer({ name, bankName, accountNumber, contactNumber, yourEmail }) {
  return (
    <>
      <footer>
        <ul className="flex flex-wrap items-center justify-center">
            <li><span className="font-bold">Your Name: {name}</span></li>
            <li><span className="font-bold">Bank Name: {bankName}</span></li>
            <li><span className="font-bold">Account Number: {accountNumber}</span></li>
            <li><span className="font-bold">Contact Number: {contactNumber}</span></li>
            <li><span className="font-bold">Your Email: {yourEmail}</span>siyabulelmncube@gmail.com</li>
        </ul>
      </footer>
    </>
  )
}
