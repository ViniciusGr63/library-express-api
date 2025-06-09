const prisma = require('../../prisma/PrismaClient');

class AutorRepository {
  async create(data) {
    return prisma.autor.create({
      data: {
        nome: data.nome,
      },
    });
  }

  async findAll() {
    return prisma.autor.findMany({
      include: { livros: true }, // traz livros relacionados
    });
  }

  async findById(id) {
    return prisma.autor.findUnique({
      where: { id },
      include: { livros: true },
    });
  }

  async update(id, data) {
    const updateData = {};
    if (data.nome !== undefined) updateData.nome = data.nome;

    return prisma.autor.update({
      where: { id },
      data: updateData,
      include: { livros: true },
    });
  }

  async delete(id) {
    return prisma.autor.delete({
      where: { id },
    });
  }
}

module.exports = new AutorRepository();
