import { z } from 'zod';
import { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

// JSON
//------------------------------------------------------

export type NullableJsonInput = Prisma.JsonValue | null | 'JsonNull' | 'DbNull' | Prisma.NullTypes.DbNull | Prisma.NullTypes.JsonNull;

export const transformJsonNull = (v?: NullableJsonInput) => {
  if (!v || v === 'DbNull') return Prisma.DbNull;
  if (v === 'JsonNull') return Prisma.JsonNull;
  return v;
};

export const JsonValueSchema: z.ZodType<Prisma.JsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.literal(null),
    z.record(z.lazy(() => JsonValueSchema.optional())),
    z.array(z.lazy(() => JsonValueSchema)),
  ])
);

export type JsonValueType = z.infer<typeof JsonValueSchema>;

export const NullableJsonValue = z
  .union([JsonValueSchema, z.literal('DbNull'), z.literal('JsonNull')])
  .nullable()
  .transform((v) => transformJsonNull(v));

export type NullableJsonValueType = z.infer<typeof NullableJsonValue>;

export const InputJsonValueSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.object({ toJSON: z.function(z.tuple([]), z.any()) }),
    z.record(z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
    z.array(z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
  ])
);

export type InputJsonValueType = z.infer<typeof InputJsonValueSchema>;


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const GerenteScalarFieldEnumSchema = z.enum(['id','password','nome','cpf','rg','email','telefone','raca','unidadeId','rgdocfile','fotofile','compresfile']);

export const ColaboradorScalarFieldEnumSchema = z.enum(['id','nome','cpf','rg','nascimento','telefone','titulo','formacao','password','genero','email','raca','unidadeId','rgdocfile','fotofile','compresfile']);

export const PacienteScalarFieldEnumSchema = z.enum(['id','analise','nome','cpf','rg','nascimentodata','nomemae','nomepai','unidadeId','email','password','telefone','rgdocfile','fotofile','compresfile','laudofile','relescolar','gestacao','nascimento','autonomia','comportamento','desenvolimento','pedagogico','geral','mae','pai','maisinfo','escola','saudeinfo','raca']);

