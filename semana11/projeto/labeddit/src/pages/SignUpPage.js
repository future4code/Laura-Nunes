import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      history.push("/feed");
    }
  }, [history]);

  // UNIFICAR FUNÇÕES COM CUSTOM HOOK

  const handleUpdateUsername = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };

  const handleUpdateEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleUpdatePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleGoToLogin = () => {
    history.push("/login");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const body = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, body);
      localStorage.setItem("token", response.data.token);
      history.push("/login");
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
          Cadastre-se
        </Typography>
        <form onSubmit={handleSignUp}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Usuário"
                autoFocus
                value={username}
                onChange={handleUpdateUsername}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleUpdateEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                pattern={"^.{8,}"}
                title={"A senha deve ter no mínimo 8 caracteres"}
                fullWidth
                name="password"
                label="Senha (mínimo 8 caracteres)"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handleUpdatePassword}
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Entrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" onClick={handleGoToLogin} variant="body2">
                Já tem uma conta? Faça Login!
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUpPage;
