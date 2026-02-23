import { useFormInput } from "../hooks/useFormInput";
import { employeeService } from "../services/employeeService";

function EmployeeForm({ setDepartments }: any) {

  const firstName = useFormInput("");
  const department = useFormInput("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const result = employeeService.createEmployee(
      firstName.value,
      department.value
    );

    if (!result.success) {
      firstName.validate(() => result.message);
      return;
    }

    setDepartments(result.data);
    firstName.setValue("");
    department.setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>

      {firstName.error && <p>{firstName.error}</p>}

      <input
        type="text"
        value={firstName.value}
        onChange={firstName.onChange}
      />

      <select
        value={department.value}
        onChange={department.onChange}
      >
        <option value="">Select Department</option>
      </select>

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;