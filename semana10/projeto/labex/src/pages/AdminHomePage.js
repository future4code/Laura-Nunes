import React from "react";
import { ButtonBack, ButtonCreateTrip } from "../components/Buttons";

const AdminHomePage = () => {
  return (
    <div>
      <h1>Painel Administrativo</h1>

      <ButtonBack />
      <ButtonCreateTrip />
      <button>Logout</button>
      
    </div>
  );
};
export default AdminHomePage;
