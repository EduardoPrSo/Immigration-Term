/*
  Warnings:

  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "discord_id" TEXT NOT NULL,
    "accept" BOOLEAN NOT NULL
);
INSERT INTO "new_User" ("accept", "discord_id", "id") SELECT "accept", "discord_id", "id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_discord_id_key" ON "User"("discord_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
