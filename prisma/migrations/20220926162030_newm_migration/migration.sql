-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "is_Professor" BOOLEAN NOT NULL DEFAULT false,
    "student_scoreId" TEXT,
    "classroomsId" TEXT,
    "student_answersId" TEXT,
    CONSTRAINT "Users_student_scoreId_fkey" FOREIGN KEY ("student_scoreId") REFERENCES "Student_score" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Users_classroomsId_fkey" FOREIGN KEY ("classroomsId") REFERENCES "Classrooms" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Users" ("classroomsId", "email", "id", "is_Professor", "name", "password", "student_answersId", "student_scoreId") SELECT "classroomsId", "email", "id", "is_Professor", "name", "password", "student_answersId", "student_scoreId" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
