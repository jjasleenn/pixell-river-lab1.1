import { useFormInput } from "../hooks/useFormInput";
import { employeeService } from "../services/employeeService";

interface Department {
  name: string;
}

interface EmployeeFormProps {
  departments: Department[];
  setDepartments: (departments: Department[]) => void;
}

function EmployeeForm({ departments, setDepartments }: EmployeeFormProps) {
  const firstName = useFormInput("");
  const department = useFormInput("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await employeeService.createEmployee(
      firstName.value,
      department.value
    );

    if (!result.success) {
      firstName.validate(() => result.message);
      return;
    }

    setDepartments(result.data || []);
    firstName.setValue("");
    department.setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {firstName.error && <p style={{ color: "red" }}>{firstName.error}</p>}

      <input
        type="text"
        placeholder="First Name"
        value={firstName.value}
        onChange={firstName.onChange}
      />

      <select
        value={department.value}
        onChange={department.onChange}
      >
        <option value="">Select Department</option>
        {departments.map((dept) => (
          <option key={dept.name} value={dept.name}>
            {dept.name}
          </option>
        ))}
      </select>

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;