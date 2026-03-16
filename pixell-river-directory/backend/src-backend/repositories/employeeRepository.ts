import { departments } from "../data/employees";

export const employeeRepository = {

  getDepartments() {
    return departments;
  },

  createEmployee(firstName: string, department: string) {

    const dept = departments.find(d => d.name === department);

    if (!dept) return null;

    dept.employees.push({ firstName });

    return departments;
  }
};