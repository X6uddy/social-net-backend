import * as dotenv from 'dotenv';
import express from "express";
import cors from 'cors';
dotenv.config()

const app = express();
app.use(cors);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on ${process.env.PORT}`);
});