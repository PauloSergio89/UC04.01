import { usuarioController} from "../controllers/UsuarioController.js";
import express from "express";

const router = express.Router();


router.get("/", usuarioController.listarUsuarios);
router.post("/", usuarioController.criarUsuario);


export default router;