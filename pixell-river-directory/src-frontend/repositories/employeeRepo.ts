import { departments as initialDepartments } from "../Data/Employees";

let departments = [...initialDepartments];

export const employeeRepo = {

  getDepartments() {
    return departments;
  },

  createEmployee(firstName: string, departmentName: string) {

    departments = departments.map(dept =>
      dept.name === departmentName
        ? {
            ...dept,
            employees: [...dept.employees, { firstName }]
          }
        : dept
    );

    return departments;
  }
};