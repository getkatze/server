/*
  Warnings:

  - You are about to drop the column `user` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Campaign" ADD COLUMN     "prizeAmountDeposited" TEXT NOT NULL DEFAULT E'null';

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "user",
ADD COLUMN     "category" TEXT;
