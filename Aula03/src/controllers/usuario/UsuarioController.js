
import { UsuarioModel } from "../../models/usuario/usuarioModel.js";

export class UsuarioController {
    static listarUsuarios(req, res) {
        try {
            const usuarios = UsuarioModel.listarTodos();
            if (usuarios.length === 0 || !usuarios) {
                res.status(400).json({ msg: "Nenhum usuário no banco." });
                return
            }
            res.status(200).json({ msg: "Usuários encontrados", usuarios });
        } catch (error) {
            res.status(500).json({ msg: "Erro interno ao lista os usuários", erro: error.mensagem });
        }
    }
    static buscarPorId(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ msg: "O ide não pode ser vazio" });
                return;
            }
            const usuario = UsuarioModel.buscarPorId(id);
            if (!usuario) {
                res.status(404).json({ msg: "Nenhum usuário com teste ID" });
                return;
            }
            res.status(200).json({ msg: "Erro interno ao buscar usuário por ID", erro: error.message });

        }
        catch (error) {
            res.status(500).json({ msg: "Erro interno ao bucar usuário por ID", erro: error.message });
        }
    }
    static criarUsuario(req, res) {
        try {
            const { nome, email, fone } = req.body;
            if (!nome || !email || !fone) {
                res.status(400).json({ msg: "Todos os campos devem ser preenchidos no cadastro" });
                return;
            }
            const novoUsuario = UsuarioModel.criarUsuario(nome, email, fone);
            res.status(201).json({ msg: "Usuário criado com sucesso!", novoUsuario })

        } catch (error) {
            res.status(500).json({msg: "Erro interno ao cadastrar usuário.", erro: error.message});
        }
    }

    static atualizarUsuario(req, res){
        try {
            const {id} = req.params;
            const {nome, email, fone} = req.body;
            if(!nome || !email || !fone){
                res.status(400).json({msg: "Todos os campos devem ser preenchidos na atualização"});
                return;
            }
            if(!id){
                res.status(400).json({msg: "Nenhum id fornecido na atualziação."});
                return;
            }
            const usuarioId = UsuarioModel.buscarPorId(id);
            if (!usuarioId){
                res.status(400).json({msg: "Usuário não encontrado."});
                return;
            }
            const novoUsuario = UsuarioModel.atualizarUsuario(id, nome, email, fone);
            res.status(201).json({msg: "Usuário atualizado com sucesso!", novoUsuario});

        } catch (error) {
            res.status(500).json({msg: "Erro interno ao atualizar", erro: error.message});
            
        }}

        static deletarUsuario(req, res){
            try {
                const {id} = req.params;
                if(!id){
                    res.status(400).json({msg: "Id deve ser fornecido na deleção"});
                    return;
                }
                const delUsuario = UsuarioModel.deletarUsuario(id);
                if(!delUsuario){
                    res.status(404).json({msg: " Usuário não encontrado com este id."});
                    return;
                }
                res.status(200).json({msg: "Usuário deletado com sucesso!"});
            } catch (error) {
                res.status(500).json({msg: "Erro interno ao deletar o usuário", erro: error.message});
            }
        }
        
        static buscarPorEmail(req, res) {
        try {
            const { email } = req.params;
            if (!email) {
                res.status(400).json({ msg: "Email não pode ser vazio" });
                return;
            }
            const usuario = UsuarioModel.buscarPorEmail(email);
            if (!usuario) {
                res.status(404).json({ msg: "Nenhum usuario com este email" });
                return;
            }
            res.status(200).json({ msg: "Usuario encontrado", usuario });

        }
        catch (error) {
            res.status(500).json({ msg: "Erro interno ao bucar email por ID", erro: error.message });
        }
    }
        
    }

