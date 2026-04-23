import { SignedIn, SignedOut, SignInButton, useAuth } from "@clerk/clerk-react";
import { useFormInput } from "../hooks/useFormInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function AddEmployeeForm({ departments }: any) {
  const firstName = useFormInput("");
  const department = useFormInput("");

  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();

      if (!token) throw new Error("No auth token"); 

      const res = await fetch("http://localhost:3000/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: firstName.value,
          lastName: "",
          departmentId: Number(department.value),
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to create employee");
      }

      return res.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["organization"] });

      firstName.setValue("");
      department.setValue("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <>
      <SignedOut>
        <p>You must login to add employees</p>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <form onSubmit={handleSubmit}>
          {mutation.isError && (
            <p style={{ color: "red" }}>
              {(mutation.error as Error).message}
            </p>
          )}

          <input
            type="text"
            placeholder="First Name"
            value={firstName.value}
            onChange={firstName.onChange}
          />

          <select value={department.value} onChange={department.onChange}>
            <option value="">Select Department</option>
            {departments.map((dept: any) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>

          <button type="submit">
            {mutation.isPending ? "Adding..." : "Add Employee"}
          </button>
        </form>
      </SignedIn>
    </>
  );
}

export default AddEmployeeForm;