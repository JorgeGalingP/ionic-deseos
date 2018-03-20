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

        // load data from local storage when service is called
        this.cargarData();
        console.log("Data inicializada");
    }

    // save to local storage
    actualizarData() {
        // save all lists using "data" key and transform to JSON
        localStorage.setItem("data", JSON.stringify(this.listas));
    }

    // get data for local storage if exists
    cargarData() {
        if(localStorage.getItem("data")) {
            // get all lists parsing from JSON to a javascript object
            this.listas = JSON.parse(localStorage.getItem("data"));
        }
    }

    // add new item to the list
    agregarLista(lista:Lista) {
        this.listas.push(lista);
        this.actualizarData();
    }

    // delete a List
    borrarLista(i:number) {
        this.listas.splice(i, 1);
        this.actualizarData();
    }
}
