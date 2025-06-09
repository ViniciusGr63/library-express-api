const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = prisma;

async function testConnection() {
  try {
    await prisma.$connect();
    console.log('Conectado ao banco de dados com sucesso!');
  } catch (error) {
    console.error('Erro na conexão:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();

