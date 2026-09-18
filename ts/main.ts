import * as readline from "readline";

import { Operacao } from "./Operacao";
import { Soma } from "./Soma";
import { Subtracao } from "./Subtracao";
import { Divisao } from "./Divisao";
import { Potenciacao } from "./Potenciacao";
import { Radiciacao } from "./Radiciacao";
import { Bhaskara } from "./Bhaskara";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function perguntar(pergunta: string): Promise<string> {

    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });

}


async function main(): Promise<void> {

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
    // tomatinho vermelho pela estrada rolou 

    if (opcao === "6") {

        const a = Number(await perguntar("Digite A: "));
        const b = Number(await perguntar("Digite B: "));
        const c = Number(await perguntar("Digite C: "));

        try {

            const bhaskara = new Bhaskara();

            const [x1, x2] = bhaskara.calcular(a, b, c);

            console.log(`\nx1 = ${x1}`);
            console.log(`x2 = ${x2}`);

        } catch (erro) {

            console.log(`\nErro: ${(erro as Error).message}`);

        }

        rl.close();
        return;
    }


    const numero1 = Number(
        await perguntar("Digite o primeiro número: ")
    );

    const numero2 = Number(
        await perguntar("Digite o segundo número: ")
    );


    let operacao: Operacao;


    switch (opcao) {

        case "1":
            operacao = new Soma();
            break;

        case "2":
            operacao = new Subtracao();
            break;

        case "3":
            operacao = new Divisao();
            break;

        case "4":
            operacao = new Potenciacao();
            break;

        case "5":
            operacao = new Radiciacao();
            break;

        default:
            console.log("Opção inválida.");
            rl.close();
            return;
    }


    try {

        const resultado = operacao.calcular(numero1, numero2);

        console.log(`\nResultado: ${resultado}`);

    } catch (erro) {

        console.log(`\nErro: ${(erro as Error).message}`);

    }


    rl.close();

}


main();