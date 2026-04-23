import { useQuery } from "@tanstack/react-query";
import AddEmployeeForm from "../components/AddEmployeeForm";

const fetchDepartments = async () => {
  const res = await fetch("http://localhost:3000/employees");

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

function Employees() {
  const { data = [], isLoading, error } = useQuery({
    queryKey: ["organization"],
    queryFn: fetchDepartments,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading employees</p>;

  return (
    <>
      {data.map((dept: any) => (
        <div key={dept.id}>
          <h2>{dept.name}</h2>
        </div>
      ))}

      <AddEmployeeForm departments={data} />
    </>
  );
}

export default Employees;