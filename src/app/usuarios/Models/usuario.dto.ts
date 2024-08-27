export interface Usuario {
    id?: number;
    numIdent: string;
    nombre: string;
    apellido1: string;
    apellido2?: string;
    direccion?: string;
    telefono?: string;
    email?: string;
    rol: Rol;
    username: string;
    password: string;
  }
  
  export enum Rol {
    ADMIN = 'ADMIN',
    VETERINARIO = 'VETERINARIO',
    CLIENTE = 'CLIENTE'
  }
  