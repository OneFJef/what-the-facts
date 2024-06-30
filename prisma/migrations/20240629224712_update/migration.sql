/*
  Warnings:

  - You are about to drop the column `content` on the `Facts` table. All the data in the column will be lost.
  - You are about to drop the `Widget` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fact` to the `Facts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Facts" DROP COLUMN "content";
ALTER TABLE "Facts" ADD COLUMN     "fact" STRING NOT NULL;

-- DropTable
DROP TABLE "Widget";
