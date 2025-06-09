import EmprestimoRepository from '../repositories/EmprestimoRepository.js';

class EmprestimoService {
    async criarEmprestimo(dadosEmprestimo) {
        return await EmprestimoRepository.create(dadosEmprestimo);
    }

    async listarEmprestimos() {
        return await EmprestimoRepository.findAll();
    }

    async buscarPorId(id) {
        return await EmprestimoRepository.findById(id);
    }

    async atualizarEmprestimo(id, dadosAtualizados) {
        return await EmprestimoRepository.update(id, dadosAtualizados);
    }

    async deletarEmprestimo(id) {
        return await EmprestimoRepository.delete(id);
    }
}

export default new EmprestimoService();
