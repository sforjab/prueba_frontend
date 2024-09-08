import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Models/usuario.dto';
import { Rol } from '../Models/usuario.dto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioUrl = `${environment.APIHost}api/usuarios`;  // URL del backend para la gestión de usuarios

  constructor(private http: HttpClient) {}

  // Obtener usuario por ID
  getUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.usuarioUrl}/getUsuarioPorId/${id}`).pipe(
      tap(usuario => console.log('Usuario obtenido: ', usuario)),
      catchError(this.handleError)
    );
  }

  // Obtener usuario por número de identificación
  getUsuarioPorNumIdent(numIdent: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.usuarioUrl}/getUsuarioPorNumIdent/${numIdent}`).pipe(
      tap(usuario => console.log('Usuario obtenido por número de identificación: ', usuario)),
      catchError(this.handleError)
    );
  }

  // Obtener usuario por nombre de usuario
  getUsuarioPorUsername(username: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.usuarioUrl}/getUsuarioPorUsername/${username}`).pipe(
      tap(usuario => console.log('Usuario obtenido por nombre de usuario: ', usuario)),
      catchError(this.handleError)
    );
  }

  // Crear un nuevo usuario
  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.usuarioUrl}/create`, usuario).pipe(
      tap(nuevoUsuario => console.log('Usuario creado: ', nuevoUsuario)),
      catchError(this.handleError)
    );
  }

  // Actualizar un usuario existente
  updateUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.usuarioUrl}/update/${id}`, usuario).pipe(
      tap(usuarioActualizado => console.log('Usuario actualizado: ', usuarioActualizado)),
      catchError(this.handleError)
    );
  }

  // Eliminar un usuario por su ID
  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.usuarioUrl}/delete/${id}`).pipe(
      tap(() => console.log(`Usuario con ID: ${id} eliminado`)),
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse): Observable<never> {
    let mensajeError = '¡Ha ocurrido un error desconocido!';
    if (error.error instanceof ErrorEvent) {
        mensajeError = `Error: ${error.error.message}`;
    } else {
        mensajeError = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    return throwError(() => new Error(mensajeError));
  }
}
