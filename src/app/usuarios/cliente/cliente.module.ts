import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteDashboardComponent } from './Components/cliente-dashboard/cliente-dashboard.component';
import { ClientePerfilComponent } from './Components/cliente-perfil/cliente-perfil.component';
import { ClienteMascotasListComponent } from './Components/cliente-mascotas-list/cliente-mascotas-list.component';


@NgModule({
  declarations: [
    ClienteDashboardComponent,
    ClientePerfilComponent,
    ClienteMascotasListComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
