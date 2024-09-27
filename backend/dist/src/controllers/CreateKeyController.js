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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateKeyController = void 0;
const CreateKey_1 = require("../services/CreateKey");
//This will deal with the front request of an encryption key.
class CreateKeyController {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createKey = new CreateKey_1.CreateKey();
                const { exportedKey } = yield createKey.generateKey();
                reply.send({ key: exportedKey });
            }
            catch (err) {
                console.error(err);
                reply.status(500).send({ error: 'Erro na geração da chave' });
            }
        });
    }
}
exports.CreateKeyController = CreateKeyController;
//To be added the wrap key here and the unwrap key in the front
