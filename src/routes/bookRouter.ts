
import express from 'express';

const router = express.Router();
import { getAllBooks,getSingleBook } from '../controller/bookController';

router.route('/').get(getAllBooks);
router.route('/:id').get(getSingleBook)


export {router}