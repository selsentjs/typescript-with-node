"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookRouter_1 = require("./routes/bookRouter");
const app = (0, express_1.default)();
//const port: number = 3000;
app.get('/', (req, res) => {
    res.send('welcome to typescript');
});
app.use(express_1.default.json());
app.use('/api/books', bookRouter_1.router);
app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});
