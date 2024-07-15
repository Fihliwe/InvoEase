import handlePrint from "./Buttons/handlePrint";
function App() {

  return (
    <>
      <main className="m-5 p-5 xl:m-w-4xl xl:mx-auto bg-white rounded shadow">
        {/*header*/}
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">InvoEase</h1>
          </div>
        </header>
        
        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li><button onClick={handlePrint} className="btn btn-print">Print</button></li>
            <li><button className="btn btn-download">Download</button></li>
            <li><button className="btn btn-print-send">Send</button></li>
          </ul>
        </div>
        {/*end of header*/}

      {/* Your Details*/}
      <section className="flex flex-col items-end justify-end">
        <h2 className="text-xl uppercase">Siyabulela Mncube</h2>
        <p>Your address: </p>
      </section>
      {/* End of Your Details*/}

      {/* Clients Details*/}
      <section className="mt-5">
        <h2 className="text-xl uppercase">Client's Name: </h2>
        <p> Client's address: </p>
      </section>
      {/* End of clients Details*/}

      {/* Date */}
        <article className="my-5 flex items-end justify-end">
          <ul>
            <li><span className="font-bold">Invoice Number: </span></li>
            <li><span className="font-bold"> Invoice Date: </span></li>
            <li><span className="font-bold">Due Date: </span></li>
          </ul>
        </article>
      {/* end of Date */}

      {/* Table */}
      <div className="my-5">This is the table</div>
      {/* End of table  */}

      {/* Notes */}
      <section className="mb-5">
        {/* Text Area */}
        <p>Notes to clients....</p>
        {/* End of Text Area */}
      </section>
      {/* End of Notes */}

      {/* Footer */}
      <ul className="flex flex-wrap items-center justify-center">
        <li><span className="font-bold">Your Name: </span> Siyabulela Mncube</li>
        <li><span className="font-bold">Bank Name: </span>First National Bank</li>
        <li><span className="font-bold">Account Number: </span>123 456 7890</li>
        <li><span className="font-bold">Contact Number: </span>123456789</li>
        <li><span className="font-bold">Your Email: </span>siyabulelmncube@gmail.com</li>
      </ul>
      {/* End of Footer */}
      </main>
    </>
  );
}

export default App;
