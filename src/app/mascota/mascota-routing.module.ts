import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaDashboardComponent } from './Components/mascota-dashboard/mascota-dashboard.component';
import { MascotaDetalleComponent } from './Components/mascota-detalle/mascota-detalle.component';
import { HistoricoCitasComponent } from './Components/historico-citas/historico-citas.component';
import { PruebasInformesComponent } from './Components/pruebas-informes/pruebas-informes.component';

const routes: Routes = [
  { path: 'mascota-dashboard', component: MascotaDashboardComponent },  // Dashboard de la mascota
  { path: 'mascota-detalle', component: MascotaDetalleComponent },      // Detalle de la mascota
  { path: 'mascota-citas', component: HistoricoCitasComponent },        // Historial de citas
  { path: 'mascota-pruebas', component: PruebasInformesComponent }      // Pruebas e informes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { }
