import "dotenv/config";
import { PrismaClient } from "../../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";


const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});


const prisma = new PrismaClient({
  adapter,
});


async function main() {

  await prisma.job.deleteMany();


  await prisma.job.createMany({
    data: [
      {
        title: "Frontend Developer",
        company: "TechFlow",
        location: "London, UK",
        salary: "£45,000 - £60,000",
        jobType: "Full Time",
        remote: true,
        description:
          "React and TypeScript developer building modern web applications.",
        url: "https://example.com/frontend-1",
        source: "Demo",
        postedDate: "2026-07-30",
      },

      {
        title: "Backend Engineer",
        company: "CloudNova",
        location: "Manchester, UK",
        salary: "£55,000 - £70,000",
        jobType: "Full Time",
        remote: false,
        description:
          "Node.js and PostgreSQL backend engineer.",
        url: "https://example.com/backend-1",
        source: "Demo",
        postedDate: "2026-07-30",
      },

      {
        title: "AI Engineer",
        company: "DataMind",
        location: "Remote",
        salary: "£60,000 - £85,000",
        jobType: "Full Time",
        remote: true,
        description:
          "Build machine learning and AI-powered products.",
        url: "https://example.com/ai-1",
        source: "Demo",
        postedDate: "2026-07-30",
      },
    ],
  });


  console.log("Jobs seeded successfully 🚀");
}


main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });