import { useQuery } from "@tanstack/react-query";

const fetchDepartments = async () => {
  const res = await fetch("http://localhost:3000/employees");

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

function Organization() {
  const { data = [], isLoading, error } = useQuery({
    queryKey: ["organization"],
    queryFn: fetchDepartments,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h1>Departments</h1>

      {data.length > 0 ? (
        data.map((dept: any) => (
          <div key={dept.id}>
            <h2>{dept.name}</h2>

            {dept.employees?.map((emp: any) => (
              <p key={emp.id}>{emp.firstName}</p>
            ))}
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Organization;