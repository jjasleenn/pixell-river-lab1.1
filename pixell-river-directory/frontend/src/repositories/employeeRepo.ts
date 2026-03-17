const API_URL = "http://localhost:5000";

export const employeeRepo = {

  async getDepartments() {

    const response = await fetch("http://localhost:5000/employees");
    return await response.json();
  },

  async createEmployee(firstName: string, department: string) {

    const response = await fetch(`${API_URL}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        department
      })
    });

    if (!response.ok) {
      throw new Error("Failed to create employee");
    }

    return response.json();
  }

};