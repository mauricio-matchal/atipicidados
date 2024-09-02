import {  type Prisma } from '@prisma/client';

import { z } from 'zod';
import { ColaboradorCreateNestedManyWithoutPacientesInputSchema, GeneroSchema, InputJsonValueSchema, NullableJsonNullValueInputSchema, PacienteCreateNestedManyWithoutColaboradoresInputSchema, RacaSchema, UnidadeCreateNestedOneWithoutGerentesInputSchema, UnidadeCreateNestedOneWithoutPacientesInputSchema } from './index';
import { connect } from 'http2';



export const GerenteCreateInputSchema = z.object({
  password: z.string().min(8, { message: 'Sua senha precisa ter no mínimo 8 caracteres' }),
  nome: z.string().min(3, { message: 'Insira um nome com pelo menos 3 caracteres' }),
  cpf: z.string().length(11, { message: 'O CPF precisa ter 11 dígitos' }),
  rg: z.string().regex(/^[0-9]{7,14}[A-Za-z0-9]?$/, { message: 'O RG deve ter entre 7 e 14 caracteres, podendo incluir letras e dígitos verificadores' }),
  email: z.string().email({ message: 'Digite um email válido' }),
  telefone: z.string()
      .min(10, { message: 'O telefone precisa ter no mínimo 10 dígitos' })
      .max(11, { message: 'O telefone precisa ter no máximo 11 dígitos' }),
  raca: RacaSchema,
  rgdocfile: z.string().optional().nullable(),
  fotofile: z.string().optional().nullable(),
  compresfile: z.string().optional().nullable(),
  unidadeId: z.number(),
}).strict();

export default GerenteCreateInputSchema


  

  export const PacienteCreateInputSchema: z.ZodType<Prisma.PacienteCreateInput> = z.object({
    analise: z.boolean().optional(),
    nome: z.string().optional().nullable(),
    cpf: z.string().optional().nullable(),
    rg: z.string().optional().nullable(),
    nascimentodata: z.string().optional().nullable(),
    nomemae: z.string().optional().nullable(),
    nomepai: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    telefone: z.string().optional().nullable(),
    rgdocfile: z.string().optional().nullable(),
    fotofile: z.string().optional().nullable(),
    compresfile: z.string().optional().nullable(),
    laudofile: z.string().optional().nullable(),
    relescolar: z.string().optional().nullable(),
    gestacao: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
    nascimento: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
    autonomia: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
    comportamento: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
    desenvolimento: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
    pedagogico: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
    geral: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
    mae: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
    pai: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
    maisinfo: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
    escola: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
    saudeinfo: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
    raca: z.lazy(() => RacaSchema).optional().nullable(),
    unidade: z.lazy(() => UnidadeCreateNestedOneWithoutPacientesInputSchema).optional(),
    colaboradores: z.lazy(() => ColaboradorCreateNestedManyWithoutPacientesInputSchema).optional()
  }).strict();


  export const ColaboradorCreateInputSchema: z.ZodType<Prisma.ColaboradorCreateInput> = z.object({
    nome: z.string(),
    cpf: z.string(),
    rg: z.string(),
    nascimento: z.coerce.date(),
    telefone: z.string(),
    titulo: z.string(),
    formacao: z.string(),
    password: z.string(),
    genero: z.lazy(() => GeneroSchema),
    email: z.string(),
    raca: z.lazy(() => RacaSchema),
    rgdocfile: z.string().optional().nullable(),
    fotofile: z.string().optional().nullable(),
    compresfile: z.string().optional().nullable(),
    unidade: z.lazy(() => UnidadeCreateNestedOneWithoutGerentesInputSchema),
    pacientes: z.lazy(() => PacienteCreateNestedManyWithoutColaboradoresInputSchema).optional()
  }).strict();
  