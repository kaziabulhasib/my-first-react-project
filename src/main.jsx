import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='text-center space-y-6 my-6'>
      <Navbar />
      <h1 className='text-3xl  dark:text-white text-center'>hello</h1>
    </div>
  </React.StrictMode>
);
