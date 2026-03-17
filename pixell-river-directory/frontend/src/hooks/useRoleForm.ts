import { useState } from "react";
import { organizationService } from "../services/organizationService";

export function useRoleForm(setRoles: any) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const result = organizationService.createPerson(firstName, lastName, role);

    if (!result.success) {
      setError(result.message || "");
      return;
    }

    setRoles(result.data);
    setFirstName("");
    setLastName("");
    setRole("");
    setError("");
  };

  return {
    firstName,
    lastName,
    role,
    error,
    setFirstName,
    setLastName,
    setRole,
    handleSubmit
  };
}