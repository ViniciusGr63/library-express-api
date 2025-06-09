const UsuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioService {
    async getAllUsuarios() {
        return await UsuarioRepository.findAll();
    }

    async getUsuarioById(id) {
        const usuario = await UsuarioRepository.findById(id);
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }
        return usuario;
    }

    async createUsuario(data) {
        return await UsuarioRepository.create(data);
    }

    async updateUsuario(id, data) {
        const usuario = await UsuarioRepository.findById(id);
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }
        return await UsuarioRepository.update(id, data);
    }

    async deleteUsuario(id) {
        const usuario = await UsuarioRepository.findById(id);
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }
        return await UsuarioRepository.delete(id);
    }
}

module.exports = new UsuarioService();
