import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

// service for handling application's data
@Injectable()
export class ListaDeseosService {
    // object to handle all the current user's lists
    listas:Lista[] = [];

    // constructor for our service
    constructor() {
        console.log("Servicio inicializado");

        // initialize a bunch of lists
        let lista1 = new Lista("Compras en el supermercado");
        let lista2 = new Lista("Juegos que quiero comprar");
        let lista3 = new Lista("Tareas universidad");

        // populate the array of "Listas"
        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);
    }
}
