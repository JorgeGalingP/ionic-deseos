import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams} from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector: 'app-component',
    templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

    // variables for store the data we get from previous screen
    i:number;
    lista:Lista;

    constructor( public alertCtrl:AlertController, public navCtrl:NavController, public navParams:NavParams, public _listaDeseos:ListaDeseosService) {
        // with navParams in the constructor we can send data between screens
        // because it returns the data we send in the last screen
        // using sended headers ("lista" and "i")
        console.log(navParams);

        // so we can get that data
        this.i = navParams.get("i");
        this.lista = navParams.get("lista");
    }

    ngOnInit() {}

    // update item from detail view to local storage
    actualizar(item:ListaItem) {
        item.completado = !item.completado;

        // iterate to all items and if one is not completed
        // automalically our list can't be auto deleted
        let todosMarcados:boolean = true;
        for(let item of this.lista.items) {
            if(!item.completado) {
                todosMarcados = false;
                break;
            }
        }

        // but if all are completed, the list is deleted
        this.lista.terminada = todosMarcados;

        this._listaDeseos.actualizarData();
    }

    borrarLista() {
        let confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: '¿Estás seguro de querer borrar la lista?',
            buttons: ['Cancelar',
                {
                    text: 'Borrar',
                    handler: () => {
                        // if "Borrar" button is clicked, delete and return to main view
                        this._listaDeseos.borrarLista(this.i);
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    }
}
