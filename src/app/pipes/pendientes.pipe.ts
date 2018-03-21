import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/listas';

// *** impure pipe ***
// by default, a pipe use the same state of data
// so now we need to update the data automatically
// when this pipe is called
@Pipe({
    name: 'pendientes',
    pure: false // using impure pipes
})
export class PendientesPipe implements PipeTransform {
    transform(listas:Lista[], estado:boolean = false) : Lista[] {
        let nuevaLista:Lista[] = [];

        for(let lista of listas) {
            if(lista.terminada == estado) {
                nuevaLista.push(lista);
            }
        }
        return nuevaLista;
    }
}
