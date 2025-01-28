import React from "react";

import router from "./router";
import { RouterProvider } from "react-router";
import { ItemContextProvider } from "./context/itemContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importação do CSS do toast
export default function App() {
  return (
    <ItemContextProvider>
      <RouterProvider router={router} />
      <ToastContainer className="toast-custom" 
        autoClose={3000}/>
    </ItemContextProvider>
  );
}
