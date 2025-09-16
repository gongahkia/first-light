import { Router } from 'express';
import { createGroup, joinGroup, listGroups } from '../controllers/groupController';

const router = Router();

router.post('/create', createGroup);
router.post('/join', joinGroup);
router.get('/', listGroups);

export default router;