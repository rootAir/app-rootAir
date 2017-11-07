import { ConversorService } from './../service/conversor.service';
/**
 * Formata um número para o Real brasileiro usando vírgula e adicionando um espaço entre o
 * "R$" e o valor (o pipe 'currency' do Angular 2 não nos atende, veja os exemplos abaixo):
 * 
 * Número             - 1074389.2
 * Com 'currency'     - R$1,074,389.20
 * Com o pipe 'real'  - R$ 1.074.389,20
 * 
 * Referência:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
 * 
 * Browser support:
 * Chrome 24, Firefox 29, IE 11, Opera 15, Safari 10
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'real' })
export class RealPipe implements PipeTransform {  

    public constructor(private convert: ConversorService) {

    }

    public transform(valor: number | string): string {

        if (!valor) {
            return 'R$ 0,00';
        }
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            currencyDisplay: 'symbol',
            minimumFractionDigits: 2,
        });
        return formatter.format(this.convert.stringToNumber(String(valor))).replace(/^R\$([^\s])/, 'R$ $1');
    }
}
