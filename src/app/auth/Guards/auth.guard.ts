import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const rolesDefinidos = route.data['roles'] as Array<string>;
    return this.authService.rolUsuario.pipe(
      map(rolUsuario => {
        if (!rolUsuario) {
          this.router.navigate(['/login']);
          return false;
        }
        if (!rolesDefinidos.includes(rolUsuario)) {
          this.router.navigate(['/permiso-denegado']);
          return false;
        }
        return true;
      })
    );
  }
}
