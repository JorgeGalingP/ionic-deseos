import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { NavController } from 'ionic-angular';

// component for handle "pendientes" list
@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesComponent implements OnInit {
  constructor(private _listaDeseos : ListaDeseosService, private navCtrl : NavController) {  }

  ngOnInit() {}

  irAgregar() {
      // with push we can control the screen navigation
      // and the push method need the component we want to navigate
      this.navCtrl.push(AgregarComponent);
  }

  verDetalle(lista, i) {
      // with ems6 we can not use lista:lista or i:i
      this.navCtrl.push(DetalleComponent, {lista, i}); // push parameters to screens
  }
}
