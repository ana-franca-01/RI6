import { Operacao } from "./Operacao";

export class Subtracao extends Operacao {

    calcular(numero1: number, numero2: number): number {
        return numero1 - numero2;
    }

}