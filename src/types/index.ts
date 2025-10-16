// types/index.ts
export interface Cliente {
  id?: number; // opcional para nuevos registros
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  direccion: string;
}