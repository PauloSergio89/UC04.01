import { usuarios } from "../data/banco";

export class UsuarioModel{
    static lisatarUsuarios(){
        return usuarios;
    }
    static buscarUsuarios(){
        return usuarios;
    }
    static buscarPorId(id){
        return usuarios.find(u => u.id === parseInt(id));
    }
    static criarUsusarios(usuario){
        usuarios.push(usuario);
        return usuario;
    }
    static atualizarUsuario(id, usuario){
        const index = usuarios.findIndex(u=> u.id === parseInt(id));
        if(index===-1){
            return false;
        }
        usuarios[index] = {...usuarios[index], ...novosDados};
        return usuarios[index];
    }
    static deletarUsuario(id){
        const index = usuarios.findIndex(u => u.id === parseInt(id));
        if (index ===-1){
            return false;
        }
        usuarios.splice(index, 1);
        return true;
    }
}