import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createGroup = async (req: Request, res: Response) => {
  const { name, donationAmt, duration, adminId } = req.body;
  try {
    const group = await prisma.group.create({
      data: { name, donationAmt, duration, adminId },
    });
    res.status(201).json(group);
  } catch {
    res.status(400).json({ error: 'Group creation failed' });
  }
};

export const joinGroup = async (req: Request, res: Response) => {
  const { groupId, userId } = req.body;
  try {
    await prisma.group.update({
      where: { id: groupId },
      data: { users: { connect: { id: userId } } },
    });
    res.json({ success: true });
  } catch {
    res.status(400).json({ error: 'Could not join group' });
  }
};

export const listGroups = async (_req: Request, res: Response) => {
  const groups = await prisma.group.findMany();
  res.json(groups);
};