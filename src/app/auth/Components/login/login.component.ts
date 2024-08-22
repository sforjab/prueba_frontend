import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { LoginRequestDTO } from '../../Models/login-request.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  mensajeError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const datosLogin = new LoginRequestDTO(this.email, this.password);
    this.authService.login(datosLogin).subscribe({
      next: (response) => {
        const rolUsuario = sessionStorage.getItem('rol');
        if (rolUsuario === 'CLIENTE') {
          this.router.navigate(['/cliente-dashboard']);
        } else if (rolUsuario === 'VETERINARIO') {
          this.router.navigate(['/veterinario-dashboard']);  // Asegúrate de tener esta ruta definida
        } else if (rolUsuario === 'ADMIN') {
          this.router.navigate(['/admin-dashboard']);  // Asegúrate de tener esta ruta definida
        } else {
          this.router.navigate(['/']);  // Ruta por defecto o home
        }
      },
      error: (error) => {
        this.mensajeError = error.message;
      }
    });
  }
}
