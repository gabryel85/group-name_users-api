// server.ts
import express from 'express';
import cors from 'cors';
import { colorRouter } from './routers/color.router';
import { userRouter } from './routers/user.router';
import dotenv from "dotenv";
import { connect } from './utils/db';
import { connection } from './reset-db';


dotenv.config();
connection()

export const CLIENT_URL = process.env.CLIENT_URL;
export const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.use('/users', userRouter);
app.use('/colors', colorRouter);
app.get('/test', (req, res) => {
	res.send(process.env.API_TOKEN);
});

app.listen(PORT, () => {
	console.log(`API is ready on ${CLIENT_URL}:${PORT} 🚀🚀🚀`);
});
