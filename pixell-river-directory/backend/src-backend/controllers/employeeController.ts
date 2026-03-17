import { Request, Response } from "express";

export const getDepartments = (req: Request, res: Response) => {
  res.json([
    {
      name: "HR",
      employees: [
        { firstName: "John", lastName: "Doe" },
        { firstName: "Jane", lastName: "Smith" }
      ]
    },
    {
      name: "IT",
      employees: [
        { firstName: "Mike", lastName: "Brown" }
      ]
    }
  ]);
};

export const createEmployee = (req: Request, res: Response) => {
  res.json({ message: "Employee created" });
};