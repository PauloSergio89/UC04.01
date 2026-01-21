import express from "express";
import { UsuarioController } from "../../controllers/usuario/UsuarioController.js";

const router = express.Router();

//Rota para lista todos os usuários
router.get("/", UsuarioController.listarUsuarios);

//Rota para buscar um usuario por ID
router.get("/:id", UsuarioController.buscarPorId);

//Rota para criar um novo usuário
router.post("/", UsuarioController.criarUsuario);

// Rota para atualizar um usuário
router.put("/:id", UsuarioController.atualizarUsuario);

//Rota para deletar um usuário
router.delete("/:id", UsuarioController.deletarUsuario);

//Rota para buscar email
router.get("/email/:email", UsuarioController.buscarPorEmail);

export default router;
