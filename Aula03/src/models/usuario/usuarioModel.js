import { usuarios } from "../../data/banco.js";

export class UsuarioModel{

    static listarTodos(){
        return usuarios;
    }
    static buscarPorId(id){
        return usuarios.find(u => u.id === parseInt(id));
    }
    
    static criarUsuario(nome, email, fone){
        const novoUsuario = {
            id: usuarios.length +1,
            nome: nome,
            email: email,
            fone: fone,
        };
        usuarios.push(novoUsuario);
        return novoUsuario;
    }
    static atualizarUsuario(id, nome, email, fone){
        const index = usuarios.findIndex(u => u.id === parseInt(id));
        usuarios[index] = {
            id: parseInt(id),
            nome: nome,
            email: email,
            fone: fone
        }
        return usuarios[index];
    }
    static deletarUsuario(id){
        const index = usuarios.findIndex(u => u.id === parseInt(id));
        usuarios.splice(index, 1);
        if(index===-1){
            return false
        }
        usuarios.splice(index, 1);
        return true;
    }

    static buscarPorEmail(email){
        return usuarios.find(u => u.email === email);
    }

}