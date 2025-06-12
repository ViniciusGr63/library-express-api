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

class UsuarioRepository {
  async create(data) {
    const usuario = await prisma.usuarios.create({
      data: {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
      }
    });
    return convertBigIntToString(usuario);
  }

  async findAll() {
    const usuarios = await prisma.usuarios.findMany();
    return convertBigIntToString(usuarios);
  }

  async findById(id) {
    const usuario = await prisma.usuarios.findUnique({
      where: { id }
    });
    return convertBigIntToString(usuario);
  }

  async update(id, data) {
    const updateData = {};
    if (data.nome !== undefined) updateData.nome = data.nome;
    if (data.email !== undefined) updateData.email = data.email;
    if (data.senha !== undefined) updateData.senha = data.senha;

    const usuario = await prisma.usuarios.update({
      where: { id },
      data: updateData,
    });
    return convertBigIntToString(usuario);
  }

  async delete(id) {
    const usuario = await prisma.usuarios.delete({
      where: { id }
    });
    return convertBigIntToString(usuario);
  }
}

module.exports = new UsuarioRepository();
