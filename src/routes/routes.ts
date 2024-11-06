import express, { Request, Response } from 'express';
import { hubSpotService } from '../services/hubSpotService';

const router = express.Router();

router.get('/gethubspot', async (req: Request, res: Response) => {
  try {
    const data = await hubSpotService();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar dados' });
  }
});

export default router;
