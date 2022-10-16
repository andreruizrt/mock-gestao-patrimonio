import express from "express";

import {
  getUserController,
  getUsersController,
  putUserController
} from "./controllers/user/user.controller";

import {
  getPatrimonioController,
  getPatrimoniosController
} from './controllers/patrimonio/patrimonio.controller';

const app = express();

app.use(express.json({ limit: '1mb' }));

app.get("/", ((request, response) => response.send({
  message: 'Acessando o mock do Andre'
})));

app.get("/users", getUsersController);
app.get("/users/:id", getUserController);
app.put("/:id", putUserController);

app.get("/patrimonio", getPatrimonioController);
app.get("/patrimonio/:id", getPatrimoniosController);
app.put("/:id", putUserController);



export default app;
