/*
  Warnings:

  - You are about to drop the column `topicsId` on the `Student_score` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_Student_scoreToTopics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Student_scoreToTopics_A_fkey" FOREIGN KEY ("A") REFERENCES "Student_score" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Student_scoreToTopics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topics" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Student_score" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "score" REAL NOT NULL
);
INSERT INTO "new_Student_score" ("id", "score") SELECT "id", "score" FROM "Student_score";
DROP TABLE "Student_score";
ALTER TABLE "new_Student_score" RENAME TO "Student_score";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_Student_scoreToTopics_AB_unique" ON "_Student_scoreToTopics"("A", "B");

-- CreateIndex
CREATE INDEX "_Student_scoreToTopics_B_index" ON "_Student_scoreToTopics"("B");
