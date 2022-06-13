/*
  Warnings:

  - You are about to alter the column `role` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Enum("users_role")` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `role` VARCHAR(255) NOT NULL DEFAULT 'USER';
