@nearBindgen
class Proyecto {
  public id: number;
  public creador: string;
  public titulo: string;
  public descripcion: string;
  public fondos: i32;
  public votos: string[];
  public cantidadDeVotos: number;

  constructor(
    id: number,
    creador: string,
    titulo: string,
    descripcion: string,
    fondos: i32
  ) {
    this.id = id;
    this.creador = creador;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fondos = fondos;
    this.votos = []
  }
}

export default Proyecto;
