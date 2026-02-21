import Department from "../components/Department";
import EmployeeForm from "../components/AddEmployeeForm";

function Employees({ departments, addEmployee }: any) {
  return (
    <>
      {departments.map((dept: any) => (
        <Department key={dept.name} department={dept} />
      ))}

      <EmployeeForm
        departments={departments}
        onAddEmployee={addEmployee}
      />
    </>
  );
}

export default Employees;
