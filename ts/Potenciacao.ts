import { Operacao } from "./Operacao";

export class Potenciacao extends Operacao {

    calcular(numero1: number, numero2: number): number {
        return Math.pow(numero1, numero2);
    }

}