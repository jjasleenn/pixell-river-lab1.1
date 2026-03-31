import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const roleRepository = {

  async getRoles() {
    return await prisma.role.findMany();
  },

  async createRole(firstName: string, lastName: string, role: string) {

    const exists = await prisma.role.findUnique({
      where: { role }
    });

    if (exists && exists.firstName) return null;

    return await prisma.role.update({
      where: { role },
      data: { firstName, lastName }
    });
  }
};