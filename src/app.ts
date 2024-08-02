import express from "express";
import router from "./routes/routes";
import cors from 'cors';

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'] ,
}))
app.use(express.json())
app.use('/api', router)

export default app