export const UnidadeScalarFieldEnumSchema = z.enum(['id','nome','endereco']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullableJsonNullValueInputSchema = z.enum(['DbNull','JsonNull',]).transform((value) => value === 'JsonNull' ? Prisma.JsonNull : value === 'DbNull' ? Prisma.DbNull : value);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const JsonNullValueFilterSchema = z.enum(['DbNull','JsonNull','AnyNull',]).transform((value) => value === 'JsonNull' ? Prisma.JsonNull : value === 'DbNull' ? Prisma.JsonNull : value === 'AnyNull' ? Prisma.AnyNull : value);

export const RacaSchema = z.enum(['BRANCA','NEGRA','AMARELA','INDIGENA','OUTRA']);

export type RacaType = `${z.infer<typeof RacaSchema>}`

export const GeneroSchema = z.enum(['MASCULINO','FEMININO','PREFIRO_NAO_INFORMAR']);

export type GeneroType = `${z.infer<typeof GeneroSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// GERENTE SCHEMA
/////////////////////////////////////////

export const GerenteSchema = z.object({
  raca: RacaSchema,
  id: z.number().int(),
  password: z.string(),
  nome: z.string(),
  cpf: z.string(),
  rg: z.string(),
  email: z.string(),
  telefone: z.string(),
  unidadeId: z.number().int(),
  rgdocfile: z.string().nullable(),
  fotofile: z.string().nullable(),
  compresfile: z.string().nullable(),
})

export type Gerente = z.infer<typeof GerenteSchema>

/////////////////////////////////////////
// COLABORADOR SCHEMA
/////////////////////////////////////////

export const ColaboradorSchema = z.object({
  genero: GeneroSchema,
  raca: RacaSchema,
  id: z.number().int(),
  nome: z.string(),
  cpf: z.string(),
  rg: z.string(),
  nascimento: z.coerce.date(),
  telefone: z.string(),
  titulo: z.string(),
  formacao: z.string(),
  password: z.string(),
  email: z.string(),
  unidadeId: z.number().int(),
  rgdocfile: z.string().nullable(),
  fotofile: z.string().nullable(),
  compresfile: z.string().nullable(),
})

export type Colaborador = z.infer<typeof ColaboradorSchema>

/////////////////////////////////////////
// PACIENTE SCHEMA
/////////////////////////////////////////

export const PacienteSchema = z.object({
  raca: RacaSchema.nullable(),
  id: z.number().int(),
  analise: z.boolean(),
  nome: z.string().nullable(),
  cpf: z.string(),
  rg: z.string().nullable(),
  nascimentodata: z.string().nullable(),
  nomemae: z.string().nullable(),
  nomepai: z.string().nullable(),
  unidadeId: z.number().int(),
  email: z.string(),
  password: z.string(),
  telefone: z.string().nullable(),
  rgdocfile: z.string().nullable(),
  fotofile: z.string().nullable(),
  compresfile: z.string().nullable(),
  laudofile: z.string().nullable(),
  relescolar: z.string().nullable(),
  gestacao: JsonValueSchema.nullable(),
  nascimento: JsonValueSchema.nullable(),
  autonomia: JsonValueSchema.nullable(),
  comportamento: JsonValueSchema.nullable(),
  desenvolimento: JsonValueSchema.nullable(),
  pedagogico: JsonValueSchema.nullable(),
  geral: JsonValueSchema.nullable(),
  mae: JsonValueSchema.nullable(),
  pai: JsonValueSchema.nullable(),
  maisinfo: JsonValueSchema.nullable(),
  escola: JsonValueSchema.nullable(),
  saudeinfo: JsonValueSchema.nullable(),
})

export type Paciente = z.infer<typeof PacienteSchema>

/////////////////////////////////////////
// UNIDADE SCHEMA
/////////////////////////////////////////

export const UnidadeSchema = z.object({
  id: z.number().int(),
  nome: z.string(),
  endereco: z.string(),
})

export type Unidade = z.infer<typeof UnidadeSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// GERENTE
//------------------------------------------------------

export const GerenteIncludeSchema: z.ZodType<Prisma.GerenteInclude> = z.object({
  unidade: z.union([z.boolean(),z.lazy(() => UnidadeArgsSchema)]).optional(),
}).strict()

export const GerenteArgsSchema: z.ZodType<Prisma.GerenteDefaultArgs> = z.object({
  select: z.lazy(() => GerenteSelectSchema).optional(),
  include: z.lazy(() => GerenteIncludeSchema).optional(),
}).strict();

export const GerenteSelectSchema: z.ZodType<Prisma.GerenteSelect> = z.object({
  id: z.boolean().optional(),
  password: z.boolean().optional(),
  nome: z.boolean().optional(),
  cpf: z.boolean().optional(),
  rg: z.boolean().optional(),
  email: z.boolean().optional(),
  telefone: z.boolean().optional(),
  raca: z.boolean().optional(),
  unidadeId: z.boolean().optional(),
  rgdocfile: z.boolean().optional(),
  fotofile: z.boolean().optional(),
  compresfile: z.boolean().optional(),
  unidade: z.union([z.boolean(),z.lazy(() => UnidadeArgsSchema)]).optional(),
}).strict()

// COLABORADOR
//------------------------------------------------------

export const ColaboradorIncludeSchema: z.ZodType<Prisma.ColaboradorInclude> = z.object({
  unidade: z.union([z.boolean(),z.lazy(() => UnidadeArgsSchema)]).optional(),
  pacientes: z.union([z.boolean(),z.lazy(() => PacienteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ColaboradorCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ColaboradorArgsSchema: z.ZodType<Prisma.ColaboradorDefaultArgs> = z.object({
  select: z.lazy(() => ColaboradorSelectSchema).optional(),
  include: z.lazy(() => ColaboradorIncludeSchema).optional(),
}).strict();

export const ColaboradorCountOutputTypeArgsSchema: z.ZodType<Prisma.ColaboradorCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ColaboradorCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ColaboradorCountOutputTypeSelectSchema: z.ZodType<Prisma.ColaboradorCountOutputTypeSelect> = z.object({
  pacientes: z.boolean().optional(),
}).strict();

export const ColaboradorSelectSchema: z.ZodType<Prisma.ColaboradorSelect> = z.object({
  id: z.boolean().optional(),
  nome: z.boolean().optional(),
  cpf: z.boolean().optional(),
  rg: z.boolean().optional(),
  nascimento: z.boolean().optional(),
  telefone: z.boolean().optional(),
  titulo: z.boolean().optional(),
  formacao: z.boolean().optional(),
  password: z.boolean().optional(),
  genero: z.boolean().optional(),
  email: z.boolean().optional(),
  raca: z.boolean().optional(),
  unidadeId: z.boolean().optional(),
  rgdocfile: z.boolean().optional(),
  fotofile: z.boolean().optional(),
  compresfile: z.boolean().optional(),
  unidade: z.union([z.boolean(),z.lazy(() => UnidadeArgsSchema)]).optional(),
  pacientes: z.union([z.boolean(),z.lazy(() => PacienteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ColaboradorCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PACIENTE
//------------------------------------------------------

export const PacienteIncludeSchema: z.ZodType<Prisma.PacienteInclude> = z.object({
  unidade: z.union([z.boolean(),z.lazy(() => UnidadeArgsSchema)]).optional(),
  colaboradores: z.union([z.boolean(),z.lazy(() => ColaboradorFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PacienteCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PacienteArgsSchema: z.ZodType<Prisma.PacienteDefaultArgs> = z.object({
  select: z.lazy(() => PacienteSelectSchema).optional(),
  include: z.lazy(() => PacienteIncludeSchema).optional(),
}).strict();

export const PacienteCountOutputTypeArgsSchema: z.ZodType<Prisma.PacienteCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PacienteCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PacienteCountOutputTypeSelectSchema: z.ZodType<Prisma.PacienteCountOutputTypeSelect> = z.object({
  colaboradores: z.boolean().optional(),
}).strict();

export const PacienteSelectSchema: z.ZodType<Prisma.PacienteSelect> = z.object({
  id: z.boolean().optional(),
  analise: z.boolean().optional(),
  nome: z.boolean().optional(),
  cpf: z.boolean().optional(),
  rg: z.boolean().optional(),
  nascimentodata: z.boolean().optional(),
  nomemae: z.boolean().optional(),
  nomepai: z.boolean().optional(),
  unidadeId: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  telefone: z.boolean().optional(),
  rgdocfile: z.boolean().optional(),
  fotofile: z.boolean().optional(),
  compresfile: z.boolean().optional(),
  laudofile: z.boolean().optional(),
  relescolar: z.boolean().optional(),
  gestacao: z.boolean().optional(),
  nascimento: z.boolean().optional(),
  autonomia: z.boolean().optional(),
  comportamento: z.boolean().optional(),
  desenvolimento: z.boolean().optional(),
  pedagogico: z.boolean().optional(),
  geral: z.boolean().optional(),
  mae: z.boolean().optional(),
  pai: z.boolean().optional(),
  maisinfo: z.boolean().optional(),
  escola: z.boolean().optional(),
  saudeinfo: z.boolean().optional(),
  raca: z.boolean().optional(),
  unidade: z.union([z.boolean(),z.lazy(() => UnidadeArgsSchema)]).optional(),
  colaboradores: z.union([z.boolean(),z.lazy(() => ColaboradorFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PacienteCountOutputTypeArgsSchema)]).optional(),
}).strict()

// UNIDADE
//------------------------------------------------------

export const UnidadeIncludeSchema: z.ZodType<Prisma.UnidadeInclude> = z.object({
  pacientes: z.union([z.boolean(),z.lazy(() => PacienteFindManyArgsSchema)]).optional(),
  colaboradores: z.union([z.boolean(),z.lazy(() => ColaboradorFindManyArgsSchema)]).optional(),
  gerentes: z.union([z.boolean(),z.lazy(() => GerenteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UnidadeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UnidadeArgsSchema: z.ZodType<Prisma.UnidadeDefaultArgs> = z.object({
  select: z.lazy(() => UnidadeSelectSchema).optional(),
  include: z.lazy(() => UnidadeIncludeSchema).optional(),
}).strict();

export const UnidadeCountOutputTypeArgsSchema: z.ZodType<Prisma.UnidadeCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UnidadeCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UnidadeCountOutputTypeSelectSchema: z.ZodType<Prisma.UnidadeCountOutputTypeSelect> = z.object({
  pacientes: z.boolean().optional(),
  colaboradores: z.boolean().optional(),
  gerentes: z.boolean().optional(),
}).strict();

export const UnidadeSelectSchema: z.ZodType<Prisma.UnidadeSelect> = z.object({
  id: z.boolean().optional(),
  nome: z.boolean().optional(),
  endereco: z.boolean().optional(),
  pacientes: z.union([z.boolean(),z.lazy(() => PacienteFindManyArgsSchema)]).optional(),
  colaboradores: z.union([z.boolean(),z.lazy(() => ColaboradorFindManyArgsSchema)]).optional(),
  gerentes: z.union([z.boolean(),z.lazy(() => GerenteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UnidadeCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const GerenteWhereInputSchema: z.ZodType<Prisma.GerenteWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GerenteWhereInputSchema),z.lazy(() => GerenteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GerenteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GerenteWhereInputSchema),z.lazy(() => GerenteWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cpf: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rg: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  telefone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  raca: z.union([ z.lazy(() => EnumRacaFilterSchema),z.lazy(() => RacaSchema) ]).optional(),
  unidadeId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rgdocfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fotofile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  compresfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  unidade: z.union([ z.lazy(() => UnidadeRelationFilterSchema),z.lazy(() => UnidadeWhereInputSchema) ]).optional(),
}).strict();

export const GerenteOrderByWithRelationInputSchema: z.ZodType<Prisma.GerenteOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  rg: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  telefone: z.lazy(() => SortOrderSchema).optional(),
  raca: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional(),
  rgdocfile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fotofile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  compresfile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  unidade: z.lazy(() => UnidadeOrderByWithRelationInputSchema).optional()
}).strict();

export const GerenteWhereUniqueInputSchema: z.ZodType<Prisma.GerenteWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    cpf: z.string(),
    rg: z.string(),
    email: z.string(),
    telefone: z.string()
  }),
  z.object({
    id: z.number().int(),
    cpf: z.string(),
    rg: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    cpf: z.string(),
    rg: z.string(),
    telefone: z.string(),
  }),
  z.object({
    id: z.number().int(),
    cpf: z.string(),
    rg: z.string(),
  }),
  z.object({
    id: z.number().int(),
    cpf: z.string(),
    email: z.string(),
    telefone: z.string(),
  }),
  z.object({
    id: z.number().int(),
    cpf: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    cpf: z.string(),
    telefone: z.string(),
  }),
  z.object({
    id: z.number().int(),
    cpf: z.string(),
  }),
  z.object({
    id: z.number().int(),
    rg: z.string(),
    email: z.string(),
    telefone: z.string(),
  }),
  z.object({
    id: z.number().int(),
    rg: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    rg: z.string(),
    telefone: z.string(),
  }),
  z.object({
    id: z.number().int(),
    rg: z.string(),
  }),
  z.object({
    id: z.number().int(),
    email: z.string(),
    telefone: z.string(),
  }),
  z.object({
    id: z.number().int(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    telefone: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    cpf: z.string(),
    rg: z.string(),
    email: z.string(),
    telefone: z.string(),
  }),
  z.object({
    cpf: z.string(),
    rg: z.string(),
    email: z.string(),
  }),
  z.object({
    cpf: z.string(),
    rg: z.string(),
    telefone: z.string(),
  }),
  z.object({
    cpf: z.string(),
    rg: z.string(),
  }),
  z.object({
    cpf: z.string(),
    email: z.string(),
    telefone: z.string(),
  }),
  z.object({
    cpf: z.string(),
    email: z.string(),
  }),
  z.object({
    cpf: z.string(),
    telefone: z.string(),
  }),
  z.object({
    cpf: z.string(),
  }),
  z.object({
    rg: z.string(),
    email: z.string(),
    telefone: z.string(),
  }),
  z.object({
    rg: z.string(),
    email: z.string(),
  }),
  z.object({
    rg: z.string(),
    telefone: z.string(),
  }),
  z.object({
    rg: z.string(),
  }),
  z.object({
    email: z.string(),
    telefone: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
  z.object({
    telefone: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  cpf: z.string().optional(),
  rg: z.string().optional(),
  email: z.string().optional(),
  telefone: z.string().optional(),
  AND: z.union([ z.lazy(() => GerenteWhereInputSchema),z.lazy(() => GerenteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GerenteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GerenteWhereInputSchema),z.lazy(() => GerenteWhereInputSchema).array() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  raca: z.union([ z.lazy(() => EnumRacaFilterSchema),z.lazy(() => RacaSchema) ]).optional(),
  unidadeId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  rgdocfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fotofile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  compresfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  unidade: z.union([ z.lazy(() => UnidadeRelationFilterSchema),z.lazy(() => UnidadeWhereInputSchema) ]).optional(),
}).strict());

export const GerenteOrderByWithAggregationInputSchema: z.ZodType<Prisma.GerenteOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  rg: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  telefone: z.lazy(() => SortOrderSchema).optional(),
  raca: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional(),
  rgdocfile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fotofile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  compresfile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => GerenteCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => GerenteAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GerenteMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GerenteMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GerenteSumOrderByAggregateInputSchema).optional()
}).strict();

export const GerenteScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GerenteScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GerenteScalarWhereWithAggregatesInputSchema),z.lazy(() => GerenteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GerenteScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GerenteScalarWhereWithAggregatesInputSchema),z.lazy(() => GerenteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  nome: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  cpf: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rg: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  telefone: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  raca: z.union([ z.lazy(() => EnumRacaWithAggregatesFilterSchema),z.lazy(() => RacaSchema) ]).optional(),
  unidadeId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  rgdocfile: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  fotofile: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  compresfile: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ColaboradorWhereInputSchema: z.ZodType<Prisma.ColaboradorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ColaboradorWhereInputSchema),z.lazy(() => ColaboradorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColaboradorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColaboradorWhereInputSchema),z.lazy(() => ColaboradorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cpf: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rg: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nascimento: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  telefone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  titulo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  formacao: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  genero: z.union([ z.lazy(() => EnumGeneroFilterSchema),z.lazy(() => GeneroSchema) ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  raca: z.union([ z.lazy(() => EnumRacaFilterSchema),z.lazy(() => RacaSchema) ]).optional(),
  unidadeId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rgdocfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fotofile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  compresfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  unidade: z.union([ z.lazy(() => UnidadeRelationFilterSchema),z.lazy(() => UnidadeWhereInputSchema) ]).optional(),
  pacientes: z.lazy(() => PacienteListRelationFilterSchema).optional()
}).strict();

export const ColaboradorOrderByWithRelationInputSchema: z.ZodType<Prisma.ColaboradorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  rg: z.lazy(() => SortOrderSchema).optional(),
  nascimento: z.lazy(() => SortOrderSchema).optional(),
  telefone: z.lazy(() => SortOrderSchema).optional(),
  titulo: z.lazy(() => SortOrderSchema).optional(),
  formacao: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  genero: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  raca: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional(),
  rgdocfile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fotofile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  compresfile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  unidade: z.lazy(() => UnidadeOrderByWithRelationInputSchema).optional(),
  pacientes: z.lazy(() => PacienteOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ColaboradorWhereUniqueInputSchema: z.ZodType<Prisma.ColaboradorWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    cpf: z.string(),
    rg: z.string(),
    telefone: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.number().int(),
    cpf: z.string(),
    rg: z.string(),
    telefone: z.string(),
  }),
  z.object({
    id: z.number().int(),
    cpf: z.string(),
    rg: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    cpf: z.string(),
    rg: z.string(),
  }),
  z.object({
    id: z.number().int(),
    cpf: z.string(),
    telefone: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    cpf: z.string(),
    telefone: z.string(),
  }),
  z.object({
    id: z.number().int(),
    cpf: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    cpf: z.string(),
  }),
  z.object({
    id: z.number().int(),
    rg: z.string(),
    telefone: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    rg: z.string(),
    telefone: z.string(),
  }),
  z.object({
    id: z.number().int(),
    rg: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    rg: z.string(),
  }),
  z.object({
    id: z.number().int(),
    telefone: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    telefone: z.string(),
  }),
  z.object({
    id: z.number().int(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    cpf: z.string(),
    rg: z.string(),
    telefone: z.string(),
    email: z.string(),
  }),
  z.object({
    cpf: z.string(),
    rg: z.string(),
    telefone: z.string(),
  }),
  z.object({
    cpf: z.string(),
    rg: z.string(),
    email: z.string(),
  }),
  z.object({
    cpf: z.string(),
    rg: z.string(),
  }),
  z.object({
    cpf: z.string(),
    telefone: z.string(),
    email: z.string(),
  }),
  z.object({
    cpf: z.string(),
    telefone: z.string(),
  }),
  z.object({
    cpf: z.string(),
    email: z.string(),
  }),
  z.object({
    cpf: z.string(),
  }),
  z.object({
    rg: z.string(),
    telefone: z.string(),
    email: z.string(),
  }),
  z.object({
    rg: z.string(),
    telefone: z.string(),
  }),
  z.object({
    rg: z.string(),
    email: z.string(),
  }),
  z.object({
    rg: z.string(),
  }),
  z.object({
    telefone: z.string(),
    email: z.string(),
  }),
  z.object({
    telefone: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  cpf: z.string().optional(),
  rg: z.string().optional(),
  telefone: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => ColaboradorWhereInputSchema),z.lazy(() => ColaboradorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColaboradorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColaboradorWhereInputSchema),z.lazy(() => ColaboradorWhereInputSchema).array() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nascimento: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  titulo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  formacao: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  genero: z.union([ z.lazy(() => EnumGeneroFilterSchema),z.lazy(() => GeneroSchema) ]).optional(),
  raca: z.union([ z.lazy(() => EnumRacaFilterSchema),z.lazy(() => RacaSchema) ]).optional(),
  unidadeId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  rgdocfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fotofile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  compresfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  unidade: z.union([ z.lazy(() => UnidadeRelationFilterSchema),z.lazy(() => UnidadeWhereInputSchema) ]).optional(),
  pacientes: z.lazy(() => PacienteListRelationFilterSchema).optional()
}).strict());

export const ColaboradorOrderByWithAggregationInputSchema: z.ZodType<Prisma.ColaboradorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  rg: z.lazy(() => SortOrderSchema).optional(),
  nascimento: z.lazy(() => SortOrderSchema).optional(),
  telefone: z.lazy(() => SortOrderSchema).optional(),
  titulo: z.lazy(() => SortOrderSchema).optional(),
  formacao: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  genero: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  raca: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional(),
  rgdocfile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fotofile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  compresfile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ColaboradorCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ColaboradorAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ColaboradorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ColaboradorMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ColaboradorSumOrderByAggregateInputSchema).optional()
}).strict();

export const ColaboradorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ColaboradorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ColaboradorScalarWhereWithAggregatesInputSchema),z.lazy(() => ColaboradorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColaboradorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColaboradorScalarWhereWithAggregatesInputSchema),z.lazy(() => ColaboradorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  nome: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  cpf: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rg: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  nascimento: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  telefone: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  titulo: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  formacao: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  genero: z.union([ z.lazy(() => EnumGeneroWithAggregatesFilterSchema),z.lazy(() => GeneroSchema) ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  raca: z.union([ z.lazy(() => EnumRacaWithAggregatesFilterSchema),z.lazy(() => RacaSchema) ]).optional(),
  unidadeId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  rgdocfile: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  fotofile: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  compresfile: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const PacienteWhereInputSchema: z.ZodType<Prisma.PacienteWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PacienteWhereInputSchema),z.lazy(() => PacienteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PacienteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PacienteWhereInputSchema),z.lazy(() => PacienteWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  analise: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  nome: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  cpf: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rg: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nascimentodata: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nomemae: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nomepai: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  unidadeId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  telefone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rgdocfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fotofile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  compresfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  laudofile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  relescolar: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  gestacao: z.lazy(() => JsonNullableFilterSchema).optional(),
  nascimento: z.lazy(() => JsonNullableFilterSchema).optional(),
  autonomia: z.lazy(() => JsonNullableFilterSchema).optional(),
  comportamento: z.lazy(() => JsonNullableFilterSchema).optional(),
  desenvolimento: z.lazy(() => JsonNullableFilterSchema).optional(),
  pedagogico: z.lazy(() => JsonNullableFilterSchema).optional(),
  geral: z.lazy(() => JsonNullableFilterSchema).optional(),
  mae: z.lazy(() => JsonNullableFilterSchema).optional(),
  pai: z.lazy(() => JsonNullableFilterSchema).optional(),
  maisinfo: z.lazy(() => JsonNullableFilterSchema).optional(),
  escola: z.lazy(() => JsonNullableFilterSchema).optional(),
  saudeinfo: z.lazy(() => JsonNullableFilterSchema).optional(),
  raca: z.union([ z.lazy(() => EnumRacaNullableFilterSchema),z.lazy(() => RacaSchema) ]).optional().nullable(),
  unidade: z.union([ z.lazy(() => UnidadeRelationFilterSchema),z.lazy(() => UnidadeWhereInputSchema) ]).optional(),
  colaboradores: z.lazy(() => ColaboradorListRelationFilterSchema).optional()
}).strict();

export const PacienteOrderByWithRelationInputSchema: z.ZodType<Prisma.PacienteOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  analise: z.lazy(() => SortOrderSchema).optional(),
  nome: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  rg: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nascimentodata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nomemae: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nomepai: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  telefone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rgdocfile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fotofile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  compresfile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  laudofile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  relescolar: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  gestacao: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nascimento: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  autonomia: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  comportamento: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  desenvolimento: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pedagogico: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  geral: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mae: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pai: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  maisinfo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  escola: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  saudeinfo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  unidade: z.lazy(() => UnidadeOrderByWithRelationInputSchema).optional(),
  colaboradores: z.lazy(() => ColaboradorOrderByRelationAggregateInputSchema).optional()
}).strict();

export const PacienteWhereUniqueInputSchema: z.ZodType<Prisma.PacienteWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    email: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => PacienteWhereInputSchema),z.lazy(() => PacienteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PacienteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PacienteWhereInputSchema),z.lazy(() => PacienteWhereInputSchema).array() ]).optional(),
  analise: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  nome: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  cpf: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rg: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nascimentodata: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nomemae: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nomepai: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  unidadeId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  telefone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rgdocfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fotofile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  compresfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  laudofile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  relescolar: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  gestacao: z.lazy(() => JsonNullableFilterSchema).optional(),
  nascimento: z.lazy(() => JsonNullableFilterSchema).optional(),
  autonomia: z.lazy(() => JsonNullableFilterSchema).optional(),
  comportamento: z.lazy(() => JsonNullableFilterSchema).optional(),
  desenvolimento: z.lazy(() => JsonNullableFilterSchema).optional(),
  pedagogico: z.lazy(() => JsonNullableFilterSchema).optional(),
  geral: z.lazy(() => JsonNullableFilterSchema).optional(),
  mae: z.lazy(() => JsonNullableFilterSchema).optional(),
  pai: z.lazy(() => JsonNullableFilterSchema).optional(),
  maisinfo: z.lazy(() => JsonNullableFilterSchema).optional(),
  escola: z.lazy(() => JsonNullableFilterSchema).optional(),
  saudeinfo: z.lazy(() => JsonNullableFilterSchema).optional(),
  raca: z.union([ z.lazy(() => EnumRacaNullableFilterSchema),z.lazy(() => RacaSchema) ]).optional().nullable(),
  unidade: z.union([ z.lazy(() => UnidadeRelationFilterSchema),z.lazy(() => UnidadeWhereInputSchema) ]).optional(),
  colaboradores: z.lazy(() => ColaboradorListRelationFilterSchema).optional()
}).strict());

export const PacienteOrderByWithAggregationInputSchema: z.ZodType<Prisma.PacienteOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  analise: z.lazy(() => SortOrderSchema).optional(),
  nome: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  rg: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nascimentodata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nomemae: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nomepai: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  telefone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rgdocfile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fotofile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  compresfile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  laudofile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  relescolar: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  gestacao: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nascimento: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  autonomia: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  comportamento: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  desenvolimento: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pedagogico: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  geral: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mae: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pai: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  maisinfo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  escola: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  saudeinfo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PacienteCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PacienteAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PacienteMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PacienteMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PacienteSumOrderByAggregateInputSchema).optional()
}).strict();

export const PacienteScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PacienteScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PacienteScalarWhereWithAggregatesInputSchema),z.lazy(() => PacienteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PacienteScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PacienteScalarWhereWithAggregatesInputSchema),z.lazy(() => PacienteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  analise: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  nome: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  cpf: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rg: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  nascimentodata: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  nomemae: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  nomepai: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  unidadeId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  telefone: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  rgdocfile: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  fotofile: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  compresfile: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  laudofile: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  relescolar: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  gestacao: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  nascimento: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  autonomia: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  comportamento: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  desenvolimento: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  pedagogico: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  geral: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  mae: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  pai: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  maisinfo: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  escola: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  saudeinfo: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  raca: z.union([ z.lazy(() => EnumRacaNullableWithAggregatesFilterSchema),z.lazy(() => RacaSchema) ]).optional().nullable(),
}).strict();

export const UnidadeWhereInputSchema: z.ZodType<Prisma.UnidadeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UnidadeWhereInputSchema),z.lazy(() => UnidadeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UnidadeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UnidadeWhereInputSchema),z.lazy(() => UnidadeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endereco: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pacientes: z.lazy(() => PacienteListRelationFilterSchema).optional(),
  colaboradores: z.lazy(() => ColaboradorListRelationFilterSchema).optional(),
  gerentes: z.lazy(() => GerenteListRelationFilterSchema).optional()
}).strict();

export const UnidadeOrderByWithRelationInputSchema: z.ZodType<Prisma.UnidadeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  endereco: z.lazy(() => SortOrderSchema).optional(),
  pacientes: z.lazy(() => PacienteOrderByRelationAggregateInputSchema).optional(),
  colaboradores: z.lazy(() => ColaboradorOrderByRelationAggregateInputSchema).optional(),
  gerentes: z.lazy(() => GerenteOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UnidadeWhereUniqueInputSchema: z.ZodType<Prisma.UnidadeWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => UnidadeWhereInputSchema),z.lazy(() => UnidadeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UnidadeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UnidadeWhereInputSchema),z.lazy(() => UnidadeWhereInputSchema).array() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endereco: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pacientes: z.lazy(() => PacienteListRelationFilterSchema).optional(),
  colaboradores: z.lazy(() => ColaboradorListRelationFilterSchema).optional(),
  gerentes: z.lazy(() => GerenteListRelationFilterSchema).optional()
}).strict());

export const UnidadeOrderByWithAggregationInputSchema: z.ZodType<Prisma.UnidadeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  endereco: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UnidadeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UnidadeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UnidadeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UnidadeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UnidadeSumOrderByAggregateInputSchema).optional()
}).strict();

export const UnidadeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UnidadeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UnidadeScalarWhereWithAggregatesInputSchema),z.lazy(() => UnidadeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UnidadeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UnidadeScalarWhereWithAggregatesInputSchema),z.lazy(() => UnidadeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  nome: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  endereco: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const GerenteCreateInputSchema: z.ZodType<Prisma.GerenteCreateInput> = z.object({
  password: z.string(),
  nome: z.string(),
  cpf: z.string(),
  rg: z.string(),
  email: z.string(),
  telefone: z.string(),
  raca: z.lazy(() => RacaSchema),
  rgdocfile: z.string().optional().nullable(),
  fotofile: z.string().optional().nullable(),
  compresfile: z.string().optional().nullable(),
  unidade: z.lazy(() => UnidadeCreateNestedOneWithoutGerentesInputSchema)
}).strict();

export const GerenteUncheckedCreateInputSchema: z.ZodType<Prisma.GerenteUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  password: z.string(),
  nome: z.string(),
  cpf: z.string(),
  rg: z.string(),
  email: z.string(),
  telefone: z.string(),
  raca: z.lazy(() => RacaSchema),
  unidadeId: z.number().int(),
  rgdocfile: z.string().optional().nullable(),
  fotofile: z.string().optional().nullable(),
  compresfile: z.string().optional().nullable()
}).strict();

export const GerenteUpdateInputSchema: z.ZodType<Prisma.GerenteUpdateInput> = z.object({
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  unidade: z.lazy(() => UnidadeUpdateOneRequiredWithoutGerentesNestedInputSchema).optional()
}).strict();

export const GerenteUncheckedUpdateInputSchema: z.ZodType<Prisma.GerenteUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  unidadeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GerenteCreateManyInputSchema: z.ZodType<Prisma.GerenteCreateManyInput> = z.object({
  id: z.number().int().optional(),
  password: z.string(),
  nome: z.string(),
  cpf: z.string(),
  rg: z.string(),
  email: z.string(),
  telefone: z.string(),
  raca: z.lazy(() => RacaSchema),
  unidadeId: z.number().int(),
  rgdocfile: z.string().optional().nullable(),
  fotofile: z.string().optional().nullable(),
  compresfile: z.string().optional().nullable()
}).strict();

export const GerenteUpdateManyMutationInputSchema: z.ZodType<Prisma.GerenteUpdateManyMutationInput> = z.object({
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GerenteUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GerenteUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  unidadeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  unidade: z.lazy(() => UnidadeCreateNestedOneWithoutColaboradoresInputSchema),
  pacientes: z.lazy(() => PacienteCreateNestedManyWithoutColaboradoresInputSchema).optional()
}).strict();

export const ColaboradorUncheckedCreateInputSchema: z.ZodType<Prisma.ColaboradorUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
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
  unidadeId: z.number().int(),
  rgdocfile: z.string().optional().nullable(),
  fotofile: z.string().optional().nullable(),
  compresfile: z.string().optional().nullable(),
  pacientes: z.lazy(() => PacienteUncheckedCreateNestedManyWithoutColaboradoresInputSchema).optional()
}).strict();

export const ColaboradorUpdateInputSchema: z.ZodType<Prisma.ColaboradorUpdateInput> = z.object({
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nascimento: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  titulo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genero: z.union([ z.lazy(() => GeneroSchema),z.lazy(() => EnumGeneroFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  unidade: z.lazy(() => UnidadeUpdateOneRequiredWithoutColaboradoresNestedInputSchema).optional(),
  pacientes: z.lazy(() => PacienteUpdateManyWithoutColaboradoresNestedInputSchema).optional()
}).strict();

export const ColaboradorUncheckedUpdateInputSchema: z.ZodType<Prisma.ColaboradorUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nascimento: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  titulo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genero: z.union([ z.lazy(() => GeneroSchema),z.lazy(() => EnumGeneroFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  unidadeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pacientes: z.lazy(() => PacienteUncheckedUpdateManyWithoutColaboradoresNestedInputSchema).optional()
}).strict();

export const ColaboradorCreateManyInputSchema: z.ZodType<Prisma.ColaboradorCreateManyInput> = z.object({
  id: z.number().int().optional(),
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
  unidadeId: z.number().int(),
  rgdocfile: z.string().optional().nullable(),
  fotofile: z.string().optional().nullable(),
  compresfile: z.string().optional().nullable()
}).strict();

export const ColaboradorUpdateManyMutationInputSchema: z.ZodType<Prisma.ColaboradorUpdateManyMutationInput> = z.object({
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nascimento: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  titulo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genero: z.union([ z.lazy(() => GeneroSchema),z.lazy(() => EnumGeneroFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ColaboradorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ColaboradorUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nascimento: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  titulo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genero: z.union([ z.lazy(() => GeneroSchema),z.lazy(() => EnumGeneroFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  unidadeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PacienteCreateInputSchema: z.ZodType<Prisma.PacienteCreateInput> = z.object({
  analise: z.boolean().optional(),
  nome: z.string().optional().nullable(),
  cpf: z.string(),
  rg: z.string().optional().nullable(),
  nascimentodata: z.string().optional().nullable(),
  nomemae: z.string().optional().nullable(),
  nomepai: z.string().optional().nullable(),
  email: z.string(),
  password: z.string(),
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

export const PacienteUncheckedCreateInputSchema: z.ZodType<Prisma.PacienteUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  analise: z.boolean().optional(),
  nome: z.string().optional().nullable(),
  cpf: z.string(),
  rg: z.string().optional().nullable(),
  nascimentodata: z.string().optional().nullable(),
  nomemae: z.string().optional().nullable(),
  nomepai: z.string().optional().nullable(),
  unidadeId: z.number().int().optional(),
  email: z.string(),
  password: z.string(),
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
  colaboradores: z.lazy(() => ColaboradorUncheckedCreateNestedManyWithoutPacientesInputSchema).optional()
}).strict();

export const PacienteUpdateInputSchema: z.ZodType<Prisma.PacienteUpdateInput> = z.object({
  analise: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nascimentodata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomemae: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomepai: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  laudofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  relescolar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NullableEnumRacaFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  unidade: z.lazy(() => UnidadeUpdateOneRequiredWithoutPacientesNestedInputSchema).optional(),
  colaboradores: z.lazy(() => ColaboradorUpdateManyWithoutPacientesNestedInputSchema).optional()
}).strict();

export const PacienteUncheckedUpdateInputSchema: z.ZodType<Prisma.PacienteUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  analise: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nascimentodata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomemae: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomepai: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  unidadeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  laudofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  relescolar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NullableEnumRacaFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  colaboradores: z.lazy(() => ColaboradorUncheckedUpdateManyWithoutPacientesNestedInputSchema).optional()
}).strict();

export const PacienteCreateManyInputSchema: z.ZodType<Prisma.PacienteCreateManyInput> = z.object({
  id: z.number().int().optional(),
  analise: z.boolean().optional(),
  nome: z.string().optional().nullable(),
  cpf: z.string(),
  rg: z.string().optional().nullable(),
  nascimentodata: z.string().optional().nullable(),
  nomemae: z.string().optional().nullable(),
  nomepai: z.string().optional().nullable(),
  unidadeId: z.number().int().optional(),
  email: z.string(),
  password: z.string(),
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
  raca: z.lazy(() => RacaSchema).optional().nullable()
}).strict();

export const PacienteUpdateManyMutationInputSchema: z.ZodType<Prisma.PacienteUpdateManyMutationInput> = z.object({
  analise: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nascimentodata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomemae: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomepai: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  laudofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  relescolar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NullableEnumRacaFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PacienteUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PacienteUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  analise: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nascimentodata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomemae: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomepai: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  unidadeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  laudofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  relescolar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NullableEnumRacaFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UnidadeCreateInputSchema: z.ZodType<Prisma.UnidadeCreateInput> = z.object({
  nome: z.string(),
  endereco: z.string(),
  pacientes: z.lazy(() => PacienteCreateNestedManyWithoutUnidadeInputSchema).optional(),
  colaboradores: z.lazy(() => ColaboradorCreateNestedManyWithoutUnidadeInputSchema).optional(),
  gerentes: z.lazy(() => GerenteCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();

export const UnidadeUncheckedCreateInputSchema: z.ZodType<Prisma.UnidadeUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  nome: z.string(),
  endereco: z.string(),
  pacientes: z.lazy(() => PacienteUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional(),
  colaboradores: z.lazy(() => ColaboradorUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional(),
  gerentes: z.lazy(() => GerenteUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();

export const UnidadeUpdateInputSchema: z.ZodType<Prisma.UnidadeUpdateInput> = z.object({
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endereco: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pacientes: z.lazy(() => PacienteUpdateManyWithoutUnidadeNestedInputSchema).optional(),
  colaboradores: z.lazy(() => ColaboradorUpdateManyWithoutUnidadeNestedInputSchema).optional(),
  gerentes: z.lazy(() => GerenteUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();

export const UnidadeUncheckedUpdateInputSchema: z.ZodType<Prisma.UnidadeUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endereco: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pacientes: z.lazy(() => PacienteUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional(),
  colaboradores: z.lazy(() => ColaboradorUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional(),
  gerentes: z.lazy(() => GerenteUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();

export const UnidadeCreateManyInputSchema: z.ZodType<Prisma.UnidadeCreateManyInput> = z.object({
  id: z.number().int().optional(),
  nome: z.string(),
  endereco: z.string()
}).strict();

export const UnidadeUpdateManyMutationInputSchema: z.ZodType<Prisma.UnidadeUpdateManyMutationInput> = z.object({
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endereco: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UnidadeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UnidadeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endereco: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const EnumRacaFilterSchema: z.ZodType<Prisma.EnumRacaFilter> = z.object({
  equals: z.lazy(() => RacaSchema).optional(),
  in: z.lazy(() => RacaSchema).array().optional(),
  notIn: z.lazy(() => RacaSchema).array().optional(),
  not: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NestedEnumRacaFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const UnidadeRelationFilterSchema: z.ZodType<Prisma.UnidadeRelationFilter> = z.object({
  is: z.lazy(() => UnidadeWhereInputSchema).optional(),
  isNot: z.lazy(() => UnidadeWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const GerenteCountOrderByAggregateInputSchema: z.ZodType<Prisma.GerenteCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  rg: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  telefone: z.lazy(() => SortOrderSchema).optional(),
  raca: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional(),
  rgdocfile: z.lazy(() => SortOrderSchema).optional(),
  fotofile: z.lazy(() => SortOrderSchema).optional(),
  compresfile: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GerenteAvgOrderByAggregateInputSchema: z.ZodType<Prisma.GerenteAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GerenteMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GerenteMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  rg: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  telefone: z.lazy(() => SortOrderSchema).optional(),
  raca: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional(),
  rgdocfile: z.lazy(() => SortOrderSchema).optional(),
  fotofile: z.lazy(() => SortOrderSchema).optional(),
  compresfile: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GerenteMinOrderByAggregateInputSchema: z.ZodType<Prisma.GerenteMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  rg: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  telefone: z.lazy(() => SortOrderSchema).optional(),
  raca: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional(),
  rgdocfile: z.lazy(() => SortOrderSchema).optional(),
  fotofile: z.lazy(() => SortOrderSchema).optional(),
  compresfile: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GerenteSumOrderByAggregateInputSchema: z.ZodType<Prisma.GerenteSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const EnumRacaWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRacaWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RacaSchema).optional(),
  in: z.lazy(() => RacaSchema).array().optional(),
  notIn: z.lazy(() => RacaSchema).array().optional(),
  not: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NestedEnumRacaWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRacaFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRacaFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const EnumGeneroFilterSchema: z.ZodType<Prisma.EnumGeneroFilter> = z.object({
  equals: z.lazy(() => GeneroSchema).optional(),
  in: z.lazy(() => GeneroSchema).array().optional(),
  notIn: z.lazy(() => GeneroSchema).array().optional(),
  not: z.union([ z.lazy(() => GeneroSchema),z.lazy(() => NestedEnumGeneroFilterSchema) ]).optional(),
}).strict();

export const PacienteListRelationFilterSchema: z.ZodType<Prisma.PacienteListRelationFilter> = z.object({
  every: z.lazy(() => PacienteWhereInputSchema).optional(),
  some: z.lazy(() => PacienteWhereInputSchema).optional(),
  none: z.lazy(() => PacienteWhereInputSchema).optional()
}).strict();

export const PacienteOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PacienteOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColaboradorCountOrderByAggregateInputSchema: z.ZodType<Prisma.ColaboradorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  rg: z.lazy(() => SortOrderSchema).optional(),
  nascimento: z.lazy(() => SortOrderSchema).optional(),
  telefone: z.lazy(() => SortOrderSchema).optional(),
  titulo: z.lazy(() => SortOrderSchema).optional(),
  formacao: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  genero: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  raca: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional(),
  rgdocfile: z.lazy(() => SortOrderSchema).optional(),
  fotofile: z.lazy(() => SortOrderSchema).optional(),
  compresfile: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColaboradorAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ColaboradorAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColaboradorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ColaboradorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  rg: z.lazy(() => SortOrderSchema).optional(),
  nascimento: z.lazy(() => SortOrderSchema).optional(),
  telefone: z.lazy(() => SortOrderSchema).optional(),
  titulo: z.lazy(() => SortOrderSchema).optional(),
  formacao: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  genero: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  raca: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional(),
  rgdocfile: z.lazy(() => SortOrderSchema).optional(),
  fotofile: z.lazy(() => SortOrderSchema).optional(),
  compresfile: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColaboradorMinOrderByAggregateInputSchema: z.ZodType<Prisma.ColaboradorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  rg: z.lazy(() => SortOrderSchema).optional(),
  nascimento: z.lazy(() => SortOrderSchema).optional(),
  telefone: z.lazy(() => SortOrderSchema).optional(),
  titulo: z.lazy(() => SortOrderSchema).optional(),
  formacao: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  genero: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  raca: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional(),
  rgdocfile: z.lazy(() => SortOrderSchema).optional(),
  fotofile: z.lazy(() => SortOrderSchema).optional(),
  compresfile: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColaboradorSumOrderByAggregateInputSchema: z.ZodType<Prisma.ColaboradorSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const EnumGeneroWithAggregatesFilterSchema: z.ZodType<Prisma.EnumGeneroWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GeneroSchema).optional(),
  in: z.lazy(() => GeneroSchema).array().optional(),
  notIn: z.lazy(() => GeneroSchema).array().optional(),
  not: z.union([ z.lazy(() => GeneroSchema),z.lazy(() => NestedEnumGeneroWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGeneroFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGeneroFilterSchema).optional()
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const JsonNullableFilterSchema: z.ZodType<Prisma.JsonNullableFilter> = z.object({
  equals: InputJsonValueSchema.optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValueSchema.optional().nullable(),
  array_starts_with: InputJsonValueSchema.optional().nullable(),
  array_ends_with: InputJsonValueSchema.optional().nullable(),
  lt: InputJsonValueSchema.optional(),
  lte: InputJsonValueSchema.optional(),
  gt: InputJsonValueSchema.optional(),
  gte: InputJsonValueSchema.optional(),
  not: InputJsonValueSchema.optional()
}).strict();

export const EnumRacaNullableFilterSchema: z.ZodType<Prisma.EnumRacaNullableFilter> = z.object({
  equals: z.lazy(() => RacaSchema).optional().nullable(),
  in: z.lazy(() => RacaSchema).array().optional().nullable(),
  notIn: z.lazy(() => RacaSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NestedEnumRacaNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ColaboradorListRelationFilterSchema: z.ZodType<Prisma.ColaboradorListRelationFilter> = z.object({
  every: z.lazy(() => ColaboradorWhereInputSchema).optional(),
  some: z.lazy(() => ColaboradorWhereInputSchema).optional(),
  none: z.lazy(() => ColaboradorWhereInputSchema).optional()
}).strict();

export const ColaboradorOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ColaboradorOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PacienteCountOrderByAggregateInputSchema: z.ZodType<Prisma.PacienteCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  analise: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  rg: z.lazy(() => SortOrderSchema).optional(),
  nascimentodata: z.lazy(() => SortOrderSchema).optional(),
  nomemae: z.lazy(() => SortOrderSchema).optional(),
  nomepai: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  telefone: z.lazy(() => SortOrderSchema).optional(),
  rgdocfile: z.lazy(() => SortOrderSchema).optional(),
  fotofile: z.lazy(() => SortOrderSchema).optional(),
  compresfile: z.lazy(() => SortOrderSchema).optional(),
  laudofile: z.lazy(() => SortOrderSchema).optional(),
  relescolar: z.lazy(() => SortOrderSchema).optional(),
  gestacao: z.lazy(() => SortOrderSchema).optional(),
  nascimento: z.lazy(() => SortOrderSchema).optional(),
  autonomia: z.lazy(() => SortOrderSchema).optional(),
  comportamento: z.lazy(() => SortOrderSchema).optional(),
  desenvolimento: z.lazy(() => SortOrderSchema).optional(),
  pedagogico: z.lazy(() => SortOrderSchema).optional(),
  geral: z.lazy(() => SortOrderSchema).optional(),
  mae: z.lazy(() => SortOrderSchema).optional(),
  pai: z.lazy(() => SortOrderSchema).optional(),
  maisinfo: z.lazy(() => SortOrderSchema).optional(),
  escola: z.lazy(() => SortOrderSchema).optional(),
  saudeinfo: z.lazy(() => SortOrderSchema).optional(),
  raca: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PacienteAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PacienteAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PacienteMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PacienteMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  analise: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  rg: z.lazy(() => SortOrderSchema).optional(),
  nascimentodata: z.lazy(() => SortOrderSchema).optional(),
  nomemae: z.lazy(() => SortOrderSchema).optional(),
  nomepai: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  telefone: z.lazy(() => SortOrderSchema).optional(),
  rgdocfile: z.lazy(() => SortOrderSchema).optional(),
  fotofile: z.lazy(() => SortOrderSchema).optional(),
  compresfile: z.lazy(() => SortOrderSchema).optional(),
  laudofile: z.lazy(() => SortOrderSchema).optional(),
  relescolar: z.lazy(() => SortOrderSchema).optional(),
  raca: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PacienteMinOrderByAggregateInputSchema: z.ZodType<Prisma.PacienteMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  analise: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  rg: z.lazy(() => SortOrderSchema).optional(),
  nascimentodata: z.lazy(() => SortOrderSchema).optional(),
  nomemae: z.lazy(() => SortOrderSchema).optional(),
  nomepai: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  telefone: z.lazy(() => SortOrderSchema).optional(),
  rgdocfile: z.lazy(() => SortOrderSchema).optional(),
  fotofile: z.lazy(() => SortOrderSchema).optional(),
  compresfile: z.lazy(() => SortOrderSchema).optional(),
  laudofile: z.lazy(() => SortOrderSchema).optional(),
  relescolar: z.lazy(() => SortOrderSchema).optional(),
  raca: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PacienteSumOrderByAggregateInputSchema: z.ZodType<Prisma.PacienteSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  unidadeId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const JsonNullableWithAggregatesFilterSchema: z.ZodType<Prisma.JsonNullableWithAggregatesFilter> = z.object({
  equals: InputJsonValueSchema.optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValueSchema.optional().nullable(),
  array_starts_with: InputJsonValueSchema.optional().nullable(),
  array_ends_with: InputJsonValueSchema.optional().nullable(),
  lt: InputJsonValueSchema.optional(),
  lte: InputJsonValueSchema.optional(),
  gt: InputJsonValueSchema.optional(),
  gte: InputJsonValueSchema.optional(),
  not: InputJsonValueSchema.optional(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedJsonNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedJsonNullableFilterSchema).optional()
}).strict();

export const EnumRacaNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRacaNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RacaSchema).optional().nullable(),
  in: z.lazy(() => RacaSchema).array().optional().nullable(),
  notIn: z.lazy(() => RacaSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NestedEnumRacaNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRacaNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRacaNullableFilterSchema).optional()
}).strict();

export const GerenteListRelationFilterSchema: z.ZodType<Prisma.GerenteListRelationFilter> = z.object({
  every: z.lazy(() => GerenteWhereInputSchema).optional(),
  some: z.lazy(() => GerenteWhereInputSchema).optional(),
  none: z.lazy(() => GerenteWhereInputSchema).optional()
}).strict();

export const GerenteOrderByRelationAggregateInputSchema: z.ZodType<Prisma.GerenteOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UnidadeCountOrderByAggregateInputSchema: z.ZodType<Prisma.UnidadeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  endereco: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UnidadeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UnidadeAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UnidadeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UnidadeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  endereco: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UnidadeMinOrderByAggregateInputSchema: z.ZodType<Prisma.UnidadeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  endereco: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UnidadeSumOrderByAggregateInputSchema: z.ZodType<Prisma.UnidadeSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UnidadeCreateNestedOneWithoutGerentesInputSchema: z.ZodType<Prisma.UnidadeCreateNestedOneWithoutGerentesInput> = z.object({
  create: z.union([ z.lazy(() => UnidadeCreateWithoutGerentesInputSchema),z.lazy(() => UnidadeUncheckedCreateWithoutGerentesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UnidadeCreateOrConnectWithoutGerentesInputSchema).optional(),
  connect: z.lazy(() => UnidadeWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const EnumRacaFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRacaFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RacaSchema).optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const UnidadeUpdateOneRequiredWithoutGerentesNestedInputSchema: z.ZodType<Prisma.UnidadeUpdateOneRequiredWithoutGerentesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UnidadeCreateWithoutGerentesInputSchema),z.lazy(() => UnidadeUncheckedCreateWithoutGerentesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UnidadeCreateOrConnectWithoutGerentesInputSchema).optional(),
  upsert: z.lazy(() => UnidadeUpsertWithoutGerentesInputSchema).optional(),
  connect: z.lazy(() => UnidadeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UnidadeUpdateToOneWithWhereWithoutGerentesInputSchema),z.lazy(() => UnidadeUpdateWithoutGerentesInputSchema),z.lazy(() => UnidadeUncheckedUpdateWithoutGerentesInputSchema) ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UnidadeCreateNestedOneWithoutColaboradoresInputSchema: z.ZodType<Prisma.UnidadeCreateNestedOneWithoutColaboradoresInput> = z.object({
  create: z.union([ z.lazy(() => UnidadeCreateWithoutColaboradoresInputSchema),z.lazy(() => UnidadeUncheckedCreateWithoutColaboradoresInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UnidadeCreateOrConnectWithoutColaboradoresInputSchema).optional(),
  connect: z.lazy(() => UnidadeWhereUniqueInputSchema).optional()
}).strict();

export const PacienteCreateNestedManyWithoutColaboradoresInputSchema: z.ZodType<Prisma.PacienteCreateNestedManyWithoutColaboradoresInput> = z.object({
  create: z.union([ z.lazy(() => PacienteCreateWithoutColaboradoresInputSchema),z.lazy(() => PacienteCreateWithoutColaboradoresInputSchema).array(),z.lazy(() => PacienteUncheckedCreateWithoutColaboradoresInputSchema),z.lazy(() => PacienteUncheckedCreateWithoutColaboradoresInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PacienteCreateOrConnectWithoutColaboradoresInputSchema),z.lazy(() => PacienteCreateOrConnectWithoutColaboradoresInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PacienteUncheckedCreateNestedManyWithoutColaboradoresInputSchema: z.ZodType<Prisma.PacienteUncheckedCreateNestedManyWithoutColaboradoresInput> = z.object({
  create: z.union([ z.lazy(() => PacienteCreateWithoutColaboradoresInputSchema),z.lazy(() => PacienteCreateWithoutColaboradoresInputSchema).array(),z.lazy(() => PacienteUncheckedCreateWithoutColaboradoresInputSchema),z.lazy(() => PacienteUncheckedCreateWithoutColaboradoresInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PacienteCreateOrConnectWithoutColaboradoresInputSchema),z.lazy(() => PacienteCreateOrConnectWithoutColaboradoresInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const EnumGeneroFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumGeneroFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => GeneroSchema).optional()
}).strict();

export const UnidadeUpdateOneRequiredWithoutColaboradoresNestedInputSchema: z.ZodType<Prisma.UnidadeUpdateOneRequiredWithoutColaboradoresNestedInput> = z.object({
  create: z.union([ z.lazy(() => UnidadeCreateWithoutColaboradoresInputSchema),z.lazy(() => UnidadeUncheckedCreateWithoutColaboradoresInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UnidadeCreateOrConnectWithoutColaboradoresInputSchema).optional(),
  upsert: z.lazy(() => UnidadeUpsertWithoutColaboradoresInputSchema).optional(),
  connect: z.lazy(() => UnidadeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UnidadeUpdateToOneWithWhereWithoutColaboradoresInputSchema),z.lazy(() => UnidadeUpdateWithoutColaboradoresInputSchema),z.lazy(() => UnidadeUncheckedUpdateWithoutColaboradoresInputSchema) ]).optional(),
}).strict();

export const PacienteUpdateManyWithoutColaboradoresNestedInputSchema: z.ZodType<Prisma.PacienteUpdateManyWithoutColaboradoresNestedInput> = z.object({
  create: z.union([ z.lazy(() => PacienteCreateWithoutColaboradoresInputSchema),z.lazy(() => PacienteCreateWithoutColaboradoresInputSchema).array(),z.lazy(() => PacienteUncheckedCreateWithoutColaboradoresInputSchema),z.lazy(() => PacienteUncheckedCreateWithoutColaboradoresInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PacienteCreateOrConnectWithoutColaboradoresInputSchema),z.lazy(() => PacienteCreateOrConnectWithoutColaboradoresInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PacienteUpsertWithWhereUniqueWithoutColaboradoresInputSchema),z.lazy(() => PacienteUpsertWithWhereUniqueWithoutColaboradoresInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PacienteUpdateWithWhereUniqueWithoutColaboradoresInputSchema),z.lazy(() => PacienteUpdateWithWhereUniqueWithoutColaboradoresInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PacienteUpdateManyWithWhereWithoutColaboradoresInputSchema),z.lazy(() => PacienteUpdateManyWithWhereWithoutColaboradoresInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PacienteScalarWhereInputSchema),z.lazy(() => PacienteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PacienteUncheckedUpdateManyWithoutColaboradoresNestedInputSchema: z.ZodType<Prisma.PacienteUncheckedUpdateManyWithoutColaboradoresNestedInput> = z.object({
  create: z.union([ z.lazy(() => PacienteCreateWithoutColaboradoresInputSchema),z.lazy(() => PacienteCreateWithoutColaboradoresInputSchema).array(),z.lazy(() => PacienteUncheckedCreateWithoutColaboradoresInputSchema),z.lazy(() => PacienteUncheckedCreateWithoutColaboradoresInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PacienteCreateOrConnectWithoutColaboradoresInputSchema),z.lazy(() => PacienteCreateOrConnectWithoutColaboradoresInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PacienteUpsertWithWhereUniqueWithoutColaboradoresInputSchema),z.lazy(() => PacienteUpsertWithWhereUniqueWithoutColaboradoresInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PacienteUpdateWithWhereUniqueWithoutColaboradoresInputSchema),z.lazy(() => PacienteUpdateWithWhereUniqueWithoutColaboradoresInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PacienteUpdateManyWithWhereWithoutColaboradoresInputSchema),z.lazy(() => PacienteUpdateManyWithWhereWithoutColaboradoresInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PacienteScalarWhereInputSchema),z.lazy(() => PacienteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UnidadeCreateNestedOneWithoutPacientesInputSchema: z.ZodType<Prisma.UnidadeCreateNestedOneWithoutPacientesInput> = z.object({
  create: z.union([ z.lazy(() => UnidadeCreateWithoutPacientesInputSchema),z.lazy(() => UnidadeUncheckedCreateWithoutPacientesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UnidadeCreateOrConnectWithoutPacientesInputSchema).optional(),
  connect: z.lazy(() => UnidadeWhereUniqueInputSchema).optional()
}).strict();

export const ColaboradorCreateNestedManyWithoutPacientesInputSchema: z.ZodType<Prisma.ColaboradorCreateNestedManyWithoutPacientesInput> = z.object({
  create: z.union([ z.lazy(() => ColaboradorCreateWithoutPacientesInputSchema),z.lazy(() => ColaboradorCreateWithoutPacientesInputSchema).array(),z.lazy(() => ColaboradorUncheckedCreateWithoutPacientesInputSchema),z.lazy(() => ColaboradorUncheckedCreateWithoutPacientesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColaboradorCreateOrConnectWithoutPacientesInputSchema),z.lazy(() => ColaboradorCreateOrConnectWithoutPacientesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ColaboradorUncheckedCreateNestedManyWithoutPacientesInputSchema: z.ZodType<Prisma.ColaboradorUncheckedCreateNestedManyWithoutPacientesInput> = z.object({
  create: z.union([ z.lazy(() => ColaboradorCreateWithoutPacientesInputSchema),z.lazy(() => ColaboradorCreateWithoutPacientesInputSchema).array(),z.lazy(() => ColaboradorUncheckedCreateWithoutPacientesInputSchema),z.lazy(() => ColaboradorUncheckedCreateWithoutPacientesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColaboradorCreateOrConnectWithoutPacientesInputSchema),z.lazy(() => ColaboradorCreateOrConnectWithoutPacientesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const NullableEnumRacaFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumRacaFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RacaSchema).optional().nullable()
}).strict();

export const UnidadeUpdateOneRequiredWithoutPacientesNestedInputSchema: z.ZodType<Prisma.UnidadeUpdateOneRequiredWithoutPacientesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UnidadeCreateWithoutPacientesInputSchema),z.lazy(() => UnidadeUncheckedCreateWithoutPacientesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UnidadeCreateOrConnectWithoutPacientesInputSchema).optional(),
  upsert: z.lazy(() => UnidadeUpsertWithoutPacientesInputSchema).optional(),
  connect: z.lazy(() => UnidadeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UnidadeUpdateToOneWithWhereWithoutPacientesInputSchema),z.lazy(() => UnidadeUpdateWithoutPacientesInputSchema),z.lazy(() => UnidadeUncheckedUpdateWithoutPacientesInputSchema) ]).optional(),
}).strict();

export const ColaboradorUpdateManyWithoutPacientesNestedInputSchema: z.ZodType<Prisma.ColaboradorUpdateManyWithoutPacientesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ColaboradorCreateWithoutPacientesInputSchema),z.lazy(() => ColaboradorCreateWithoutPacientesInputSchema).array(),z.lazy(() => ColaboradorUncheckedCreateWithoutPacientesInputSchema),z.lazy(() => ColaboradorUncheckedCreateWithoutPacientesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColaboradorCreateOrConnectWithoutPacientesInputSchema),z.lazy(() => ColaboradorCreateOrConnectWithoutPacientesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ColaboradorUpsertWithWhereUniqueWithoutPacientesInputSchema),z.lazy(() => ColaboradorUpsertWithWhereUniqueWithoutPacientesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ColaboradorUpdateWithWhereUniqueWithoutPacientesInputSchema),z.lazy(() => ColaboradorUpdateWithWhereUniqueWithoutPacientesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ColaboradorUpdateManyWithWhereWithoutPacientesInputSchema),z.lazy(() => ColaboradorUpdateManyWithWhereWithoutPacientesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ColaboradorScalarWhereInputSchema),z.lazy(() => ColaboradorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ColaboradorUncheckedUpdateManyWithoutPacientesNestedInputSchema: z.ZodType<Prisma.ColaboradorUncheckedUpdateManyWithoutPacientesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ColaboradorCreateWithoutPacientesInputSchema),z.lazy(() => ColaboradorCreateWithoutPacientesInputSchema).array(),z.lazy(() => ColaboradorUncheckedCreateWithoutPacientesInputSchema),z.lazy(() => ColaboradorUncheckedCreateWithoutPacientesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColaboradorCreateOrConnectWithoutPacientesInputSchema),z.lazy(() => ColaboradorCreateOrConnectWithoutPacientesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ColaboradorUpsertWithWhereUniqueWithoutPacientesInputSchema),z.lazy(() => ColaboradorUpsertWithWhereUniqueWithoutPacientesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ColaboradorUpdateWithWhereUniqueWithoutPacientesInputSchema),z.lazy(() => ColaboradorUpdateWithWhereUniqueWithoutPacientesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ColaboradorUpdateManyWithWhereWithoutPacientesInputSchema),z.lazy(() => ColaboradorUpdateManyWithWhereWithoutPacientesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ColaboradorScalarWhereInputSchema),z.lazy(() => ColaboradorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PacienteCreateNestedManyWithoutUnidadeInputSchema: z.ZodType<Prisma.PacienteCreateNestedManyWithoutUnidadeInput> = z.object({
  create: z.union([ z.lazy(() => PacienteCreateWithoutUnidadeInputSchema),z.lazy(() => PacienteCreateWithoutUnidadeInputSchema).array(),z.lazy(() => PacienteUncheckedCreateWithoutUnidadeInputSchema),z.lazy(() => PacienteUncheckedCreateWithoutUnidadeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PacienteCreateOrConnectWithoutUnidadeInputSchema),z.lazy(() => PacienteCreateOrConnectWithoutUnidadeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PacienteCreateManyUnidadeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ColaboradorCreateNestedManyWithoutUnidadeInputSchema: z.ZodType<Prisma.ColaboradorCreateNestedManyWithoutUnidadeInput> = z.object({
  create: z.union([ z.lazy(() => ColaboradorCreateWithoutUnidadeInputSchema),z.lazy(() => ColaboradorCreateWithoutUnidadeInputSchema).array(),z.lazy(() => ColaboradorUncheckedCreateWithoutUnidadeInputSchema),z.lazy(() => ColaboradorUncheckedCreateWithoutUnidadeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColaboradorCreateOrConnectWithoutUnidadeInputSchema),z.lazy(() => ColaboradorCreateOrConnectWithoutUnidadeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ColaboradorCreateManyUnidadeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const GerenteCreateNestedManyWithoutUnidadeInputSchema: z.ZodType<Prisma.GerenteCreateNestedManyWithoutUnidadeInput> = z.object({
  create: z.union([ z.lazy(() => GerenteCreateWithoutUnidadeInputSchema),z.lazy(() => GerenteCreateWithoutUnidadeInputSchema).array(),z.lazy(() => GerenteUncheckedCreateWithoutUnidadeInputSchema),z.lazy(() => GerenteUncheckedCreateWithoutUnidadeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GerenteCreateOrConnectWithoutUnidadeInputSchema),z.lazy(() => GerenteCreateOrConnectWithoutUnidadeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GerenteCreateManyUnidadeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GerenteWhereUniqueInputSchema),z.lazy(() => GerenteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PacienteUncheckedCreateNestedManyWithoutUnidadeInputSchema: z.ZodType<Prisma.PacienteUncheckedCreateNestedManyWithoutUnidadeInput> = z.object({
  create: z.union([ z.lazy(() => PacienteCreateWithoutUnidadeInputSchema),z.lazy(() => PacienteCreateWithoutUnidadeInputSchema).array(),z.lazy(() => PacienteUncheckedCreateWithoutUnidadeInputSchema),z.lazy(() => PacienteUncheckedCreateWithoutUnidadeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PacienteCreateOrConnectWithoutUnidadeInputSchema),z.lazy(() => PacienteCreateOrConnectWithoutUnidadeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PacienteCreateManyUnidadeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ColaboradorUncheckedCreateNestedManyWithoutUnidadeInputSchema: z.ZodType<Prisma.ColaboradorUncheckedCreateNestedManyWithoutUnidadeInput> = z.object({
  create: z.union([ z.lazy(() => ColaboradorCreateWithoutUnidadeInputSchema),z.lazy(() => ColaboradorCreateWithoutUnidadeInputSchema).array(),z.lazy(() => ColaboradorUncheckedCreateWithoutUnidadeInputSchema),z.lazy(() => ColaboradorUncheckedCreateWithoutUnidadeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColaboradorCreateOrConnectWithoutUnidadeInputSchema),z.lazy(() => ColaboradorCreateOrConnectWithoutUnidadeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ColaboradorCreateManyUnidadeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const GerenteUncheckedCreateNestedManyWithoutUnidadeInputSchema: z.ZodType<Prisma.GerenteUncheckedCreateNestedManyWithoutUnidadeInput> = z.object({
  create: z.union([ z.lazy(() => GerenteCreateWithoutUnidadeInputSchema),z.lazy(() => GerenteCreateWithoutUnidadeInputSchema).array(),z.lazy(() => GerenteUncheckedCreateWithoutUnidadeInputSchema),z.lazy(() => GerenteUncheckedCreateWithoutUnidadeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GerenteCreateOrConnectWithoutUnidadeInputSchema),z.lazy(() => GerenteCreateOrConnectWithoutUnidadeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GerenteCreateManyUnidadeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GerenteWhereUniqueInputSchema),z.lazy(() => GerenteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PacienteUpdateManyWithoutUnidadeNestedInputSchema: z.ZodType<Prisma.PacienteUpdateManyWithoutUnidadeNestedInput> = z.object({
  create: z.union([ z.lazy(() => PacienteCreateWithoutUnidadeInputSchema),z.lazy(() => PacienteCreateWithoutUnidadeInputSchema).array(),z.lazy(() => PacienteUncheckedCreateWithoutUnidadeInputSchema),z.lazy(() => PacienteUncheckedCreateWithoutUnidadeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PacienteCreateOrConnectWithoutUnidadeInputSchema),z.lazy(() => PacienteCreateOrConnectWithoutUnidadeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PacienteUpsertWithWhereUniqueWithoutUnidadeInputSchema),z.lazy(() => PacienteUpsertWithWhereUniqueWithoutUnidadeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PacienteCreateManyUnidadeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PacienteUpdateWithWhereUniqueWithoutUnidadeInputSchema),z.lazy(() => PacienteUpdateWithWhereUniqueWithoutUnidadeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PacienteUpdateManyWithWhereWithoutUnidadeInputSchema),z.lazy(() => PacienteUpdateManyWithWhereWithoutUnidadeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PacienteScalarWhereInputSchema),z.lazy(() => PacienteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ColaboradorUpdateManyWithoutUnidadeNestedInputSchema: z.ZodType<Prisma.ColaboradorUpdateManyWithoutUnidadeNestedInput> = z.object({
  create: z.union([ z.lazy(() => ColaboradorCreateWithoutUnidadeInputSchema),z.lazy(() => ColaboradorCreateWithoutUnidadeInputSchema).array(),z.lazy(() => ColaboradorUncheckedCreateWithoutUnidadeInputSchema),z.lazy(() => ColaboradorUncheckedCreateWithoutUnidadeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColaboradorCreateOrConnectWithoutUnidadeInputSchema),z.lazy(() => ColaboradorCreateOrConnectWithoutUnidadeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ColaboradorUpsertWithWhereUniqueWithoutUnidadeInputSchema),z.lazy(() => ColaboradorUpsertWithWhereUniqueWithoutUnidadeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ColaboradorCreateManyUnidadeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ColaboradorUpdateWithWhereUniqueWithoutUnidadeInputSchema),z.lazy(() => ColaboradorUpdateWithWhereUniqueWithoutUnidadeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ColaboradorUpdateManyWithWhereWithoutUnidadeInputSchema),z.lazy(() => ColaboradorUpdateManyWithWhereWithoutUnidadeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ColaboradorScalarWhereInputSchema),z.lazy(() => ColaboradorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GerenteUpdateManyWithoutUnidadeNestedInputSchema: z.ZodType<Prisma.GerenteUpdateManyWithoutUnidadeNestedInput> = z.object({
  create: z.union([ z.lazy(() => GerenteCreateWithoutUnidadeInputSchema),z.lazy(() => GerenteCreateWithoutUnidadeInputSchema).array(),z.lazy(() => GerenteUncheckedCreateWithoutUnidadeInputSchema),z.lazy(() => GerenteUncheckedCreateWithoutUnidadeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GerenteCreateOrConnectWithoutUnidadeInputSchema),z.lazy(() => GerenteCreateOrConnectWithoutUnidadeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GerenteUpsertWithWhereUniqueWithoutUnidadeInputSchema),z.lazy(() => GerenteUpsertWithWhereUniqueWithoutUnidadeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GerenteCreateManyUnidadeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GerenteWhereUniqueInputSchema),z.lazy(() => GerenteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GerenteWhereUniqueInputSchema),z.lazy(() => GerenteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GerenteWhereUniqueInputSchema),z.lazy(() => GerenteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GerenteWhereUniqueInputSchema),z.lazy(() => GerenteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GerenteUpdateWithWhereUniqueWithoutUnidadeInputSchema),z.lazy(() => GerenteUpdateWithWhereUniqueWithoutUnidadeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GerenteUpdateManyWithWhereWithoutUnidadeInputSchema),z.lazy(() => GerenteUpdateManyWithWhereWithoutUnidadeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GerenteScalarWhereInputSchema),z.lazy(() => GerenteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PacienteUncheckedUpdateManyWithoutUnidadeNestedInputSchema: z.ZodType<Prisma.PacienteUncheckedUpdateManyWithoutUnidadeNestedInput> = z.object({
  create: z.union([ z.lazy(() => PacienteCreateWithoutUnidadeInputSchema),z.lazy(() => PacienteCreateWithoutUnidadeInputSchema).array(),z.lazy(() => PacienteUncheckedCreateWithoutUnidadeInputSchema),z.lazy(() => PacienteUncheckedCreateWithoutUnidadeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PacienteCreateOrConnectWithoutUnidadeInputSchema),z.lazy(() => PacienteCreateOrConnectWithoutUnidadeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PacienteUpsertWithWhereUniqueWithoutUnidadeInputSchema),z.lazy(() => PacienteUpsertWithWhereUniqueWithoutUnidadeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PacienteCreateManyUnidadeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PacienteWhereUniqueInputSchema),z.lazy(() => PacienteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PacienteUpdateWithWhereUniqueWithoutUnidadeInputSchema),z.lazy(() => PacienteUpdateWithWhereUniqueWithoutUnidadeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PacienteUpdateManyWithWhereWithoutUnidadeInputSchema),z.lazy(() => PacienteUpdateManyWithWhereWithoutUnidadeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PacienteScalarWhereInputSchema),z.lazy(() => PacienteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ColaboradorUncheckedUpdateManyWithoutUnidadeNestedInputSchema: z.ZodType<Prisma.ColaboradorUncheckedUpdateManyWithoutUnidadeNestedInput> = z.object({
  create: z.union([ z.lazy(() => ColaboradorCreateWithoutUnidadeInputSchema),z.lazy(() => ColaboradorCreateWithoutUnidadeInputSchema).array(),z.lazy(() => ColaboradorUncheckedCreateWithoutUnidadeInputSchema),z.lazy(() => ColaboradorUncheckedCreateWithoutUnidadeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColaboradorCreateOrConnectWithoutUnidadeInputSchema),z.lazy(() => ColaboradorCreateOrConnectWithoutUnidadeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ColaboradorUpsertWithWhereUniqueWithoutUnidadeInputSchema),z.lazy(() => ColaboradorUpsertWithWhereUniqueWithoutUnidadeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ColaboradorCreateManyUnidadeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ColaboradorWhereUniqueInputSchema),z.lazy(() => ColaboradorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ColaboradorUpdateWithWhereUniqueWithoutUnidadeInputSchema),z.lazy(() => ColaboradorUpdateWithWhereUniqueWithoutUnidadeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ColaboradorUpdateManyWithWhereWithoutUnidadeInputSchema),z.lazy(() => ColaboradorUpdateManyWithWhereWithoutUnidadeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ColaboradorScalarWhereInputSchema),z.lazy(() => ColaboradorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GerenteUncheckedUpdateManyWithoutUnidadeNestedInputSchema: z.ZodType<Prisma.GerenteUncheckedUpdateManyWithoutUnidadeNestedInput> = z.object({
  create: z.union([ z.lazy(() => GerenteCreateWithoutUnidadeInputSchema),z.lazy(() => GerenteCreateWithoutUnidadeInputSchema).array(),z.lazy(() => GerenteUncheckedCreateWithoutUnidadeInputSchema),z.lazy(() => GerenteUncheckedCreateWithoutUnidadeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GerenteCreateOrConnectWithoutUnidadeInputSchema),z.lazy(() => GerenteCreateOrConnectWithoutUnidadeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GerenteUpsertWithWhereUniqueWithoutUnidadeInputSchema),z.lazy(() => GerenteUpsertWithWhereUniqueWithoutUnidadeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GerenteCreateManyUnidadeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GerenteWhereUniqueInputSchema),z.lazy(() => GerenteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GerenteWhereUniqueInputSchema),z.lazy(() => GerenteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GerenteWhereUniqueInputSchema),z.lazy(() => GerenteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GerenteWhereUniqueInputSchema),z.lazy(() => GerenteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GerenteUpdateWithWhereUniqueWithoutUnidadeInputSchema),z.lazy(() => GerenteUpdateWithWhereUniqueWithoutUnidadeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GerenteUpdateManyWithWhereWithoutUnidadeInputSchema),z.lazy(() => GerenteUpdateManyWithWhereWithoutUnidadeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GerenteScalarWhereInputSchema),z.lazy(() => GerenteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedEnumRacaFilterSchema: z.ZodType<Prisma.NestedEnumRacaFilter> = z.object({
  equals: z.lazy(() => RacaSchema).optional(),
  in: z.lazy(() => RacaSchema).array().optional(),
  notIn: z.lazy(() => RacaSchema).array().optional(),
  not: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NestedEnumRacaFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedEnumRacaWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRacaWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RacaSchema).optional(),
  in: z.lazy(() => RacaSchema).array().optional(),
  notIn: z.lazy(() => RacaSchema).array().optional(),
  not: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NestedEnumRacaWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRacaFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRacaFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumGeneroFilterSchema: z.ZodType<Prisma.NestedEnumGeneroFilter> = z.object({
  equals: z.lazy(() => GeneroSchema).optional(),
  in: z.lazy(() => GeneroSchema).array().optional(),
  notIn: z.lazy(() => GeneroSchema).array().optional(),
  not: z.union([ z.lazy(() => GeneroSchema),z.lazy(() => NestedEnumGeneroFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedEnumGeneroWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumGeneroWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GeneroSchema).optional(),
  in: z.lazy(() => GeneroSchema).array().optional(),
  notIn: z.lazy(() => GeneroSchema).array().optional(),
  not: z.union([ z.lazy(() => GeneroSchema),z.lazy(() => NestedEnumGeneroWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGeneroFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGeneroFilterSchema).optional()
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedEnumRacaNullableFilterSchema: z.ZodType<Prisma.NestedEnumRacaNullableFilter> = z.object({
  equals: z.lazy(() => RacaSchema).optional().nullable(),
  in: z.lazy(() => RacaSchema).array().optional().nullable(),
  notIn: z.lazy(() => RacaSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NestedEnumRacaNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedJsonNullableFilterSchema: z.ZodType<Prisma.NestedJsonNullableFilter> = z.object({
  equals: InputJsonValueSchema.optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValueSchema.optional().nullable(),
  array_starts_with: InputJsonValueSchema.optional().nullable(),
  array_ends_with: InputJsonValueSchema.optional().nullable(),
  lt: InputJsonValueSchema.optional(),
  lte: InputJsonValueSchema.optional(),
  gt: InputJsonValueSchema.optional(),
  gte: InputJsonValueSchema.optional(),
  not: InputJsonValueSchema.optional()
}).strict();

export const NestedEnumRacaNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRacaNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RacaSchema).optional().nullable(),
  in: z.lazy(() => RacaSchema).array().optional().nullable(),
  notIn: z.lazy(() => RacaSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NestedEnumRacaNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRacaNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRacaNullableFilterSchema).optional()
}).strict();

export const UnidadeCreateWithoutGerentesInputSchema: z.ZodType<Prisma.UnidadeCreateWithoutGerentesInput> = z.object({
  nome: z.string(),
  endereco: z.string(),
  pacientes: z.lazy(() => PacienteCreateNestedManyWithoutUnidadeInputSchema).optional(),
  colaboradores: z.lazy(() => ColaboradorCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();

export const UnidadeUncheckedCreateWithoutGerentesInputSchema: z.ZodType<Prisma.UnidadeUncheckedCreateWithoutGerentesInput> = z.object({
  id: z.number().int().optional(),
  nome: z.string(),
  endereco: z.string(),
  pacientes: z.lazy(() => PacienteUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional(),
  colaboradores: z.lazy(() => ColaboradorUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();

export const UnidadeCreateOrConnectWithoutGerentesInputSchema: z.ZodType<Prisma.UnidadeCreateOrConnectWithoutGerentesInput> = z.object({
  where: z.lazy(() => UnidadeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UnidadeCreateWithoutGerentesInputSchema),z.lazy(() => UnidadeUncheckedCreateWithoutGerentesInputSchema) ]),
}).strict();

export const UnidadeUpsertWithoutGerentesInputSchema: z.ZodType<Prisma.UnidadeUpsertWithoutGerentesInput> = z.object({
  update: z.union([ z.lazy(() => UnidadeUpdateWithoutGerentesInputSchema),z.lazy(() => UnidadeUncheckedUpdateWithoutGerentesInputSchema) ]),
  create: z.union([ z.lazy(() => UnidadeCreateWithoutGerentesInputSchema),z.lazy(() => UnidadeUncheckedCreateWithoutGerentesInputSchema) ]),
  where: z.lazy(() => UnidadeWhereInputSchema).optional()
}).strict();

export const UnidadeUpdateToOneWithWhereWithoutGerentesInputSchema: z.ZodType<Prisma.UnidadeUpdateToOneWithWhereWithoutGerentesInput> = z.object({
  where: z.lazy(() => UnidadeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UnidadeUpdateWithoutGerentesInputSchema),z.lazy(() => UnidadeUncheckedUpdateWithoutGerentesInputSchema) ]),
}).strict();

export const UnidadeUpdateWithoutGerentesInputSchema: z.ZodType<Prisma.UnidadeUpdateWithoutGerentesInput> = z.object({
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endereco: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pacientes: z.lazy(() => PacienteUpdateManyWithoutUnidadeNestedInputSchema).optional(),
  colaboradores: z.lazy(() => ColaboradorUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();

export const UnidadeUncheckedUpdateWithoutGerentesInputSchema: z.ZodType<Prisma.UnidadeUncheckedUpdateWithoutGerentesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endereco: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pacientes: z.lazy(() => PacienteUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional(),
  colaboradores: z.lazy(() => ColaboradorUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();

export const UnidadeCreateWithoutColaboradoresInputSchema: z.ZodType<Prisma.UnidadeCreateWithoutColaboradoresInput> = z.object({
  nome: z.string(),
  endereco: z.string(),
  pacientes: z.lazy(() => PacienteCreateNestedManyWithoutUnidadeInputSchema).optional(),
  gerentes: z.lazy(() => GerenteCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();

export const UnidadeUncheckedCreateWithoutColaboradoresInputSchema: z.ZodType<Prisma.UnidadeUncheckedCreateWithoutColaboradoresInput> = z.object({
  id: z.number().int().optional(),
  nome: z.string(),
  endereco: z.string(),
  pacientes: z.lazy(() => PacienteUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional(),
  gerentes: z.lazy(() => GerenteUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();

export const UnidadeCreateOrConnectWithoutColaboradoresInputSchema: z.ZodType<Prisma.UnidadeCreateOrConnectWithoutColaboradoresInput> = z.object({
  where: z.lazy(() => UnidadeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UnidadeCreateWithoutColaboradoresInputSchema),z.lazy(() => UnidadeUncheckedCreateWithoutColaboradoresInputSchema) ]),
}).strict();

export const PacienteCreateWithoutColaboradoresInputSchema: z.ZodType<Prisma.PacienteCreateWithoutColaboradoresInput> = z.object({
  analise: z.boolean().optional(),
  nome: z.string().optional().nullable(),
  cpf: z.string(),
  rg: z.string().optional().nullable(),
  nascimentodata: z.string().optional().nullable(),
  nomemae: z.string().optional().nullable(),
  nomepai: z.string().optional().nullable(),
  email: z.string(),
  password: z.string(),
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
  unidade: z.lazy(() => UnidadeCreateNestedOneWithoutPacientesInputSchema).optional()
}).strict();

export const PacienteUncheckedCreateWithoutColaboradoresInputSchema: z.ZodType<Prisma.PacienteUncheckedCreateWithoutColaboradoresInput> = z.object({
  id: z.number().int().optional(),
  analise: z.boolean().optional(),
  nome: z.string().optional().nullable(),
  cpf: z.string(),
  rg: z.string().optional().nullable(),
  nascimentodata: z.string().optional().nullable(),
  nomemae: z.string().optional().nullable(),
  nomepai: z.string().optional().nullable(),
  unidadeId: z.number().int().optional(),
  email: z.string(),
  password: z.string(),
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
  raca: z.lazy(() => RacaSchema).optional().nullable()
}).strict();

export const PacienteCreateOrConnectWithoutColaboradoresInputSchema: z.ZodType<Prisma.PacienteCreateOrConnectWithoutColaboradoresInput> = z.object({
  where: z.lazy(() => PacienteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PacienteCreateWithoutColaboradoresInputSchema),z.lazy(() => PacienteUncheckedCreateWithoutColaboradoresInputSchema) ]),
}).strict();

export const UnidadeUpsertWithoutColaboradoresInputSchema: z.ZodType<Prisma.UnidadeUpsertWithoutColaboradoresInput> = z.object({
  update: z.union([ z.lazy(() => UnidadeUpdateWithoutColaboradoresInputSchema),z.lazy(() => UnidadeUncheckedUpdateWithoutColaboradoresInputSchema) ]),
  create: z.union([ z.lazy(() => UnidadeCreateWithoutColaboradoresInputSchema),z.lazy(() => UnidadeUncheckedCreateWithoutColaboradoresInputSchema) ]),
  where: z.lazy(() => UnidadeWhereInputSchema).optional()
}).strict();

export const UnidadeUpdateToOneWithWhereWithoutColaboradoresInputSchema: z.ZodType<Prisma.UnidadeUpdateToOneWithWhereWithoutColaboradoresInput> = z.object({
  where: z.lazy(() => UnidadeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UnidadeUpdateWithoutColaboradoresInputSchema),z.lazy(() => UnidadeUncheckedUpdateWithoutColaboradoresInputSchema) ]),
}).strict();

export const UnidadeUpdateWithoutColaboradoresInputSchema: z.ZodType<Prisma.UnidadeUpdateWithoutColaboradoresInput> = z.object({
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endereco: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pacientes: z.lazy(() => PacienteUpdateManyWithoutUnidadeNestedInputSchema).optional(),
  gerentes: z.lazy(() => GerenteUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();

export const UnidadeUncheckedUpdateWithoutColaboradoresInputSchema: z.ZodType<Prisma.UnidadeUncheckedUpdateWithoutColaboradoresInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endereco: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pacientes: z.lazy(() => PacienteUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional(),
  gerentes: z.lazy(() => GerenteUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();

export const PacienteUpsertWithWhereUniqueWithoutColaboradoresInputSchema: z.ZodType<Prisma.PacienteUpsertWithWhereUniqueWithoutColaboradoresInput> = z.object({
  where: z.lazy(() => PacienteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PacienteUpdateWithoutColaboradoresInputSchema),z.lazy(() => PacienteUncheckedUpdateWithoutColaboradoresInputSchema) ]),
  create: z.union([ z.lazy(() => PacienteCreateWithoutColaboradoresInputSchema),z.lazy(() => PacienteUncheckedCreateWithoutColaboradoresInputSchema) ]),
}).strict();

export const PacienteUpdateWithWhereUniqueWithoutColaboradoresInputSchema: z.ZodType<Prisma.PacienteUpdateWithWhereUniqueWithoutColaboradoresInput> = z.object({
  where: z.lazy(() => PacienteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PacienteUpdateWithoutColaboradoresInputSchema),z.lazy(() => PacienteUncheckedUpdateWithoutColaboradoresInputSchema) ]),
}).strict();

export const PacienteUpdateManyWithWhereWithoutColaboradoresInputSchema: z.ZodType<Prisma.PacienteUpdateManyWithWhereWithoutColaboradoresInput> = z.object({
  where: z.lazy(() => PacienteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PacienteUpdateManyMutationInputSchema),z.lazy(() => PacienteUncheckedUpdateManyWithoutColaboradoresInputSchema) ]),
}).strict();

export const PacienteScalarWhereInputSchema: z.ZodType<Prisma.PacienteScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PacienteScalarWhereInputSchema),z.lazy(() => PacienteScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PacienteScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PacienteScalarWhereInputSchema),z.lazy(() => PacienteScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  analise: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  nome: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  cpf: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rg: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nascimentodata: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nomemae: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nomepai: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  unidadeId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  telefone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rgdocfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fotofile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  compresfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  laudofile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  relescolar: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  gestacao: z.lazy(() => JsonNullableFilterSchema).optional(),
  nascimento: z.lazy(() => JsonNullableFilterSchema).optional(),
  autonomia: z.lazy(() => JsonNullableFilterSchema).optional(),
  comportamento: z.lazy(() => JsonNullableFilterSchema).optional(),
  desenvolimento: z.lazy(() => JsonNullableFilterSchema).optional(),
  pedagogico: z.lazy(() => JsonNullableFilterSchema).optional(),
  geral: z.lazy(() => JsonNullableFilterSchema).optional(),
  mae: z.lazy(() => JsonNullableFilterSchema).optional(),
  pai: z.lazy(() => JsonNullableFilterSchema).optional(),
  maisinfo: z.lazy(() => JsonNullableFilterSchema).optional(),
  escola: z.lazy(() => JsonNullableFilterSchema).optional(),
  saudeinfo: z.lazy(() => JsonNullableFilterSchema).optional(),
  raca: z.union([ z.lazy(() => EnumRacaNullableFilterSchema),z.lazy(() => RacaSchema) ]).optional().nullable(),
}).strict();

export const UnidadeCreateWithoutPacientesInputSchema: z.ZodType<Prisma.UnidadeCreateWithoutPacientesInput> = z.object({
  nome: z.string(),
  endereco: z.string(),
  colaboradores: z.lazy(() => ColaboradorCreateNestedManyWithoutUnidadeInputSchema).optional(),
  gerentes: z.lazy(() => GerenteCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();

export const UnidadeUncheckedCreateWithoutPacientesInputSchema: z.ZodType<Prisma.UnidadeUncheckedCreateWithoutPacientesInput> = z.object({
  id: z.number().int().optional(),
  nome: z.string(),
  endereco: z.string(),
  colaboradores: z.lazy(() => ColaboradorUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional(),
  gerentes: z.lazy(() => GerenteUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();

export const UnidadeCreateOrConnectWithoutPacientesInputSchema: z.ZodType<Prisma.UnidadeCreateOrConnectWithoutPacientesInput> = z.object({
  where: z.lazy(() => UnidadeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UnidadeCreateWithoutPacientesInputSchema),z.lazy(() => UnidadeUncheckedCreateWithoutPacientesInputSchema) ]),
}).strict();

export const ColaboradorCreateWithoutPacientesInputSchema: z.ZodType<Prisma.ColaboradorCreateWithoutPacientesInput> = z.object({
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
  unidade: z.lazy(() => UnidadeCreateNestedOneWithoutColaboradoresInputSchema)
}).strict();

export const ColaboradorUncheckedCreateWithoutPacientesInputSchema: z.ZodType<Prisma.ColaboradorUncheckedCreateWithoutPacientesInput> = z.object({
  id: z.number().int().optional(),
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
  unidadeId: z.number().int(),
  rgdocfile: z.string().optional().nullable(),
  fotofile: z.string().optional().nullable(),
  compresfile: z.string().optional().nullable()
}).strict();

export const ColaboradorCreateOrConnectWithoutPacientesInputSchema: z.ZodType<Prisma.ColaboradorCreateOrConnectWithoutPacientesInput> = z.object({
  where: z.lazy(() => ColaboradorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ColaboradorCreateWithoutPacientesInputSchema),z.lazy(() => ColaboradorUncheckedCreateWithoutPacientesInputSchema) ]),
}).strict();

export const UnidadeUpsertWithoutPacientesInputSchema: z.ZodType<Prisma.UnidadeUpsertWithoutPacientesInput> = z.object({
  update: z.union([ z.lazy(() => UnidadeUpdateWithoutPacientesInputSchema),z.lazy(() => UnidadeUncheckedUpdateWithoutPacientesInputSchema) ]),
  create: z.union([ z.lazy(() => UnidadeCreateWithoutPacientesInputSchema),z.lazy(() => UnidadeUncheckedCreateWithoutPacientesInputSchema) ]),
  where: z.lazy(() => UnidadeWhereInputSchema).optional()
}).strict();

export const UnidadeUpdateToOneWithWhereWithoutPacientesInputSchema: z.ZodType<Prisma.UnidadeUpdateToOneWithWhereWithoutPacientesInput> = z.object({
  where: z.lazy(() => UnidadeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UnidadeUpdateWithoutPacientesInputSchema),z.lazy(() => UnidadeUncheckedUpdateWithoutPacientesInputSchema) ]),
}).strict();

export const UnidadeUpdateWithoutPacientesInputSchema: z.ZodType<Prisma.UnidadeUpdateWithoutPacientesInput> = z.object({
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endereco: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  colaboradores: z.lazy(() => ColaboradorUpdateManyWithoutUnidadeNestedInputSchema).optional(),
  gerentes: z.lazy(() => GerenteUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();

export const UnidadeUncheckedUpdateWithoutPacientesInputSchema: z.ZodType<Prisma.UnidadeUncheckedUpdateWithoutPacientesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endereco: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  colaboradores: z.lazy(() => ColaboradorUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional(),
  gerentes: z.lazy(() => GerenteUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();

export const ColaboradorUpsertWithWhereUniqueWithoutPacientesInputSchema: z.ZodType<Prisma.ColaboradorUpsertWithWhereUniqueWithoutPacientesInput> = z.object({
  where: z.lazy(() => ColaboradorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ColaboradorUpdateWithoutPacientesInputSchema),z.lazy(() => ColaboradorUncheckedUpdateWithoutPacientesInputSchema) ]),
  create: z.union([ z.lazy(() => ColaboradorCreateWithoutPacientesInputSchema),z.lazy(() => ColaboradorUncheckedCreateWithoutPacientesInputSchema) ]),
}).strict();

export const ColaboradorUpdateWithWhereUniqueWithoutPacientesInputSchema: z.ZodType<Prisma.ColaboradorUpdateWithWhereUniqueWithoutPacientesInput> = z.object({
  where: z.lazy(() => ColaboradorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ColaboradorUpdateWithoutPacientesInputSchema),z.lazy(() => ColaboradorUncheckedUpdateWithoutPacientesInputSchema) ]),
}).strict();

export const ColaboradorUpdateManyWithWhereWithoutPacientesInputSchema: z.ZodType<Prisma.ColaboradorUpdateManyWithWhereWithoutPacientesInput> = z.object({
  where: z.lazy(() => ColaboradorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ColaboradorUpdateManyMutationInputSchema),z.lazy(() => ColaboradorUncheckedUpdateManyWithoutPacientesInputSchema) ]),
}).strict();

export const ColaboradorScalarWhereInputSchema: z.ZodType<Prisma.ColaboradorScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ColaboradorScalarWhereInputSchema),z.lazy(() => ColaboradorScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColaboradorScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColaboradorScalarWhereInputSchema),z.lazy(() => ColaboradorScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cpf: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rg: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nascimento: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  telefone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  titulo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  formacao: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  genero: z.union([ z.lazy(() => EnumGeneroFilterSchema),z.lazy(() => GeneroSchema) ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  raca: z.union([ z.lazy(() => EnumRacaFilterSchema),z.lazy(() => RacaSchema) ]).optional(),
  unidadeId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rgdocfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fotofile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  compresfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const PacienteCreateWithoutUnidadeInputSchema: z.ZodType<Prisma.PacienteCreateWithoutUnidadeInput> = z.object({
  analise: z.boolean().optional(),
  nome: z.string().optional().nullable(),
  cpf: z.string(),
  rg: z.string().optional().nullable(),
  nascimentodata: z.string().optional().nullable(),
  nomemae: z.string().optional().nullable(),
  nomepai: z.string().optional().nullable(),
  email: z.string(),
  password: z.string(),
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
  colaboradores: z.lazy(() => ColaboradorCreateNestedManyWithoutPacientesInputSchema).optional()
}).strict();

export const PacienteUncheckedCreateWithoutUnidadeInputSchema: z.ZodType<Prisma.PacienteUncheckedCreateWithoutUnidadeInput> = z.object({
  id: z.number().int().optional(),
  analise: z.boolean().optional(),
  nome: z.string().optional().nullable(),
  cpf: z.string(),
  rg: z.string().optional().nullable(),
  nascimentodata: z.string().optional().nullable(),
  nomemae: z.string().optional().nullable(),
  nomepai: z.string().optional().nullable(),
  email: z.string(),
  password: z.string(),
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
  colaboradores: z.lazy(() => ColaboradorUncheckedCreateNestedManyWithoutPacientesInputSchema).optional()
}).strict();

export const PacienteCreateOrConnectWithoutUnidadeInputSchema: z.ZodType<Prisma.PacienteCreateOrConnectWithoutUnidadeInput> = z.object({
  where: z.lazy(() => PacienteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PacienteCreateWithoutUnidadeInputSchema),z.lazy(() => PacienteUncheckedCreateWithoutUnidadeInputSchema) ]),
}).strict();

export const PacienteCreateManyUnidadeInputEnvelopeSchema: z.ZodType<Prisma.PacienteCreateManyUnidadeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PacienteCreateManyUnidadeInputSchema),z.lazy(() => PacienteCreateManyUnidadeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ColaboradorCreateWithoutUnidadeInputSchema: z.ZodType<Prisma.ColaboradorCreateWithoutUnidadeInput> = z.object({
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
  pacientes: z.lazy(() => PacienteCreateNestedManyWithoutColaboradoresInputSchema).optional()
}).strict();

export const ColaboradorUncheckedCreateWithoutUnidadeInputSchema: z.ZodType<Prisma.ColaboradorUncheckedCreateWithoutUnidadeInput> = z.object({
  id: z.number().int().optional(),
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
  pacientes: z.lazy(() => PacienteUncheckedCreateNestedManyWithoutColaboradoresInputSchema).optional()
}).strict();

export const ColaboradorCreateOrConnectWithoutUnidadeInputSchema: z.ZodType<Prisma.ColaboradorCreateOrConnectWithoutUnidadeInput> = z.object({
  where: z.lazy(() => ColaboradorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ColaboradorCreateWithoutUnidadeInputSchema),z.lazy(() => ColaboradorUncheckedCreateWithoutUnidadeInputSchema) ]),
}).strict();

export const ColaboradorCreateManyUnidadeInputEnvelopeSchema: z.ZodType<Prisma.ColaboradorCreateManyUnidadeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ColaboradorCreateManyUnidadeInputSchema),z.lazy(() => ColaboradorCreateManyUnidadeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const GerenteCreateWithoutUnidadeInputSchema: z.ZodType<Prisma.GerenteCreateWithoutUnidadeInput> = z.object({
  password: z.string(),
  nome: z.string(),
  cpf: z.string(),
  rg: z.string(),
  email: z.string(),
  telefone: z.string(),
  raca: z.lazy(() => RacaSchema),
  rgdocfile: z.string().optional().nullable(),
  fotofile: z.string().optional().nullable(),
  compresfile: z.string().optional().nullable()
}).strict();

export const GerenteUncheckedCreateWithoutUnidadeInputSchema: z.ZodType<Prisma.GerenteUncheckedCreateWithoutUnidadeInput> = z.object({
  id: z.number().int().optional(),
  password: z.string(),
  nome: z.string(),
  cpf: z.string(),
  rg: z.string(),
  email: z.string(),
  telefone: z.string(),
  raca: z.lazy(() => RacaSchema),
  rgdocfile: z.string().optional().nullable(),
  fotofile: z.string().optional().nullable(),
  compresfile: z.string().optional().nullable()
}).strict();

export const GerenteCreateOrConnectWithoutUnidadeInputSchema: z.ZodType<Prisma.GerenteCreateOrConnectWithoutUnidadeInput> = z.object({
  where: z.lazy(() => GerenteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GerenteCreateWithoutUnidadeInputSchema),z.lazy(() => GerenteUncheckedCreateWithoutUnidadeInputSchema) ]),
}).strict();

export const GerenteCreateManyUnidadeInputEnvelopeSchema: z.ZodType<Prisma.GerenteCreateManyUnidadeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => GerenteCreateManyUnidadeInputSchema),z.lazy(() => GerenteCreateManyUnidadeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PacienteUpsertWithWhereUniqueWithoutUnidadeInputSchema: z.ZodType<Prisma.PacienteUpsertWithWhereUniqueWithoutUnidadeInput> = z.object({
  where: z.lazy(() => PacienteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PacienteUpdateWithoutUnidadeInputSchema),z.lazy(() => PacienteUncheckedUpdateWithoutUnidadeInputSchema) ]),
  create: z.union([ z.lazy(() => PacienteCreateWithoutUnidadeInputSchema),z.lazy(() => PacienteUncheckedCreateWithoutUnidadeInputSchema) ]),
}).strict();

export const PacienteUpdateWithWhereUniqueWithoutUnidadeInputSchema: z.ZodType<Prisma.PacienteUpdateWithWhereUniqueWithoutUnidadeInput> = z.object({
  where: z.lazy(() => PacienteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PacienteUpdateWithoutUnidadeInputSchema),z.lazy(() => PacienteUncheckedUpdateWithoutUnidadeInputSchema) ]),
}).strict();

export const PacienteUpdateManyWithWhereWithoutUnidadeInputSchema: z.ZodType<Prisma.PacienteUpdateManyWithWhereWithoutUnidadeInput> = z.object({
  where: z.lazy(() => PacienteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PacienteUpdateManyMutationInputSchema),z.lazy(() => PacienteUncheckedUpdateManyWithoutUnidadeInputSchema) ]),
}).strict();

export const ColaboradorUpsertWithWhereUniqueWithoutUnidadeInputSchema: z.ZodType<Prisma.ColaboradorUpsertWithWhereUniqueWithoutUnidadeInput> = z.object({
  where: z.lazy(() => ColaboradorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ColaboradorUpdateWithoutUnidadeInputSchema),z.lazy(() => ColaboradorUncheckedUpdateWithoutUnidadeInputSchema) ]),
  create: z.union([ z.lazy(() => ColaboradorCreateWithoutUnidadeInputSchema),z.lazy(() => ColaboradorUncheckedCreateWithoutUnidadeInputSchema) ]),
}).strict();

export const ColaboradorUpdateWithWhereUniqueWithoutUnidadeInputSchema: z.ZodType<Prisma.ColaboradorUpdateWithWhereUniqueWithoutUnidadeInput> = z.object({
  where: z.lazy(() => ColaboradorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ColaboradorUpdateWithoutUnidadeInputSchema),z.lazy(() => ColaboradorUncheckedUpdateWithoutUnidadeInputSchema) ]),
}).strict();

export const ColaboradorUpdateManyWithWhereWithoutUnidadeInputSchema: z.ZodType<Prisma.ColaboradorUpdateManyWithWhereWithoutUnidadeInput> = z.object({
  where: z.lazy(() => ColaboradorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ColaboradorUpdateManyMutationInputSchema),z.lazy(() => ColaboradorUncheckedUpdateManyWithoutUnidadeInputSchema) ]),
}).strict();

export const GerenteUpsertWithWhereUniqueWithoutUnidadeInputSchema: z.ZodType<Prisma.GerenteUpsertWithWhereUniqueWithoutUnidadeInput> = z.object({
  where: z.lazy(() => GerenteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => GerenteUpdateWithoutUnidadeInputSchema),z.lazy(() => GerenteUncheckedUpdateWithoutUnidadeInputSchema) ]),
  create: z.union([ z.lazy(() => GerenteCreateWithoutUnidadeInputSchema),z.lazy(() => GerenteUncheckedCreateWithoutUnidadeInputSchema) ]),
}).strict();

export const GerenteUpdateWithWhereUniqueWithoutUnidadeInputSchema: z.ZodType<Prisma.GerenteUpdateWithWhereUniqueWithoutUnidadeInput> = z.object({
  where: z.lazy(() => GerenteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => GerenteUpdateWithoutUnidadeInputSchema),z.lazy(() => GerenteUncheckedUpdateWithoutUnidadeInputSchema) ]),
}).strict();

export const GerenteUpdateManyWithWhereWithoutUnidadeInputSchema: z.ZodType<Prisma.GerenteUpdateManyWithWhereWithoutUnidadeInput> = z.object({
  where: z.lazy(() => GerenteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => GerenteUpdateManyMutationInputSchema),z.lazy(() => GerenteUncheckedUpdateManyWithoutUnidadeInputSchema) ]),
}).strict();

export const GerenteScalarWhereInputSchema: z.ZodType<Prisma.GerenteScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GerenteScalarWhereInputSchema),z.lazy(() => GerenteScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GerenteScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GerenteScalarWhereInputSchema),z.lazy(() => GerenteScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cpf: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rg: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  telefone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  raca: z.union([ z.lazy(() => EnumRacaFilterSchema),z.lazy(() => RacaSchema) ]).optional(),
  unidadeId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rgdocfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fotofile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  compresfile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const PacienteUpdateWithoutColaboradoresInputSchema: z.ZodType<Prisma.PacienteUpdateWithoutColaboradoresInput> = z.object({
  analise: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nascimentodata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomemae: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomepai: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  laudofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  relescolar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NullableEnumRacaFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  unidade: z.lazy(() => UnidadeUpdateOneRequiredWithoutPacientesNestedInputSchema).optional()
}).strict();

export const PacienteUncheckedUpdateWithoutColaboradoresInputSchema: z.ZodType<Prisma.PacienteUncheckedUpdateWithoutColaboradoresInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  analise: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nascimentodata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomemae: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomepai: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  unidadeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  laudofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  relescolar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NullableEnumRacaFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PacienteUncheckedUpdateManyWithoutColaboradoresInputSchema: z.ZodType<Prisma.PacienteUncheckedUpdateManyWithoutColaboradoresInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  analise: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nascimentodata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomemae: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomepai: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  unidadeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  laudofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  relescolar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NullableEnumRacaFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ColaboradorUpdateWithoutPacientesInputSchema: z.ZodType<Prisma.ColaboradorUpdateWithoutPacientesInput> = z.object({
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nascimento: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  titulo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genero: z.union([ z.lazy(() => GeneroSchema),z.lazy(() => EnumGeneroFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  unidade: z.lazy(() => UnidadeUpdateOneRequiredWithoutColaboradoresNestedInputSchema).optional()
}).strict();

export const ColaboradorUncheckedUpdateWithoutPacientesInputSchema: z.ZodType<Prisma.ColaboradorUncheckedUpdateWithoutPacientesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nascimento: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  titulo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genero: z.union([ z.lazy(() => GeneroSchema),z.lazy(() => EnumGeneroFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  unidadeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ColaboradorUncheckedUpdateManyWithoutPacientesInputSchema: z.ZodType<Prisma.ColaboradorUncheckedUpdateManyWithoutPacientesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nascimento: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  titulo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genero: z.union([ z.lazy(() => GeneroSchema),z.lazy(() => EnumGeneroFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  unidadeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PacienteCreateManyUnidadeInputSchema: z.ZodType<Prisma.PacienteCreateManyUnidadeInput> = z.object({
  id: z.number().int().optional(),
  analise: z.boolean().optional(),
  nome: z.string().optional().nullable(),
  cpf: z.string(),
  rg: z.string().optional().nullable(),
  nascimentodata: z.string().optional().nullable(),
  nomemae: z.string().optional().nullable(),
  nomepai: z.string().optional().nullable(),
  email: z.string(),
  password: z.string(),
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
  raca: z.lazy(() => RacaSchema).optional().nullable()
}).strict();

export const ColaboradorCreateManyUnidadeInputSchema: z.ZodType<Prisma.ColaboradorCreateManyUnidadeInput> = z.object({
  id: z.number().int().optional(),
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
  compresfile: z.string().optional().nullable()
}).strict();

export const GerenteCreateManyUnidadeInputSchema: z.ZodType<Prisma.GerenteCreateManyUnidadeInput> = z.object({
  id: z.number().int().optional(),
  password: z.string(),
  nome: z.string(),
  cpf: z.string(),
  rg: z.string(),
  email: z.string(),
  telefone: z.string(),
  raca: z.lazy(() => RacaSchema),
  rgdocfile: z.string().optional().nullable(),
  fotofile: z.string().optional().nullable(),
  compresfile: z.string().optional().nullable()
}).strict();

export const PacienteUpdateWithoutUnidadeInputSchema: z.ZodType<Prisma.PacienteUpdateWithoutUnidadeInput> = z.object({
  analise: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nascimentodata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomemae: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomepai: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  laudofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  relescolar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NullableEnumRacaFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  colaboradores: z.lazy(() => ColaboradorUpdateManyWithoutPacientesNestedInputSchema).optional()
}).strict();

export const PacienteUncheckedUpdateWithoutUnidadeInputSchema: z.ZodType<Prisma.PacienteUncheckedUpdateWithoutUnidadeInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  analise: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nascimentodata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomemae: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomepai: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  laudofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  relescolar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NullableEnumRacaFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  colaboradores: z.lazy(() => ColaboradorUncheckedUpdateManyWithoutPacientesNestedInputSchema).optional()
}).strict();

export const PacienteUncheckedUpdateManyWithoutUnidadeInputSchema: z.ZodType<Prisma.PacienteUncheckedUpdateManyWithoutUnidadeInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  analise: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nascimentodata: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomemae: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nomepai: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  laudofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  relescolar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => NullableEnumRacaFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ColaboradorUpdateWithoutUnidadeInputSchema: z.ZodType<Prisma.ColaboradorUpdateWithoutUnidadeInput> = z.object({
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nascimento: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  titulo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genero: z.union([ z.lazy(() => GeneroSchema),z.lazy(() => EnumGeneroFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pacientes: z.lazy(() => PacienteUpdateManyWithoutColaboradoresNestedInputSchema).optional()
}).strict();

export const ColaboradorUncheckedUpdateWithoutUnidadeInputSchema: z.ZodType<Prisma.ColaboradorUncheckedUpdateWithoutUnidadeInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nascimento: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  titulo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genero: z.union([ z.lazy(() => GeneroSchema),z.lazy(() => EnumGeneroFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pacientes: z.lazy(() => PacienteUncheckedUpdateManyWithoutColaboradoresNestedInputSchema).optional()
}).strict();

export const ColaboradorUncheckedUpdateManyWithoutUnidadeInputSchema: z.ZodType<Prisma.ColaboradorUncheckedUpdateManyWithoutUnidadeInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nascimento: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  titulo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genero: z.union([ z.lazy(() => GeneroSchema),z.lazy(() => EnumGeneroFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GerenteUpdateWithoutUnidadeInputSchema: z.ZodType<Prisma.GerenteUpdateWithoutUnidadeInput> = z.object({
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GerenteUncheckedUpdateWithoutUnidadeInputSchema: z.ZodType<Prisma.GerenteUncheckedUpdateWithoutUnidadeInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GerenteUncheckedUpdateManyWithoutUnidadeInputSchema: z.ZodType<Prisma.GerenteUncheckedUpdateManyWithoutUnidadeInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  telefone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  raca: z.union([ z.lazy(() => RacaSchema),z.lazy(() => EnumRacaFieldUpdateOperationsInputSchema) ]).optional(),
  rgdocfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fotofile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compresfile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const GerenteFindFirstArgsSchema: z.ZodType<Prisma.GerenteFindFirstArgs> = z.object({
  select: GerenteSelectSchema.optional(),
  include: GerenteIncludeSchema.optional(),
  where: GerenteWhereInputSchema.optional(),
  orderBy: z.union([ GerenteOrderByWithRelationInputSchema.array(),GerenteOrderByWithRelationInputSchema ]).optional(),
  cursor: GerenteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GerenteScalarFieldEnumSchema,GerenteScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GerenteFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GerenteFindFirstOrThrowArgs> = z.object({
  select: GerenteSelectSchema.optional(),
  include: GerenteIncludeSchema.optional(),
  where: GerenteWhereInputSchema.optional(),
  orderBy: z.union([ GerenteOrderByWithRelationInputSchema.array(),GerenteOrderByWithRelationInputSchema ]).optional(),
  cursor: GerenteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GerenteScalarFieldEnumSchema,GerenteScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GerenteFindManyArgsSchema: z.ZodType<Prisma.GerenteFindManyArgs> = z.object({
  select: GerenteSelectSchema.optional(),
  include: GerenteIncludeSchema.optional(),
  where: GerenteWhereInputSchema.optional(),
  orderBy: z.union([ GerenteOrderByWithRelationInputSchema.array(),GerenteOrderByWithRelationInputSchema ]).optional(),
  cursor: GerenteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GerenteScalarFieldEnumSchema,GerenteScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GerenteAggregateArgsSchema: z.ZodType<Prisma.GerenteAggregateArgs> = z.object({
  where: GerenteWhereInputSchema.optional(),
  orderBy: z.union([ GerenteOrderByWithRelationInputSchema.array(),GerenteOrderByWithRelationInputSchema ]).optional(),
  cursor: GerenteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GerenteGroupByArgsSchema: z.ZodType<Prisma.GerenteGroupByArgs> = z.object({
  where: GerenteWhereInputSchema.optional(),
  orderBy: z.union([ GerenteOrderByWithAggregationInputSchema.array(),GerenteOrderByWithAggregationInputSchema ]).optional(),
  by: GerenteScalarFieldEnumSchema.array(),
  having: GerenteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GerenteFindUniqueArgsSchema: z.ZodType<Prisma.GerenteFindUniqueArgs> = z.object({
  select: GerenteSelectSchema.optional(),
  include: GerenteIncludeSchema.optional(),
  where: GerenteWhereUniqueInputSchema,
}).strict() ;

export const GerenteFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GerenteFindUniqueOrThrowArgs> = z.object({
  select: GerenteSelectSchema.optional(),
  include: GerenteIncludeSchema.optional(),
  where: GerenteWhereUniqueInputSchema,
}).strict() ;

export const ColaboradorFindFirstArgsSchema: z.ZodType<Prisma.ColaboradorFindFirstArgs> = z.object({
  select: ColaboradorSelectSchema.optional(),
  include: ColaboradorIncludeSchema.optional(),
  where: ColaboradorWhereInputSchema.optional(),
  orderBy: z.union([ ColaboradorOrderByWithRelationInputSchema.array(),ColaboradorOrderByWithRelationInputSchema ]).optional(),
  cursor: ColaboradorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ColaboradorScalarFieldEnumSchema,ColaboradorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ColaboradorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ColaboradorFindFirstOrThrowArgs> = z.object({
  select: ColaboradorSelectSchema.optional(),
  include: ColaboradorIncludeSchema.optional(),
  where: ColaboradorWhereInputSchema.optional(),
  orderBy: z.union([ ColaboradorOrderByWithRelationInputSchema.array(),ColaboradorOrderByWithRelationInputSchema ]).optional(),
  cursor: ColaboradorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ColaboradorScalarFieldEnumSchema,ColaboradorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ColaboradorFindManyArgsSchema: z.ZodType<Prisma.ColaboradorFindManyArgs> = z.object({
  select: ColaboradorSelectSchema.optional(),
  include: ColaboradorIncludeSchema.optional(),
  where: ColaboradorWhereInputSchema.optional(),
  orderBy: z.union([ ColaboradorOrderByWithRelationInputSchema.array(),ColaboradorOrderByWithRelationInputSchema ]).optional(),
  cursor: ColaboradorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ColaboradorScalarFieldEnumSchema,ColaboradorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ColaboradorAggregateArgsSchema: z.ZodType<Prisma.ColaboradorAggregateArgs> = z.object({
  where: ColaboradorWhereInputSchema.optional(),
  orderBy: z.union([ ColaboradorOrderByWithRelationInputSchema.array(),ColaboradorOrderByWithRelationInputSchema ]).optional(),
  cursor: ColaboradorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ColaboradorGroupByArgsSchema: z.ZodType<Prisma.ColaboradorGroupByArgs> = z.object({
  where: ColaboradorWhereInputSchema.optional(),
  orderBy: z.union([ ColaboradorOrderByWithAggregationInputSchema.array(),ColaboradorOrderByWithAggregationInputSchema ]).optional(),
  by: ColaboradorScalarFieldEnumSchema.array(),
  having: ColaboradorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ColaboradorFindUniqueArgsSchema: z.ZodType<Prisma.ColaboradorFindUniqueArgs> = z.object({
  select: ColaboradorSelectSchema.optional(),
  include: ColaboradorIncludeSchema.optional(),
  where: ColaboradorWhereUniqueInputSchema,
}).strict() ;

export const ColaboradorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ColaboradorFindUniqueOrThrowArgs> = z.object({
  select: ColaboradorSelectSchema.optional(),
  include: ColaboradorIncludeSchema.optional(),
  where: ColaboradorWhereUniqueInputSchema,
}).strict() ;

export const PacienteFindFirstArgsSchema: z.ZodType<Prisma.PacienteFindFirstArgs> = z.object({
  select: PacienteSelectSchema.optional(),
  include: PacienteIncludeSchema.optional(),
  where: PacienteWhereInputSchema.optional(),
  orderBy: z.union([ PacienteOrderByWithRelationInputSchema.array(),PacienteOrderByWithRelationInputSchema ]).optional(),
  cursor: PacienteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PacienteScalarFieldEnumSchema,PacienteScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PacienteFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PacienteFindFirstOrThrowArgs> = z.object({
  select: PacienteSelectSchema.optional(),
  include: PacienteIncludeSchema.optional(),
  where: PacienteWhereInputSchema.optional(),
  orderBy: z.union([ PacienteOrderByWithRelationInputSchema.array(),PacienteOrderByWithRelationInputSchema ]).optional(),
  cursor: PacienteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PacienteScalarFieldEnumSchema,PacienteScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PacienteFindManyArgsSchema: z.ZodType<Prisma.PacienteFindManyArgs> = z.object({
  select: PacienteSelectSchema.optional(),
  include: PacienteIncludeSchema.optional(),
  where: PacienteWhereInputSchema.optional(),
  orderBy: z.union([ PacienteOrderByWithRelationInputSchema.array(),PacienteOrderByWithRelationInputSchema ]).optional(),
  cursor: PacienteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PacienteScalarFieldEnumSchema,PacienteScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PacienteAggregateArgsSchema: z.ZodType<Prisma.PacienteAggregateArgs> = z.object({
  where: PacienteWhereInputSchema.optional(),
  orderBy: z.union([ PacienteOrderByWithRelationInputSchema.array(),PacienteOrderByWithRelationInputSchema ]).optional(),
  cursor: PacienteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PacienteGroupByArgsSchema: z.ZodType<Prisma.PacienteGroupByArgs> = z.object({
  where: PacienteWhereInputSchema.optional(),
  orderBy: z.union([ PacienteOrderByWithAggregationInputSchema.array(),PacienteOrderByWithAggregationInputSchema ]).optional(),
  by: PacienteScalarFieldEnumSchema.array(),
  having: PacienteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PacienteFindUniqueArgsSchema: z.ZodType<Prisma.PacienteFindUniqueArgs> = z.object({
  select: PacienteSelectSchema.optional(),
  include: PacienteIncludeSchema.optional(),
  where: PacienteWhereUniqueInputSchema,
}).strict() ;

export const PacienteFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PacienteFindUniqueOrThrowArgs> = z.object({
  select: PacienteSelectSchema.optional(),
  include: PacienteIncludeSchema.optional(),
  where: PacienteWhereUniqueInputSchema,
}).strict() ;

export const UnidadeFindFirstArgsSchema: z.ZodType<Prisma.UnidadeFindFirstArgs> = z.object({
  select: UnidadeSelectSchema.optional(),
  include: UnidadeIncludeSchema.optional(),
  where: UnidadeWhereInputSchema.optional(),
  orderBy: z.union([ UnidadeOrderByWithRelationInputSchema.array(),UnidadeOrderByWithRelationInputSchema ]).optional(),
  cursor: UnidadeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UnidadeScalarFieldEnumSchema,UnidadeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UnidadeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UnidadeFindFirstOrThrowArgs> = z.object({
  select: UnidadeSelectSchema.optional(),
  include: UnidadeIncludeSchema.optional(),
  where: UnidadeWhereInputSchema.optional(),
  orderBy: z.union([ UnidadeOrderByWithRelationInputSchema.array(),UnidadeOrderByWithRelationInputSchema ]).optional(),
  cursor: UnidadeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UnidadeScalarFieldEnumSchema,UnidadeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UnidadeFindManyArgsSchema: z.ZodType<Prisma.UnidadeFindManyArgs> = z.object({
  select: UnidadeSelectSchema.optional(),
  include: UnidadeIncludeSchema.optional(),
  where: UnidadeWhereInputSchema.optional(),
  orderBy: z.union([ UnidadeOrderByWithRelationInputSchema.array(),UnidadeOrderByWithRelationInputSchema ]).optional(),
  cursor: UnidadeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UnidadeScalarFieldEnumSchema,UnidadeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UnidadeAggregateArgsSchema: z.ZodType<Prisma.UnidadeAggregateArgs> = z.object({
  where: UnidadeWhereInputSchema.optional(),
  orderBy: z.union([ UnidadeOrderByWithRelationInputSchema.array(),UnidadeOrderByWithRelationInputSchema ]).optional(),
  cursor: UnidadeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UnidadeGroupByArgsSchema: z.ZodType<Prisma.UnidadeGroupByArgs> = z.object({
  where: UnidadeWhereInputSchema.optional(),
  orderBy: z.union([ UnidadeOrderByWithAggregationInputSchema.array(),UnidadeOrderByWithAggregationInputSchema ]).optional(),
  by: UnidadeScalarFieldEnumSchema.array(),
  having: UnidadeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UnidadeFindUniqueArgsSchema: z.ZodType<Prisma.UnidadeFindUniqueArgs> = z.object({
  select: UnidadeSelectSchema.optional(),
  include: UnidadeIncludeSchema.optional(),
  where: UnidadeWhereUniqueInputSchema,
}).strict() ;

export const UnidadeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UnidadeFindUniqueOrThrowArgs> = z.object({
  select: UnidadeSelectSchema.optional(),
  include: UnidadeIncludeSchema.optional(),
  where: UnidadeWhereUniqueInputSchema,
}).strict() ;

export const GerenteCreateArgsSchema: z.ZodType<Prisma.GerenteCreateArgs> = z.object({
  select: GerenteSelectSchema.optional(),
  include: GerenteIncludeSchema.optional(),
  data: z.union([ GerenteCreateInputSchema,GerenteUncheckedCreateInputSchema ]),
}).strict() ;

export const GerenteUpsertArgsSchema: z.ZodType<Prisma.GerenteUpsertArgs> = z.object({
  select: GerenteSelectSchema.optional(),
  include: GerenteIncludeSchema.optional(),
  where: GerenteWhereUniqueInputSchema,
  create: z.union([ GerenteCreateInputSchema,GerenteUncheckedCreateInputSchema ]),
  update: z.union([ GerenteUpdateInputSchema,GerenteUncheckedUpdateInputSchema ]),
}).strict() ;

export const GerenteCreateManyArgsSchema: z.ZodType<Prisma.GerenteCreateManyArgs> = z.object({
  data: z.union([ GerenteCreateManyInputSchema,GerenteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const GerenteCreateManyAndReturnArgsSchema: z.ZodType<Prisma.GerenteCreateManyAndReturnArgs> = z.object({
  data: z.union([ GerenteCreateManyInputSchema,GerenteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const GerenteDeleteArgsSchema: z.ZodType<Prisma.GerenteDeleteArgs> = z.object({
  select: GerenteSelectSchema.optional(),
  include: GerenteIncludeSchema.optional(),
  where: GerenteWhereUniqueInputSchema,
}).strict() ;

export const GerenteUpdateArgsSchema: z.ZodType<Prisma.GerenteUpdateArgs> = z.object({
  select: GerenteSelectSchema.optional(),
  include: GerenteIncludeSchema.optional(),
  data: z.union([ GerenteUpdateInputSchema,GerenteUncheckedUpdateInputSchema ]),
  where: GerenteWhereUniqueInputSchema,
}).strict() ;

export const GerenteUpdateManyArgsSchema: z.ZodType<Prisma.GerenteUpdateManyArgs> = z.object({
  data: z.union([ GerenteUpdateManyMutationInputSchema,GerenteUncheckedUpdateManyInputSchema ]),
  where: GerenteWhereInputSchema.optional(),
}).strict() ;

export const GerenteDeleteManyArgsSchema: z.ZodType<Prisma.GerenteDeleteManyArgs> = z.object({
  where: GerenteWhereInputSchema.optional(),
}).strict() ;

export const ColaboradorCreateArgsSchema: z.ZodType<Prisma.ColaboradorCreateArgs> = z.object({
  select: ColaboradorSelectSchema.optional(),
  include: ColaboradorIncludeSchema.optional(),
  data: z.union([ ColaboradorCreateInputSchema,ColaboradorUncheckedCreateInputSchema ]),
}).strict() ;

export const ColaboradorUpsertArgsSchema: z.ZodType<Prisma.ColaboradorUpsertArgs> = z.object({
  select: ColaboradorSelectSchema.optional(),
  include: ColaboradorIncludeSchema.optional(),
  where: ColaboradorWhereUniqueInputSchema,
  create: z.union([ ColaboradorCreateInputSchema,ColaboradorUncheckedCreateInputSchema ]),
  update: z.union([ ColaboradorUpdateInputSchema,ColaboradorUncheckedUpdateInputSchema ]),
}).strict() ;

export const ColaboradorCreateManyArgsSchema: z.ZodType<Prisma.ColaboradorCreateManyArgs> = z.object({
  data: z.union([ ColaboradorCreateManyInputSchema,ColaboradorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ColaboradorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ColaboradorCreateManyAndReturnArgs> = z.object({
  data: z.union([ ColaboradorCreateManyInputSchema,ColaboradorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ColaboradorDeleteArgsSchema: z.ZodType<Prisma.ColaboradorDeleteArgs> = z.object({
  select: ColaboradorSelectSchema.optional(),
  include: ColaboradorIncludeSchema.optional(),
  where: ColaboradorWhereUniqueInputSchema,
}).strict() ;

export const ColaboradorUpdateArgsSchema: z.ZodType<Prisma.ColaboradorUpdateArgs> = z.object({
  select: ColaboradorSelectSchema.optional(),
  include: ColaboradorIncludeSchema.optional(),
  data: z.union([ ColaboradorUpdateInputSchema,ColaboradorUncheckedUpdateInputSchema ]),
  where: ColaboradorWhereUniqueInputSchema,
}).strict() ;

export const ColaboradorUpdateManyArgsSchema: z.ZodType<Prisma.ColaboradorUpdateManyArgs> = z.object({
  data: z.union([ ColaboradorUpdateManyMutationInputSchema,ColaboradorUncheckedUpdateManyInputSchema ]),
  where: ColaboradorWhereInputSchema.optional(),
}).strict() ;

export const ColaboradorDeleteManyArgsSchema: z.ZodType<Prisma.ColaboradorDeleteManyArgs> = z.object({
  where: ColaboradorWhereInputSchema.optional(),
}).strict() ;

export const PacienteCreateArgsSchema: z.ZodType<Prisma.PacienteCreateArgs> = z.object({
  select: PacienteSelectSchema.optional(),
  include: PacienteIncludeSchema.optional(),
  data: z.union([ PacienteCreateInputSchema,PacienteUncheckedCreateInputSchema ]),
}).strict() ;

export const PacienteUpsertArgsSchema: z.ZodType<Prisma.PacienteUpsertArgs> = z.object({
  select: PacienteSelectSchema.optional(),
  include: PacienteIncludeSchema.optional(),
  where: PacienteWhereUniqueInputSchema,
  create: z.union([ PacienteCreateInputSchema,PacienteUncheckedCreateInputSchema ]),
  update: z.union([ PacienteUpdateInputSchema,PacienteUncheckedUpdateInputSchema ]),
}).strict() ;

export const PacienteCreateManyArgsSchema: z.ZodType<Prisma.PacienteCreateManyArgs> = z.object({
  data: z.union([ PacienteCreateManyInputSchema,PacienteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PacienteCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PacienteCreateManyAndReturnArgs> = z.object({
  data: z.union([ PacienteCreateManyInputSchema,PacienteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PacienteDeleteArgsSchema: z.ZodType<Prisma.PacienteDeleteArgs> = z.object({
  select: PacienteSelectSchema.optional(),
  include: PacienteIncludeSchema.optional(),
  where: PacienteWhereUniqueInputSchema,
}).strict() ;

export const PacienteUpdateArgsSchema: z.ZodType<Prisma.PacienteUpdateArgs> = z.object({
  select: PacienteSelectSchema.optional(),
  include: PacienteIncludeSchema.optional(),
  data: z.union([ PacienteUpdateInputSchema,PacienteUncheckedUpdateInputSchema ]),
  where: PacienteWhereUniqueInputSchema,
}).strict() ;

export const PacienteUpdateManyArgsSchema: z.ZodType<Prisma.PacienteUpdateManyArgs> = z.object({
  data: z.union([ PacienteUpdateManyMutationInputSchema,PacienteUncheckedUpdateManyInputSchema ]),
  where: PacienteWhereInputSchema.optional(),
}).strict() ;

export const PacienteDeleteManyArgsSchema: z.ZodType<Prisma.PacienteDeleteManyArgs> = z.object({
  where: PacienteWhereInputSchema.optional(),
}).strict() ;

export const UnidadeCreateArgsSchema: z.ZodType<Prisma.UnidadeCreateArgs> = z.object({
  select: UnidadeSelectSchema.optional(),
  include: UnidadeIncludeSchema.optional(),
  data: z.union([ UnidadeCreateInputSchema,UnidadeUncheckedCreateInputSchema ]),
}).strict() ;

export const UnidadeUpsertArgsSchema: z.ZodType<Prisma.UnidadeUpsertArgs> = z.object({
  select: UnidadeSelectSchema.optional(),
  include: UnidadeIncludeSchema.optional(),
  where: UnidadeWhereUniqueInputSchema,
  create: z.union([ UnidadeCreateInputSchema,UnidadeUncheckedCreateInputSchema ]),
  update: z.union([ UnidadeUpdateInputSchema,UnidadeUncheckedUpdateInputSchema ]),
}).strict() ;

export const UnidadeCreateManyArgsSchema: z.ZodType<Prisma.UnidadeCreateManyArgs> = z.object({
  data: z.union([ UnidadeCreateManyInputSchema,UnidadeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UnidadeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UnidadeCreateManyAndReturnArgs> = z.object({
  data: z.union([ UnidadeCreateManyInputSchema,UnidadeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UnidadeDeleteArgsSchema: z.ZodType<Prisma.UnidadeDeleteArgs> = z.object({
  select: UnidadeSelectSchema.optional(),
  include: UnidadeIncludeSchema.optional(),
  where: UnidadeWhereUniqueInputSchema,
}).strict() ;

export const UnidadeUpdateArgsSchema: z.ZodType<Prisma.UnidadeUpdateArgs> = z.object({
  select: UnidadeSelectSchema.optional(),
  include: UnidadeIncludeSchema.optional(),
  data: z.union([ UnidadeUpdateInputSchema,UnidadeUncheckedUpdateInputSchema ]),
  where: UnidadeWhereUniqueInputSchema,
}).strict() ;

export const UnidadeUpdateManyArgsSchema: z.ZodType<Prisma.UnidadeUpdateManyArgs> = z.object({
  data: z.union([ UnidadeUpdateManyMutationInputSchema,UnidadeUncheckedUpdateManyInputSchema ]),
  where: UnidadeWhereInputSchema.optional(),
}).strict() ;

export const UnidadeDeleteManyArgsSchema: z.ZodType<Prisma.UnidadeDeleteManyArgs> = z.object({
  where: UnidadeWhereInputSchema.optional(),
}).strict() ;