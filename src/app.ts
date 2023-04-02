import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import {router} from './routes/bookRouter';

const app: Application = express();
//const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('welcome to typescript')
});

app.use(express.json());
app.use('/api/books', router);

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
});
