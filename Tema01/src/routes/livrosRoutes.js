import express from "express";
//import { LivrosController } from "../../controllers/LivrosController.js";
import { LivrosController } from "../controllers/livrosControllers.js";
const router = express.Router();

//Rota para lista todos os usuários
router.get("/", LivrosController.listarLivros);

//Rota para buscar um usuario por ID
router.get("/:id", LivrosController.buscarPorId);

//Rota para criar um novo usuário
router.post("/", LivrosController.criarLivros);

// Rota para atualizar um usuário
router.put("/:id", LivrosController.atualizarLivros);

//Rota para deletar um usuário
router.delete("/:id", LivrosController.deletarLivros);

//Rota para buscar email
router.get("/email/:email", LivrosController.buscarPorEmail);

export default router;