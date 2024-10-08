require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routers = require('./router/index');
// const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 5000;
const URL_LINK = process.env.DB_URL;
const app = express();

// app.use(express.json());
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", '*');
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api', routers);
// app.use(errorMiddleware)

const start = async () => {
    try {
        await mongoose.connect(URL_LINK)
        .then(() => console.log('Connected to DB'))

        app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
    } catch (e) {
        console.log(e);
    }
};
start();
