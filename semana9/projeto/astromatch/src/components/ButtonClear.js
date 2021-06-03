import axios from "axios";
import React from "react";
import styled from "styled-components";
import { clearUrl } from "../constants/constants";

const Button = styled.button``;

export const ButtonClear = () => {
  const clearMatches = () => {
    axios
      .put(clearUrl)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button onClick={() => clearMatches()}>Limpar matchs</Button>
    </div>
  );
};
