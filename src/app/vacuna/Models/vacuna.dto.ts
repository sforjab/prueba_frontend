export interface Vacuna {
    id: number;
    nombre: string; // Nombre de la vacuna
    laboratorio: string; // Laboratorio de la vacuna
    fecha: string;  // Fecha de administración de la vacuna en formato ISO (string)
    mascotaId: number; // ID de la mascota asociada a la vacuna
    // Aquí hay que poner el id del veterinario que la pone
}
  