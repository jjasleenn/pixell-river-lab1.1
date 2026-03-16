import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const getDepartments = (req: Request, res: Response) => {

  const data = employeeService.getDepartments();

  res.json(data);
};

export const createEmployee = (req: Request, res: Response) => {

  const { firstName, department } = req.body;

  const result = employeeService.createEmployee(firstName, department);

  res.json(result);
};