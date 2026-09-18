import { Operacao } from "./Operacao";

export class Soma extends Operacao {

    calcular(numero1: number, numero2: number): number {
        return numero1 + numero2;
    }

}