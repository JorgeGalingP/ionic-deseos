import { ListaItem } from './lista-item';

//class used to represent all lists in the application
export class Lista {
    nombre:string;
    terminada:boolean;
    items:ListaItem[];

    constructor(nombre:string){
        this.nombre = nombre;
        this.terminada = false;
    }
}
