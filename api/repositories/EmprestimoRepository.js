const prisma = require('../../prisma/PrismaClient');

class EmprestimoRepository {
  async create(data) {
    return prisma.emprestimo.create({
      data: {
        livroId: data.livroId,
        usuarioId: data.usuarioId,
        dataEmprestimo: data.dataEmprestimo,
        dataDevolucao: data.dataDevolucao,
        statusId: data.statusId,
      },
      include: {
        livro: true,
        usuario: true,
        status: true,
      },
    });
  }

  async findAll() {
    return prisma.emprestimo.findMany({
      include: {
        livro: true,
        usuario: true,
        status: true,
      },
    });
  }

  async findById(id) {
    return prisma.emprestimo.findUnique({
      where: { id },
      include: {
        livro: true,
        usuario: true,
        status: true,
      },
    });
  }

  async update(id, data) {
    return prisma.emprestimo.update({
      where: { id },
      data,
      include: {
        livro: true,
        usuario: true,
        status: true,
      },
    });
  }

  async delete(id) {
    return prisma.emprestimo.delete({
      where: { id },
    });
  }
}

module.exports = new EmprestimoRepository();
