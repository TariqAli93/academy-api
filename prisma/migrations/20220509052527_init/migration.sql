-- CreateTable
CREATE TABLE `Specialization` (
    `specializationId` INTEGER NOT NULL AUTO_INCREMENT,
    `specializationName` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Specialization_specializationName_key`(`specializationName`),
    PRIMARY KEY (`specializationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teachers` (
    `teacherId` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `salary` DECIMAL(10, 2) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `idSpecialization` INTEGER NOT NULL,

    UNIQUE INDEX `Teachers_firstName_key`(`firstName`),
    UNIQUE INDEX `Teachers_lastName_key`(`lastName`),
    UNIQUE INDEX `Teachers_phone_key`(`phone`),
    PRIMARY KEY (`teacherId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubjectOnTeachers` (
    `subjectOnTeachersId` INTEGER NOT NULL AUTO_INCREMENT,
    `idTeacher` INTEGER NOT NULL,
    `idSubject` INTEGER NOT NULL,

    PRIMARY KEY (`subjectOnTeachersId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Teachers` ADD CONSTRAINT `Teachers_idSpecialization_fkey` FOREIGN KEY (`idSpecialization`) REFERENCES `Specialization`(`specializationId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubjectOnTeachers` ADD CONSTRAINT `SubjectOnTeachers_idSubject_fkey` FOREIGN KEY (`idSubject`) REFERENCES `Subjects`(`subjectId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubjectOnTeachers` ADD CONSTRAINT `SubjectOnTeachers_idTeacher_fkey` FOREIGN KEY (`idTeacher`) REFERENCES `Teachers`(`teacherId`) ON DELETE RESTRICT ON UPDATE CASCADE;
