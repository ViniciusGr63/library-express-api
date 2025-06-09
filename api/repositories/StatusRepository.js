const prisma = require('../../prisma/PrismaClient');

class StatusRepository {
  async create(data) {
    return prisma.status.create({
      data: {
        nome: data.nome,
      },
    });
  }

  async findAll() {
    return prisma.status.findMany();
  }

  async findById(id) {
    return prisma.status.findUnique({
      where: { id },
    });
  }

  async delete(id) {
    return prisma.status.delete({
      where: { id },
    });
  }
}

module.exports = new StatusRepository();
