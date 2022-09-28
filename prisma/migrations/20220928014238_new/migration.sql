/*
  Warnings:

  - You are about to drop the `_Student_answersToUsers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `usersId` to the `Student_answers` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_Student_answersToUsers_B_index";

-- DropIndex
DROP INDEX "_Student_answersToUsers_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_Student_answersToUsers";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Student_answers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "asksId" TEXT NOT NULL,
    "usersId" TEXT NOT NULL,
    CONSTRAINT "Student_answers_asksId_fkey" FOREIGN KEY ("asksId") REFERENCES "Asks" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Student_answers_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Student_answers" ("asksId", "id", "title") SELECT "asksId", "id", "title" FROM "Student_answers";
DROP TABLE "Student_answers";
ALTER TABLE "new_Student_answers" RENAME TO "Student_answers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
