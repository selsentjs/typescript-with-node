
import { RequestHandler } from "express";

import Book, { BookModel } from "../model/bookModel";


const getAllBooks: RequestHandler = async(req,res,next) => {
    try{
        const Books = await Book.find({});
        res.status(200).json(Books)
    }
    catch(err){
        res.status(500).send(err)
    }
}

const getSingleBook: RequestHandler = async (req,res,next) => {
    const {id} = req.params;
    try {
        const Books = await Book.findOne({_id:id});
        res.status(200).json(Books)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

   const createBooks: RequestHandler = async (req, res, next) => {
    try {
        const data: BookModel = req.body;
        console.log("Data", data);
        const books = await Book.create(data);
        return res
            .status(200)
            .json({ message: "Book created successfully", data: books });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};
 const updateBook: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
        return res
            .status(200)
            .json({ message: "Book updated successfully!", data: book });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

 const deleteBook: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        var isDeleted = await Book.findByIdAndDelete(id);
        if (!isDeleted) throw new Error("Failed to delete Book");
        return res.status(200).json({ message: "Book deleted successfully!" });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};


export {getAllBooks, getSingleBook, createBooks, updateBook, deleteBook}