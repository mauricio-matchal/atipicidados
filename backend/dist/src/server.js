"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const port = Number(process.env.EXPRESS_PORT) || 3003;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.userRouter);
app.listen(port, () => {
    console.log(`Está rodando na porta ${port}`);
});
