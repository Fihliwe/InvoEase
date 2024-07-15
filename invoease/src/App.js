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

  return (
    <>
      <main className="m-5 p-5 xl:m-w-4xl xl:mx-auto bg-white rounded shadow">
        {showInvoice ? <div>
          <Header />
          <Details />
          <ClientsDetails />
          <Date />
          <Table />
          <Notes />
          <Footer />
        </div> : (
          <input type="text" name="text" id="text" placeholder="Enter your name" />
        )}
      </main>
    </>
  );
}

export default App;
