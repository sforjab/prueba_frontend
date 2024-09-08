import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/Services/auth.service';
import { UsuarioService } from 'src/app/usuarios/Services/usuario.service';
import { Usuario } from 'src/app/usuarios/Models/usuario.dto';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;
  rolUsuario: string = '';
  usuario: Usuario | null = null;  // Detalles del usuario logueado

  constructor(private authService: AuthService, private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    // Suscribirse al estado de autenticación
    this.authService.isUsuarioLogin.subscribe(isLogged => {
      this.isLogged = isLogged;
      if (this.isLogged) {
        // Si el usuario está logueado, obtener su rol y datos
        this.obtenerDatosUsuario();

        // Obtenemos el rol del usuario logueado
        this.authService.rolUsuario.subscribe(rol => {
          this.rolUsuario = rol;
        });
      }
    });
  }

  navegarLogin(): void {
    this.router.navigate(['/login']);  // Redirigimos a la ruta de login
  }

  // Método para obtener los datos del usuario logueado
  obtenerDatosUsuario(): void {
    const token = this.authService.tokenUsuario;
    if (token) {
      const decodedToken: any = jwtDecode(token);  // Decodificamos el token
      const idUsuario = decodedToken.idUsuario; // Y obtenemos el ID de usuario
      if (idUsuario) {
        this.usuarioService.getUsuarioPorId(Number(idUsuario)).subscribe(usuario => {
          this.usuario = usuario;  // Guardamos los datos del usuario
        });
      }
    }
  }

  // Método para cerrar sesión
  logout(): void {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("rol");
    this.authService.usuarioActualLogin.next(false);
    this.authService.usuarioActualRol.next('');

    // Redirigimos a la página de inicio
    this.router.navigate(['/']);
  }
}
