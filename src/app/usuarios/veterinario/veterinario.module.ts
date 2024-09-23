import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinarioRoutingModule } from './veterinario-routing.module';
import { VeterinarioDashboardComponent } from './Components/veterinario-dashboard/veterinario-dashboard.component';


@NgModule({
  declarations: [
    VeterinarioDashboardComponent
  ],
  imports: [
    CommonModule,
    VeterinarioRoutingModule
  ]
})
export class VeterinarioModule { }
