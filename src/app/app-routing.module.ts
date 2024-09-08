import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './auth/Components/login/login.component';
import { RegistroComponent } from './auth/Components/registro/registro.component';
import { ClienteDashboardComponent } from './usuarios/cliente/Components/cliente-dashboard/cliente-dashboard.component';
import { AuthGuard } from './auth/Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cliente-dashboard',
    component: ClienteDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['CLIENTE'] }
  },
  /* {
    path: 'veterinario-dashboard',
    component: VetDashboardComponent,  // Asegúrate de crear este componente
    canActivate: [RolGuard],
    data: { roles: ['VETERINARIO'] }
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,  // Asegúrate de crear este componente
    canActivate: [RolGuard],
    data: { roles: ['ADMIN'] }
  }, */
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'cliente', loadChildren: () => import('./usuarios/cliente/cliente.module').then(m => m.ClienteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
