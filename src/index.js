import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Expenses from "./Routes/Expenses";
import Invoices from "./Routes/Invoices";
import Invoice from "./Routes/Invoice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          index
          element={
            <main style={{ padding: "            1rem" }}>
              <p>Select an invoice</p>
            </main>
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </Router>
);
