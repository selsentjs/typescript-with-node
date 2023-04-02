import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import BookRouter from './routes/bookRouter';
import db from "mongoose";
import { json, urlencoded } from "body-parser";
const app: Application = express();
//const port: number = 3000;

// database
db.connect("mongodb://localhost:27017/bookShelf");

app.use(express.json());
app.use('/api/books', BookRouter);
// app.use(
//     (
//         err: Error,
//         req: express.Request,
//         res: express.Response,
//         next: express.NextFunction
//     ) => {
//         res.status(500).json({ message: err.message });
//     }
// );

app.get('/', (req: Request, res: Response) => {
    res.send('welcome to typescript')
});



app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
});
