import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

    // variables to represent our objects
    nombreLista:string ="";
    nombreItem:string = "";

    items:ListaItem[] = [];

    // constructor
    constructor(public alertCtrl:AlertController, public navCtrl:NavController, public _listaDeseos:ListaDeseosService) {  }

    ngOnInit() {}

    // method for add a new list
    guardarLista() {
        if (this.nombreLista.length == 0){
            this.newAlert("Nombre Lista", "El nombre de la lista es necesario");
            return;
        }
        // create a new list
        let lista = new Lista(this.nombreLista);
        lista.items = this.items;

        // add the new list to an array of lists using our service
        this._listaDeseos.agregarLista(lista);

        // return to main NavController
        this.navCtrl.pop();
    }

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

    // method for create a new alert
    newAlert(title:string, subTitle:string) {
        let alert = this.alertCtrl.create({
          title: title,
          subTitle: subTitle,
          buttons: ['OK']
        });
        alert.present();
    }



}
