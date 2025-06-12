const prisma = require('../../prisma/PrismaClient');

class EmprestimoRepository {
  async create(data) {
    return prisma.emprestimos.create({
      data: {
        livro_id: data.livro_id,
        usuario_id: data.usuario_id,
        data_emprestimo: data.data_emprestimo,
        data_devolucao: data.data_devolucao,
      },
      include: {
        livros: true,
        usuarios: true,
      },
    });
  }

  async findAll() {
    return prisma.emprestimos.findMany({
      include: {
        livros: true,
        usuarios: true,
      },
    });
  }

  async findById(id) {
    return prisma.emprestimos.findUnique({
      where: { id },
      include: {
        livros: true,
        usuarios: true,
      },
    });
  }

  async update(id, data) {
    return prisma.emprestimos.update({
      where: { id },
      data,
      include: {
        livros: true,
        usuarios: true,
      },
    });
  }

  async delete(id) {
    return prisma.emprestimos.delete({
      where: { id },
    });
  }
}

module.exports = new EmprestimoRepository();
