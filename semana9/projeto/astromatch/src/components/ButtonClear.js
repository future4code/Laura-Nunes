import axios from "axios";
import React from "react";
import { clearUrl } from "../constants/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const ButtonClear = () => {
  const clearMatches = () => {
    axios
      .put(clearUrl)
      .then(toast.error("😉 Matches zerados") )
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={() => clearMatches()}>Zerar matches</button>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
