/*
  Warnings:

  - Added the required column `title` to the `Topics` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Topics" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "classroomsId" TEXT,
    CONSTRAINT "Topics_classroomsId_fkey" FOREIGN KEY ("classroomsId") REFERENCES "Classrooms" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Topics" ("classroomsId", "id") SELECT "classroomsId", "id" FROM "Topics";
DROP TABLE "Topics";
ALTER TABLE "new_Topics" RENAME TO "Topics";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
