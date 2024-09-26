import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import logoDark from "./assets/dark mode logo.png";
import logoLight from "./assets/light mode image 2.png";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='text-center  space-y-6 my-6'>
      <Navbar />
      <h1 className='text-3xl  dark:text-white text-center'>hello</h1>

      <div>
        <img src={logoDark} alt='Logo' className=' hidden dark:block w-32' />
        <img src={logoLight} alt='Logo' className='block dark:hidden w-32' />
      </div>
    </div>
  </React.StrictMode>
);
