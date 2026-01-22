import express from "express";
import livrosRoutes from "./src/routes/livrosRoutes.js";
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/livros", livrosRoutes);

// Sua lógica e endpoints aqui


app.listen(PORT, ()=>{
    console.log(`Aplicação rodando em http://localhost:${PORT}`);
})