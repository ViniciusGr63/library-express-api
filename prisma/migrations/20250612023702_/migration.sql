/*
  Warnings:

  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Livro" DROP CONSTRAINT "Livro_categoriaId_fkey";

-- DropTable
DROP TABLE "Categoria";

-- CreateTable
CREATE TABLE "Categorias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emprestimos" (
    "id" BIGSERIAL NOT NULL,
    "data_devolucao" DATE,
    "data_emprestimo" DATE,
    "livro_id" INTEGER,
    "usuario_id" BIGINT,

    CONSTRAINT "emprestimos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" BIGSERIAL NOT NULL,
    "email" VARCHAR(255),
    "nome" VARCHAR(255),
    "senha" VARCHAR(255),

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Livro" ADD CONSTRAINT "Livro_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emprestimos" ADD CONSTRAINT "fkljc60fwmihjgdsn2ee23yka0k" FOREIGN KEY ("livro_id") REFERENCES "Livro"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "emprestimos" ADD CONSTRAINT "fknsu63kkykk3m1894dfem3uruu" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
