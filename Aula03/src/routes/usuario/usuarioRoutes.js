import express from "express";
import { UsuarioController } from "../../controllers/usuario/UsuarioController.js";

const router = express.Router();

//Rota para lista todos os usuários
router.get("/", UsuarioController.listarUsuarios);

//Rota para buscar um usuario por ID
router.get("/:id", UsuarioController.buscarPorId);


export default router;
