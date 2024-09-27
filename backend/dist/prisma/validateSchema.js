"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColaboradorCreateInputSchema = exports.PacienteCreateInputSchema = exports.GerenteCreateInputSchema = void 0;
const zod_1 = require("zod");
const zod_2 = require("../prisma/generated/zod");
exports.GerenteCreateInputSchema = zod_1.z.object({
    password: zod_1.z.string().min(8, { message: 'Sua senha precisa ter no mínimo 8 caracteres' }),
    nome: zod_1.z.string().min(3, { message: 'Insira um nome com pelo menos 3 caracteres' }),
    cpf: zod_1.z.string().length(11, { message: 'O CPF precisa ter 11 dígitos' }),
    rg: zod_1.z.string().regex(/^[0-9]{7,14}[A-Za-z0-9]?$/, { message: 'O RG deve ter entre 7 e 14 caracteres, podendo incluir letras e dígitos verificadores' }),
    email: zod_1.z.string().email({ message: 'Digite um email válido' }),
    telefone: zod_1.z.string()
        .min(10, { message: 'O telefone precisa ter no mínimo 10 dígitos' })
        .max(11, { message: 'O telefone precisa ter no máximo 11 dígitos' }),
    raca: zod_2.RacaSchema,
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    unidadeId: zod_1.z.number(),
}).strict();
exports.default = exports.GerenteCreateInputSchema;
exports.PacienteCreateInputSchema = zod_1.z.object({
    analise: zod_1.z.boolean().optional(),
    nome: zod_1.z.string().min(3, { message: 'Insira um nome com pelo menos 3 caracteres' }).optional().nullable(),
    cpf: zod_1.z.string().length(11, { message: 'O CPF precisa ter 11 dígitos' }).optional().nullable(),
    rg: zod_1.z.string().regex(/^[0-9]{7,14}[A-Za-z0-9]?$/, { message: 'O RG deve ter entre 7 e 14 caracteres, podendo incluir letras e dígitos verificadores' }).optional().nullable(),
    nascimentodata: zod_1.z.string()
        .optional()
        .nullable()
        .refine((date) => {
        if (!date)
            return true;
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        return regex.test(date);
    }, { message: 'A data de nascimento deve estar no formato DD/MM/YYYY' }),
    nomemae: zod_1.z.string().optional().nullable(),
    nomepai: zod_1.z.string().min(3, { message: 'Insira um nome com pelo menos 3 caracteres' }).optional().nullable(),
    telefone: zod_1.z.string()
        .min(10, { message: 'O telefone precisa ter no mínimo 10 dígitos' })
        .max(11, { message: 'O telefone precisa ter no máximo 11 dígitos' }).optional().nullable(),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    laudofile: zod_1.z.string().optional().nullable(),
    relescolar: zod_1.z.string().optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => zod_2.NullableJsonNullValueInputSchema), zod_2.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => zod_2.NullableJsonNullValueInputSchema), zod_2.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => zod_2.NullableJsonNullValueInputSchema), zod_2.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => zod_2.NullableJsonNullValueInputSchema), zod_2.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => zod_2.NullableJsonNullValueInputSchema), zod_2.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => zod_2.NullableJsonNullValueInputSchema), zod_2.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => zod_2.NullableJsonNullValueInputSchema), zod_2.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => zod_2.NullableJsonNullValueInputSchema), zod_2.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => zod_2.NullableJsonNullValueInputSchema), zod_2.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => zod_2.NullableJsonNullValueInputSchema), zod_2.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => zod_2.NullableJsonNullValueInputSchema), zod_2.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => zod_2.NullableJsonNullValueInputSchema), zod_2.InputJsonValueSchema]).optional(),
    raca: zod_1.z.lazy(() => zod_2.RacaSchema).optional().nullable(),
    unidadeId: zod_1.z.number().default(1),
}).strict();
exports.ColaboradorCreateInputSchema = zod_1.z.object({
    nome: zod_1.z.string().min(3, { message: 'Insira um nome com pelo menos 3 caracteres' }),
    cpf: zod_1.z.string().length(11, { message: 'O CPF precisa ter 11 dígitos' }),
    rg: zod_1.z.string().regex(/^[0-9]{7,14}[A-Za-z0-9]?$/, { message: 'O RG deve ter entre 7 e 14 caracteres, podendo incluir letras e dígitos verificadores' }),
    nascimentodata: zod_1.z.string()
        .optional()
        .nullable()
        .refine((date) => {
        if (!date)
            return true;
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        return regex.test(date);
    }, { message: 'A data de nascimento deve estar no formato DD/MM/YYYY' }),
    telefone: zod_1.z.string()
        .min(10, { message: 'O telefone precisa ter no mínimo 10 dígitos' })
        .max(11, { message: 'O telefone precisa ter no máximo 11 dígitos' }),
    titulo: zod_1.z.string(),
    formacao: zod_1.z.string(),
    password: zod_1.z.string().min(8, { message: 'Sua senha precisa ter no mínimo 8 caracteres' }),
    genero: zod_1.z.lazy(() => zod_2.GeneroSchema),
    email: zod_1.z.string().email({ message: 'Digite um email válido' }),
    raca: zod_1.z.lazy(() => zod_2.RacaSchema),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    unidadeId: zod_1.z.number(),
}).strict();
