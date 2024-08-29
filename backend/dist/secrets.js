"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SENHA_DE_APP_JULIO = exports.JWT_SECRET = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env' });
exports.JWT_SECRET = String(process.env.JWT_SECRET);
exports.SENHA_DE_APP_JULIO = String(process.env.SENHA_DE_APP_JULIO);
console.log(exports.JWT_SECRET);
