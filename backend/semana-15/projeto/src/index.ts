import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { accounts } from "./accounts";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users/create", (req: Request, res: Response) => {
  try {
    // validar as entradas da requisição
    // consultar ou alterar a base de dados
    const { name, CPF, dateOfBirthAsString } = req.body;

    const [day, month, year] = dateOfBirthAsString.split("/"); //desestruturação

    const dateOfBirth: Date = new Date(`${year}-${month}-${day}`);

    accounts.push({
      name,
      CPF,
      dateOfBirth,
      balance: 0,
      statement: [],
    });

    // validar o resultado da consulta
    // enviar a resposta
    res.status(201).send("Conta criada com sucesso!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
