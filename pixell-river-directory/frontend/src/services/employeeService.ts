import { employeeRepo } from "../repositories/employeeRepo";

export const employeeService = {

  async createEmployee(firstName: string, departmentName: string) {

    if (firstName.trim().length < 3) {
      return {
        success: false,
        message: "First name must be at least 3 characters.",
        data: null
      };
    }

    const departments = await employeeRepo.getDepartments();

    const exists = departments.some(
      (dept: any) => dept.name === departmentName
    );

    if (!exists) {
      return {
        success: false,
        message: "Department does not exist.",
        data: null
      };
    }
    
    const updatedDepartments =
      await employeeRepo.createEmployee(firstName, departmentName);

    return {
      success: true,
      message: "",
      data: updatedDepartments
    };
  }    
};