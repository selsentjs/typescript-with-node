
import express, {Request, Response} from 'express'

const getAllBooks = async(req:Request,res:Response) => {
    res.send('get all the books')
}
const getSingleBook = async (req: Request, res: Response) => {
    res.send('get single book')
}


export {getAllBooks, getSingleBook}