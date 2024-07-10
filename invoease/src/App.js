import handlePrint from "./functionalitybuttons/handlePrint";

function App() {
  return (
    <>
    <main className=" m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
      {/* header */}
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">InvoEase</h1>
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
          <h2 className="text-xl uppercase">Siyabulela Mncube</h2>
          <p>Your address</p>
        </section>
        {/* end of user details */}

        {/* client details */}
        <section className="mt-5">
          <h2 className="text-xl uppercase">Client's name</h2>
          <p>Client's address</p>
        </section>
        {/* end of client details */}

        {/* Dates */}
        <article class="my-5 flex items-end justify-end">
          <ul>
            <li><span className="font-bold">Invoice Number: </span></li>
            <li><span className="font-bold">Invoice Date</span></li>
            <li><span className="font-bold">Due Date</span></li>
          </ul>
        </article>
        {/* end of date*/}

        {/*table */}
        <div className="mb-5">this is the table....</div>
        {/* end of table */}

        {/* notes section */}
        <section className="my-5">
          {/*text area */}
          <p>Notes to the Client</p>
          {/* end of text area */}
        </section>

        {/* end of notes section */}

        {/* footer */}
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span >Your name: </span>Siyabulela Mncube
          </li>
          <li>
            <span >Your email address: </span>siyabulelmncube@gmail.com
          </li>
          <li>
            <span >Bank Name</span> fnb
          </li>
          <li>
            <span >Acount holder </span>Siyabulela Mncube
          </li>
          <li>
            <span >Account Number</span>123 456 789
          </li>
          <li>
            <span >Website</span>
          </li>
        </ul>
        {/* end of footer */}
        </main>
    </>
  ); 
}

export default App;
