import React from "react";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { ButtonBack } from "../../components/Buttons";
import { useHistory } from "react-router";
import { BASE_URL } from "../../constants/urls";

const LoginPage = () => {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });

  const history = useHistory();

  const onClickLogin = (event) => {
    event.preventDefault();
    // const body = { email, password };

    axios
      .post(`${BASE_URL}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/admin/trips/list");
        cleanFields()
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onClickLogin}>
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="E-mail"
          type="email"
          required
        />
        <input
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Senha"
          type="password"
          required
          pattern={"^.{3,}"}
          title={"Sua senha deve ter no mínimo 3 caractéres"}
        />
        <ButtonBack />
        <button>Enviar</button>
      </form>
    </div>
  );
};
export default LoginPage;
