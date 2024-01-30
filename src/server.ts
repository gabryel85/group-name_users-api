// server.ts
import express from 'express';
import cors from 'cors';
import { colorRouter } from './routers/color.router';
import { userRouter } from './routers/user.router';

export const CLIENT_URL = process.env.CLIENT_URL;
export const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.use('/users', userRouter);
app.use('/colors', colorRouter);

app.listen(PORT, () => {
	console.log(`API is ready on ${CLIENT_URL}:${PORT} 🚀🚀🚀`);
});
