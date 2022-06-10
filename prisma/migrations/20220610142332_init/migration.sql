-- CreateTable
CREATE TABLE `Users` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `userName` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_userName_key`(`userName`),
    UNIQUE INDEX `Users_phone_key`(`phone`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Students` (
    `studentId` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `parentPhone` VARCHAR(255) NOT NULL,
    `idGrade` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `createdBy` INTEGER NOT NULL,

    UNIQUE INDEX `Students_firstName_key`(`firstName`),
    UNIQUE INDEX `Students_lastName_key`(`lastName`),
    UNIQUE INDEX `Students_phone_key`(`phone`),
    UNIQUE INDEX `Students_parentPhone_key`(`parentPhone`),
    PRIMARY KEY (`studentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Courses` (
    `courseId` INTEGER NOT NULL AUTO_INCREMENT,
    `courseName` VARCHAR(255) NOT NULL,
    `coursePrice` DECIMAL(10, 2) NOT NULL,
    `startAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `endAt` DATETIME(3) NOT NULL,
    `isFinished` BOOLEAN NOT NULL DEFAULT false,
    `discount` INTEGER NOT NULL DEFAULT 0,
    `percentage` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `createdBy` INTEGER NOT NULL,

    PRIMARY KEY (`courseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StudentCourses` (
    `studentCourseId` INTEGER NOT NULL AUTO_INCREMENT,
    `idStudent` INTEGER NOT NULL,
    `idCourse` INTEGER NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` INTEGER NOT NULL,

    PRIMARY KEY (`studentCourseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubjectCourse` (
    `subjectCourseId` INTEGER NOT NULL AUTO_INCREMENT,
    `idSubject` INTEGER NOT NULL,
    `idCourse` INTEGER NOT NULL,
    `idTeacher` INTEGER NOT NULL,
    `idHall` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`subjectCourseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teachers` (
    `teacherId` INTEGER NOT NULL AUTO_INCREMENT,
    `teacherName` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `specialization` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `createdBy` INTEGER NOT NULL,

    UNIQUE INDEX `Teachers_teacherName_key`(`teacherName`),
    UNIQUE INDEX `Teachers_phone_key`(`phone`),
    PRIMARY KEY (`teacherId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subjects` (
    `subjectId` INTEGER NOT NULL AUTO_INCREMENT,
    `subjectName` VARCHAR(255) NOT NULL,
    `idGrade` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `createdBy` INTEGER NOT NULL,

    UNIQUE INDEX `Subjects_subjectName_key`(`subjectName`),
    PRIMARY KEY (`subjectId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Grades` (
    `gradeId` INTEGER NOT NULL AUTO_INCREMENT,
    `gradeName` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `createdBy` INTEGER NOT NULL,

    UNIQUE INDEX `Grades_gradeName_key`(`gradeName`),
    PRIMARY KEY (`gradeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Halls` (
    `hallId` INTEGER NOT NULL AUTO_INCREMENT,
    `hallName` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `createdBy` INTEGER NOT NULL,

    UNIQUE INDEX `Halls_hallName_key`(`hallName`),
    PRIMARY KEY (`hallId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Invoice` (
    `invoiceId` INTEGER NOT NULL AUTO_INCREMENT,
    `idStudent` INTEGER NOT NULL,
    `installment` INTEGER NOT NULL DEFAULT 1,
    `createdBy` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `remaining` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`invoiceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InvoiceInfo` (
    `invoiceInfoId` INTEGER NOT NULL AUTO_INCREMENT,
    `idInvoice` INTEGER NOT NULL,
    `idCourse` INTEGER NOT NULL,

    PRIMARY KEY (`invoiceInfoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Settings` (
    `appName` VARCHAR(255) NOT NULL,
    `appVersion` VARCHAR(255) NOT NULL,
    `isFirstRun` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Settings_appName_key`(`appName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `Users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_idGrade_fkey` FOREIGN KEY (`idGrade`) REFERENCES `Grades`(`gradeId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Courses` ADD CONSTRAINT `Courses_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `Users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentCourses` ADD CONSTRAINT `StudentCourses_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `Users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentCourses` ADD CONSTRAINT `StudentCourses_idStudent_fkey` FOREIGN KEY (`idStudent`) REFERENCES `Students`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentCourses` ADD CONSTRAINT `StudentCourses_idCourse_fkey` FOREIGN KEY (`idCourse`) REFERENCES `Courses`(`courseId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubjectCourse` ADD CONSTRAINT `SubjectCourse_idCourse_fkey` FOREIGN KEY (`idCourse`) REFERENCES `Courses`(`courseId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubjectCourse` ADD CONSTRAINT `SubjectCourse_idTeacher_fkey` FOREIGN KEY (`idTeacher`) REFERENCES `Teachers`(`teacherId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubjectCourse` ADD CONSTRAINT `SubjectCourse_idSubject_fkey` FOREIGN KEY (`idSubject`) REFERENCES `Subjects`(`subjectId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubjectCourse` ADD CONSTRAINT `SubjectCourse_idHall_fkey` FOREIGN KEY (`idHall`) REFERENCES `Halls`(`hallId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Teachers` ADD CONSTRAINT `Teachers_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `Users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subjects` ADD CONSTRAINT `Subjects_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `Users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subjects` ADD CONSTRAINT `Subjects_idGrade_fkey` FOREIGN KEY (`idGrade`) REFERENCES `Grades`(`gradeId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Grades` ADD CONSTRAINT `Grades_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `Users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Halls` ADD CONSTRAINT `Halls_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `Users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `Users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_idStudent_fkey` FOREIGN KEY (`idStudent`) REFERENCES `Students`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InvoiceInfo` ADD CONSTRAINT `InvoiceInfo_idCourse_fkey` FOREIGN KEY (`idCourse`) REFERENCES `Courses`(`courseId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InvoiceInfo` ADD CONSTRAINT `InvoiceInfo_idInvoice_fkey` FOREIGN KEY (`idInvoice`) REFERENCES `Invoice`(`invoiceId`) ON DELETE RESTRICT ON UPDATE CASCADE;
