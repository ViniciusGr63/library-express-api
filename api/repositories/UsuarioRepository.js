import prisma from '../../prisma/PrismaClient.js';

class UsuarioRepository {
  async create(data) {
    return prisma.usuario.create({
      data: {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
      }
    });
  }

  async findAll() {
    return prisma.usuario.findMany();
  }

  async findById(id) {
    return prisma.usuario.findUnique({
      where: { id }
    });
  }

  async update(id, data) {
    return prisma.usuario.update({
      where: { id },
      data: {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
        ativo: data.ativo,
      }
    });
  }

  async delete(id) {
    return prisma.usuario.delete({
      where: { id }
    });
  }
}

export default new UsuarioRepository();
