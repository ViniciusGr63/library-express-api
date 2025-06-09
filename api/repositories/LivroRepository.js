import prisma from '../../prisma/PrismaClient.js';

class LivroRepository {
  async create(data) {
    return prisma.livro.create({
      data: {
        titulo: data.titulo,
        anoPublicacao: data.anoPublicacao,
        disponivel: data.disponivel ?? true,
        autorId: data.autorId,
        categoriaId: data.categoriaId,
      }
    });
  }

  async findAll() {
    console.log('Buscando livros no banco...');
    const result = await prisma.livro.findMany({
      include: { autor: true, categoria: true }
    });
    console.log('Livros encontrados:', result);
    return result;
  }

  async findById(id) {
    return prisma.livro.findUnique({
      where: { id },
      include: {
        autor: true,
        categoria: true,
      }
    });
  }

  async update(id, data) {
    return prisma.livro.update({
      where: { id },
      data: {
        titulo: data.titulo,
        anoPublicacao: data.anoPublicacao,
        disponivel: data.disponivel,
        autorId: data.autorId,
        categoriaId: data.categoriaId,
      },
      include: {
        autor: true,
        categoria: true,
      }
    });
  }

  async delete(id) {
    return prisma.livro.delete({
      where: { id }
    });
  }
}

export default new LivroRepository();
