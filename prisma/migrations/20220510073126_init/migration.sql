/*
  Warnings:

  - A unique constraint covering the columns `[idSubject]` on the table `SubjectOnTeachers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `SubjectOnTeachers_idSubject_key` ON `SubjectOnTeachers`(`idSubject`);
