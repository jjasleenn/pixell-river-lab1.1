import { useRoleForm } from "../hooks/useRoleForm";

function AddRoleForm({ setRoles }: any) {

  const {
    firstName,
    lastName,
    role,
    error,
    setFirstName,
    setLastName,
    setRole,
    handleSubmit
  } = useRoleForm(setRoles);

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button type="submit">Add Role</button>

      {error && <p>{error}</p>}
    </form>
  );
}

export default AddRoleForm;