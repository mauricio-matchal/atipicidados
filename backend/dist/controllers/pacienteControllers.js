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
const prisma = new client_1.PrismaClient();
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// Configurar o destino e nome do arquivo
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // pasta onde os arquivos serão armazenados
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path_1.default.extname(file.originalname)); // nome do arquivo
    }
});
// Inicializar o multer com a configuração de armazenamento
const upload = (0, multer_1.default)({ storage: storage });
const createUserPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Use upload.fields para lidar com múltiplos arquivos de diferentes campos
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
            // Agora você pode acessar os arquivos recebidos através de req.files
            const rgdocfile = (_b = (_a = req.files) === null || _a === void 0 ? void 0 : _a['rgdocfile']) === null || _b === void 0 ? void 0 : _b[0].path;
            const fotofile = (_d = (_c = req.files) === null || _c === void 0 ? void 0 : _c['fotofile']) === null || _d === void 0 ? void 0 : _d[0].path;
            const laudofile = (_f = (_e = req.files) === null || _e === void 0 ? void 0 : _e['laudofile']) === null || _f === void 0 ? void 0 : _f[0].path;
            const relescolar = (_h = (_g = req.files) === null || _g === void 0 ? void 0 : _g['relescolar']) === null || _h === void 0 ? void 0 : _h[0].path;
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
        });
    });
});
exports.createUserPaciente = createUserPaciente;
