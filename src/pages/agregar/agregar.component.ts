import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/index';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

    nombreLista:string;
    nombreItem:string = "";

    items:ListaItem[] = [];

    constructor() {  }

    ngOnInit() {}

    // method for add a new item
    agregarItem() {
        // handle exception when item is empty
        if (this.nombreItem.length == 0) {
            return;
        }

        // create ListaItem object to represent items
        let item = new ListaItem();
        item.nombre = this.nombreItem;

        // add current item to list
        this.items.push(item);
        this.nombreItem = ""; // delete previous name
    }

    // method for delete a item by id
    borrarItem(id:number) {
        this.items.splice(id, 1); // splice(positionDelete, numberOfItemsDeleted)
    }
}
