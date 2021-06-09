import React, { useEffect } from "react";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { ButtonBack } from "../../components/Buttons";
import { useHistory } from "react-router";
import { BASE_URL } from "../../constants/urls";

const LoginPage = () => {
  const [email, handleEmail] = useInput("");
  const [password, handlePassword] = useInput("");
  const history = useHistory();

  const onClickLogin = () => {
    const body = { email, password };

    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/admin/trips/list");
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <div>
      <h1>Login</h1>
      <input value={email} onChange={handleEmail} placeholder="E-mail" />
      <input value={password} onChange={handlePassword} placeholder="Senha" />
      <ButtonBack />
      <button onClick={onClickLogin}>Enviar</button>
    </div>
  );
};
export default LoginPage;
