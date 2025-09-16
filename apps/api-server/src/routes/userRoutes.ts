import { Router } from 'express';
import { register, login, profile } from '../controllers/userController';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile/:id', profile);

export default router;