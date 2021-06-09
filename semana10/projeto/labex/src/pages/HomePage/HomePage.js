import React from "react";
import { ButtonLogin, ButtonListTrip, ButtonAdminHome } from "../../components/Buttons";

const HomePage = () => {
  return (
    <div>
      <h1>LabeX</h1>

      <ButtonListTrip />
      <ButtonAdminHome />

    </div>
  );
};
export default HomePage;
