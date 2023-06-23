export class Contacto {
  id: number;
  apellido: string;
  nombre: string;
  telefono: number;
  email: string;
  fotourl: string;



  constructor(
    id: number = 0,
    apellido: string = "",
    nombre: string = "",
    telefono: number = 0,
    email: string = "",
    fotourl: string = "",
  ) {
    this.id = id;
    this.apellido = apellido;
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
    this.fotourl = fotourl;
  }
}
