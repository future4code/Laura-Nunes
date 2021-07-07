import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      history.push("/feed");
    }
  }, [history]);

   // UNIFICAR FUNÇÕES COM CUSTOM HOOK

  const handleGoToSignUp = () => {
    history.push("/signup");
  };

  const handleUpdateEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleUpdatePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const body = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${BASE_URL}/users/login`, body);

      localStorage.setItem("token", response.data.token);

      history.push("/feed");
    } catch (err) {
      alert("Ocorreu um erro, confira os dados e tente novamente");
      console.error(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleUpdateEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handleUpdatePassword}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Fazer Login
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" onClick={handleGoToSignUp} variant="body2">
                {"Não tem uma conta? Cadastre-se!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
