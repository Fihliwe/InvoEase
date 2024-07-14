import handlePrint from "./Buttons/handlePrint";
function App() {

  return (
    <>
      <main>
        {/*header*/}
        <header>
          <div>
            <h2>InvoEase</h2>
          </div>
        </header>
        
        <div>
          <ul>
            <li><button onClick={handlePrint}>Print</button></li>
            <li>Download</li>
            <li>Send</li>
          </ul>
        </div>
        {/*end of header*/}

      {/* Your Details*/}
      <section>
        <h2>Siyabulela Mncube</h2>
        <p>Your address: </p>
      </section>
      {/* End of Your Details*/}

      {/* Clients Details*/}
      <section>
        <h2>Client's Name: </h2>
        <p> Client's address: </p>
      </section>
      {/* End of clients Details*/}

      {/* Date */}
        <article>
          <ul>
            <li>Invoice Number: </li>
            <li> Invoice Date: </li>
            <li>Due Date: </li>
          </ul>
        </article>
      {/* end of Date */}

      {/* Table */}

      {/* End of table  */}
      </main>
    </>
  );
}

export default App;
