import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AuthGuard } from './auth/Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: 'cliente', 
    loadChildren: () => import('./usuarios/cliente/cliente.module').then(m => m.ClienteModule),
    /* canActivate: [AuthGuard],
    data: { roles: ['CLIENTE'] } // Restringido solo para clientes */
  },
  {
    path: 'veterinario', 
    loadChildren: () => import('./usuarios/veterinario/veterinario.module').then(m => m.VeterinarioModule),
   /*  canActivate: [AuthGuard],
    data: { roles: ['VETERINARIO', 'ADMIN_CLINICA'] } // Restringido para veterinarios o admin de clínica */
  },
  /* {
    path: 'admin', 
    loadChildren: () => import('./usuarios/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] } // Restringido solo para administradores
  }, */
  {
    path: 'mascota', 
    loadChildren: () => import('./mascota/mascota.module').then(m => m.MascotaModule),
    /* canActivate: [AuthGuard],  // Cualquiera que esté autenticado puede acceder
    data: { roles: ['CLIENTE', 'VETERINARIO', 'ADMIN', 'ADMIN_CLINICA'] } */
  },
  {
    path: 'prueba', 
    loadChildren: () => import('./prueba/prueba.module').then(m => m.PruebaModule),
    /* canActivate: [AuthGuard],  // Restringido solo para usuarios autenticados
    data: { roles: ['CLIENTE', 'VETERINARIO', 'ADMIN', 'ADMIN_CLINICA'] } */
  },
  {
    path: 'consulta', 
    loadChildren: () => import('./consulta/consulta.module').then(m => m.ConsultaModule),
    /* canActivate: [AuthGuard],  // Restringido solo para usuarios autenticados
    data: { roles: ['CLIENTE', 'VETERINARIO', 'ADMIN', 'ADMIN_CLINICA'] } */
  },
  {
    path: 'vacuna', 
    loadChildren: () => import('./vacuna/vacuna.module').then(m => m.VacunaModule),
    /* canActivate: [AuthGuard],  // Restringido solo para usuarios autenticados
    data: { roles: ['CLIENTE', 'VETERINARIO', 'ADMIN', 'ADMIN_CLINICA'] } */
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
