"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteOrderByWithRelationInputSchema = exports.PacienteWhereInputSchema = exports.ColaboradorScalarWhereWithAggregatesInputSchema = exports.ColaboradorOrderByWithAggregationInputSchema = exports.ColaboradorWhereUniqueInputSchema = exports.ColaboradorOrderByWithRelationInputSchema = exports.ColaboradorWhereInputSchema = exports.GerenteScalarWhereWithAggregatesInputSchema = exports.GerenteOrderByWithAggregationInputSchema = exports.GerenteWhereUniqueInputSchema = exports.GerenteOrderByWithRelationInputSchema = exports.GerenteWhereInputSchema = exports.UnidadeSelectSchema = exports.UnidadeCountOutputTypeSelectSchema = exports.UnidadeCountOutputTypeArgsSchema = exports.UnidadeArgsSchema = exports.UnidadeIncludeSchema = exports.PacienteSelectSchema = exports.PacienteCountOutputTypeSelectSchema = exports.PacienteCountOutputTypeArgsSchema = exports.PacienteArgsSchema = exports.PacienteIncludeSchema = exports.ColaboradorSelectSchema = exports.ColaboradorCountOutputTypeSelectSchema = exports.ColaboradorCountOutputTypeArgsSchema = exports.ColaboradorArgsSchema = exports.ColaboradorIncludeSchema = exports.GerenteSelectSchema = exports.GerenteArgsSchema = exports.GerenteIncludeSchema = exports.UnidadeSchema = exports.PacienteSchema = exports.ColaboradorSchema = exports.GerenteSchema = exports.GeneroSchema = exports.RacaSchema = exports.JsonNullValueFilterSchema = exports.NullsOrderSchema = exports.QueryModeSchema = exports.NullableJsonNullValueInputSchema = exports.SortOrderSchema = exports.UnidadeScalarFieldEnumSchema = exports.PacienteScalarFieldEnumSchema = exports.ColaboradorScalarFieldEnumSchema = exports.GerenteScalarFieldEnumSchema = exports.TransactionIsolationLevelSchema = exports.InputJsonValueSchema = exports.NullableJsonValue = exports.JsonValueSchema = exports.transformJsonNull = void 0;
exports.EnumRacaWithAggregatesFilterSchema = exports.StringWithAggregatesFilterSchema = exports.IntWithAggregatesFilterSchema = exports.GerenteSumOrderByAggregateInputSchema = exports.GerenteMinOrderByAggregateInputSchema = exports.GerenteMaxOrderByAggregateInputSchema = exports.GerenteAvgOrderByAggregateInputSchema = exports.GerenteCountOrderByAggregateInputSchema = exports.SortOrderInputSchema = exports.UnidadeRelationFilterSchema = exports.StringNullableFilterSchema = exports.EnumRacaFilterSchema = exports.StringFilterSchema = exports.IntFilterSchema = exports.UnidadeUncheckedUpdateManyInputSchema = exports.UnidadeUpdateManyMutationInputSchema = exports.UnidadeCreateManyInputSchema = exports.UnidadeUncheckedUpdateInputSchema = exports.UnidadeUpdateInputSchema = exports.UnidadeUncheckedCreateInputSchema = exports.UnidadeCreateInputSchema = exports.PacienteUncheckedUpdateManyInputSchema = exports.PacienteUpdateManyMutationInputSchema = exports.PacienteCreateManyInputSchema = exports.PacienteUncheckedUpdateInputSchema = exports.PacienteUpdateInputSchema = exports.PacienteUncheckedCreateInputSchema = exports.PacienteCreateInputSchema = exports.ColaboradorUncheckedUpdateManyInputSchema = exports.ColaboradorUpdateManyMutationInputSchema = exports.ColaboradorCreateManyInputSchema = exports.ColaboradorUncheckedUpdateInputSchema = exports.ColaboradorUpdateInputSchema = exports.ColaboradorUncheckedCreateInputSchema = exports.ColaboradorCreateInputSchema = exports.GerenteUncheckedUpdateManyInputSchema = exports.GerenteUpdateManyMutationInputSchema = exports.GerenteCreateManyInputSchema = exports.GerenteUncheckedUpdateInputSchema = exports.GerenteUpdateInputSchema = exports.GerenteUncheckedCreateInputSchema = exports.GerenteCreateInputSchema = exports.UnidadeScalarWhereWithAggregatesInputSchema = exports.UnidadeOrderByWithAggregationInputSchema = exports.UnidadeWhereUniqueInputSchema = exports.UnidadeOrderByWithRelationInputSchema = exports.UnidadeWhereInputSchema = exports.PacienteScalarWhereWithAggregatesInputSchema = exports.PacienteOrderByWithAggregationInputSchema = exports.PacienteWhereUniqueInputSchema = void 0;
exports.BoolFieldUpdateOperationsInputSchema = exports.ColaboradorUncheckedCreateNestedManyWithoutPacientesInputSchema = exports.ColaboradorCreateNestedManyWithoutPacientesInputSchema = exports.UnidadeCreateNestedOneWithoutPacientesInputSchema = exports.PacienteUncheckedUpdateManyWithoutColaboradoresNestedInputSchema = exports.PacienteUpdateManyWithoutColaboradoresNestedInputSchema = exports.UnidadeUpdateOneRequiredWithoutColaboradoresNestedInputSchema = exports.EnumGeneroFieldUpdateOperationsInputSchema = exports.DateTimeFieldUpdateOperationsInputSchema = exports.PacienteUncheckedCreateNestedManyWithoutColaboradoresInputSchema = exports.PacienteCreateNestedManyWithoutColaboradoresInputSchema = exports.UnidadeCreateNestedOneWithoutColaboradoresInputSchema = exports.IntFieldUpdateOperationsInputSchema = exports.UnidadeUpdateOneRequiredWithoutGerentesNestedInputSchema = exports.NullableStringFieldUpdateOperationsInputSchema = exports.EnumRacaFieldUpdateOperationsInputSchema = exports.StringFieldUpdateOperationsInputSchema = exports.UnidadeCreateNestedOneWithoutGerentesInputSchema = exports.UnidadeSumOrderByAggregateInputSchema = exports.UnidadeMinOrderByAggregateInputSchema = exports.UnidadeMaxOrderByAggregateInputSchema = exports.UnidadeAvgOrderByAggregateInputSchema = exports.UnidadeCountOrderByAggregateInputSchema = exports.GerenteOrderByRelationAggregateInputSchema = exports.GerenteListRelationFilterSchema = exports.EnumRacaNullableWithAggregatesFilterSchema = exports.JsonNullableWithAggregatesFilterSchema = exports.BoolWithAggregatesFilterSchema = exports.PacienteSumOrderByAggregateInputSchema = exports.PacienteMinOrderByAggregateInputSchema = exports.PacienteMaxOrderByAggregateInputSchema = exports.PacienteAvgOrderByAggregateInputSchema = exports.PacienteCountOrderByAggregateInputSchema = exports.ColaboradorOrderByRelationAggregateInputSchema = exports.ColaboradorListRelationFilterSchema = exports.EnumRacaNullableFilterSchema = exports.JsonNullableFilterSchema = exports.BoolFilterSchema = exports.EnumGeneroWithAggregatesFilterSchema = exports.DateTimeWithAggregatesFilterSchema = exports.ColaboradorSumOrderByAggregateInputSchema = exports.ColaboradorMinOrderByAggregateInputSchema = exports.ColaboradorMaxOrderByAggregateInputSchema = exports.ColaboradorAvgOrderByAggregateInputSchema = exports.ColaboradorCountOrderByAggregateInputSchema = exports.PacienteOrderByRelationAggregateInputSchema = exports.PacienteListRelationFilterSchema = exports.EnumGeneroFilterSchema = exports.DateTimeFilterSchema = exports.StringNullableWithAggregatesFilterSchema = void 0;
exports.UnidadeUpdateToOneWithWhereWithoutColaboradoresInputSchema = exports.UnidadeUpsertWithoutColaboradoresInputSchema = exports.PacienteCreateOrConnectWithoutColaboradoresInputSchema = exports.PacienteUncheckedCreateWithoutColaboradoresInputSchema = exports.PacienteCreateWithoutColaboradoresInputSchema = exports.UnidadeCreateOrConnectWithoutColaboradoresInputSchema = exports.UnidadeUncheckedCreateWithoutColaboradoresInputSchema = exports.UnidadeCreateWithoutColaboradoresInputSchema = exports.UnidadeUncheckedUpdateWithoutGerentesInputSchema = exports.UnidadeUpdateWithoutGerentesInputSchema = exports.UnidadeUpdateToOneWithWhereWithoutGerentesInputSchema = exports.UnidadeUpsertWithoutGerentesInputSchema = exports.UnidadeCreateOrConnectWithoutGerentesInputSchema = exports.UnidadeUncheckedCreateWithoutGerentesInputSchema = exports.UnidadeCreateWithoutGerentesInputSchema = exports.NestedEnumRacaNullableWithAggregatesFilterSchema = exports.NestedJsonNullableFilterSchema = exports.NestedBoolWithAggregatesFilterSchema = exports.NestedEnumRacaNullableFilterSchema = exports.NestedBoolFilterSchema = exports.NestedEnumGeneroWithAggregatesFilterSchema = exports.NestedDateTimeWithAggregatesFilterSchema = exports.NestedEnumGeneroFilterSchema = exports.NestedDateTimeFilterSchema = exports.NestedIntNullableFilterSchema = exports.NestedStringNullableWithAggregatesFilterSchema = exports.NestedEnumRacaWithAggregatesFilterSchema = exports.NestedStringWithAggregatesFilterSchema = exports.NestedFloatFilterSchema = exports.NestedIntWithAggregatesFilterSchema = exports.NestedStringNullableFilterSchema = exports.NestedEnumRacaFilterSchema = exports.NestedStringFilterSchema = exports.NestedIntFilterSchema = exports.GerenteUncheckedUpdateManyWithoutUnidadeNestedInputSchema = exports.ColaboradorUncheckedUpdateManyWithoutUnidadeNestedInputSchema = exports.PacienteUncheckedUpdateManyWithoutUnidadeNestedInputSchema = exports.GerenteUpdateManyWithoutUnidadeNestedInputSchema = exports.ColaboradorUpdateManyWithoutUnidadeNestedInputSchema = exports.PacienteUpdateManyWithoutUnidadeNestedInputSchema = exports.GerenteUncheckedCreateNestedManyWithoutUnidadeInputSchema = exports.ColaboradorUncheckedCreateNestedManyWithoutUnidadeInputSchema = exports.PacienteUncheckedCreateNestedManyWithoutUnidadeInputSchema = exports.GerenteCreateNestedManyWithoutUnidadeInputSchema = exports.ColaboradorCreateNestedManyWithoutUnidadeInputSchema = exports.PacienteCreateNestedManyWithoutUnidadeInputSchema = exports.ColaboradorUncheckedUpdateManyWithoutPacientesNestedInputSchema = exports.ColaboradorUpdateManyWithoutPacientesNestedInputSchema = exports.UnidadeUpdateOneRequiredWithoutPacientesNestedInputSchema = exports.NullableEnumRacaFieldUpdateOperationsInputSchema = void 0;
exports.ColaboradorCreateManyUnidadeInputSchema = exports.PacienteCreateManyUnidadeInputSchema = exports.ColaboradorUncheckedUpdateManyWithoutPacientesInputSchema = exports.ColaboradorUncheckedUpdateWithoutPacientesInputSchema = exports.ColaboradorUpdateWithoutPacientesInputSchema = exports.PacienteUncheckedUpdateManyWithoutColaboradoresInputSchema = exports.PacienteUncheckedUpdateWithoutColaboradoresInputSchema = exports.PacienteUpdateWithoutColaboradoresInputSchema = exports.GerenteScalarWhereInputSchema = exports.GerenteUpdateManyWithWhereWithoutUnidadeInputSchema = exports.GerenteUpdateWithWhereUniqueWithoutUnidadeInputSchema = exports.GerenteUpsertWithWhereUniqueWithoutUnidadeInputSchema = exports.ColaboradorUpdateManyWithWhereWithoutUnidadeInputSchema = exports.ColaboradorUpdateWithWhereUniqueWithoutUnidadeInputSchema = exports.ColaboradorUpsertWithWhereUniqueWithoutUnidadeInputSchema = exports.PacienteUpdateManyWithWhereWithoutUnidadeInputSchema = exports.PacienteUpdateWithWhereUniqueWithoutUnidadeInputSchema = exports.PacienteUpsertWithWhereUniqueWithoutUnidadeInputSchema = exports.GerenteCreateManyUnidadeInputEnvelopeSchema = exports.GerenteCreateOrConnectWithoutUnidadeInputSchema = exports.GerenteUncheckedCreateWithoutUnidadeInputSchema = exports.GerenteCreateWithoutUnidadeInputSchema = exports.ColaboradorCreateManyUnidadeInputEnvelopeSchema = exports.ColaboradorCreateOrConnectWithoutUnidadeInputSchema = exports.ColaboradorUncheckedCreateWithoutUnidadeInputSchema = exports.ColaboradorCreateWithoutUnidadeInputSchema = exports.PacienteCreateManyUnidadeInputEnvelopeSchema = exports.PacienteCreateOrConnectWithoutUnidadeInputSchema = exports.PacienteUncheckedCreateWithoutUnidadeInputSchema = exports.PacienteCreateWithoutUnidadeInputSchema = exports.ColaboradorScalarWhereInputSchema = exports.ColaboradorUpdateManyWithWhereWithoutPacientesInputSchema = exports.ColaboradorUpdateWithWhereUniqueWithoutPacientesInputSchema = exports.ColaboradorUpsertWithWhereUniqueWithoutPacientesInputSchema = exports.UnidadeUncheckedUpdateWithoutPacientesInputSchema = exports.UnidadeUpdateWithoutPacientesInputSchema = exports.UnidadeUpdateToOneWithWhereWithoutPacientesInputSchema = exports.UnidadeUpsertWithoutPacientesInputSchema = exports.ColaboradorCreateOrConnectWithoutPacientesInputSchema = exports.ColaboradorUncheckedCreateWithoutPacientesInputSchema = exports.ColaboradorCreateWithoutPacientesInputSchema = exports.UnidadeCreateOrConnectWithoutPacientesInputSchema = exports.UnidadeUncheckedCreateWithoutPacientesInputSchema = exports.UnidadeCreateWithoutPacientesInputSchema = exports.PacienteScalarWhereInputSchema = exports.PacienteUpdateManyWithWhereWithoutColaboradoresInputSchema = exports.PacienteUpdateWithWhereUniqueWithoutColaboradoresInputSchema = exports.PacienteUpsertWithWhereUniqueWithoutColaboradoresInputSchema = exports.UnidadeUncheckedUpdateWithoutColaboradoresInputSchema = exports.UnidadeUpdateWithoutColaboradoresInputSchema = void 0;
exports.ColaboradorCreateManyAndReturnArgsSchema = exports.ColaboradorCreateManyArgsSchema = exports.ColaboradorUpsertArgsSchema = exports.ColaboradorCreateArgsSchema = exports.GerenteDeleteManyArgsSchema = exports.GerenteUpdateManyArgsSchema = exports.GerenteUpdateArgsSchema = exports.GerenteDeleteArgsSchema = exports.GerenteCreateManyAndReturnArgsSchema = exports.GerenteCreateManyArgsSchema = exports.GerenteUpsertArgsSchema = exports.GerenteCreateArgsSchema = exports.UnidadeFindUniqueOrThrowArgsSchema = exports.UnidadeFindUniqueArgsSchema = exports.UnidadeGroupByArgsSchema = exports.UnidadeAggregateArgsSchema = exports.UnidadeFindManyArgsSchema = exports.UnidadeFindFirstOrThrowArgsSchema = exports.UnidadeFindFirstArgsSchema = exports.PacienteFindUniqueOrThrowArgsSchema = exports.PacienteFindUniqueArgsSchema = exports.PacienteGroupByArgsSchema = exports.PacienteAggregateArgsSchema = exports.PacienteFindManyArgsSchema = exports.PacienteFindFirstOrThrowArgsSchema = exports.PacienteFindFirstArgsSchema = exports.ColaboradorFindUniqueOrThrowArgsSchema = exports.ColaboradorFindUniqueArgsSchema = exports.ColaboradorGroupByArgsSchema = exports.ColaboradorAggregateArgsSchema = exports.ColaboradorFindManyArgsSchema = exports.ColaboradorFindFirstOrThrowArgsSchema = exports.ColaboradorFindFirstArgsSchema = exports.GerenteFindUniqueOrThrowArgsSchema = exports.GerenteFindUniqueArgsSchema = exports.GerenteGroupByArgsSchema = exports.GerenteAggregateArgsSchema = exports.GerenteFindManyArgsSchema = exports.GerenteFindFirstOrThrowArgsSchema = exports.GerenteFindFirstArgsSchema = exports.GerenteUncheckedUpdateManyWithoutUnidadeInputSchema = exports.GerenteUncheckedUpdateWithoutUnidadeInputSchema = exports.GerenteUpdateWithoutUnidadeInputSchema = exports.ColaboradorUncheckedUpdateManyWithoutUnidadeInputSchema = exports.ColaboradorUncheckedUpdateWithoutUnidadeInputSchema = exports.ColaboradorUpdateWithoutUnidadeInputSchema = exports.PacienteUncheckedUpdateManyWithoutUnidadeInputSchema = exports.PacienteUncheckedUpdateWithoutUnidadeInputSchema = exports.PacienteUpdateWithoutUnidadeInputSchema = exports.GerenteCreateManyUnidadeInputSchema = void 0;
exports.UnidadeDeleteManyArgsSchema = exports.UnidadeUpdateManyArgsSchema = exports.UnidadeUpdateArgsSchema = exports.UnidadeDeleteArgsSchema = exports.UnidadeCreateManyAndReturnArgsSchema = exports.UnidadeCreateManyArgsSchema = exports.UnidadeUpsertArgsSchema = exports.UnidadeCreateArgsSchema = exports.PacienteDeleteManyArgsSchema = exports.PacienteUpdateManyArgsSchema = exports.PacienteUpdateArgsSchema = exports.PacienteDeleteArgsSchema = exports.PacienteCreateManyAndReturnArgsSchema = exports.PacienteCreateManyArgsSchema = exports.PacienteUpsertArgsSchema = exports.PacienteCreateArgsSchema = exports.ColaboradorDeleteManyArgsSchema = exports.ColaboradorUpdateManyArgsSchema = exports.ColaboradorUpdateArgsSchema = exports.ColaboradorDeleteArgsSchema = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
const transformJsonNull = (v) => {
    if (!v || v === 'DbNull')
        return client_1.Prisma.DbNull;
    if (v === 'JsonNull')
        return client_1.Prisma.JsonNull;
    return v;
};
exports.transformJsonNull = transformJsonNull;
exports.JsonValueSchema = zod_1.z.lazy(() => zod_1.z.union([
    zod_1.z.string(),
    zod_1.z.number(),
    zod_1.z.boolean(),
    zod_1.z.literal(null),
    zod_1.z.record(zod_1.z.lazy(() => exports.JsonValueSchema.optional())),
    zod_1.z.array(zod_1.z.lazy(() => exports.JsonValueSchema)),
]));
exports.NullableJsonValue = zod_1.z
    .union([exports.JsonValueSchema, zod_1.z.literal('DbNull'), zod_1.z.literal('JsonNull')])
    .nullable()
    .transform((v) => (0, exports.transformJsonNull)(v));
