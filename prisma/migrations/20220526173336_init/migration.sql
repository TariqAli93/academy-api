/*
  Warnings:

  - You are about to drop the column `priceAmount` on the `invoiceinfo` table. All the data in the column will be lost.
  - You are about to drop the column `priceRemaining` on the `invoiceinfo` table. All the data in the column will be lost.
  - Added the required column `priceAmount` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceRemaining` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `invoice` ADD COLUMN `priceAmount` DECIMAL(10, 2) NOT NULL,
    ADD COLUMN `priceRemaining` DECIMAL(10, 2) NOT NULL;

-- AlterTable
ALTER TABLE `invoiceinfo` DROP COLUMN `priceAmount`,
    DROP COLUMN `priceRemaining`;
