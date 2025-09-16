import express from 'express';
import cors from 'cors';
import { PORT } from './config/config';
import userRoutes from './routes/userRoutes';
import groupRoutes from './routes/groupRoutes';
import checkInRoutes from './routes/checkInRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/checkins', checkInRoutes);

app.get('/api/health', (_req, res) => res.send({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});