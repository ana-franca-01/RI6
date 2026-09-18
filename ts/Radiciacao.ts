import { Operacao } from "./Operacao";

export class Radiciacao extends Operacao {

    calcular(numero1: number, numero2: number): number {
        return Math.pow(numero1, 1 / numero2);
    }

}