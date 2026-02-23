import Department from "../components/Department";
import AddEmployeeForm from "../components/AddEmployeeForm";

function Employees({ departments, setDepartments }: any) {

  return (
    <>
      {departments.map((dept: any) => (
        <Department key={dept.name} department={dept} />
      ))}

      <AddEmployeeForm
        departments={departments}
        setDepartments={setDepartments}
      />
    </>
  );
}

export default Employees;