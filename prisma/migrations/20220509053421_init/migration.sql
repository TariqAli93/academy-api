/*
  Warnings:

  - Added the required column `idStudent` to the `InvoiceInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `invoiceinfo` ADD COLUMN `idStudent` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `InvoiceInfo` ADD CONSTRAINT `InvoiceInfo_idStudent_fkey` FOREIGN KEY (`idStudent`) REFERENCES `Students`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;
