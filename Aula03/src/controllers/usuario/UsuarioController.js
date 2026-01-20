
import { UsuarioModel } from "../../models/usuario/usuarioModel.js";

export class UsuarioController{
    static listarUsuarios(req, res){
        try {
            const usuarios = UsuarioModel.listarTodos();
            if(usuarios.length === 0 || !usuarios){
                res.status(400).json({msg:"Nenhum usuário no banco."});
                return
            }
            res.status(200).json({msg:"Usuários encontrados", usuarios});
        } catch (error){
            res.status(500).json({msg: "Erro interno ao lista os usuários", erro: error.mensagem});
        }
    }
    static buscarPorId(req, res){
        try {
            const {id} = req.params;
            if(!id){
                res.status(400).json({msg: "O ide não pode ser vazio"});
                return;
            }
            const usuario = UsuarioModel.buscarPorId(id);
            if(!usuario){
                res. status(404).json({msg: "Nenhum usuário com teste ID"});
                return;
            }
            res.status(200).json({msg:"Erro interno ao buscar usuário por ID", erro:error.message});

        } 
        catch(error){
            res.status(500).json({msg: "Erro interno ao bucar usuário por ID", erro:error.message});
        }
    }
}