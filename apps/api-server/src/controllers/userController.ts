import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const register = async (req: Request, res: Response) => {
  const { name, email, password, timezone } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email, password, timezone },
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'User registration failed' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  // Simplified login: Replace with real authentication logic
  const user = await prisma.user.findUnique({ where: { email } });
  if (user && user.password === password) {
    res.json(user);
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

export const profile = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await prisma.user.findUnique({ where: { id } });
  res.json(user);
};