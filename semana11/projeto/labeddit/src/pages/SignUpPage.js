import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

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

  const handleSingUp = (e) => {
    e.preventDefault();
  };

  const handleGoToLogin = () => {
    history.push("/login");
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
        <form onSubmit={handleSingUp}>
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
                fullWidth
                name="password"
                label="Senha"
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
            Sign Up
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
