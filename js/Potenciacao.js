"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Potenciacao = void 0;
const Operacao_1 = require("./Operacao");
class Potenciacao extends Operacao_1.Operacao {
    calcular(numero1, numero2) {
        return Math.pow(numero1, numero2);
    }
}
exports.Potenciacao = Potenciacao;
