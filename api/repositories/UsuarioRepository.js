const prisma = require('../../prisma/PrismaClient');

class UsuarioRepository {
  async create(data) {
    return prisma.usuarios.create({
      data: {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
      }
    });
  }

  async findAll() {
    return prisma.usuarios.findMany();
  }

  async findById(id) {
    return prisma.usuarios.findUnique({
      where: { id }
    });
  }

  async update(id, data) {
    return prisma.usuarios.update({
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
    return prisma.usuarios.delete({
      where: { id }
    });
  }
}

module.exports = new UsuarioRepository();
