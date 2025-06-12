const prisma = require('../../prisma/PrismaClient');

function convertBigIntToString(obj) {
  if (Array.isArray(obj)) {
    return obj.map(convertBigIntToString);
  } else if (obj && typeof obj === 'object') {
    const newObj = {};
    for (const key in obj) {
      if (typeof obj[key] === 'bigint') {
        newObj[key] = obj[key].toString();
      } else {
        newObj[key] = convertBigIntToString(obj[key]);
      }
    }
    return newObj;
  }
  return obj;
}

class EmprestimoRepository {
  async create(data) {
    const emprestimo = await prisma.emprestimos.create({
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
    return convertBigIntToString(emprestimo);
  }

  async findAll() {
    const emprestimos = await prisma.emprestimos.findMany({
      include: {
        livros: true,
        usuarios: true,
      },
    });
    return convertBigIntToString(emprestimos);
  }

  async findById(id) {
    const emprestimo = await prisma.emprestimos.findUnique({
      where: { id },
      include: {
        livros: true,
        usuarios: true,
      },
    });
    return convertBigIntToString(emprestimo);
  }

  async update(id, data) {
    const emprestimo = await prisma.emprestimos.update({
      where: { id },
      data,
      include: {
        livros: true,
        usuarios: true,
      },
    });
    return convertBigIntToString(emprestimo);
  }

  async delete(id) {
    const emprestimo = await prisma.emprestimos.delete({
      where: { id },
    });
    return convertBigIntToString(emprestimo);
  }
}

module.exports = new EmprestimoRepository();
