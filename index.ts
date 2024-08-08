import * as dotenv from 'dotenv';
import express from "express";
import cors from 'cors';
import * as router from "./router";
dotenv.config()

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}));
app.use(express.json());
app.use('/api', router);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on ${process.env.PORT}`);
});