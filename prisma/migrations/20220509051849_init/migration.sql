-- CreateTable
CREATE TABLE `Users` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `userName` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `roleId` INTEGER NOT NULL,

    UNIQUE INDEX `Users_userName_key`(`userName`),
    UNIQUE INDEX `Users_phone_key`(`phone`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Roles` (
    `roleId` INTEGER NOT NULL AUTO_INCREMENT,
    `roleName` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Roles_roleName_key`(`roleName`),
    PRIMARY KEY (`roleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Students` (
    `studentId` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `parentPhone` VARCHAR(255) NOT NULL,
    `idGrade` INTEGER NOT NULL,

    UNIQUE INDEX `Students_firstName_key`(`firstName`),
    UNIQUE INDEX `Students_lastName_key`(`lastName`),
    UNIQUE INDEX `Students_phone_key`(`phone`),
    UNIQUE INDEX `Students_parentPhone_key`(`parentPhone`),
    PRIMARY KEY (`studentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Grades` (
    `gradeId` INTEGER NOT NULL AUTO_INCREMENT,
    `gradeName` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Grades_gradeName_key`(`gradeName`),
    PRIMARY KEY (`gradeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subjects` (
    `subjectId` INTEGER NOT NULL AUTO_INCREMENT,
    `subjectName` VARCHAR(255) NOT NULL,
    `subjectPrice` DECIMAL(10, 2) NOT NULL,
    `idStudent` INTEGER NOT NULL,
    `idGrade` INTEGER NOT NULL,

    UNIQUE INDEX `Subjects_subjectName_key`(`subjectName`),
    PRIMARY KEY (`subjectId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Roles`(`roleId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_idGrade_fkey` FOREIGN KEY (`idGrade`) REFERENCES `Grades`(`gradeId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subjects` ADD CONSTRAINT `Subjects_idStudent_fkey` FOREIGN KEY (`idStudent`) REFERENCES `Students`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subjects` ADD CONSTRAINT `Subjects_idGrade_fkey` FOREIGN KEY (`idGrade`) REFERENCES `Grades`(`gradeId`) ON DELETE RESTRICT ON UPDATE CASCADE;
