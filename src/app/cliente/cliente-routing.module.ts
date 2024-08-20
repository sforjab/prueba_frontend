import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDashboardComponent } from './Components/cliente-dashboard/cliente-dashboard.component';
import { ClientePerfilComponent } from './Components/cliente-perfil/cliente-perfil.component';
import { MascotasListComponent } from './Components/mascotas/mascotas-list/mascotas-list.component';

const routes: Routes = [
  { path: '', component: ClienteDashboardComponent },
  { path: 'perfil', component: ClientePerfilComponent },  // Ruta para "Mis Datos"
  { path: 'mascotas', component: MascotasListComponent }  // Ruta para "Mis Mascotas"
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
