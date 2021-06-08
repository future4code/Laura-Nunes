import React from "react";
import { ButtonBack } from "../../components/Buttons";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <input placeholder="E-mail"></input>
      <input placeholder="Senha"></input>
      <ButtonBack />
      <button>Enviar</button> 
      
      {/* POST Login */}
    </div>
  );
};
export default LoginPage;