exports.InputJsonValueSchema = zod_1.z.lazy(() => zod_1.z.union([
    zod_1.z.string(),
    zod_1.z.number(),
    zod_1.z.boolean(),
    zod_1.z.object({ toJSON: zod_1.z.function(zod_1.z.tuple([]), zod_1.z.any()) }),
    zod_1.z.record(zod_1.z.lazy(() => zod_1.z.union([exports.InputJsonValueSchema, zod_1.z.literal(null)]))),
    zod_1.z.array(zod_1.z.lazy(() => zod_1.z.union([exports.InputJsonValueSchema, zod_1.z.literal(null)]))),
]));
/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////
exports.TransactionIsolationLevelSchema = zod_1.z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']);
exports.GerenteScalarFieldEnumSchema = zod_1.z.enum(['id', 'password', 'nome', 'cpf', 'rg', 'email', 'telefone', 'raca', 'unidadeId', 'rgdocfile', 'fotofile', 'compresfile']);
exports.ColaboradorScalarFieldEnumSchema = zod_1.z.enum(['id', 'nome', 'cpf', 'rg', 'nascimento', 'telefone', 'titulo', 'formacao', 'password', 'genero', 'email', 'raca', 'unidadeId', 'rgdocfile', 'fotofile', 'compresfile']);
exports.PacienteScalarFieldEnumSchema = zod_1.z.enum(['id', 'analise', 'nome', 'cpf', 'rg', 'nascimentodata', 'nomemae', 'nomepai', 'unidadeId', 'email', 'password', 'telefone', 'rgdocfile', 'fotofile', 'compresfile', 'laudofile', 'relescolar', 'gestacao', 'nascimento', 'autonomia', 'comportamento', 'desenvolimento', 'pedagogico', 'geral', 'mae', 'pai', 'maisinfo', 'escola', 'saudeinfo', 'raca']);
exports.UnidadeScalarFieldEnumSchema = zod_1.z.enum(['id', 'nome', 'endereco']);
exports.SortOrderSchema = zod_1.z.enum(['asc', 'desc']);
exports.NullableJsonNullValueInputSchema = zod_1.z.enum(['DbNull', 'JsonNull',]).transform((value) => value === 'JsonNull' ? client_1.Prisma.JsonNull : value === 'DbNull' ? client_1.Prisma.DbNull : value);
exports.QueryModeSchema = zod_1.z.enum(['default', 'insensitive']);
exports.NullsOrderSchema = zod_1.z.enum(['first', 'last']);
exports.JsonNullValueFilterSchema = zod_1.z.enum(['DbNull', 'JsonNull', 'AnyNull',]).transform((value) => value === 'JsonNull' ? client_1.Prisma.JsonNull : value === 'DbNull' ? client_1.Prisma.JsonNull : value === 'AnyNull' ? client_1.Prisma.AnyNull : value);
exports.RacaSchema = zod_1.z.enum(['BRANCA', 'NEGRA', 'AMARELA', 'INDIGENA', 'OUTRA']);
exports.GeneroSchema = zod_1.z.enum(['MASCULINO', 'FEMININO', 'PREFIRO_NAO_INFORMAR']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////
/////////////////////////////////////////
// GERENTE SCHEMA
/////////////////////////////////////////
exports.GerenteSchema = zod_1.z.object({
    raca: exports.RacaSchema,
    id: zod_1.z.number().int(),
    password: zod_1.z.string(),
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    email: zod_1.z.string(),
    telefone: zod_1.z.string(),
    unidadeId: zod_1.z.number().int(),
    rgdocfile: zod_1.z.string().nullable(),
    fotofile: zod_1.z.string().nullable(),
    compresfile: zod_1.z.string().nullable(),
});
/////////////////////////////////////////
// COLABORADOR SCHEMA
/////////////////////////////////////////
exports.ColaboradorSchema = zod_1.z.object({
    genero: exports.GeneroSchema,
    raca: exports.RacaSchema,
    id: zod_1.z.number().int(),
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    nascimento: zod_1.z.coerce.date(),
    telefone: zod_1.z.string(),
    titulo: zod_1.z.string(),
    formacao: zod_1.z.string(),
    password: zod_1.z.string(),
    email: zod_1.z.string(),
    unidadeId: zod_1.z.number().int(),
    rgdocfile: zod_1.z.string().nullable(),
    fotofile: zod_1.z.string().nullable(),
    compresfile: zod_1.z.string().nullable(),
});
/////////////////////////////////////////
// PACIENTE SCHEMA
/////////////////////////////////////////
exports.PacienteSchema = zod_1.z.object({
    raca: exports.RacaSchema.nullable(),
    id: zod_1.z.number().int(),
    analise: zod_1.z.boolean(),
    nome: zod_1.z.string().nullable(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string().nullable(),
    nascimentodata: zod_1.z.string().nullable(),
    nomemae: zod_1.z.string().nullable(),
    nomepai: zod_1.z.string().nullable(),
    unidadeId: zod_1.z.number().int(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    telefone: zod_1.z.string().nullable(),
    rgdocfile: zod_1.z.string().nullable(),
    fotofile: zod_1.z.string().nullable(),
    compresfile: zod_1.z.string().nullable(),
    laudofile: zod_1.z.string().nullable(),
    relescolar: zod_1.z.string().nullable(),
    gestacao: exports.JsonValueSchema.nullable(),
    nascimento: exports.JsonValueSchema.nullable(),
    autonomia: exports.JsonValueSchema.nullable(),
    comportamento: exports.JsonValueSchema.nullable(),
    desenvolimento: exports.JsonValueSchema.nullable(),
    pedagogico: exports.JsonValueSchema.nullable(),
    geral: exports.JsonValueSchema.nullable(),
    mae: exports.JsonValueSchema.nullable(),
    pai: exports.JsonValueSchema.nullable(),
    maisinfo: exports.JsonValueSchema.nullable(),
    escola: exports.JsonValueSchema.nullable(),
    saudeinfo: exports.JsonValueSchema.nullable(),
});
/////////////////////////////////////////
// UNIDADE SCHEMA
/////////////////////////////////////////
exports.UnidadeSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    nome: zod_1.z.string(),
    endereco: zod_1.z.string(),
});
/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////
// GERENTE
//------------------------------------------------------
exports.GerenteIncludeSchema = zod_1.z.object({
    unidade: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.UnidadeArgsSchema)]).optional(),
}).strict();
exports.GerenteArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.GerenteSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.GerenteIncludeSchema).optional(),
}).strict();
exports.GerenteSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    password: zod_1.z.boolean().optional(),
    nome: zod_1.z.boolean().optional(),
    cpf: zod_1.z.boolean().optional(),
    rg: zod_1.z.boolean().optional(),
    email: zod_1.z.boolean().optional(),
    telefone: zod_1.z.boolean().optional(),
    raca: zod_1.z.boolean().optional(),
    unidadeId: zod_1.z.boolean().optional(),
    rgdocfile: zod_1.z.boolean().optional(),
    fotofile: zod_1.z.boolean().optional(),
    compresfile: zod_1.z.boolean().optional(),
    unidade: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.UnidadeArgsSchema)]).optional(),
}).strict();
// COLABORADOR
//------------------------------------------------------
exports.ColaboradorIncludeSchema = zod_1.z.object({
    unidade: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.UnidadeArgsSchema)]).optional(),
    pacientes: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.PacienteFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ColaboradorCountOutputTypeArgsSchema)]).optional(),
}).strict();
exports.ColaboradorArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.ColaboradorSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.ColaboradorIncludeSchema).optional(),
}).strict();
exports.ColaboradorCountOutputTypeArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.ColaboradorCountOutputTypeSelectSchema).nullish(),
}).strict();
exports.ColaboradorCountOutputTypeSelectSchema = zod_1.z.object({
    pacientes: zod_1.z.boolean().optional(),
}).strict();
exports.ColaboradorSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    nome: zod_1.z.boolean().optional(),
    cpf: zod_1.z.boolean().optional(),
    rg: zod_1.z.boolean().optional(),
    nascimento: zod_1.z.boolean().optional(),
    telefone: zod_1.z.boolean().optional(),
    titulo: zod_1.z.boolean().optional(),
    formacao: zod_1.z.boolean().optional(),
    password: zod_1.z.boolean().optional(),
    genero: zod_1.z.boolean().optional(),
    email: zod_1.z.boolean().optional(),
    raca: zod_1.z.boolean().optional(),
    unidadeId: zod_1.z.boolean().optional(),
    rgdocfile: zod_1.z.boolean().optional(),
    fotofile: zod_1.z.boolean().optional(),
    compresfile: zod_1.z.boolean().optional(),
    unidade: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.UnidadeArgsSchema)]).optional(),
    pacientes: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.PacienteFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ColaboradorCountOutputTypeArgsSchema)]).optional(),
}).strict();
// PACIENTE
//------------------------------------------------------
exports.PacienteIncludeSchema = zod_1.z.object({
    unidade: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.UnidadeArgsSchema)]).optional(),
    colaboradores: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ColaboradorFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.PacienteCountOutputTypeArgsSchema)]).optional(),
}).strict();
exports.PacienteArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.PacienteSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.PacienteIncludeSchema).optional(),
}).strict();
exports.PacienteCountOutputTypeArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.PacienteCountOutputTypeSelectSchema).nullish(),
}).strict();
exports.PacienteCountOutputTypeSelectSchema = zod_1.z.object({
    colaboradores: zod_1.z.boolean().optional(),
}).strict();
exports.PacienteSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    analise: zod_1.z.boolean().optional(),
    nome: zod_1.z.boolean().optional(),
    cpf: zod_1.z.boolean().optional(),
    rg: zod_1.z.boolean().optional(),
    nascimentodata: zod_1.z.boolean().optional(),
    nomemae: zod_1.z.boolean().optional(),
    nomepai: zod_1.z.boolean().optional(),
    unidadeId: zod_1.z.boolean().optional(),
    email: zod_1.z.boolean().optional(),
    password: zod_1.z.boolean().optional(),
    telefone: zod_1.z.boolean().optional(),
    rgdocfile: zod_1.z.boolean().optional(),
    fotofile: zod_1.z.boolean().optional(),
    compresfile: zod_1.z.boolean().optional(),
    laudofile: zod_1.z.boolean().optional(),
    relescolar: zod_1.z.boolean().optional(),
    gestacao: zod_1.z.boolean().optional(),
    nascimento: zod_1.z.boolean().optional(),
    autonomia: zod_1.z.boolean().optional(),
    comportamento: zod_1.z.boolean().optional(),
    desenvolimento: zod_1.z.boolean().optional(),
    pedagogico: zod_1.z.boolean().optional(),
    geral: zod_1.z.boolean().optional(),
    mae: zod_1.z.boolean().optional(),
    pai: zod_1.z.boolean().optional(),
    maisinfo: zod_1.z.boolean().optional(),
    escola: zod_1.z.boolean().optional(),
    saudeinfo: zod_1.z.boolean().optional(),
    raca: zod_1.z.boolean().optional(),
    unidade: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.UnidadeArgsSchema)]).optional(),
    colaboradores: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ColaboradorFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.PacienteCountOutputTypeArgsSchema)]).optional(),
}).strict();
// UNIDADE
//------------------------------------------------------
exports.UnidadeIncludeSchema = zod_1.z.object({
    pacientes: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.PacienteFindManyArgsSchema)]).optional(),
    colaboradores: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ColaboradorFindManyArgsSchema)]).optional(),
    gerentes: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.GerenteFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.UnidadeCountOutputTypeArgsSchema)]).optional(),
}).strict();
exports.UnidadeArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.UnidadeSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.UnidadeIncludeSchema).optional(),
}).strict();
exports.UnidadeCountOutputTypeArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.UnidadeCountOutputTypeSelectSchema).nullish(),
}).strict();
exports.UnidadeCountOutputTypeSelectSchema = zod_1.z.object({
    pacientes: zod_1.z.boolean().optional(),
    colaboradores: zod_1.z.boolean().optional(),
    gerentes: zod_1.z.boolean().optional(),
}).strict();
exports.UnidadeSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    nome: zod_1.z.boolean().optional(),
    endereco: zod_1.z.boolean().optional(),
    pacientes: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.PacienteFindManyArgsSchema)]).optional(),
    colaboradores: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ColaboradorFindManyArgsSchema)]).optional(),
    gerentes: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.GerenteFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.UnidadeCountOutputTypeArgsSchema)]).optional(),
}).strict();
/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////
exports.GerenteWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteWhereInputSchema), zod_1.z.lazy(() => exports.GerenteWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.GerenteWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteWhereInputSchema), zod_1.z.lazy(() => exports.GerenteWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    cpf: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    rg: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    telefone: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.EnumRacaFilterSchema), zod_1.z.lazy(() => exports.RacaSchema)]).optional(),
    unidadeId: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    unidade: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeRelationFilterSchema), zod_1.z.lazy(() => exports.UnidadeWhereInputSchema)]).optional(),
}).strict();
exports.GerenteOrderByWithRelationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cpf: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rg: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    telefone: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    raca: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    unidade: zod_1.z.lazy(() => exports.UnidadeOrderByWithRelationInputSchema).optional()
}).strict();
exports.GerenteWhereUniqueInputSchema = zod_1.z.union([
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
        email: zod_1.z.string(),
        telefone: zod_1.z.string()
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
        email: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        rg: zod_1.z.string(),
        email: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        rg: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        rg: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        rg: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        email: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
        email: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
        email: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
    }),
    zod_1.z.object({
        rg: zod_1.z.string(),
        email: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        rg: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        rg: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        rg: zod_1.z.string(),
    }),
    zod_1.z.object({
        email: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        telefone: zod_1.z.string(),
    }),
])
    .and(zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    cpf: zod_1.z.string().optional(),
    rg: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
    telefone: zod_1.z.string().optional(),
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteWhereInputSchema), zod_1.z.lazy(() => exports.GerenteWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.GerenteWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteWhereInputSchema), zod_1.z.lazy(() => exports.GerenteWhereInputSchema).array()]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.EnumRacaFilterSchema), zod_1.z.lazy(() => exports.RacaSchema)]).optional(),
    unidadeId: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number().int()]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    unidade: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeRelationFilterSchema), zod_1.z.lazy(() => exports.UnidadeWhereInputSchema)]).optional(),
}).strict());
exports.GerenteOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cpf: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rg: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    telefone: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    raca: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.GerenteCountOrderByAggregateInputSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.GerenteAvgOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.GerenteMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.GerenteMinOrderByAggregateInputSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.GerenteSumOrderByAggregateInputSchema).optional()
}).strict();
exports.GerenteScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.GerenteScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.GerenteScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.GerenteScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    cpf: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    rg: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    telefone: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.EnumRacaWithAggregatesFilterSchema), zod_1.z.lazy(() => exports.RacaSchema)]).optional(),
    unidadeId: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
}).strict();
exports.ColaboradorWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.ColaboradorWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    cpf: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    rg: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.coerce.date()]).optional(),
    telefone: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    titulo: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    formacao: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    genero: zod_1.z.union([zod_1.z.lazy(() => exports.EnumGeneroFilterSchema), zod_1.z.lazy(() => exports.GeneroSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.EnumRacaFilterSchema), zod_1.z.lazy(() => exports.RacaSchema)]).optional(),
    unidadeId: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    unidade: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeRelationFilterSchema), zod_1.z.lazy(() => exports.UnidadeWhereInputSchema)]).optional(),
    pacientes: zod_1.z.lazy(() => exports.PacienteListRelationFilterSchema).optional()
}).strict();
exports.ColaboradorOrderByWithRelationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cpf: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rg: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nascimento: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    telefone: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    titulo: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    formacao: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    genero: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    raca: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    unidade: zod_1.z.lazy(() => exports.UnidadeOrderByWithRelationInputSchema).optional(),
    pacientes: zod_1.z.lazy(() => exports.PacienteOrderByRelationAggregateInputSchema).optional()
}).strict();
exports.ColaboradorWhereUniqueInputSchema = zod_1.z.union([
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
        telefone: zod_1.z.string(),
        email: zod_1.z.string()
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
        telefone: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        cpf: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        rg: zod_1.z.string(),
        telefone: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        rg: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        rg: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        rg: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        telefone: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
        telefone: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
        rg: zod_1.z.string(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
        telefone: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        cpf: zod_1.z.string(),
    }),
    zod_1.z.object({
        rg: zod_1.z.string(),
        telefone: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        rg: zod_1.z.string(),
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        rg: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        rg: zod_1.z.string(),
    }),
    zod_1.z.object({
        telefone: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    zod_1.z.object({
        telefone: zod_1.z.string(),
    }),
    zod_1.z.object({
        email: zod_1.z.string(),
    }),
])
    .and(zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    cpf: zod_1.z.string().optional(),
    rg: zod_1.z.string().optional(),
    telefone: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.ColaboradorWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereInputSchema).array()]).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.coerce.date()]).optional(),
    titulo: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    formacao: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    genero: zod_1.z.union([zod_1.z.lazy(() => exports.EnumGeneroFilterSchema), zod_1.z.lazy(() => exports.GeneroSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.EnumRacaFilterSchema), zod_1.z.lazy(() => exports.RacaSchema)]).optional(),
    unidadeId: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number().int()]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    unidade: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeRelationFilterSchema), zod_1.z.lazy(() => exports.UnidadeWhereInputSchema)]).optional(),
    pacientes: zod_1.z.lazy(() => exports.PacienteListRelationFilterSchema).optional()
}).strict());
exports.ColaboradorOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cpf: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rg: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nascimento: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    telefone: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    titulo: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    formacao: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    genero: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    raca: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.ColaboradorCountOrderByAggregateInputSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.ColaboradorAvgOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.ColaboradorMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.ColaboradorMinOrderByAggregateInputSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.ColaboradorSumOrderByAggregateInputSchema).optional()
}).strict();
exports.ColaboradorScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.ColaboradorScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.ColaboradorScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.ColaboradorScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    cpf: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    rg: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.coerce.date()]).optional(),
    telefone: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    titulo: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    formacao: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    genero: zod_1.z.union([zod_1.z.lazy(() => exports.EnumGeneroWithAggregatesFilterSchema), zod_1.z.lazy(() => exports.GeneroSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.EnumRacaWithAggregatesFilterSchema), zod_1.z.lazy(() => exports.RacaSchema)]).optional(),
    unidadeId: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
}).strict();
exports.PacienteWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereInputSchema), zod_1.z.lazy(() => exports.PacienteWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.PacienteWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereInputSchema), zod_1.z.lazy(() => exports.PacienteWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    analise: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    cpf: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    rg: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    nascimentodata: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    nomemae: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    nomepai: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    unidadeId: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    telefone: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    laudofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    relescolar: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    gestacao: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    nascimento: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    autonomia: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    comportamento: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    desenvolimento: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    pedagogico: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    geral: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    mae: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    pai: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    maisinfo: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    escola: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    saudeinfo: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.EnumRacaNullableFilterSchema), zod_1.z.lazy(() => exports.RacaSchema)]).optional().nullable(),
    unidade: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeRelationFilterSchema), zod_1.z.lazy(() => exports.UnidadeWhereInputSchema)]).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorListRelationFilterSchema).optional()
}).strict();
exports.PacienteOrderByWithRelationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    analise: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    cpf: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rg: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    nascimentodata: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    nomemae: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    nomepai: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    telefone: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    laudofile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    relescolar: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    unidade: zod_1.z.lazy(() => exports.UnidadeOrderByWithRelationInputSchema).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorOrderByRelationAggregateInputSchema).optional()
}).strict();
exports.PacienteWhereUniqueInputSchema = zod_1.z.union([
    zod_1.z.object({
        id: zod_1.z.number().int(),
        email: zod_1.z.string()
    }),
    zod_1.z.object({
        id: zod_1.z.number().int(),
    }),
    zod_1.z.object({
        email: zod_1.z.string(),
    }),
])
    .and(zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    email: zod_1.z.string().optional(),
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereInputSchema), zod_1.z.lazy(() => exports.PacienteWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.PacienteWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereInputSchema), zod_1.z.lazy(() => exports.PacienteWhereInputSchema).array()]).optional(),
    analise: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    cpf: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    rg: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    nascimentodata: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    nomemae: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    nomepai: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    unidadeId: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number().int()]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    telefone: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    laudofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    relescolar: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    gestacao: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    nascimento: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    autonomia: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    comportamento: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    desenvolimento: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    pedagogico: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    geral: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    mae: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    pai: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    maisinfo: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    escola: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    saudeinfo: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.EnumRacaNullableFilterSchema), zod_1.z.lazy(() => exports.RacaSchema)]).optional().nullable(),
    unidade: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeRelationFilterSchema), zod_1.z.lazy(() => exports.UnidadeWhereInputSchema)]).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorListRelationFilterSchema).optional()
}).strict());
exports.PacienteOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    analise: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    cpf: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rg: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    nascimentodata: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    nomemae: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    nomepai: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    telefone: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    laudofile: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    relescolar: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.PacienteCountOrderByAggregateInputSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.PacienteAvgOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.PacienteMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.PacienteMinOrderByAggregateInputSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.PacienteSumOrderByAggregateInputSchema).optional()
}).strict();
exports.PacienteScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.PacienteScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.PacienteScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.PacienteScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    analise: zod_1.z.union([zod_1.z.lazy(() => exports.BoolWithAggregatesFilterSchema), zod_1.z.boolean()]).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    cpf: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    rg: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    nascimentodata: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    nomemae: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    nomepai: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    unidadeId: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    telefone: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    laudofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    relescolar: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    gestacao: zod_1.z.lazy(() => exports.JsonNullableWithAggregatesFilterSchema).optional(),
    nascimento: zod_1.z.lazy(() => exports.JsonNullableWithAggregatesFilterSchema).optional(),
    autonomia: zod_1.z.lazy(() => exports.JsonNullableWithAggregatesFilterSchema).optional(),
    comportamento: zod_1.z.lazy(() => exports.JsonNullableWithAggregatesFilterSchema).optional(),
    desenvolimento: zod_1.z.lazy(() => exports.JsonNullableWithAggregatesFilterSchema).optional(),
    pedagogico: zod_1.z.lazy(() => exports.JsonNullableWithAggregatesFilterSchema).optional(),
    geral: zod_1.z.lazy(() => exports.JsonNullableWithAggregatesFilterSchema).optional(),
    mae: zod_1.z.lazy(() => exports.JsonNullableWithAggregatesFilterSchema).optional(),
    pai: zod_1.z.lazy(() => exports.JsonNullableWithAggregatesFilterSchema).optional(),
    maisinfo: zod_1.z.lazy(() => exports.JsonNullableWithAggregatesFilterSchema).optional(),
    escola: zod_1.z.lazy(() => exports.JsonNullableWithAggregatesFilterSchema).optional(),
    saudeinfo: zod_1.z.lazy(() => exports.JsonNullableWithAggregatesFilterSchema).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.EnumRacaNullableWithAggregatesFilterSchema), zod_1.z.lazy(() => exports.RacaSchema)]).optional().nullable(),
}).strict();
exports.UnidadeWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeWhereInputSchema), zod_1.z.lazy(() => exports.UnidadeWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.UnidadeWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeWhereInputSchema), zod_1.z.lazy(() => exports.UnidadeWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    endereco: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    pacientes: zod_1.z.lazy(() => exports.PacienteListRelationFilterSchema).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorListRelationFilterSchema).optional(),
    gerentes: zod_1.z.lazy(() => exports.GerenteListRelationFilterSchema).optional()
}).strict();
exports.UnidadeOrderByWithRelationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    endereco: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    pacientes: zod_1.z.lazy(() => exports.PacienteOrderByRelationAggregateInputSchema).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorOrderByRelationAggregateInputSchema).optional(),
    gerentes: zod_1.z.lazy(() => exports.GerenteOrderByRelationAggregateInputSchema).optional()
}).strict();
exports.UnidadeWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.number().int()
})
    .and(zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeWhereInputSchema), zod_1.z.lazy(() => exports.UnidadeWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.UnidadeWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeWhereInputSchema), zod_1.z.lazy(() => exports.UnidadeWhereInputSchema).array()]).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    endereco: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    pacientes: zod_1.z.lazy(() => exports.PacienteListRelationFilterSchema).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorListRelationFilterSchema).optional(),
    gerentes: zod_1.z.lazy(() => exports.GerenteListRelationFilterSchema).optional()
}).strict());
exports.UnidadeOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    endereco: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => exports.UnidadeCountOrderByAggregateInputSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.UnidadeAvgOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.UnidadeMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.UnidadeMinOrderByAggregateInputSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.UnidadeSumOrderByAggregateInputSchema).optional()
}).strict();
exports.UnidadeScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.UnidadeScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.UnidadeScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.UnidadeScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    endereco: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
}).strict();
exports.GerenteCreateInputSchema = zod_1.z.object({
    password: zod_1.z.string(),
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    email: zod_1.z.string(),
    telefone: zod_1.z.string(),
    raca: zod_1.z.lazy(() => exports.RacaSchema),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    unidade: zod_1.z.lazy(() => exports.UnidadeCreateNestedOneWithoutGerentesInputSchema)
}).strict();
exports.GerenteUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    password: zod_1.z.string(),
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    email: zod_1.z.string(),
    telefone: zod_1.z.string(),
    raca: zod_1.z.lazy(() => exports.RacaSchema),
    unidadeId: zod_1.z.number().int(),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable()
}).strict();
exports.GerenteUpdateInputSchema = zod_1.z.object({
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    unidade: zod_1.z.lazy(() => exports.UnidadeUpdateOneRequiredWithoutGerentesNestedInputSchema).optional()
}).strict();
exports.GerenteUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    unidadeId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.GerenteCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    password: zod_1.z.string(),
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    email: zod_1.z.string(),
    telefone: zod_1.z.string(),
    raca: zod_1.z.lazy(() => exports.RacaSchema),
    unidadeId: zod_1.z.number().int(),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable()
}).strict();
exports.GerenteUpdateManyMutationInputSchema = zod_1.z.object({
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.GerenteUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    unidadeId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.ColaboradorCreateInputSchema = zod_1.z.object({
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    nascimento: zod_1.z.coerce.date(),
    telefone: zod_1.z.string(),
    titulo: zod_1.z.string(),
    formacao: zod_1.z.string(),
    password: zod_1.z.string(),
    genero: zod_1.z.lazy(() => exports.GeneroSchema),
    email: zod_1.z.string(),
    raca: zod_1.z.lazy(() => exports.RacaSchema),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    unidade: zod_1.z.lazy(() => exports.UnidadeCreateNestedOneWithoutColaboradoresInputSchema),
    pacientes: zod_1.z.lazy(() => exports.PacienteCreateNestedManyWithoutColaboradoresInputSchema).optional()
}).strict();
exports.ColaboradorUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    nascimento: zod_1.z.coerce.date(),
    telefone: zod_1.z.string(),
    titulo: zod_1.z.string(),
    formacao: zod_1.z.string(),
    password: zod_1.z.string(),
    genero: zod_1.z.lazy(() => exports.GeneroSchema),
    email: zod_1.z.string(),
    raca: zod_1.z.lazy(() => exports.RacaSchema),
    unidadeId: zod_1.z.number().int(),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    pacientes: zod_1.z.lazy(() => exports.PacienteUncheckedCreateNestedManyWithoutColaboradoresInputSchema).optional()
}).strict();
exports.ColaboradorUpdateInputSchema = zod_1.z.object({
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nascimento: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    titulo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    formacao: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    genero: zod_1.z.union([zod_1.z.lazy(() => exports.GeneroSchema), zod_1.z.lazy(() => exports.EnumGeneroFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    unidade: zod_1.z.lazy(() => exports.UnidadeUpdateOneRequiredWithoutColaboradoresNestedInputSchema).optional(),
    pacientes: zod_1.z.lazy(() => exports.PacienteUpdateManyWithoutColaboradoresNestedInputSchema).optional()
}).strict();
exports.ColaboradorUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nascimento: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    titulo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    formacao: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    genero: zod_1.z.union([zod_1.z.lazy(() => exports.GeneroSchema), zod_1.z.lazy(() => exports.EnumGeneroFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    unidadeId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    pacientes: zod_1.z.lazy(() => exports.PacienteUncheckedUpdateManyWithoutColaboradoresNestedInputSchema).optional()
}).strict();
exports.ColaboradorCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    nascimento: zod_1.z.coerce.date(),
    telefone: zod_1.z.string(),
    titulo: zod_1.z.string(),
    formacao: zod_1.z.string(),
    password: zod_1.z.string(),
    genero: zod_1.z.lazy(() => exports.GeneroSchema),
    email: zod_1.z.string(),
    raca: zod_1.z.lazy(() => exports.RacaSchema),
    unidadeId: zod_1.z.number().int(),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable()
}).strict();
exports.ColaboradorUpdateManyMutationInputSchema = zod_1.z.object({
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nascimento: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    titulo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    formacao: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    genero: zod_1.z.union([zod_1.z.lazy(() => exports.GeneroSchema), zod_1.z.lazy(() => exports.EnumGeneroFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.ColaboradorUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nascimento: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    titulo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    formacao: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    genero: zod_1.z.union([zod_1.z.lazy(() => exports.GeneroSchema), zod_1.z.lazy(() => exports.EnumGeneroFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    unidadeId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.PacienteCreateInputSchema = zod_1.z.object({
    analise: zod_1.z.boolean().optional(),
    nome: zod_1.z.string().optional().nullable(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string().optional().nullable(),
    nascimentodata: zod_1.z.string().optional().nullable(),
    nomemae: zod_1.z.string().optional().nullable(),
    nomepai: zod_1.z.string().optional().nullable(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    telefone: zod_1.z.string().optional().nullable(),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    laudofile: zod_1.z.string().optional().nullable(),
    relescolar: zod_1.z.string().optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.lazy(() => exports.RacaSchema).optional().nullable(),
    unidade: zod_1.z.lazy(() => exports.UnidadeCreateNestedOneWithoutPacientesInputSchema).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorCreateNestedManyWithoutPacientesInputSchema).optional()
}).strict();
exports.PacienteUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    analise: zod_1.z.boolean().optional(),
    nome: zod_1.z.string().optional().nullable(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string().optional().nullable(),
    nascimentodata: zod_1.z.string().optional().nullable(),
    nomemae: zod_1.z.string().optional().nullable(),
    nomepai: zod_1.z.string().optional().nullable(),
    unidadeId: zod_1.z.number().int().optional(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    telefone: zod_1.z.string().optional().nullable(),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    laudofile: zod_1.z.string().optional().nullable(),
    relescolar: zod_1.z.string().optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.lazy(() => exports.RacaSchema).optional().nullable(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateNestedManyWithoutPacientesInputSchema).optional()
}).strict();
exports.PacienteUpdateInputSchema = zod_1.z.object({
    analise: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nascimentodata: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomemae: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomepai: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    laudofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    relescolar: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NullableEnumRacaFieldUpdateOperationsInputSchema)]).optional().nullable(),
    unidade: zod_1.z.lazy(() => exports.UnidadeUpdateOneRequiredWithoutPacientesNestedInputSchema).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorUpdateManyWithoutPacientesNestedInputSchema).optional()
}).strict();
exports.PacienteUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    analise: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nascimentodata: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomemae: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomepai: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    unidadeId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    laudofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    relescolar: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NullableEnumRacaFieldUpdateOperationsInputSchema)]).optional().nullable(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorUncheckedUpdateManyWithoutPacientesNestedInputSchema).optional()
}).strict();
exports.PacienteCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    analise: zod_1.z.boolean().optional(),
    nome: zod_1.z.string().optional().nullable(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string().optional().nullable(),
    nascimentodata: zod_1.z.string().optional().nullable(),
    nomemae: zod_1.z.string().optional().nullable(),
    nomepai: zod_1.z.string().optional().nullable(),
    unidadeId: zod_1.z.number().int().optional(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    telefone: zod_1.z.string().optional().nullable(),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    laudofile: zod_1.z.string().optional().nullable(),
    relescolar: zod_1.z.string().optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.lazy(() => exports.RacaSchema).optional().nullable()
}).strict();
exports.PacienteUpdateManyMutationInputSchema = zod_1.z.object({
    analise: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nascimentodata: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomemae: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomepai: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    laudofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    relescolar: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NullableEnumRacaFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.PacienteUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    analise: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nascimentodata: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomemae: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomepai: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    unidadeId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    laudofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    relescolar: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NullableEnumRacaFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.UnidadeCreateInputSchema = zod_1.z.object({
    nome: zod_1.z.string(),
    endereco: zod_1.z.string(),
    pacientes: zod_1.z.lazy(() => exports.PacienteCreateNestedManyWithoutUnidadeInputSchema).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorCreateNestedManyWithoutUnidadeInputSchema).optional(),
    gerentes: zod_1.z.lazy(() => exports.GerenteCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();
exports.UnidadeUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    nome: zod_1.z.string(),
    endereco: zod_1.z.string(),
    pacientes: zod_1.z.lazy(() => exports.PacienteUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional(),
    gerentes: zod_1.z.lazy(() => exports.GerenteUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();
exports.UnidadeUpdateInputSchema = zod_1.z.object({
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    endereco: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    pacientes: zod_1.z.lazy(() => exports.PacienteUpdateManyWithoutUnidadeNestedInputSchema).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorUpdateManyWithoutUnidadeNestedInputSchema).optional(),
    gerentes: zod_1.z.lazy(() => exports.GerenteUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();
exports.UnidadeUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    endereco: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    pacientes: zod_1.z.lazy(() => exports.PacienteUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional(),
    gerentes: zod_1.z.lazy(() => exports.GerenteUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();
exports.UnidadeCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    nome: zod_1.z.string(),
    endereco: zod_1.z.string()
}).strict();
exports.UnidadeUpdateManyMutationInputSchema = zod_1.z.object({
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    endereco: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.UnidadeUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    endereco: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.IntFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntFilterSchema)]).optional(),
}).strict();
exports.StringFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(() => exports.QueryModeSchema).optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringFilterSchema)]).optional(),
}).strict();
exports.EnumRacaFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.RacaSchema).optional(),
    in: zod_1.z.lazy(() => exports.RacaSchema).array().optional(),
    notIn: zod_1.z.lazy(() => exports.RacaSchema).array().optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NestedEnumRacaFilterSchema)]).optional(),
}).strict();
exports.StringNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional().nullable(),
    in: zod_1.z.string().array().optional().nullable(),
    notIn: zod_1.z.string().array().optional().nullable(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(() => exports.QueryModeSchema).optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();
exports.UnidadeRelationFilterSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => exports.UnidadeWhereInputSchema).optional(),
    isNot: zod_1.z.lazy(() => exports.UnidadeWhereInputSchema).optional()
}).strict();
exports.SortOrderInputSchema = zod_1.z.object({
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    nulls: zod_1.z.lazy(() => exports.NullsOrderSchema).optional()
}).strict();
exports.GerenteCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cpf: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rg: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    telefone: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    raca: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rgdocfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    fotofile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    compresfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.GerenteAvgOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.GerenteMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cpf: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rg: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    telefone: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    raca: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rgdocfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    fotofile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    compresfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.GerenteMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cpf: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rg: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    telefone: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    raca: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rgdocfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    fotofile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    compresfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.GerenteSumOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.IntWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.NestedFloatFilterSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional()
}).strict();
exports.StringWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(() => exports.QueryModeSchema).optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional()
}).strict();
exports.EnumRacaWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.RacaSchema).optional(),
    in: zod_1.z.lazy(() => exports.RacaSchema).array().optional(),
    notIn: zod_1.z.lazy(() => exports.RacaSchema).array().optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NestedEnumRacaWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedEnumRacaFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedEnumRacaFilterSchema).optional()
}).strict();
exports.StringNullableWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional().nullable(),
    in: zod_1.z.string().array().optional().nullable(),
    notIn: zod_1.z.string().array().optional().nullable(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(() => exports.QueryModeSchema).optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema).optional()
}).strict();
exports.DateTimeFilterSchema = zod_1.z.object({
    equals: zod_1.z.coerce.date().optional(),
    in: zod_1.z.coerce.date().array().optional(),
    notIn: zod_1.z.coerce.date().array().optional(),
    lt: zod_1.z.coerce.date().optional(),
    lte: zod_1.z.coerce.date().optional(),
    gt: zod_1.z.coerce.date().optional(),
    gte: zod_1.z.coerce.date().optional(),
    not: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.NestedDateTimeFilterSchema)]).optional(),
}).strict();
exports.EnumGeneroFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.GeneroSchema).optional(),
    in: zod_1.z.lazy(() => exports.GeneroSchema).array().optional(),
    notIn: zod_1.z.lazy(() => exports.GeneroSchema).array().optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.GeneroSchema), zod_1.z.lazy(() => exports.NestedEnumGeneroFilterSchema)]).optional(),
}).strict();
exports.PacienteListRelationFilterSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => exports.PacienteWhereInputSchema).optional(),
    some: zod_1.z.lazy(() => exports.PacienteWhereInputSchema).optional(),
    none: zod_1.z.lazy(() => exports.PacienteWhereInputSchema).optional()
}).strict();
exports.PacienteOrderByRelationAggregateInputSchema = zod_1.z.object({
    _count: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ColaboradorCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cpf: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rg: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nascimento: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    telefone: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    titulo: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    formacao: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    genero: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    raca: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rgdocfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    fotofile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    compresfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ColaboradorAvgOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ColaboradorMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cpf: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rg: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nascimento: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    telefone: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    titulo: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    formacao: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    genero: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    raca: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rgdocfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    fotofile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    compresfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ColaboradorMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cpf: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rg: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nascimento: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    telefone: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    titulo: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    formacao: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    genero: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    raca: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rgdocfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    fotofile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    compresfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ColaboradorSumOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.DateTimeWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.coerce.date().optional(),
    in: zod_1.z.coerce.date().array().optional(),
    notIn: zod_1.z.coerce.date().array().optional(),
    lt: zod_1.z.coerce.date().optional(),
    lte: zod_1.z.coerce.date().optional(),
    gt: zod_1.z.coerce.date().optional(),
    gte: zod_1.z.coerce.date().optional(),
    not: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.NestedDateTimeWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedDateTimeFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedDateTimeFilterSchema).optional()
}).strict();
exports.EnumGeneroWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.GeneroSchema).optional(),
    in: zod_1.z.lazy(() => exports.GeneroSchema).array().optional(),
    notIn: zod_1.z.lazy(() => exports.GeneroSchema).array().optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.GeneroSchema), zod_1.z.lazy(() => exports.NestedEnumGeneroWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedEnumGeneroFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedEnumGeneroFilterSchema).optional()
}).strict();
exports.BoolFilterSchema = zod_1.z.object({
    equals: zod_1.z.boolean().optional(),
    not: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.NestedBoolFilterSchema)]).optional(),
}).strict();
exports.JsonNullableFilterSchema = zod_1.z.object({
    equals: exports.InputJsonValueSchema.optional(),
    path: zod_1.z.string().array().optional(),
    string_contains: zod_1.z.string().optional(),
    string_starts_with: zod_1.z.string().optional(),
    string_ends_with: zod_1.z.string().optional(),
    array_contains: exports.InputJsonValueSchema.optional().nullable(),
    array_starts_with: exports.InputJsonValueSchema.optional().nullable(),
    array_ends_with: exports.InputJsonValueSchema.optional().nullable(),
    lt: exports.InputJsonValueSchema.optional(),
    lte: exports.InputJsonValueSchema.optional(),
    gt: exports.InputJsonValueSchema.optional(),
    gte: exports.InputJsonValueSchema.optional(),
    not: exports.InputJsonValueSchema.optional()
}).strict();
exports.EnumRacaNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.RacaSchema).optional().nullable(),
    in: zod_1.z.lazy(() => exports.RacaSchema).array().optional().nullable(),
    notIn: zod_1.z.lazy(() => exports.RacaSchema).array().optional().nullable(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NestedEnumRacaNullableFilterSchema)]).optional().nullable(),
}).strict();
exports.ColaboradorListRelationFilterSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => exports.ColaboradorWhereInputSchema).optional(),
    some: zod_1.z.lazy(() => exports.ColaboradorWhereInputSchema).optional(),
    none: zod_1.z.lazy(() => exports.ColaboradorWhereInputSchema).optional()
}).strict();
exports.ColaboradorOrderByRelationAggregateInputSchema = zod_1.z.object({
    _count: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.PacienteCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    analise: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cpf: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rg: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nascimentodata: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nomemae: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nomepai: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    telefone: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rgdocfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    fotofile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    compresfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    laudofile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    relescolar: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    gestacao: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nascimento: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    autonomia: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    comportamento: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    desenvolimento: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    pedagogico: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    geral: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    mae: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    pai: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    maisinfo: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    escola: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    saudeinfo: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    raca: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.PacienteAvgOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.PacienteMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    analise: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cpf: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rg: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nascimentodata: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nomemae: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nomepai: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    telefone: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rgdocfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    fotofile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    compresfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    laudofile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    relescolar: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    raca: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.PacienteMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    analise: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cpf: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rg: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nascimentodata: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nomemae: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nomepai: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    telefone: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rgdocfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    fotofile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    compresfile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    laudofile: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    relescolar: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    raca: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.PacienteSumOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    unidadeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.BoolWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.boolean().optional(),
    not: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.NestedBoolWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedBoolFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedBoolFilterSchema).optional()
}).strict();
exports.JsonNullableWithAggregatesFilterSchema = zod_1.z.object({
    equals: exports.InputJsonValueSchema.optional(),
    path: zod_1.z.string().array().optional(),
    string_contains: zod_1.z.string().optional(),
    string_starts_with: zod_1.z.string().optional(),
    string_ends_with: zod_1.z.string().optional(),
    array_contains: exports.InputJsonValueSchema.optional().nullable(),
    array_starts_with: exports.InputJsonValueSchema.optional().nullable(),
    array_ends_with: exports.InputJsonValueSchema.optional().nullable(),
    lt: exports.InputJsonValueSchema.optional(),
    lte: exports.InputJsonValueSchema.optional(),
    gt: exports.InputJsonValueSchema.optional(),
    gte: exports.InputJsonValueSchema.optional(),
    not: exports.InputJsonValueSchema.optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedJsonNullableFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedJsonNullableFilterSchema).optional()
}).strict();
exports.EnumRacaNullableWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.RacaSchema).optional().nullable(),
    in: zod_1.z.lazy(() => exports.RacaSchema).array().optional().nullable(),
    notIn: zod_1.z.lazy(() => exports.RacaSchema).array().optional().nullable(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NestedEnumRacaNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedEnumRacaNullableFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedEnumRacaNullableFilterSchema).optional()
}).strict();
exports.GerenteListRelationFilterSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => exports.GerenteWhereInputSchema).optional(),
    some: zod_1.z.lazy(() => exports.GerenteWhereInputSchema).optional(),
    none: zod_1.z.lazy(() => exports.GerenteWhereInputSchema).optional()
}).strict();
exports.GerenteOrderByRelationAggregateInputSchema = zod_1.z.object({
    _count: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.UnidadeCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    endereco: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.UnidadeAvgOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.UnidadeMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    endereco: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.UnidadeMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    nome: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    endereco: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.UnidadeSumOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.UnidadeCreateNestedOneWithoutGerentesInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeCreateWithoutGerentesInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedCreateWithoutGerentesInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.UnidadeCreateOrConnectWithoutGerentesInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.UnidadeWhereUniqueInputSchema).optional()
}).strict();
exports.StringFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.string().optional()
}).strict();
exports.EnumRacaFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.lazy(() => exports.RacaSchema).optional()
}).strict();
exports.NullableStringFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.string().optional().nullable()
}).strict();
exports.UnidadeUpdateOneRequiredWithoutGerentesNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeCreateWithoutGerentesInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedCreateWithoutGerentesInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.UnidadeCreateOrConnectWithoutGerentesInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.UnidadeUpsertWithoutGerentesInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.UnidadeWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeUpdateToOneWithWhereWithoutGerentesInputSchema), zod_1.z.lazy(() => exports.UnidadeUpdateWithoutGerentesInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedUpdateWithoutGerentesInputSchema)]).optional(),
}).strict();
exports.IntFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.number().optional(),
    increment: zod_1.z.number().optional(),
    decrement: zod_1.z.number().optional(),
    multiply: zod_1.z.number().optional(),
    divide: zod_1.z.number().optional()
}).strict();
exports.UnidadeCreateNestedOneWithoutColaboradoresInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeCreateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedCreateWithoutColaboradoresInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.UnidadeCreateOrConnectWithoutColaboradoresInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.UnidadeWhereUniqueInputSchema).optional()
}).strict();
exports.PacienteCreateNestedManyWithoutColaboradoresInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteCreateWithoutColaboradoresInputSchema).array(), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutColaboradoresInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutColaboradoresInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.PacienteUncheckedCreateNestedManyWithoutColaboradoresInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteCreateWithoutColaboradoresInputSchema).array(), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutColaboradoresInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutColaboradoresInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.DateTimeFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.coerce.date().optional()
}).strict();
exports.EnumGeneroFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.lazy(() => exports.GeneroSchema).optional()
}).strict();
exports.UnidadeUpdateOneRequiredWithoutColaboradoresNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeCreateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedCreateWithoutColaboradoresInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.UnidadeCreateOrConnectWithoutColaboradoresInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.UnidadeUpsertWithoutColaboradoresInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.UnidadeWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeUpdateToOneWithWhereWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.UnidadeUpdateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedUpdateWithoutColaboradoresInputSchema)]).optional(),
}).strict();
exports.PacienteUpdateManyWithoutColaboradoresNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteCreateWithoutColaboradoresInputSchema).array(), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutColaboradoresInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutColaboradoresInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpsertWithWhereUniqueWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteUpsertWithWhereUniqueWithoutColaboradoresInputSchema).array()]).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpdateWithWhereUniqueWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteUpdateWithWhereUniqueWithoutColaboradoresInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpdateManyWithWhereWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteUpdateManyWithWhereWithoutColaboradoresInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteScalarWhereInputSchema), zod_1.z.lazy(() => exports.PacienteScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.PacienteUncheckedUpdateManyWithoutColaboradoresNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteCreateWithoutColaboradoresInputSchema).array(), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutColaboradoresInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutColaboradoresInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpsertWithWhereUniqueWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteUpsertWithWhereUniqueWithoutColaboradoresInputSchema).array()]).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpdateWithWhereUniqueWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteUpdateWithWhereUniqueWithoutColaboradoresInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpdateManyWithWhereWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteUpdateManyWithWhereWithoutColaboradoresInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteScalarWhereInputSchema), zod_1.z.lazy(() => exports.PacienteScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.UnidadeCreateNestedOneWithoutPacientesInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeCreateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedCreateWithoutPacientesInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.UnidadeCreateOrConnectWithoutPacientesInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.UnidadeWhereUniqueInputSchema).optional()
}).strict();
exports.ColaboradorCreateNestedManyWithoutPacientesInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateWithoutPacientesInputSchema).array(), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutPacientesInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutPacientesInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.ColaboradorUncheckedCreateNestedManyWithoutPacientesInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateWithoutPacientesInputSchema).array(), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutPacientesInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutPacientesInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.BoolFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.boolean().optional()
}).strict();
exports.NullableEnumRacaFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.lazy(() => exports.RacaSchema).optional().nullable()
}).strict();
exports.UnidadeUpdateOneRequiredWithoutPacientesNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeCreateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedCreateWithoutPacientesInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.UnidadeCreateOrConnectWithoutPacientesInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.UnidadeUpsertWithoutPacientesInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.UnidadeWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeUpdateToOneWithWhereWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.UnidadeUpdateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedUpdateWithoutPacientesInputSchema)]).optional(),
}).strict();
exports.ColaboradorUpdateManyWithoutPacientesNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateWithoutPacientesInputSchema).array(), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutPacientesInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutPacientesInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpsertWithWhereUniqueWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorUpsertWithWhereUniqueWithoutPacientesInputSchema).array()]).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpdateWithWhereUniqueWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorUpdateWithWhereUniqueWithoutPacientesInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpdateManyWithWhereWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorUpdateManyWithWhereWithoutPacientesInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorScalarWhereInputSchema), zod_1.z.lazy(() => exports.ColaboradorScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.ColaboradorUncheckedUpdateManyWithoutPacientesNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateWithoutPacientesInputSchema).array(), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutPacientesInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutPacientesInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpsertWithWhereUniqueWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorUpsertWithWhereUniqueWithoutPacientesInputSchema).array()]).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpdateWithWhereUniqueWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorUpdateWithWhereUniqueWithoutPacientesInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpdateManyWithWhereWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorUpdateManyWithWhereWithoutPacientesInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorScalarWhereInputSchema), zod_1.z.lazy(() => exports.ColaboradorScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.PacienteCreateNestedManyWithoutUnidadeInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteCreateWithoutUnidadeInputSchema).array(), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutUnidadeInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutUnidadeInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.PacienteCreateManyUnidadeInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.ColaboradorCreateNestedManyWithoutUnidadeInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateWithoutUnidadeInputSchema).array(), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutUnidadeInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutUnidadeInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.ColaboradorCreateManyUnidadeInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.GerenteCreateNestedManyWithoutUnidadeInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteCreateWithoutUnidadeInputSchema).array(), zod_1.z.lazy(() => exports.GerenteUncheckedCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteUncheckedCreateWithoutUnidadeInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteCreateOrConnectWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteCreateOrConnectWithoutUnidadeInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.GerenteCreateManyUnidadeInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.PacienteUncheckedCreateNestedManyWithoutUnidadeInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteCreateWithoutUnidadeInputSchema).array(), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutUnidadeInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutUnidadeInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.PacienteCreateManyUnidadeInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.ColaboradorUncheckedCreateNestedManyWithoutUnidadeInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateWithoutUnidadeInputSchema).array(), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutUnidadeInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutUnidadeInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.ColaboradorCreateManyUnidadeInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.GerenteUncheckedCreateNestedManyWithoutUnidadeInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteCreateWithoutUnidadeInputSchema).array(), zod_1.z.lazy(() => exports.GerenteUncheckedCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteUncheckedCreateWithoutUnidadeInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteCreateOrConnectWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteCreateOrConnectWithoutUnidadeInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.GerenteCreateManyUnidadeInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.PacienteUpdateManyWithoutUnidadeNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteCreateWithoutUnidadeInputSchema).array(), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutUnidadeInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutUnidadeInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpsertWithWhereUniqueWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteUpsertWithWhereUniqueWithoutUnidadeInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.PacienteCreateManyUnidadeInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpdateWithWhereUniqueWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteUpdateWithWhereUniqueWithoutUnidadeInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpdateManyWithWhereWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteUpdateManyWithWhereWithoutUnidadeInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteScalarWhereInputSchema), zod_1.z.lazy(() => exports.PacienteScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.ColaboradorUpdateManyWithoutUnidadeNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateWithoutUnidadeInputSchema).array(), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutUnidadeInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutUnidadeInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpsertWithWhereUniqueWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorUpsertWithWhereUniqueWithoutUnidadeInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.ColaboradorCreateManyUnidadeInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpdateWithWhereUniqueWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorUpdateWithWhereUniqueWithoutUnidadeInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpdateManyWithWhereWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorUpdateManyWithWhereWithoutUnidadeInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorScalarWhereInputSchema), zod_1.z.lazy(() => exports.ColaboradorScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.GerenteUpdateManyWithoutUnidadeNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteCreateWithoutUnidadeInputSchema).array(), zod_1.z.lazy(() => exports.GerenteUncheckedCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteUncheckedCreateWithoutUnidadeInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteCreateOrConnectWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteCreateOrConnectWithoutUnidadeInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteUpsertWithWhereUniqueWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteUpsertWithWhereUniqueWithoutUnidadeInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.GerenteCreateManyUnidadeInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteUpdateWithWhereUniqueWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteUpdateWithWhereUniqueWithoutUnidadeInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteUpdateManyWithWhereWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteUpdateManyWithWhereWithoutUnidadeInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteScalarWhereInputSchema), zod_1.z.lazy(() => exports.GerenteScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.PacienteUncheckedUpdateManyWithoutUnidadeNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteCreateWithoutUnidadeInputSchema).array(), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutUnidadeInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteCreateOrConnectWithoutUnidadeInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpsertWithWhereUniqueWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteUpsertWithWhereUniqueWithoutUnidadeInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.PacienteCreateManyUnidadeInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpdateWithWhereUniqueWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteUpdateWithWhereUniqueWithoutUnidadeInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpdateManyWithWhereWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteUpdateManyWithWhereWithoutUnidadeInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteScalarWhereInputSchema), zod_1.z.lazy(() => exports.PacienteScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.ColaboradorUncheckedUpdateManyWithoutUnidadeNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateWithoutUnidadeInputSchema).array(), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutUnidadeInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateOrConnectWithoutUnidadeInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpsertWithWhereUniqueWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorUpsertWithWhereUniqueWithoutUnidadeInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.ColaboradorCreateManyUnidadeInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpdateWithWhereUniqueWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorUpdateWithWhereUniqueWithoutUnidadeInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpdateManyWithWhereWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorUpdateManyWithWhereWithoutUnidadeInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorScalarWhereInputSchema), zod_1.z.lazy(() => exports.ColaboradorScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.GerenteUncheckedUpdateManyWithoutUnidadeNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteCreateWithoutUnidadeInputSchema).array(), zod_1.z.lazy(() => exports.GerenteUncheckedCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteUncheckedCreateWithoutUnidadeInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteCreateOrConnectWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteCreateOrConnectWithoutUnidadeInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteUpsertWithWhereUniqueWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteUpsertWithWhereUniqueWithoutUnidadeInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.GerenteCreateManyUnidadeInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteUpdateWithWhereUniqueWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteUpdateWithWhereUniqueWithoutUnidadeInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteUpdateManyWithWhereWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteUpdateManyWithWhereWithoutUnidadeInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteScalarWhereInputSchema), zod_1.z.lazy(() => exports.GerenteScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.NestedIntFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntFilterSchema)]).optional(),
}).strict();
exports.NestedStringFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringFilterSchema)]).optional(),
}).strict();
exports.NestedEnumRacaFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.RacaSchema).optional(),
    in: zod_1.z.lazy(() => exports.RacaSchema).array().optional(),
    notIn: zod_1.z.lazy(() => exports.RacaSchema).array().optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NestedEnumRacaFilterSchema)]).optional(),
}).strict();
exports.NestedStringNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional().nullable(),
    in: zod_1.z.string().array().optional().nullable(),
    notIn: zod_1.z.string().array().optional().nullable(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();
exports.NestedIntWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.NestedFloatFilterSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional()
}).strict();
exports.NestedFloatFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedFloatFilterSchema)]).optional(),
}).strict();
exports.NestedStringWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional()
}).strict();
exports.NestedEnumRacaWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.RacaSchema).optional(),
    in: zod_1.z.lazy(() => exports.RacaSchema).array().optional(),
    notIn: zod_1.z.lazy(() => exports.RacaSchema).array().optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NestedEnumRacaWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedEnumRacaFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedEnumRacaFilterSchema).optional()
}).strict();
exports.NestedStringNullableWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional().nullable(),
    in: zod_1.z.string().array().optional().nullable(),
    notIn: zod_1.z.string().array().optional().nullable(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema).optional()
}).strict();
exports.NestedIntNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional().nullable(),
    in: zod_1.z.number().array().optional().nullable(),
    notIn: zod_1.z.number().array().optional().nullable(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema)]).optional().nullable(),
}).strict();
exports.NestedDateTimeFilterSchema = zod_1.z.object({
    equals: zod_1.z.coerce.date().optional(),
    in: zod_1.z.coerce.date().array().optional(),
    notIn: zod_1.z.coerce.date().array().optional(),
    lt: zod_1.z.coerce.date().optional(),
    lte: zod_1.z.coerce.date().optional(),
    gt: zod_1.z.coerce.date().optional(),
    gte: zod_1.z.coerce.date().optional(),
    not: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.NestedDateTimeFilterSchema)]).optional(),
}).strict();
exports.NestedEnumGeneroFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.GeneroSchema).optional(),
    in: zod_1.z.lazy(() => exports.GeneroSchema).array().optional(),
    notIn: zod_1.z.lazy(() => exports.GeneroSchema).array().optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.GeneroSchema), zod_1.z.lazy(() => exports.NestedEnumGeneroFilterSchema)]).optional(),
}).strict();
exports.NestedDateTimeWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.coerce.date().optional(),
    in: zod_1.z.coerce.date().array().optional(),
    notIn: zod_1.z.coerce.date().array().optional(),
    lt: zod_1.z.coerce.date().optional(),
    lte: zod_1.z.coerce.date().optional(),
    gt: zod_1.z.coerce.date().optional(),
    gte: zod_1.z.coerce.date().optional(),
    not: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.NestedDateTimeWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedDateTimeFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedDateTimeFilterSchema).optional()
}).strict();
exports.NestedEnumGeneroWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.GeneroSchema).optional(),
    in: zod_1.z.lazy(() => exports.GeneroSchema).array().optional(),
    notIn: zod_1.z.lazy(() => exports.GeneroSchema).array().optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.GeneroSchema), zod_1.z.lazy(() => exports.NestedEnumGeneroWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedEnumGeneroFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedEnumGeneroFilterSchema).optional()
}).strict();
exports.NestedBoolFilterSchema = zod_1.z.object({
    equals: zod_1.z.boolean().optional(),
    not: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.NestedBoolFilterSchema)]).optional(),
}).strict();
exports.NestedEnumRacaNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.RacaSchema).optional().nullable(),
    in: zod_1.z.lazy(() => exports.RacaSchema).array().optional().nullable(),
    notIn: zod_1.z.lazy(() => exports.RacaSchema).array().optional().nullable(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NestedEnumRacaNullableFilterSchema)]).optional().nullable(),
}).strict();
exports.NestedBoolWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.boolean().optional(),
    not: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.NestedBoolWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedBoolFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedBoolFilterSchema).optional()
}).strict();
exports.NestedJsonNullableFilterSchema = zod_1.z.object({
    equals: exports.InputJsonValueSchema.optional(),
    path: zod_1.z.string().array().optional(),
    string_contains: zod_1.z.string().optional(),
    string_starts_with: zod_1.z.string().optional(),
    string_ends_with: zod_1.z.string().optional(),
    array_contains: exports.InputJsonValueSchema.optional().nullable(),
    array_starts_with: exports.InputJsonValueSchema.optional().nullable(),
    array_ends_with: exports.InputJsonValueSchema.optional().nullable(),
    lt: exports.InputJsonValueSchema.optional(),
    lte: exports.InputJsonValueSchema.optional(),
    gt: exports.InputJsonValueSchema.optional(),
    gte: exports.InputJsonValueSchema.optional(),
    not: exports.InputJsonValueSchema.optional()
}).strict();
exports.NestedEnumRacaNullableWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.RacaSchema).optional().nullable(),
    in: zod_1.z.lazy(() => exports.RacaSchema).array().optional().nullable(),
    notIn: zod_1.z.lazy(() => exports.RacaSchema).array().optional().nullable(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NestedEnumRacaNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedEnumRacaNullableFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedEnumRacaNullableFilterSchema).optional()
}).strict();
exports.UnidadeCreateWithoutGerentesInputSchema = zod_1.z.object({
    nome: zod_1.z.string(),
    endereco: zod_1.z.string(),
    pacientes: zod_1.z.lazy(() => exports.PacienteCreateNestedManyWithoutUnidadeInputSchema).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();
exports.UnidadeUncheckedCreateWithoutGerentesInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    nome: zod_1.z.string(),
    endereco: zod_1.z.string(),
    pacientes: zod_1.z.lazy(() => exports.PacienteUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();
exports.UnidadeCreateOrConnectWithoutGerentesInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.UnidadeWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeCreateWithoutGerentesInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedCreateWithoutGerentesInputSchema)]),
}).strict();
exports.UnidadeUpsertWithoutGerentesInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeUpdateWithoutGerentesInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedUpdateWithoutGerentesInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeCreateWithoutGerentesInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedCreateWithoutGerentesInputSchema)]),
    where: zod_1.z.lazy(() => exports.UnidadeWhereInputSchema).optional()
}).strict();
exports.UnidadeUpdateToOneWithWhereWithoutGerentesInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.UnidadeWhereInputSchema).optional(),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeUpdateWithoutGerentesInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedUpdateWithoutGerentesInputSchema)]),
}).strict();
exports.UnidadeUpdateWithoutGerentesInputSchema = zod_1.z.object({
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    endereco: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    pacientes: zod_1.z.lazy(() => exports.PacienteUpdateManyWithoutUnidadeNestedInputSchema).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();
exports.UnidadeUncheckedUpdateWithoutGerentesInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    endereco: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    pacientes: zod_1.z.lazy(() => exports.PacienteUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();
exports.UnidadeCreateWithoutColaboradoresInputSchema = zod_1.z.object({
    nome: zod_1.z.string(),
    endereco: zod_1.z.string(),
    pacientes: zod_1.z.lazy(() => exports.PacienteCreateNestedManyWithoutUnidadeInputSchema).optional(),
    gerentes: zod_1.z.lazy(() => exports.GerenteCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();
exports.UnidadeUncheckedCreateWithoutColaboradoresInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    nome: zod_1.z.string(),
    endereco: zod_1.z.string(),
    pacientes: zod_1.z.lazy(() => exports.PacienteUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional(),
    gerentes: zod_1.z.lazy(() => exports.GerenteUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();
exports.UnidadeCreateOrConnectWithoutColaboradoresInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.UnidadeWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeCreateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedCreateWithoutColaboradoresInputSchema)]),
}).strict();
exports.PacienteCreateWithoutColaboradoresInputSchema = zod_1.z.object({
    analise: zod_1.z.boolean().optional(),
    nome: zod_1.z.string().optional().nullable(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string().optional().nullable(),
    nascimentodata: zod_1.z.string().optional().nullable(),
    nomemae: zod_1.z.string().optional().nullable(),
    nomepai: zod_1.z.string().optional().nullable(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    telefone: zod_1.z.string().optional().nullable(),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    laudofile: zod_1.z.string().optional().nullable(),
    relescolar: zod_1.z.string().optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.lazy(() => exports.RacaSchema).optional().nullable(),
    unidade: zod_1.z.lazy(() => exports.UnidadeCreateNestedOneWithoutPacientesInputSchema).optional()
}).strict();
exports.PacienteUncheckedCreateWithoutColaboradoresInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    analise: zod_1.z.boolean().optional(),
    nome: zod_1.z.string().optional().nullable(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string().optional().nullable(),
    nascimentodata: zod_1.z.string().optional().nullable(),
    nomemae: zod_1.z.string().optional().nullable(),
    nomepai: zod_1.z.string().optional().nullable(),
    unidadeId: zod_1.z.number().int().optional(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    telefone: zod_1.z.string().optional().nullable(),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    laudofile: zod_1.z.string().optional().nullable(),
    relescolar: zod_1.z.string().optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.lazy(() => exports.RacaSchema).optional().nullable()
}).strict();
exports.PacienteCreateOrConnectWithoutColaboradoresInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutColaboradoresInputSchema)]),
}).strict();
exports.UnidadeUpsertWithoutColaboradoresInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeUpdateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedUpdateWithoutColaboradoresInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeCreateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedCreateWithoutColaboradoresInputSchema)]),
    where: zod_1.z.lazy(() => exports.UnidadeWhereInputSchema).optional()
}).strict();
exports.UnidadeUpdateToOneWithWhereWithoutColaboradoresInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.UnidadeWhereInputSchema).optional(),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeUpdateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedUpdateWithoutColaboradoresInputSchema)]),
}).strict();
exports.UnidadeUpdateWithoutColaboradoresInputSchema = zod_1.z.object({
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    endereco: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    pacientes: zod_1.z.lazy(() => exports.PacienteUpdateManyWithoutUnidadeNestedInputSchema).optional(),
    gerentes: zod_1.z.lazy(() => exports.GerenteUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();
exports.UnidadeUncheckedUpdateWithoutColaboradoresInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    endereco: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    pacientes: zod_1.z.lazy(() => exports.PacienteUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional(),
    gerentes: zod_1.z.lazy(() => exports.GerenteUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();
exports.PacienteUpsertWithWhereUniqueWithoutColaboradoresInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpdateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedUpdateWithoutColaboradoresInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutColaboradoresInputSchema)]),
}).strict();
exports.PacienteUpdateWithWhereUniqueWithoutColaboradoresInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpdateWithoutColaboradoresInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedUpdateWithoutColaboradoresInputSchema)]),
}).strict();
exports.PacienteUpdateManyWithWhereWithoutColaboradoresInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.PacienteScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedUpdateManyWithoutColaboradoresInputSchema)]),
}).strict();
exports.PacienteScalarWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteScalarWhereInputSchema), zod_1.z.lazy(() => exports.PacienteScalarWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.PacienteScalarWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteScalarWhereInputSchema), zod_1.z.lazy(() => exports.PacienteScalarWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    analise: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    cpf: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    rg: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    nascimentodata: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    nomemae: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    nomepai: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    unidadeId: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    telefone: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    laudofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    relescolar: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    gestacao: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    nascimento: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    autonomia: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    comportamento: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    desenvolimento: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    pedagogico: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    geral: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    mae: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    pai: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    maisinfo: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    escola: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    saudeinfo: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.EnumRacaNullableFilterSchema), zod_1.z.lazy(() => exports.RacaSchema)]).optional().nullable(),
}).strict();
exports.UnidadeCreateWithoutPacientesInputSchema = zod_1.z.object({
    nome: zod_1.z.string(),
    endereco: zod_1.z.string(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorCreateNestedManyWithoutUnidadeInputSchema).optional(),
    gerentes: zod_1.z.lazy(() => exports.GerenteCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();
exports.UnidadeUncheckedCreateWithoutPacientesInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    nome: zod_1.z.string(),
    endereco: zod_1.z.string(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional(),
    gerentes: zod_1.z.lazy(() => exports.GerenteUncheckedCreateNestedManyWithoutUnidadeInputSchema).optional()
}).strict();
exports.UnidadeCreateOrConnectWithoutPacientesInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.UnidadeWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeCreateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedCreateWithoutPacientesInputSchema)]),
}).strict();
exports.ColaboradorCreateWithoutPacientesInputSchema = zod_1.z.object({
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    nascimento: zod_1.z.coerce.date(),
    telefone: zod_1.z.string(),
    titulo: zod_1.z.string(),
    formacao: zod_1.z.string(),
    password: zod_1.z.string(),
    genero: zod_1.z.lazy(() => exports.GeneroSchema),
    email: zod_1.z.string(),
    raca: zod_1.z.lazy(() => exports.RacaSchema),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    unidade: zod_1.z.lazy(() => exports.UnidadeCreateNestedOneWithoutColaboradoresInputSchema)
}).strict();
exports.ColaboradorUncheckedCreateWithoutPacientesInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    nascimento: zod_1.z.coerce.date(),
    telefone: zod_1.z.string(),
    titulo: zod_1.z.string(),
    formacao: zod_1.z.string(),
    password: zod_1.z.string(),
    genero: zod_1.z.lazy(() => exports.GeneroSchema),
    email: zod_1.z.string(),
    raca: zod_1.z.lazy(() => exports.RacaSchema),
    unidadeId: zod_1.z.number().int(),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable()
}).strict();
exports.ColaboradorCreateOrConnectWithoutPacientesInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutPacientesInputSchema)]),
}).strict();
exports.UnidadeUpsertWithoutPacientesInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeUpdateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedUpdateWithoutPacientesInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeCreateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedCreateWithoutPacientesInputSchema)]),
    where: zod_1.z.lazy(() => exports.UnidadeWhereInputSchema).optional()
}).strict();
exports.UnidadeUpdateToOneWithWhereWithoutPacientesInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.UnidadeWhereInputSchema).optional(),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.UnidadeUpdateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.UnidadeUncheckedUpdateWithoutPacientesInputSchema)]),
}).strict();
exports.UnidadeUpdateWithoutPacientesInputSchema = zod_1.z.object({
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    endereco: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorUpdateManyWithoutUnidadeNestedInputSchema).optional(),
    gerentes: zod_1.z.lazy(() => exports.GerenteUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();
exports.UnidadeUncheckedUpdateWithoutPacientesInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    endereco: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional(),
    gerentes: zod_1.z.lazy(() => exports.GerenteUncheckedUpdateManyWithoutUnidadeNestedInputSchema).optional()
}).strict();
exports.ColaboradorUpsertWithWhereUniqueWithoutPacientesInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpdateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedUpdateWithoutPacientesInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutPacientesInputSchema)]),
}).strict();
exports.ColaboradorUpdateWithWhereUniqueWithoutPacientesInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpdateWithoutPacientesInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedUpdateWithoutPacientesInputSchema)]),
}).strict();
exports.ColaboradorUpdateManyWithWhereWithoutPacientesInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ColaboradorScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedUpdateManyWithoutPacientesInputSchema)]),
}).strict();
exports.ColaboradorScalarWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorScalarWhereInputSchema), zod_1.z.lazy(() => exports.ColaboradorScalarWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.ColaboradorScalarWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorScalarWhereInputSchema), zod_1.z.lazy(() => exports.ColaboradorScalarWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    cpf: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    rg: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.coerce.date()]).optional(),
    telefone: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    titulo: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    formacao: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    genero: zod_1.z.union([zod_1.z.lazy(() => exports.EnumGeneroFilterSchema), zod_1.z.lazy(() => exports.GeneroSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.EnumRacaFilterSchema), zod_1.z.lazy(() => exports.RacaSchema)]).optional(),
    unidadeId: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
}).strict();
exports.PacienteCreateWithoutUnidadeInputSchema = zod_1.z.object({
    analise: zod_1.z.boolean().optional(),
    nome: zod_1.z.string().optional().nullable(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string().optional().nullable(),
    nascimentodata: zod_1.z.string().optional().nullable(),
    nomemae: zod_1.z.string().optional().nullable(),
    nomepai: zod_1.z.string().optional().nullable(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    telefone: zod_1.z.string().optional().nullable(),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    laudofile: zod_1.z.string().optional().nullable(),
    relescolar: zod_1.z.string().optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.lazy(() => exports.RacaSchema).optional().nullable(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorCreateNestedManyWithoutPacientesInputSchema).optional()
}).strict();
exports.PacienteUncheckedCreateWithoutUnidadeInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    analise: zod_1.z.boolean().optional(),
    nome: zod_1.z.string().optional().nullable(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string().optional().nullable(),
    nascimentodata: zod_1.z.string().optional().nullable(),
    nomemae: zod_1.z.string().optional().nullable(),
    nomepai: zod_1.z.string().optional().nullable(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    telefone: zod_1.z.string().optional().nullable(),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    laudofile: zod_1.z.string().optional().nullable(),
    relescolar: zod_1.z.string().optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.lazy(() => exports.RacaSchema).optional().nullable(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateNestedManyWithoutPacientesInputSchema).optional()
}).strict();
exports.PacienteCreateOrConnectWithoutUnidadeInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutUnidadeInputSchema)]),
}).strict();
exports.PacienteCreateManyUnidadeInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateManyUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteCreateManyUnidadeInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.ColaboradorCreateWithoutUnidadeInputSchema = zod_1.z.object({
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    nascimento: zod_1.z.coerce.date(),
    telefone: zod_1.z.string(),
    titulo: zod_1.z.string(),
    formacao: zod_1.z.string(),
    password: zod_1.z.string(),
    genero: zod_1.z.lazy(() => exports.GeneroSchema),
    email: zod_1.z.string(),
    raca: zod_1.z.lazy(() => exports.RacaSchema),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    pacientes: zod_1.z.lazy(() => exports.PacienteCreateNestedManyWithoutColaboradoresInputSchema).optional()
}).strict();
exports.ColaboradorUncheckedCreateWithoutUnidadeInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    nascimento: zod_1.z.coerce.date(),
    telefone: zod_1.z.string(),
    titulo: zod_1.z.string(),
    formacao: zod_1.z.string(),
    password: zod_1.z.string(),
    genero: zod_1.z.lazy(() => exports.GeneroSchema),
    email: zod_1.z.string(),
    raca: zod_1.z.lazy(() => exports.RacaSchema),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    pacientes: zod_1.z.lazy(() => exports.PacienteUncheckedCreateNestedManyWithoutColaboradoresInputSchema).optional()
}).strict();
exports.ColaboradorCreateOrConnectWithoutUnidadeInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutUnidadeInputSchema)]),
}).strict();
exports.ColaboradorCreateManyUnidadeInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateManyUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorCreateManyUnidadeInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.GerenteCreateWithoutUnidadeInputSchema = zod_1.z.object({
    password: zod_1.z.string(),
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    email: zod_1.z.string(),
    telefone: zod_1.z.string(),
    raca: zod_1.z.lazy(() => exports.RacaSchema),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable()
}).strict();
exports.GerenteUncheckedCreateWithoutUnidadeInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    password: zod_1.z.string(),
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    email: zod_1.z.string(),
    telefone: zod_1.z.string(),
    raca: zod_1.z.lazy(() => exports.RacaSchema),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable()
}).strict();
exports.GerenteCreateOrConnectWithoutUnidadeInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteUncheckedCreateWithoutUnidadeInputSchema)]),
}).strict();
exports.GerenteCreateManyUnidadeInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteCreateManyUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteCreateManyUnidadeInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.PacienteUpsertWithWhereUniqueWithoutUnidadeInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpdateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedUpdateWithoutUnidadeInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedCreateWithoutUnidadeInputSchema)]),
}).strict();
exports.PacienteUpdateWithWhereUniqueWithoutUnidadeInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.PacienteWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpdateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedUpdateWithoutUnidadeInputSchema)]),
}).strict();
exports.PacienteUpdateManyWithWhereWithoutUnidadeInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.PacienteScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.PacienteUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.PacienteUncheckedUpdateManyWithoutUnidadeInputSchema)]),
}).strict();
exports.ColaboradorUpsertWithWhereUniqueWithoutUnidadeInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpdateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedUpdateWithoutUnidadeInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedCreateWithoutUnidadeInputSchema)]),
}).strict();
exports.ColaboradorUpdateWithWhereUniqueWithoutUnidadeInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ColaboradorWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpdateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedUpdateWithoutUnidadeInputSchema)]),
}).strict();
exports.ColaboradorUpdateManyWithWhereWithoutUnidadeInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ColaboradorScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.ColaboradorUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.ColaboradorUncheckedUpdateManyWithoutUnidadeInputSchema)]),
}).strict();
exports.GerenteUpsertWithWhereUniqueWithoutUnidadeInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteUpdateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteUncheckedUpdateWithoutUnidadeInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteCreateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteUncheckedCreateWithoutUnidadeInputSchema)]),
}).strict();
exports.GerenteUpdateWithWhereUniqueWithoutUnidadeInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.GerenteWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteUpdateWithoutUnidadeInputSchema), zod_1.z.lazy(() => exports.GerenteUncheckedUpdateWithoutUnidadeInputSchema)]),
}).strict();
exports.GerenteUpdateManyWithWhereWithoutUnidadeInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.GerenteScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.GerenteUncheckedUpdateManyWithoutUnidadeInputSchema)]),
}).strict();
exports.GerenteScalarWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteScalarWhereInputSchema), zod_1.z.lazy(() => exports.GerenteScalarWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.GerenteScalarWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.GerenteScalarWhereInputSchema), zod_1.z.lazy(() => exports.GerenteScalarWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    nome: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    cpf: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    rg: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    telefone: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.EnumRacaFilterSchema), zod_1.z.lazy(() => exports.RacaSchema)]).optional(),
    unidadeId: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
}).strict();
exports.PacienteUpdateWithoutColaboradoresInputSchema = zod_1.z.object({
    analise: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nascimentodata: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomemae: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomepai: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    laudofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    relescolar: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NullableEnumRacaFieldUpdateOperationsInputSchema)]).optional().nullable(),
    unidade: zod_1.z.lazy(() => exports.UnidadeUpdateOneRequiredWithoutPacientesNestedInputSchema).optional()
}).strict();
exports.PacienteUncheckedUpdateWithoutColaboradoresInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    analise: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nascimentodata: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomemae: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomepai: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    unidadeId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    laudofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    relescolar: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NullableEnumRacaFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.PacienteUncheckedUpdateManyWithoutColaboradoresInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    analise: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nascimentodata: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomemae: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomepai: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    unidadeId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    laudofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    relescolar: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NullableEnumRacaFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.ColaboradorUpdateWithoutPacientesInputSchema = zod_1.z.object({
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nascimento: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    titulo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    formacao: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    genero: zod_1.z.union([zod_1.z.lazy(() => exports.GeneroSchema), zod_1.z.lazy(() => exports.EnumGeneroFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    unidade: zod_1.z.lazy(() => exports.UnidadeUpdateOneRequiredWithoutColaboradoresNestedInputSchema).optional()
}).strict();
exports.ColaboradorUncheckedUpdateWithoutPacientesInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nascimento: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    titulo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    formacao: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    genero: zod_1.z.union([zod_1.z.lazy(() => exports.GeneroSchema), zod_1.z.lazy(() => exports.EnumGeneroFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    unidadeId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.ColaboradorUncheckedUpdateManyWithoutPacientesInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nascimento: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    titulo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    formacao: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    genero: zod_1.z.union([zod_1.z.lazy(() => exports.GeneroSchema), zod_1.z.lazy(() => exports.EnumGeneroFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    unidadeId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.PacienteCreateManyUnidadeInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    analise: zod_1.z.boolean().optional(),
    nome: zod_1.z.string().optional().nullable(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string().optional().nullable(),
    nascimentodata: zod_1.z.string().optional().nullable(),
    nomemae: zod_1.z.string().optional().nullable(),
    nomepai: zod_1.z.string().optional().nullable(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    telefone: zod_1.z.string().optional().nullable(),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable(),
    laudofile: zod_1.z.string().optional().nullable(),
    relescolar: zod_1.z.string().optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.lazy(() => exports.RacaSchema).optional().nullable()
}).strict();
exports.ColaboradorCreateManyUnidadeInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    nascimento: zod_1.z.coerce.date(),
    telefone: zod_1.z.string(),
    titulo: zod_1.z.string(),
    formacao: zod_1.z.string(),
    password: zod_1.z.string(),
    genero: zod_1.z.lazy(() => exports.GeneroSchema),
    email: zod_1.z.string(),
    raca: zod_1.z.lazy(() => exports.RacaSchema),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable()
}).strict();
exports.GerenteCreateManyUnidadeInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    password: zod_1.z.string(),
    nome: zod_1.z.string(),
    cpf: zod_1.z.string(),
    rg: zod_1.z.string(),
    email: zod_1.z.string(),
    telefone: zod_1.z.string(),
    raca: zod_1.z.lazy(() => exports.RacaSchema),
    rgdocfile: zod_1.z.string().optional().nullable(),
    fotofile: zod_1.z.string().optional().nullable(),
    compresfile: zod_1.z.string().optional().nullable()
}).strict();
exports.PacienteUpdateWithoutUnidadeInputSchema = zod_1.z.object({
    analise: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nascimentodata: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomemae: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomepai: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    laudofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    relescolar: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NullableEnumRacaFieldUpdateOperationsInputSchema)]).optional().nullable(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorUpdateManyWithoutPacientesNestedInputSchema).optional()
}).strict();
exports.PacienteUncheckedUpdateWithoutUnidadeInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    analise: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nascimentodata: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomemae: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomepai: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    laudofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    relescolar: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NullableEnumRacaFieldUpdateOperationsInputSchema)]).optional().nullable(),
    colaboradores: zod_1.z.lazy(() => exports.ColaboradorUncheckedUpdateManyWithoutPacientesNestedInputSchema).optional()
}).strict();
exports.PacienteUncheckedUpdateManyWithoutUnidadeInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    analise: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nascimentodata: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomemae: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    nomepai: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    laudofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    relescolar: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    gestacao: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    nascimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    autonomia: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    comportamento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    desenvolimento: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pedagogico: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    geral: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    mae: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    pai: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    maisinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    escola: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    saudeinfo: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValueSchema]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.NullableEnumRacaFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.ColaboradorUpdateWithoutUnidadeInputSchema = zod_1.z.object({
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nascimento: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    titulo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    formacao: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    genero: zod_1.z.union([zod_1.z.lazy(() => exports.GeneroSchema), zod_1.z.lazy(() => exports.EnumGeneroFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    pacientes: zod_1.z.lazy(() => exports.PacienteUpdateManyWithoutColaboradoresNestedInputSchema).optional()
}).strict();
exports.ColaboradorUncheckedUpdateWithoutUnidadeInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nascimento: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    titulo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    formacao: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    genero: zod_1.z.union([zod_1.z.lazy(() => exports.GeneroSchema), zod_1.z.lazy(() => exports.EnumGeneroFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    pacientes: zod_1.z.lazy(() => exports.PacienteUncheckedUpdateManyWithoutColaboradoresNestedInputSchema).optional()
}).strict();
exports.ColaboradorUncheckedUpdateManyWithoutUnidadeInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nascimento: zod_1.z.union([zod_1.z.coerce.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    titulo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    formacao: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    genero: zod_1.z.union([zod_1.z.lazy(() => exports.GeneroSchema), zod_1.z.lazy(() => exports.EnumGeneroFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.GerenteUpdateWithoutUnidadeInputSchema = zod_1.z.object({
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.GerenteUncheckedUpdateWithoutUnidadeInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.GerenteUncheckedUpdateManyWithoutUnidadeInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    nome: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cpf: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    rg: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    telefone: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    raca: zod_1.z.union([zod_1.z.lazy(() => exports.RacaSchema), zod_1.z.lazy(() => exports.EnumRacaFieldUpdateOperationsInputSchema)]).optional(),
    rgdocfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    fotofile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    compresfile: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
/////////////////////////////////////////
// ARGS
/////////////////////////////////////////
exports.GerenteFindFirstArgsSchema = zod_1.z.object({
    select: exports.GerenteSelectSchema.optional(),
    include: exports.GerenteIncludeSchema.optional(),
    where: exports.GerenteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.GerenteOrderByWithRelationInputSchema.array(), exports.GerenteOrderByWithRelationInputSchema]).optional(),
    cursor: exports.GerenteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.GerenteScalarFieldEnumSchema, exports.GerenteScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.GerenteFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.GerenteSelectSchema.optional(),
    include: exports.GerenteIncludeSchema.optional(),
    where: exports.GerenteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.GerenteOrderByWithRelationInputSchema.array(), exports.GerenteOrderByWithRelationInputSchema]).optional(),
    cursor: exports.GerenteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.GerenteScalarFieldEnumSchema, exports.GerenteScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.GerenteFindManyArgsSchema = zod_1.z.object({
    select: exports.GerenteSelectSchema.optional(),
    include: exports.GerenteIncludeSchema.optional(),
    where: exports.GerenteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.GerenteOrderByWithRelationInputSchema.array(), exports.GerenteOrderByWithRelationInputSchema]).optional(),
    cursor: exports.GerenteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.GerenteScalarFieldEnumSchema, exports.GerenteScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.GerenteAggregateArgsSchema = zod_1.z.object({
    where: exports.GerenteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.GerenteOrderByWithRelationInputSchema.array(), exports.GerenteOrderByWithRelationInputSchema]).optional(),
    cursor: exports.GerenteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.GerenteGroupByArgsSchema = zod_1.z.object({
    where: exports.GerenteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.GerenteOrderByWithAggregationInputSchema.array(), exports.GerenteOrderByWithAggregationInputSchema]).optional(),
    by: exports.GerenteScalarFieldEnumSchema.array(),
    having: exports.GerenteScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.GerenteFindUniqueArgsSchema = zod_1.z.object({
    select: exports.GerenteSelectSchema.optional(),
    include: exports.GerenteIncludeSchema.optional(),
    where: exports.GerenteWhereUniqueInputSchema,
}).strict();
exports.GerenteFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.GerenteSelectSchema.optional(),
    include: exports.GerenteIncludeSchema.optional(),
    where: exports.GerenteWhereUniqueInputSchema,
}).strict();
exports.ColaboradorFindFirstArgsSchema = zod_1.z.object({
    select: exports.ColaboradorSelectSchema.optional(),
    include: exports.ColaboradorIncludeSchema.optional(),
    where: exports.ColaboradorWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ColaboradorOrderByWithRelationInputSchema.array(), exports.ColaboradorOrderByWithRelationInputSchema]).optional(),
    cursor: exports.ColaboradorWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.ColaboradorScalarFieldEnumSchema, exports.ColaboradorScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.ColaboradorFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.ColaboradorSelectSchema.optional(),
    include: exports.ColaboradorIncludeSchema.optional(),
    where: exports.ColaboradorWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ColaboradorOrderByWithRelationInputSchema.array(), exports.ColaboradorOrderByWithRelationInputSchema]).optional(),
    cursor: exports.ColaboradorWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.ColaboradorScalarFieldEnumSchema, exports.ColaboradorScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.ColaboradorFindManyArgsSchema = zod_1.z.object({
    select: exports.ColaboradorSelectSchema.optional(),
    include: exports.ColaboradorIncludeSchema.optional(),
    where: exports.ColaboradorWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ColaboradorOrderByWithRelationInputSchema.array(), exports.ColaboradorOrderByWithRelationInputSchema]).optional(),
    cursor: exports.ColaboradorWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.ColaboradorScalarFieldEnumSchema, exports.ColaboradorScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.ColaboradorAggregateArgsSchema = zod_1.z.object({
    where: exports.ColaboradorWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ColaboradorOrderByWithRelationInputSchema.array(), exports.ColaboradorOrderByWithRelationInputSchema]).optional(),
    cursor: exports.ColaboradorWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.ColaboradorGroupByArgsSchema = zod_1.z.object({
    where: exports.ColaboradorWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ColaboradorOrderByWithAggregationInputSchema.array(), exports.ColaboradorOrderByWithAggregationInputSchema]).optional(),
    by: exports.ColaboradorScalarFieldEnumSchema.array(),
    having: exports.ColaboradorScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.ColaboradorFindUniqueArgsSchema = zod_1.z.object({
    select: exports.ColaboradorSelectSchema.optional(),
    include: exports.ColaboradorIncludeSchema.optional(),
    where: exports.ColaboradorWhereUniqueInputSchema,
}).strict();
exports.ColaboradorFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.ColaboradorSelectSchema.optional(),
    include: exports.ColaboradorIncludeSchema.optional(),
    where: exports.ColaboradorWhereUniqueInputSchema,
}).strict();
exports.PacienteFindFirstArgsSchema = zod_1.z.object({
    select: exports.PacienteSelectSchema.optional(),
    include: exports.PacienteIncludeSchema.optional(),
    where: exports.PacienteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.PacienteOrderByWithRelationInputSchema.array(), exports.PacienteOrderByWithRelationInputSchema]).optional(),
    cursor: exports.PacienteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.PacienteScalarFieldEnumSchema, exports.PacienteScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.PacienteFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.PacienteSelectSchema.optional(),
    include: exports.PacienteIncludeSchema.optional(),
    where: exports.PacienteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.PacienteOrderByWithRelationInputSchema.array(), exports.PacienteOrderByWithRelationInputSchema]).optional(),
    cursor: exports.PacienteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.PacienteScalarFieldEnumSchema, exports.PacienteScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.PacienteFindManyArgsSchema = zod_1.z.object({
    select: exports.PacienteSelectSchema.optional(),
    include: exports.PacienteIncludeSchema.optional(),
    where: exports.PacienteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.PacienteOrderByWithRelationInputSchema.array(), exports.PacienteOrderByWithRelationInputSchema]).optional(),
    cursor: exports.PacienteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.PacienteScalarFieldEnumSchema, exports.PacienteScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.PacienteAggregateArgsSchema = zod_1.z.object({
    where: exports.PacienteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.PacienteOrderByWithRelationInputSchema.array(), exports.PacienteOrderByWithRelationInputSchema]).optional(),
    cursor: exports.PacienteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.PacienteGroupByArgsSchema = zod_1.z.object({
    where: exports.PacienteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.PacienteOrderByWithAggregationInputSchema.array(), exports.PacienteOrderByWithAggregationInputSchema]).optional(),
    by: exports.PacienteScalarFieldEnumSchema.array(),
    having: exports.PacienteScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.PacienteFindUniqueArgsSchema = zod_1.z.object({
    select: exports.PacienteSelectSchema.optional(),
    include: exports.PacienteIncludeSchema.optional(),
    where: exports.PacienteWhereUniqueInputSchema,
}).strict();
exports.PacienteFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.PacienteSelectSchema.optional(),
    include: exports.PacienteIncludeSchema.optional(),
    where: exports.PacienteWhereUniqueInputSchema,
}).strict();
exports.UnidadeFindFirstArgsSchema = zod_1.z.object({
    select: exports.UnidadeSelectSchema.optional(),
    include: exports.UnidadeIncludeSchema.optional(),
    where: exports.UnidadeWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.UnidadeOrderByWithRelationInputSchema.array(), exports.UnidadeOrderByWithRelationInputSchema]).optional(),
    cursor: exports.UnidadeWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.UnidadeScalarFieldEnumSchema, exports.UnidadeScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.UnidadeFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.UnidadeSelectSchema.optional(),
    include: exports.UnidadeIncludeSchema.optional(),
    where: exports.UnidadeWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.UnidadeOrderByWithRelationInputSchema.array(), exports.UnidadeOrderByWithRelationInputSchema]).optional(),
    cursor: exports.UnidadeWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.UnidadeScalarFieldEnumSchema, exports.UnidadeScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.UnidadeFindManyArgsSchema = zod_1.z.object({
    select: exports.UnidadeSelectSchema.optional(),
    include: exports.UnidadeIncludeSchema.optional(),
    where: exports.UnidadeWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.UnidadeOrderByWithRelationInputSchema.array(), exports.UnidadeOrderByWithRelationInputSchema]).optional(),
    cursor: exports.UnidadeWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.UnidadeScalarFieldEnumSchema, exports.UnidadeScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.UnidadeAggregateArgsSchema = zod_1.z.object({
    where: exports.UnidadeWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.UnidadeOrderByWithRelationInputSchema.array(), exports.UnidadeOrderByWithRelationInputSchema]).optional(),
    cursor: exports.UnidadeWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.UnidadeGroupByArgsSchema = zod_1.z.object({
    where: exports.UnidadeWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.UnidadeOrderByWithAggregationInputSchema.array(), exports.UnidadeOrderByWithAggregationInputSchema]).optional(),
    by: exports.UnidadeScalarFieldEnumSchema.array(),
    having: exports.UnidadeScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.UnidadeFindUniqueArgsSchema = zod_1.z.object({
    select: exports.UnidadeSelectSchema.optional(),
    include: exports.UnidadeIncludeSchema.optional(),
    where: exports.UnidadeWhereUniqueInputSchema,
}).strict();
exports.UnidadeFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.UnidadeSelectSchema.optional(),
    include: exports.UnidadeIncludeSchema.optional(),
    where: exports.UnidadeWhereUniqueInputSchema,
}).strict();
exports.GerenteCreateArgsSchema = zod_1.z.object({
    select: exports.GerenteSelectSchema.optional(),
    include: exports.GerenteIncludeSchema.optional(),
    data: zod_1.z.union([exports.GerenteCreateInputSchema, exports.GerenteUncheckedCreateInputSchema]),
}).strict();
exports.GerenteUpsertArgsSchema = zod_1.z.object({
    select: exports.GerenteSelectSchema.optional(),
    include: exports.GerenteIncludeSchema.optional(),
    where: exports.GerenteWhereUniqueInputSchema,
    create: zod_1.z.union([exports.GerenteCreateInputSchema, exports.GerenteUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.GerenteUpdateInputSchema, exports.GerenteUncheckedUpdateInputSchema]),
}).strict();
exports.GerenteCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.GerenteCreateManyInputSchema, exports.GerenteCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.GerenteCreateManyAndReturnArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.GerenteCreateManyInputSchema, exports.GerenteCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.GerenteDeleteArgsSchema = zod_1.z.object({
    select: exports.GerenteSelectSchema.optional(),
    include: exports.GerenteIncludeSchema.optional(),
    where: exports.GerenteWhereUniqueInputSchema,
}).strict();
exports.GerenteUpdateArgsSchema = zod_1.z.object({
    select: exports.GerenteSelectSchema.optional(),
    include: exports.GerenteIncludeSchema.optional(),
    data: zod_1.z.union([exports.GerenteUpdateInputSchema, exports.GerenteUncheckedUpdateInputSchema]),
    where: exports.GerenteWhereUniqueInputSchema,
}).strict();
exports.GerenteUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.GerenteUpdateManyMutationInputSchema, exports.GerenteUncheckedUpdateManyInputSchema]),
    where: exports.GerenteWhereInputSchema.optional(),
}).strict();
exports.GerenteDeleteManyArgsSchema = zod_1.z.object({
    where: exports.GerenteWhereInputSchema.optional(),
}).strict();
exports.ColaboradorCreateArgsSchema = zod_1.z.object({
    select: exports.ColaboradorSelectSchema.optional(),
    include: exports.ColaboradorIncludeSchema.optional(),
    data: zod_1.z.union([exports.ColaboradorCreateInputSchema, exports.ColaboradorUncheckedCreateInputSchema]),
}).strict();
exports.ColaboradorUpsertArgsSchema = zod_1.z.object({
    select: exports.ColaboradorSelectSchema.optional(),
    include: exports.ColaboradorIncludeSchema.optional(),
    where: exports.ColaboradorWhereUniqueInputSchema,
    create: zod_1.z.union([exports.ColaboradorCreateInputSchema, exports.ColaboradorUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.ColaboradorUpdateInputSchema, exports.ColaboradorUncheckedUpdateInputSchema]),
}).strict();
exports.ColaboradorCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.ColaboradorCreateManyInputSchema, exports.ColaboradorCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.ColaboradorCreateManyAndReturnArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.ColaboradorCreateManyInputSchema, exports.ColaboradorCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.ColaboradorDeleteArgsSchema = zod_1.z.object({
    select: exports.ColaboradorSelectSchema.optional(),
    include: exports.ColaboradorIncludeSchema.optional(),
    where: exports.ColaboradorWhereUniqueInputSchema,
}).strict();
exports.ColaboradorUpdateArgsSchema = zod_1.z.object({
    select: exports.ColaboradorSelectSchema.optional(),
    include: exports.ColaboradorIncludeSchema.optional(),
    data: zod_1.z.union([exports.ColaboradorUpdateInputSchema, exports.ColaboradorUncheckedUpdateInputSchema]),
    where: exports.ColaboradorWhereUniqueInputSchema,
}).strict();
exports.ColaboradorUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.ColaboradorUpdateManyMutationInputSchema, exports.ColaboradorUncheckedUpdateManyInputSchema]),
    where: exports.ColaboradorWhereInputSchema.optional(),
}).strict();
exports.ColaboradorDeleteManyArgsSchema = zod_1.z.object({
    where: exports.ColaboradorWhereInputSchema.optional(),
}).strict();
exports.PacienteCreateArgsSchema = zod_1.z.object({
    select: exports.PacienteSelectSchema.optional(),
    include: exports.PacienteIncludeSchema.optional(),
    data: zod_1.z.union([exports.PacienteCreateInputSchema, exports.PacienteUncheckedCreateInputSchema]),
}).strict();
exports.PacienteUpsertArgsSchema = zod_1.z.object({
    select: exports.PacienteSelectSchema.optional(),
    include: exports.PacienteIncludeSchema.optional(),
    where: exports.PacienteWhereUniqueInputSchema,
    create: zod_1.z.union([exports.PacienteCreateInputSchema, exports.PacienteUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.PacienteUpdateInputSchema, exports.PacienteUncheckedUpdateInputSchema]),
}).strict();
exports.PacienteCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.PacienteCreateManyInputSchema, exports.PacienteCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.PacienteCreateManyAndReturnArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.PacienteCreateManyInputSchema, exports.PacienteCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.PacienteDeleteArgsSchema = zod_1.z.object({
    select: exports.PacienteSelectSchema.optional(),
    include: exports.PacienteIncludeSchema.optional(),
    where: exports.PacienteWhereUniqueInputSchema,
}).strict();
exports.PacienteUpdateArgsSchema = zod_1.z.object({
    select: exports.PacienteSelectSchema.optional(),
    include: exports.PacienteIncludeSchema.optional(),
    data: zod_1.z.union([exports.PacienteUpdateInputSchema, exports.PacienteUncheckedUpdateInputSchema]),
    where: exports.PacienteWhereUniqueInputSchema,
}).strict();
exports.PacienteUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.PacienteUpdateManyMutationInputSchema, exports.PacienteUncheckedUpdateManyInputSchema]),
    where: exports.PacienteWhereInputSchema.optional(),
}).strict();
exports.PacienteDeleteManyArgsSchema = zod_1.z.object({
    where: exports.PacienteWhereInputSchema.optional(),
}).strict();
exports.UnidadeCreateArgsSchema = zod_1.z.object({
    select: exports.UnidadeSelectSchema.optional(),
    include: exports.UnidadeIncludeSchema.optional(),
    data: zod_1.z.union([exports.UnidadeCreateInputSchema, exports.UnidadeUncheckedCreateInputSchema]),
}).strict();
exports.UnidadeUpsertArgsSchema = zod_1.z.object({
    select: exports.UnidadeSelectSchema.optional(),
    include: exports.UnidadeIncludeSchema.optional(),
    where: exports.UnidadeWhereUniqueInputSchema,
    create: zod_1.z.union([exports.UnidadeCreateInputSchema, exports.UnidadeUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.UnidadeUpdateInputSchema, exports.UnidadeUncheckedUpdateInputSchema]),
}).strict();
exports.UnidadeCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.UnidadeCreateManyInputSchema, exports.UnidadeCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.UnidadeCreateManyAndReturnArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.UnidadeCreateManyInputSchema, exports.UnidadeCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.UnidadeDeleteArgsSchema = zod_1.z.object({
    select: exports.UnidadeSelectSchema.optional(),
    include: exports.UnidadeIncludeSchema.optional(),
    where: exports.UnidadeWhereUniqueInputSchema,
}).strict();
exports.UnidadeUpdateArgsSchema = zod_1.z.object({
    select: exports.UnidadeSelectSchema.optional(),
    include: exports.UnidadeIncludeSchema.optional(),
    data: zod_1.z.union([exports.UnidadeUpdateInputSchema, exports.UnidadeUncheckedUpdateInputSchema]),
    where: exports.UnidadeWhereUniqueInputSchema,
}).strict();
exports.UnidadeUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.UnidadeUpdateManyMutationInputSchema, exports.UnidadeUncheckedUpdateManyInputSchema]),
    where: exports.UnidadeWhereInputSchema.optional(),
}).strict();
exports.UnidadeDeleteManyArgsSchema = zod_1.z.object({
    where: exports.UnidadeWhereInputSchema.optional(),
}).strict();
