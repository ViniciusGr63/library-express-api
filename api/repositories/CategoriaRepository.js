import { categoria } from '../../prisma/PrismaClient.js';


class CategoriaRepository {
  async createCategoria(data) {
    return categoria.create({ data });
  }

  async getAllCategorias() {
    return categoria.findMany({
      include: { livros: true }, // inclui os livros relacionados
    });
  }

  async getCategoriaById(id) {
    return categoria.findUnique({
      where: { id },
      include: { livros: true },
    });
  }

  async updateCategoria(id, data) {
    return categoria.update({
      where: { id },
      data,
    });
  }

  async deleteCategoria(id) {
    return categoria.delete({
      where: { id },
    });
  }
}

export default new CategoriaRepository();
