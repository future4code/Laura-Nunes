import React from "react";
import { ButtonBack, ButtonCreateTrip } from "../../components/Buttons";

const AdminHomePage = () => {
  return (
    <div>
      <h1>Painel Administrativo</h1>

      <ButtonBack />
      <ButtonCreateTrip />
      <button>Logout</button>

      {/* card viagem clicável (GET Trip) - deletar as viagen (DEL trip) */}
      
    </div>
  );
};
export default AdminHomePage;
