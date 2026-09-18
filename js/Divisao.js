"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisao = void 0;
const Operacao_1 = require("./Operacao");
class Divisao extends Operacao_1.Operacao {
    calcular(numero1, numero2) {
        if (numero2 === 0) {
            throw new Error("Não é possível dividir por zero.");
        }
        return numero1 / numero2;
    }
}
exports.Divisao = Divisao;
