import express from "express";
import routers from "./src/routes/route.js";
import { exec } from "child_process";



const app = express();

app.use(express.json());


app.use(routers);

const PORT = '3000';

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});