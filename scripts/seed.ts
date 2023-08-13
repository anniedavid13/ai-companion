const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Singers" },
        { name: "Movies & TV" },
        { name: "Musicians" },
        { name: "Athletes" },
        { name: "Authors" },
        { name: "Philosophy" },
        { name: "Scientists" },
      ],
    });
  } catch (error) {
    console.log(error);
  } finally {
    await db.$disconnect();
  }
}

main();
