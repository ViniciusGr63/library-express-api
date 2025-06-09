import { autor } from '../../prisma/PrismaClient.js';

class AutorRepository {
  async create(data) {
    return autor.create({
      data: {
        nome: data.nome,
      },
    });
  }

  async findAll() {
    return autor.findMany({
      include: { livros: true }, // traz livros relacionados
    });
  }

  async findById(id) {
    return autor.findUnique({
      where: { id },
      include: { livros: true },
    });
  }

  async update(id, data) {
    const updateData = {};
    if (data.nome !== undefined) updateData.nome = data.nome;

    return autor.update({
      where: { id },
      data: updateData,
      include: { livros: true },
    });
  }

  async delete(id) {
    return autor.delete({
      where: { id },
    });
  }
}

export default new AutorRepository();
