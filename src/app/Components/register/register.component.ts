import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rol, Usuario } from 'src/app/Models/usuario.dto';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  roles = Object.values(Rol);

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.registerForm = this.fb.group({
      numIdent: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: [''],
      direccion: [''],
      telefono: [''],
      email: ['', [Validators.required, Validators.email]],
      rol: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.valid) {
      const usuario: Usuario = this.registerForm.value;
      this.usuarioService.createUsuario(usuario).subscribe(
        response => {
          console.log('Usuario registrado:', response);
          // Aquí puedes añadir lógica adicional, como redirigir al usuario o mostrar un mensaje de éxito
        },
        error => {
          console.error('Error al registrar el usuario:', error);
          // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
        }
      );
    }
  }
}
