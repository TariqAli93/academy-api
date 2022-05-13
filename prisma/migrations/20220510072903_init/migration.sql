/*
  Warnings:

  - A unique constraint covering the columns `[idTeacher]` on the table `SubjectOnTeachers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `SubjectOnTeachers_idTeacher_key` ON `SubjectOnTeachers`(`idTeacher`);
