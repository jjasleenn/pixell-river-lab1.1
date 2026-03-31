import { Request, Response } from "express";
import { employeeRepository } from "../repositories/employeeRepository";

export const getDepartments = async (req: Request, res: Response) => {
  try {
    const data = await employeeRepository.getDepartments();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching departments" });
  }
};

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, departmentId } = req.body;

    // validation
    if (!firstName || firstName.length < 3) {
      return res.status(400).json({ message: "First name must be at least 3 characters" });
    }

    if (!departmentId) {
      return res.status(400).json({ message: "Department ID is required" });
    }

    const result = await employeeRepository.createEmployee(
      firstName,
      lastName,
      departmentId
    );

    if (!result) {
      return res.status(400).json({ message: "Invalid department" });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error creating employee" });
  }
};