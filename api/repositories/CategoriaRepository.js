const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CategoriaRepository {
  async createCategoria(data) {
    return prisma.categoria.create({ data });
  }

  async getAllCategorias() {
    return prisma.categoria.findMany({
      include: { livros: true }, // inclui os livros relacionados
    });
  }

  async getCategoriaById(id) {
    return prisma.categoria.findUnique({
      where: { id },
      include: { livros: true },
    });
  }

  async updateCategoria(id, data) {
    return prisma.categoria.update({
      where: { id },
      data,
    });
  }

  async deleteCategoria(id) {
    return prisma.categoria.delete({
      where: { id },
    });
  }
}

module.exports = new CategoriaRepository();
