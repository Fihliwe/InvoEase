import handlePrint from "./functionalitybuttons/handlePrint";

function App() {
  return (
    <>
    <main className="p-5 lg:max-w-xl lg:max-auto">
      {/* header */}
      <header className="flex flex-col items-center justify-center mb-5">
        <div>
          <h2>InvoEase</h2>
        </div>

        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li>
              <button onClick={handlePrint} className="btn btn-print">Print</button>
              </li>
            <li>
              <button className="btn btn-download">Download</button>
              </li>
            <li>
              <button className="btn btn-send">Send</button>
              </li>
          </ul>
        </div>
        </header>
        {/* End fo header */}

        {/* users details */}
        <section className="flex flex-col items-end justify-end">
          <h2>Siyabulela Mncube</h2>
          <p>Your address</p>
        </section>
        {/* end of user details */}

        {/* client details */}
        <section>
          <h2>Client's name</h2>
          <p>Client's address</p>
        </section>
        {/* end of client details */}

        {/* Dates */}
        <article>
          <ul>
            <li>Invoice Number: </li>
            <li>Invoice Date</li>
            <li>Due Date</li>
          </ul>
        </article>
        {/* end of date*/}

        {/*table */}

        {/* end of table */}

        {/* notes section */}
        <section>
          {/*text area */}
          <p>Notes to the Client</p>
          {/* end of text area */}
        </section>

        {/* end of notes section */}

        {/* footer */}
        <ul>
          <li>Your name</li>
          <li>Your email address</li>
          <li>Bank Name</li>
          <li>Acount holder</li>
          <li>Account Number</li>
          <li>Website</li>
        </ul>
        {/* end of footer */}
        </main>
    </>
  );
}

export default App;
