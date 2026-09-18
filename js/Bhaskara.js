"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bhaskara = void 0;
class Bhaskara {
    calcular(a, b, c) {
        const delta = Math.pow(b, 2) - 4 * a * c;
        if (delta < 0) {
            throw new Error("A equação não possui raízes reais.");
        }
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    }
}
exports.Bhaskara = Bhaskara;
