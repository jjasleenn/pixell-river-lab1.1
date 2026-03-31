import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const hr = await prisma.department.create({
    data: { name: "HR" }
  });

  const it = await prisma.department.create({
    data: { name: "IT" }
  });

  await prisma.employee.createMany({
    data: [
      { firstName: "John", lastName: "Doe", departmentId: hr.id },
      { firstName: "Jane", lastName: "Smith", departmentId: hr.id },
      { firstName: "Mike", lastName: "Brown", departmentId: it.id }
    ]
  });

  await prisma.role.createMany({
    data: [
      { role: "CEO", firstName: "Jo-Anne", lastName: "Sinclair" },
      { role: "CIO", firstName: "Josee", lastName: "Benjamin" }
    ]
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });