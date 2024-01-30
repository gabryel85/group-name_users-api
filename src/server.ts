// server.ts
import express from 'express';
import cors from 'cors';
import { colorRouter } from './routers/color.router';
import { userRouter } from './routers/user.router';

const PORT = 3005;
const app = express();

app.use(cors());

app.use('/users', userRouter);
app.use('/colors', colorRouter);

app.listen(PORT, () => {
	console.log(`API is ready on http://localhost:${PORT} 🚀🚀🚀`);
});
