import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const checkIn = async (req: Request, res: Response) => {
  const { userId, groupId, timestamp, method, photo, location } = req.body;
  try {
    const checkIn = await prisma.checkIn.create({
      data: { userId, groupId, timestamp: new Date(timestamp), method, photo, location },
    });
    res.status(201).json(checkIn);
  } catch {
    res.status(400).json({ error: 'Check-in failed' });
  }
};

export const getDailyLeaderboard = async (req: Request, res: Response) => {
  const groupId = Number(req.params.groupId);
  const date = new Date(); // Default: today
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  const end = new Date(date);
  end.setHours(23, 59, 59, 999);

  const checkIns = await prisma.checkIn.findMany({
    where: {
      groupId,
      timestamp: { gte: start, lte: end }
    },
    include: { user: true }
  });

  // Sort by timestamp, earliest first
  const leaderboard = checkIns.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  res.json(leaderboard);
};

export const getCheckIns = async (req: Request, res: Response) => {
  const groupId = Number(req.params.groupId);
  const checkIns = await prisma.checkIn.findMany({ where: { groupId }, include: { user: true } });
  res.json(checkIns);
};