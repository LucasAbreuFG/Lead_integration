import express from 'express';
import router from './routes/routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router);  // Monta o roteador na rota /api

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
