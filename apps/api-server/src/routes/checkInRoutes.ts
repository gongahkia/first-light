import { Router } from 'express';
import { checkIn, getDailyLeaderboard, getCheckIns } from '../controllers/checkInController';

const router = Router();

router.post('/', checkIn);
router.get('/leaderboard/:groupId', getDailyLeaderboard);
router.get('/:groupId', getCheckIns);

export default router;