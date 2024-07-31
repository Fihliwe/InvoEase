import { useState } from "react";
import Footer from "./App components/footer";
import Notes from "./App components/notes";
import Header from "./App components/header";
import Details from "./App components/Details";
import ClientsDetails from "./App components/ClientDetails";
import Date from "./App components/Date";
import Table from "./App components/table";

function App() {
  // state values to toggle between the form and invoice
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  const [emails, setEmails] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [bankName, setBankName] = useState("")
  return (
    <>
      <main className="m-5 p-5 xl:m-w-4xl xl:mx-auto bg-white rounded shadow">
        {showInvoice ? <div>
          <Header />
          <Details name={name} address={address} />
          <ClientsDetails />
          <Date />
          <Table />
          <Notes />
          <Footer />

          <button onClick={() => setShowInvoice(false)} className=" mt-5 bg-black text-white font-bold py-2 px-8 rounded shadow 
            border-2 border-black hover:bg-transparent hover:text-black 
            transition-all duration-300">Edit Invoice</button>
        </div> : (
          <>
          {/* name, address, client name, client adress, invoice number ,invoice date, due date, notes, emails, phone number, bank account, bank  */}
          <div className="flex flex-col justify-center">
            <label htmlFor="name"> Enter your name</label>
            <input className="mb-5"
              type="text"
              name="text" 
              id="name" 
              placeholder="Enter your name" 
              autoComplete="off" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* setAddress Label */}
            <label htmlFor="name"> Enter your Address</label>
            <input className="mb-5"
              type="text"
              name="text" 
              id="address" 
              placeholder="Enter your address" 
              autoComplete="on" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            {/* setClientName Label */}
            <label htmlFor="name"> Enter your Client's Name</label>
            <input className="mb-5"
              type="text"
              name="text" 
              id="clientName" 
              placeholder="Enter your Client's Name" 
              autoComplete="on" 
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />

            {/* setClientAddress Label */}
            <label htmlFor="name"> Enter your Client's address</label>
            <input className="mb-5"
              type="text"
              name="text" 
              id="clientAdress" 
              placeholder="Enter your Client's Address" 
              autoComplete="on" 
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
            />

            {/* setInvoiceNumber */}
            <label htmlFor="name"> Enter your Invoice Number</label>
            <input className="mb-5"
              type="text"
              name="text" 
              id="name" 
              placeholder="Enter your name" 
              autoComplete="on" 
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />

            {/* setInvoiceDate */}
            <label htmlFor="name"> Enter your Invoice Date</label>
            <input className="mb-5"
              type="text"
              name="text" 
              id="name" 
              placeholder="Enter your name" 
              autoComplete="on" 
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />

            {/* setDueDate */}
            <label htmlFor="name"> Enter Due Date</label>
            <input className="mb-5"
              type="text"
              name="text" 
              id="name" 
              placeholder="Enter your name" 
              autoComplete="on" 
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />

            {/* setNotes */}
            <label htmlFor="name"> Enter Your Notes</label>
            <input className="mb-5"
              type="text"
              name="text" 
              id="name" 
              placeholder="Enter your name" 
              autoComplete="on" 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            {/* setEmails */}
            <label htmlFor="name"> Enter your email</label>
            <input className="mb-5"
              type="text"
              name="text" 
              id="name" 
              placeholder="Enter your name" 
              autoComplete="on" 
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
            />

            {/* setPhoneNumber */}
            <label htmlFor="name"> Enter your Phone Number</label>
            <input className="mb-5"
              type="text"
              name="text" 
              id="name" 
              placeholder="Enter your name" 
              autoComplete="on" 
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            {/* setBankAccount */}
            <label htmlFor="name"> Enter your Bank Account Number</label>
            <input className="mb-5"
              type="text"
              name="text" 
              id="name" 
              placeholder="Enter your name" 
              autoComplete="on" 
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
            />

            {/* setBankName */}
            <label htmlFor="name"> Enter your Bank Name</label>
            <input className="mb-5"
              type="text"
              name="text" 
              id="name" 
              placeholder="Enter your name" 
              autoComplete="on" 
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />

            <button onClick={() => setShowInvoice(true)} className="bg-black text-white font-bold py-2 px-8 rounded shadow 
            border-2 border-black hover:bg-transparent hover:text-black 
            transition-all duration-300">Preview Invoice</button>
          </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
