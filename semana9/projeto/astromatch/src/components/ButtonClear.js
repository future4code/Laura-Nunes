import axios from "axios";
import React from "react";
import styled from "styled-components";
import { clearUrl } from "../constants/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Button = styled.button``;

export const ButtonClear = () => {
  const clearMatches = () => {
    axios
      .put(clearUrl)
      .then(toast.error("😉 Matches zerados") )
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button onClick={() => clearMatches()}>Zerar matches</Button>
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
