import React from "react";
import { useHistory } from "react-router-dom";
import {
  goToLoginPage,
  goToListTripPage,
  goToApplicationFormPage,
  goBack,
  goToCreateTripPage,
  goToAdminHomePage,
} from "../routes/coordinator";


export const ButtonListTrip = () => {
  const history = useHistory();

  return <button onClick={() => goToListTripPage(history)}>Viagens</button>;
};

export const ButtonBack = () => {
  const history = useHistory();

  return <button onClick={() => goBack(history)}>Voltar</button>;
};

export const ButtonApplication = () => {
  const history = useHistory();

  return (
    <button onClick={() => goToApplicationFormPage(history)}>
      Inscrever-se
    </button>
  );
};

export const ButtonCreateTrip = () => {
  const history = useHistory();

  return (
    <button onClick={() => goToCreateTripPage(history)}>Criar viagem</button>
  );
};

export const ButtonAdminHome = () => {
  const history = useHistory();

  return (
    <button onClick={() => goToAdminHomePage(history)}>Área de Admin</button>
  )
}