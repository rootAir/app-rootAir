import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'iterableMap', pure: false })
export class IterableMapPipe implements PipeTransform {
    transform(value: Map<any, any>, args: any[] = null): any {
        const lista = [];
        value.forEach((value, key) => lista.push(value));
        return lista;
    }
}
