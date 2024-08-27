import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteDashboardComponent } from './Components/cliente-dashboard/cliente-dashboard.component';
import { ClientePerfilComponent } from './Components/cliente-perfil/cliente-perfil.component';
import { MascotasListComponent } from './Components/mascotas/mascotas-list/mascotas-list.component';
import { MascotaDetalleComponent } from './Components/mascotas/mascota-detalle/mascota-detalle.component';
import { HistoricoCitasComponent } from './Components/mascotas/historico-citas/historico-citas.component';
import { PruebasInformesComponent } from './Components/mascotas/pruebas-informes/pruebas-informes.component';


@NgModule({
  declarations: [
    ClienteDashboardComponent,
    ClientePerfilComponent,
    MascotasListComponent,
    MascotaDetalleComponent,
    HistoricoCitasComponent,
    PruebasInformesComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
