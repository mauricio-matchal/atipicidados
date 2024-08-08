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
exports.CreateKey = void 0;
const crypto_1 = require("crypto");
//Generating a AES GCM encryption/decryption key for data securiity.
class CreateKey {
    generateKey() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newkey = yield crypto_1.webcrypto.subtle.generateKey({
                    name: 'AES-GCM',
                    length: 256,
                }, true, ['encrypt', 'decrypt']);
                const exportedKey = yield crypto_1.webcrypto.subtle.exportKey('jwk', newkey);
                return { exportedKey };
            }
            catch (err) {
                console.error(err);
                throw err;
            }
        });
    }
}
exports.CreateKey = CreateKey;
//Once the key is generated, it is exported as a Json Web Key
//Here we're making it true for export and available for both encrypt and decrypt
//Subtle and window gives access to web cryptography functions
