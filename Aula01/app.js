import express from "express"; // Importa o framework express
const app = express(); // Cria a const app que herda as funções do express
const port = 3000; //A porta de aplicação/API irá rodar


app.get("/",(req, res) =>{

res.send("Hello World!!!");

})

app.listen(port, ()=>{
    console.log(`Aplicação rodando em http://localhost:${port}`);
})
