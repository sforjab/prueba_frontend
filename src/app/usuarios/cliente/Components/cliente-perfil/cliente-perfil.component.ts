import { Component, OnInit } from '@angular/core';
import { Rol, Usuario } from 'src/app/usuarios/Models/usuario.dto';
import { UsuarioService } from 'src/app/usuarios/Services/usuario.service';

@Component({
  selector: 'app-cliente-perfil',
  templateUrl: './cliente-perfil.component.html',
  styleUrls: ['./cliente-perfil.component.scss']
})
export class ClientePerfilComponent implements OnInit {
  usuario: Usuario = {
    numIdent: '',
    nombre: '',
    apellido1: '',
    apellido2: '',
    direccion: '',
    telefono: '',
    email: '',
    rol: Rol.CLIENTE,
    username: '',
    password: ''
  };


  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerDatosUsuario();
  }

  obtenerDatosUsuario(): void {
    this.usuarioService.getUsuarioLogueado().subscribe(usuario => {
      this.usuario = usuario;  // Guardamos los datos del usuario
    });
  }
}
