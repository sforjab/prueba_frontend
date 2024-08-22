import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* import { HomeComponent } from './Components/home/home.component'; */
import { LoginComponent } from './auth/Components/login/login.component';
import { RegistroComponent } from './auth/Components/registro/registro.component';
import { ClienteDashboardComponent } from './cliente/Components/cliente-dashboard/cliente-dashboard.component';

const routes: Routes = [
  /* {
    path: '',
    component: HomeComponent,
  }, */
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cliente-dashboard',
    component: ClienteDashboardComponent,
  },
  /* {
    path: 'veterinario-dashboard',
    component: VetDashboardComponent,  // Asegúrate de crear este componente
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,  // Asegúrate de crear este componente
  }, */
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'cliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
