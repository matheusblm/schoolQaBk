/*
  Warnings:

  - Made the column `name` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "_Student_answersToUsers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Student_answersToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Student_answers" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Student_answersToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "is_Professor" BOOLEAN NOT NULL DEFAULT false,
    "student_scoreId" TEXT NOT NULL,
    "classroomsId" TEXT NOT NULL,
    "student_answersId" TEXT NOT NULL,
    CONSTRAINT "Users_student_scoreId_fkey" FOREIGN KEY ("student_scoreId") REFERENCES "Student_score" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Users_classroomsId_fkey" FOREIGN KEY ("classroomsId") REFERENCES "Classrooms" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Users" ("classroomsId", "email", "id", "is_Professor", "name", "password", "student_answersId", "student_scoreId") SELECT "classroomsId", "email", "id", "is_Professor", "name", "password", "student_answersId", "student_scoreId" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_Student_answersToUsers_AB_unique" ON "_Student_answersToUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_Student_answersToUsers_B_index" ON "_Student_answersToUsers"("B");
