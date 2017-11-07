import { Injectable } from '@angular/core';

@Injectable()
export class ConversorService {

    public numberToString(n: number): string {
        if (!n) return '0';

        let valorTotal: any = String(n);
        valorTotal = valorTotal.split('.');
        let inteiro: string = valorTotal[0];
        let decimal: string = valorTotal[1];

        if (!decimal || !decimal.length) {
            decimal = '00';
        } else if (decimal.length == 1) {
            decimal = `${decimal}0`;
        } else if (decimal.length > 2) {
            decimal = decimal.substring(0, 2);
        }

        return `${inteiro},${decimal}`;
    }

    public stringToNumber(s: string): number {
        if (!s) return 0;

        return Number(s.replace(/,/, '.'));
    }

}
