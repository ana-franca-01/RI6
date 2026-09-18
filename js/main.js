"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const Soma_1 = require("./Soma");
const Subtracao_1 = require("./Subtracao");
const Divisao_1 = require("./Divisao");
const Potenciacao_1 = require("./Potenciacao");
const Radiciacao_1 = require("./Radiciacao");
const Bhaskara_1 = require("./Bhaskara");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });
}
async function main() {
    console.log("\n==============================");
    console.log("      CALCULADORA POO");
    console.log("==============================");
    console.log("1 - Soma");
    console.log("2 - Subtração");
    console.log("3 - Divisão");
    console.log("4 - Potenciação");
    console.log("5 - Radiciação");
    console.log("6 - Bhaskara");
    console.log("0 - Sair");
    console.log("==============================");
    const opcao = await perguntar("Escolha uma operação: ");
    if (opcao === "0") {
        console.log("Programa encerrado.");
        rl.close();
        return;
    }
    // Bhaskara
    if (opcao === "6") {
        const a = Number(await perguntar("Digite A: "));
        const b = Number(await perguntar("Digite B: "));
        const c = Number(await perguntar("Digite C: "));
        try {
            const bhaskara = new Bhaskara_1.Bhaskara();
            const [x1, x2] = bhaskara.calcular(a, b, c);
            console.log(`\nx1 = ${x1}`);
            console.log(`x2 = ${x2}`);
        }
        catch (erro) {
            console.log(`\nErro: ${erro.message}`);
        }
        rl.close();
        return;
    }
    const numero1 = Number(await perguntar("Digite o primeiro número: "));
    const numero2 = Number(await perguntar("Digite o segundo número: "));
    // POLIMORFISMO
    let operacao;
    switch (opcao) {
        case "1":
            operacao = new Soma_1.Soma();
            break;
        case "2":
            operacao = new Subtracao_1.Subtracao();
            break;
        case "3":
            operacao = new Divisao_1.Divisao();
            break;
        case "4":
            operacao = new Potenciacao_1.Potenciacao();
            break;
        case "5":
            operacao = new Radiciacao_1.Radiciacao();
            break;
        default:
            console.log("Opção inválida.");
            rl.close();
            return;
    }
    try {
        const resultado = operacao.calcular(numero1, numero2);
        console.log(`\nResultado: ${resultado}`);
    }
    catch (erro) {
        console.log(`\nErro: ${erro.message}`);
    }
    rl.close();
}
main();
