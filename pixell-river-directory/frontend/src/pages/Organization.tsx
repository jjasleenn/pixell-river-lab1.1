import { useEffect, useState } from "react";
import { employeeRepo } from "../repositories/employeeRepo";

function Organization() {
  const [departments, setDepartments] = useState<any[]>([]);

  useEffect(() => {
    employeeRepo.getDepartments()
      .then((data) => {
        console.log("ORG DATA:", data);
        setDepartments(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Departments</h1>

      {Array.isArray(departments) && departments.length > 0 ? (
        departments.map((dept, index) => (
          <div key={index}>
            <h2>{dept.name}</h2>

            {dept.employees?.map((emp: any, i: number) => (
              <p key={i}>{emp.firstName}</p>
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