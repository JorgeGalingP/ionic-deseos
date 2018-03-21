import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { DetalleComponent } from '../detalle/detalle.component';
import { NavController } from 'ionic-angular';

// component for handle "terminados" list
@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  constructor(private _listaDeseos : ListaDeseosService, private navCtrl : NavController) {  }

  ngOnInit() {}

  verDetalle(lista, i) {
      // with ems6 we can not use lista:lista or i:i
      this.navCtrl.push(DetalleComponent, {lista, i}); // push parameters to screens
  }
}
