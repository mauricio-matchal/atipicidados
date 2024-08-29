"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserPaciente = void 0;
const client_1 = require("@prisma/client");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const prisma = new client_1.PrismaClient();
// Configurar o multer
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path_1.default.extname(file.originalname));
    }
});
const upload = (0, multer_1.default)({ storage: storage });
const createUserPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const uploadHandler = upload.fields([
        { name: 'rgdocfile', maxCount: 1 },
        { name: 'fotofile', maxCount: 1 },
        { name: 'laudofile', maxCount: 1 },
        { name: 'relescolar', maxCount: 1 }
    ]);
    uploadHandler(req, res, function (err) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            // Verificar se req.files é do tipo esperado
            if (req.files && !(Array.isArray(req.files))) {
                const files = req.files;
                const rgdocfile = (_b = (_a = files['rgdocfile']) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.path;
                const fotofile = (_d = (_c = files['fotofile']) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.path;
                const laudofile = (_f = (_e = files['laudofile']) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.path;
                const relescolar = (_h = (_g = files['relescolar']) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.path;
                // Acessa outros dados do corpo da requisição
                const { geral, pai, mae, maisinfo, escola, saudeinfo } = req.body;
                try {
                    const userPaciente = yield prisma.paciente.create({
                        data: {
                            geral,
                            pai,
                            mae,
                            maisinfo,
                            escola,
                            saudeinfo,
                            rgdocfile,
                            fotofile,
                            laudofile,
                            relescolar
                        }
                    });
                    return res.json(userPaciente);
                }
                catch (error) {
                    return res.status(400).json({ error: error.message });
                }
            }
            else {
                return res.status(400).json({ error: "Nenhum arquivo foi enviado ou o formato é inválido." });
            }
        });
    });
});
exports.createUserPaciente = createUserPaciente;
