"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookRouter_1 = __importDefault(require("./routes/bookRouter"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
//const port: number = 3000;
// database
mongoose_1.default.connect("mongodb://localhost:27017/bookShelf");
app.use(express_1.default.json());
app.use('/api/books', bookRouter_1.default);
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
app.get('/', (req, res) => {
    res.send('welcome to typescript');
});
app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});
