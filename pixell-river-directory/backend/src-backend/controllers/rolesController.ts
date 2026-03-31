import { Request, Response } from "express";
import { roleRepository } from "../repositories/roleRepository";

export const getRoles = async (req: Request, res: Response) => {
  const roles = await roleRepository.getRoles();
  res.json(roles);
};

export const createRole = async (req: Request, res: Response) => {
  const { firstName, lastName, role } = req.body;

  const result = await roleRepository.createRole(firstName, lastName, role);

  if (!result) {
    return res.status(400).json({ message: "Role already occupied" });
  }

  res.json(result);
};