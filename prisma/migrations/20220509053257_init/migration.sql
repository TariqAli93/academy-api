-- CreateTable
CREATE TABLE `Invoice` (
    `invoiceId` INTEGER NOT NULL AUTO_INCREMENT,
    `discount` DECIMAL(10, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`invoiceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InvoiceInfo` (
    `invoiceInfoId` INTEGER NOT NULL AUTO_INCREMENT,
    `priceAmount` DECIMAL(10, 2) NOT NULL,
    `priceRemaining` DECIMAL(10, 2) NOT NULL,
    `idInvoice` INTEGER NOT NULL,
    `idSubject` INTEGER NOT NULL,

    PRIMARY KEY (`invoiceInfoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InvoiceInfo` ADD CONSTRAINT `InvoiceInfo_idSubject_fkey` FOREIGN KEY (`idSubject`) REFERENCES `Subjects`(`subjectId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InvoiceInfo` ADD CONSTRAINT `InvoiceInfo_idInvoice_fkey` FOREIGN KEY (`idInvoice`) REFERENCES `Invoice`(`invoiceId`) ON DELETE RESTRICT ON UPDATE CASCADE;
