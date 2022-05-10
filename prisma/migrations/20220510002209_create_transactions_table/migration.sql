-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "type" TEXT NOT NULL
);
