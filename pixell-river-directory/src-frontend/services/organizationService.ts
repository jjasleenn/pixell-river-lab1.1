import { organizationRepo } from "../repositories/organizationRepo";

export const organizationService = {

  createPerson(firstName: string, lastName: string, role: string) {

    if (firstName.trim().length < 3) {
      return { success: false, message: "First name must be at least 3 characters." };
    }

    const updated = organizationRepo.createPerson(firstName, lastName, role);

    if (!updated) {
      return { success: false, message: "Role is already occupied." };
    }

    return { success: true, data: updated };
  }
};