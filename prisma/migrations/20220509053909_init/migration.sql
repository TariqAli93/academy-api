/*
  Warnings:

  - You are about to drop the column `idStudent` on the `subjects` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `subjects` DROP FOREIGN KEY `Subjects_idStudent_fkey`;

-- AlterTable
ALTER TABLE `subjects` DROP COLUMN `idStudent`;

-- CreateTable
CREATE TABLE `SubjectOnStudents` (
    `subjectOnStudentId` INTEGER NOT NULL AUTO_INCREMENT,
    `idSubject` INTEGER NOT NULL,
    `idStudent` INTEGER NOT NULL,

    PRIMARY KEY (`subjectOnStudentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SubjectOnStudents` ADD CONSTRAINT `SubjectOnStudents_idStudent_fkey` FOREIGN KEY (`idStudent`) REFERENCES `Students`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubjectOnStudents` ADD CONSTRAINT `SubjectOnStudents_idSubject_fkey` FOREIGN KEY (`idSubject`) REFERENCES `Subjects`(`subjectId`) ON DELETE RESTRICT ON UPDATE CASCADE;
