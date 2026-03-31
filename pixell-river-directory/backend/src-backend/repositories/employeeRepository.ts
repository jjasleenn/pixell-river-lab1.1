import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const employeeRepository = {

  async getDepartments() {
    return await prisma.department.findMany({
      include: {
        employees: true
      }
    });
  },

  async createEmployee(
    firstName: string,
    lastName: string,
    departmentId: number
  ) {

    // check if department exists
    const dept = await prisma.department.findUnique({
      where: { id: departmentId }
    });

    if (!dept) return null;

    return await prisma.employee.create({
      data: {
        firstName,
        lastName,
        departmentId
      }
    });
  }
};