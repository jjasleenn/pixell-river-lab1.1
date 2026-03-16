import { organization as initialOrganization } from "../Data/organization";

let organization = [...initialOrganization];

export const organizationRepo = {

  getRoles() {
    return organization;
  },

  createPerson(firstName: string, lastName: string, role: string) {

    const roleExists = organization.some(
      r => r.role === role && r.firstName && r.lastName
    );

    if (roleExists) {
      return null; // role already occupied
    }

    organization = organization.map(r =>
      r.role === role
        ? { ...r, firstName, lastName }
        : r
    );

    return organization;
  }
};