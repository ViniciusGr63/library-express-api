import { findAll, findById, create, update, delete as deleteUsuario } from '../repositories/UsuarioRepository.js';

class UsuarioService {
    async getAllUsuarios() {
        return await findAll();
    }

    async getUsuarioById(id) {
        const usuario = await findById(id);
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }
        return usuario;
    }

    async createUsuario(data) {
        return await create(data);
    }

    async updateUsuario(id, data) {
        const usuario = await findById(id);
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }
        return await update(id, data);
    }

    async deleteUsuario(id) {
        const usuario = await findById(id);
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }
        return await deleteUsuario(id);
    }
}

export default new UsuarioService();
