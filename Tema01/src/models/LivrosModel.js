import { livros } from "../data/banco.js";

export class LivrosModel{

    static listarTodos(){
        return livros;
    }
    static buscarPorId(id){
        return livros.find(u => u.id === parseInt(id));
    }
    
    static criarLivros( id, titulo, autor, anoPublicacao, genero){
        const novoLivros = {
            id: livros.length +1,
            titulo: titulo,
            autor: autor,
            anoPublicacao: anoPublicacao,
            genero: genero,
        };
        livros.push(novoLivros);
        return novoLivros;
    }
    static atualizarLivros(id, titulo, autor, anoPublicacao, genero){
        const index = livros.findIndex(u => u.id === parseInt(id));
        livros[index] = {
            id: parseInt(id),
            titulo: titulo,
            autor: autor,
            anoPublicacao: anoPublicacao,
            genero: genero
        }
        return livros[index];
    }
    static deletarLivros(id){
        const index = livros.findIndex(u => u.id === parseInt(id));
        livros.splice(index, 1);
        if(index===-1){
            return false
        }
        livros.splice(index, 1);
        return true;
    }

    static buscarPorEmail(email){
        return livros.find(u => u.email === email);
    }

}