/*
  Warnings:

  - You are about to drop the column `student_scoreId` on the `Asks` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `Asks` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_AsksToUsers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AsksToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Asks" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AsksToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AsksToStudent_score" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AsksToStudent_score_A_fkey" FOREIGN KEY ("A") REFERENCES "Asks" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AsksToStudent_score_B_fkey" FOREIGN KEY ("B") REFERENCES "Student_score" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Asks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "topicsId" TEXT,
    CONSTRAINT "Asks_topicsId_fkey" FOREIGN KEY ("topicsId") REFERENCES "Topics" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Asks" ("id", "title", "topicsId") SELECT "id", "title", "topicsId" FROM "Asks";
DROP TABLE "Asks";
ALTER TABLE "new_Asks" RENAME TO "Asks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_AsksToUsers_AB_unique" ON "_AsksToUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_AsksToUsers_B_index" ON "_AsksToUsers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AsksToStudent_score_AB_unique" ON "_AsksToStudent_score"("A", "B");

-- CreateIndex
CREATE INDEX "_AsksToStudent_score_B_index" ON "_AsksToStudent_score"("B");
