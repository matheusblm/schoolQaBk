/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "is_Professor" BOOLEAN NOT NULL,
    "student_scoreId" TEXT NOT NULL,
    "classroomsId" TEXT NOT NULL,
    "student_answersId" TEXT NOT NULL,
    CONSTRAINT "Users_student_scoreId_fkey" FOREIGN KEY ("student_scoreId") REFERENCES "Student_score" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Users_classroomsId_fkey" FOREIGN KEY ("classroomsId") REFERENCES "Classrooms" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Users_student_answersId_fkey" FOREIGN KEY ("student_answersId") REFERENCES "Student_answers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Classrooms" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Topics" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "classroomsId" TEXT,
    CONSTRAINT "Topics_classroomsId_fkey" FOREIGN KEY ("classroomsId") REFERENCES "Classrooms" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Student_score" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "score" REAL NOT NULL,
    "topicsId" TEXT,
    CONSTRAINT "Student_score_topicsId_fkey" FOREIGN KEY ("topicsId") REFERENCES "Topics" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Asks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "usersId" TEXT,
    "topicsId" TEXT,
    "student_scoreId" TEXT,
    CONSTRAINT "Asks_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Asks_topicsId_fkey" FOREIGN KEY ("topicsId") REFERENCES "Topics" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Asks_student_scoreId_fkey" FOREIGN KEY ("student_scoreId") REFERENCES "Student_score" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Answers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "is_correct" BOOLEAN NOT NULL,
    "asksId" TEXT NOT NULL,
    CONSTRAINT "Answers_asksId_fkey" FOREIGN KEY ("asksId") REFERENCES "Asks" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Student_answers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "asksId" TEXT NOT NULL,
    CONSTRAINT "Student_answers_asksId_fkey" FOREIGN KEY ("asksId") REFERENCES "Asks" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
