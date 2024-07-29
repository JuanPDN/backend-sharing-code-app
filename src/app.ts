import express from "express";
import router from "./routes/routes";
import cors from 'cors';

export const app = express();

app.use(cors({
    origin: '*',
}))
app.use(express.json())
app.use('/api', router)