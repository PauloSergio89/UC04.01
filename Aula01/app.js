import express from "express"; // Importa o framework express
const app = express(); // Cria a const app que herda as funções do express
const port = 3000; //A porta de aplicação/API irá rodar

// rota com resposta do tipo texto
app.get("/", (req, res) => {

    res.send("Hello World!!!");

})

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
})

// rota com resposta do tipo JSON
app.get('/usuario', (req, res) => {
    res.json({
        nome: "Paulo Sergio",
        idade: 36,
        cidade: "Parnamirim"
    })
});

// rota get com status http
app.get('/status', (req, res) => {
    res.status(200).send("Tudo OK!");
});


app.get("/usuario/:id",(req,res) => {
    const {id}=req.params;
        res.status(200).json({
            id: id,
            nome: "User exemplo"
        })
})






app.listen(port, () => {
   console.log(`Aplicação rodando em http://localhost:${port}`);
})