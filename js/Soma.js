"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soma = void 0;
const Operacao_1 = require("./Operacao");
class Soma extends Operacao_1.Operacao {
    calcular(numero1, numero2) {
        return numero1 + numero2;
    }
}
exports.Soma = Soma;
