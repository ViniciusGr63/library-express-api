import { emprestimo } from '../../prisma/PrismaClient.js';

class EmprestimoRepository {
    async create(data) {
        try {
            return await emprestimo.create({
                data: {
                    usuarioId: data.usuarioId,
                    livroId: data.livroId,
                    dataEmprestimo: data.dataEmprestimo,
                    dataDevolucao: data.dataDevolucao,
                    ativo: data.ativo ?? true,
                }
            });
        } catch (error) {
            throw new Error('Erro ao criar empréstimo: ' + error.message);
        }
    }

    async findAll() {
        return emprestimo.findMany({
            include: {
                usuario: true,
                livro: true,
            }
        });
    }

    async findById(id) {
        return emprestimo.findUnique({
            where: { id },
            include: {
                usuario: true,
                livro: true,
            }
        });
    }

    async update(id, data) {
        const updateData = {};
        if (data.usuarioId !== undefined) updateData.usuarioId = data.usuarioId;
        if (data.livroId !== undefined) updateData.livroId = data.livroId;
        if (data.dataEmprestimo !== undefined) updateData.dataEmprestimo = data.dataEmprestimo;
        if (data.dataDevolucao !== undefined) updateData.dataDevolucao = data.dataDevolucao;
        if (data.ativo !== undefined) updateData.ativo = data.ativo;

        try {
            return await emprestimo.update({
                where: { id },
                data: updateData,
                include: {
                    usuario: true,
                    livro: true,
                }
            });
        } catch (error) {
            throw new Error('Erro ao atualizar empréstimo: ' + error.message);
        }
    }

    async delete(id) {
        try {
            return await emprestimo.delete({
                where: { id }
            });
        } catch (error) {
            throw new Error('Erro ao deletar empréstimo: ' + error.message);
        }
    }

    async findByUsuarioId(usuarioId) {
        return emprestimo.findMany({
            where: { usuarioId },
            include: {
                livro: true,
            }
        });
    }

    async findByLivroId(livroId) {
        return emprestimo.findMany({
            where: { livroId },
            include: {
                usuario: true,
            }
        });
    }
}

export default new EmprestimoRepository();
