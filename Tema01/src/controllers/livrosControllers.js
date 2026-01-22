import { LivrosModel } from "../models/LivrosModel.js";

export class LivrosController {
    static listarLivros(req, res) {
        try {
            const livros = LivrosModel.listarTodos();
            if (livros.length === 0 || !livros) {
                res.status(400).json({ msg: "Nenhum livro no banco." });
                return
            }
            res.status(200).json({ msg: "Livros encontrados", livros });
        } catch (error) {
            res.status(500).json({ msg: "Erro interno ao lista os livros", erro: error.mensagem });
        }
    }
    static buscarPorId(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ msg: "O ide não pode ser vazio" });
                return;
            }
            const livros = LivrosModel.buscarPorId(id);
            if (!livros) {
                res.status(404).json({ msg: "Nenhum livro com teste ID" });
                return;
            }
            res.status(200).json({ msg: "Erro interno ao buscar por livro por ID", erro: error.message });

        }
        catch (error) {
            res.status(500).json({ msg: "Erro interno ao bucar livro por ID", erro: error.message });
        }
    }
    static criarLivros(req, res) {
        try {
            const { id, titulo, autor, anoPublicacao, genero } = req.body;
            if (!id || !titulo || !autor || !anoPublicacao || !genero) {
                res.status(400).json({ msg: "Todos os campos devem ser preenchidos no cadastro" });
                return;
            }
            const novoLivros = LivrosModel.criarLivros(id, titulo, autor, anoPublicacao, genero);
            res.status(201).json({ msg: "Usuário criado com sucesso!", novoLivros })

        } catch (error) {
            res.status(500).json({ msg: "Erro interno ao cadastrar livros.", erro: error.message });
        }
    }

    static atualizarLivros(req, res) {
        try {
            const { id } = req.params;
            const { titulo, autor, anoPublicacao, genero } = req.body;
            if (!id || !titulo || !autor || !anoPublicacao || !genero) {
                res.status(400).json({ msg: "Todos os campos devem ser preenchidos na atualização" });
                return;
            }
            if (!id) {
                res.status(400).json({ msg: "Nenhum id fornecido na atualziação." });
                return;
            }
            const livrosId = LivrosModel.buscarPorId(id);
            if (!livrosId) {
                res.status(400).json({ msg: "Livros não encontrado." });
                return;
            }
            const novoLivros = LivrosModel.atualizarlivros(id, titulo, autor, anoPublicacao, genero);
            res.status(201).json({ msg: "Livros atualizados com sucesso!", novoLivro });

        } catch (error) {
            res.status(500).json({ msg: "Erro interno ao atualizar", erro: error.message });

        }
    }

    static deletarLivros(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ msg: "Id deve ser fornecido na deleção" });
                return;
            }
            const delLivro = LivroModel.deletarLivro(id);
            if (!delLivro) {
                res.status(404).json({ msg: " Livros não encontrado com este id." });
                return;
            }
            res.status(200).json({ msg: "Livro deletado com sucesso!" });
        } catch (error) {
            res.status(500).json({ msg: "Erro interno ao deletar o livro", erro: error.message });
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