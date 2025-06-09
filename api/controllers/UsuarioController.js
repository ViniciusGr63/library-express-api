import UsuarioService from '../services/UsuarioService.js';

class UsuarioController {
    async create(req, res) {
        try {
            const usuario = await UsuarioService.createUsuario(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar o usuário' });
        }
    }

    async getAll(req, res) {
        try {
            const usuarios = await UsuarioService.getAllUsuarios();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }

    async getById(req, res) {
        try {
            const usuario = await UsuarioService.getUsuarioById(Number(req.params.id));
            if (usuario) {
                res.status(200).json(usuario);
            } else {
                res.status(404).json({ error: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar o usuário' });
        }
    }

    async update(req, res) {
        try {
            const usuario = await UsuarioService.updateUsuario(Number(req.params.id), req.body);
            if (usuario) {
                res.status(200).json(usuario);
            } else {
                res.status(404).json({ error: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar o usuário' });
        }
    }

    async delete(req, res) {
        try {
            const usuario = await UsuarioService.deleteUsuario(Number(req.params.id));
            if (usuario) {
                res.status(200).json({ message: 'Usuário deletado com sucesso' });
            } else {
                res.status(404).json({ error: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar o usuário' });
        }
    }
}

export default new UsuarioController();
