-- CreateTable
CREATE TABLE `Settings` (
    `appName` VARCHAR(255) NOT NULL,
    `appVersion` VARCHAR(255) NOT NULL,
    `isFirstRun` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Settings_appName_key`(`appName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
