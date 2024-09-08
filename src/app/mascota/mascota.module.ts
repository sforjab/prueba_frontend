import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaDashboardComponent } from './Components/mascota-dashboard/mascota-dashboard.component';
import { MascotaDetalleComponent } from './Components/mascota-detalle/mascota-detalle.component';
import { HistoricoCitasComponent } from './Components/historico-citas/historico-citas.component';
import { PruebasInformesComponent } from './Components/pruebas-informes/pruebas-informes.component';



@NgModule({
  declarations: [
    MascotaDashboardComponent, // Pantalla de opciones para una mascota
    MascotaDetalleComponent, // Detalle de la mascota
    HistoricoCitasComponent, // Historial de citas
    PruebasInformesComponent // Pruebas e informes

  ],
  imports: [
    CommonModule
  ]
})
export class MascotaModule { }
