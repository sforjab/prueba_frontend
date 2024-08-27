import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
/* import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './auth/Components/login/login.component';
import { RegistroComponent } from './auth/Components/registro/registro.component'; */
/* import { HeaderComponent } from './Components/header/header.component';
 */import { ClienteModule } from './cliente/cliente.module';

@NgModule({
  declarations: [
    AppComponent,
/*     HomeComponent,
 */    /* LoginComponent,
    RegistroComponent, */
/*     HeaderComponent,
 */  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    ClienteModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
