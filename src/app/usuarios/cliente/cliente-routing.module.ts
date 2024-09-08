import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDashboardComponent } from './Components/cliente-dashboard/cliente-dashboard.component';
import { ClientePerfilComponent } from './Components/cliente-perfil/cliente-perfil.component';
import { ClienteMascotasListComponent } from './Components/cliente-mascotas-list/cliente-mascotas-list.component';

const routes: Routes = [
  { path: 'cliente-dashboard', component: ClienteDashboardComponent },  // Dashboard de cliente
  { path: 'cliente-perfil', component: ClientePerfilComponent },        // Perfil del cliente
  { path: 'cliente-mascotas', component: ClienteMascotasListComponent }  // Lista de mascotas del cliente
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
