import { employeeRepo } from "../src/repositories/employeeRepo";

export const employeeService = {

  createEmployee(firstName: string, departmentName: string) {

    if (firstName.trim().length < 3) {
      return {
        success: false,
        message: "First name must be at least 3 characters.",
        data: null
      };
    }

    const departments = employeeRepo.getDepartments();

    const exists = departments.some(
      dept => dept.name === departmentName
    );

    if (!exists) {
      return {
        success: false,
        message: "Department does not exist.",
        data: null
      };
    }

    const updatedDepartments =
      employeeRepo.createEmployee(firstName, departmentName);

    return {
      success: true,
      message: "",
      data: updatedDepartments
    };
  }
};