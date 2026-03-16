import { employeeRepository } from "../repositories/employeeRepository";

export const employeeService = {

  getDepartments() {
    return employeeRepository.getDepartments();
  },

  createEmployee(firstName: string, department: string) {

    if (firstName.length < 3) {
      return { success: false, message: "First name must be at least 3 characters" };
    }

    const result = employeeRepository.createEmployee(firstName, department);

    if (!result) {
      return { success: false, message: "Department not found" };
    }

    return { success: true, data: result };
  }
};