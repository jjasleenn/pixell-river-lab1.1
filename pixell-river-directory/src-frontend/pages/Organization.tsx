import { useState } from "react";
import { organization } from "../Data/organization";
import { organizationRepo } from "../repositories/organizationRepo";
import AddRoleForm from "../components/AddRoleForm";

function Organization() {

  const [setRoles] = useState(
    organizationRepo.getRoles()
  );

  return (
    <div>
      <h2>Organization</h2>

      {organization.map((person, index) => (
        <div key={index}>
          <span>
            {person.firstName} {person.lastName}
          </span>
          {" - "}
          <span>{person.role}</span>
          <AddRoleForm setRoles={setRoles} />

        </div>
      ))}
    </div>
  );
}

export default Organization;
