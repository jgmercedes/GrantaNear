import { Context, PersistentVector } from "near-sdk-as";
import Proyecto from "./models/Proyecto";

const listaProyectos = new PersistentVector<Proyecto>("P");

export function crearProyecto(
  titulo: string,
  descripcion: string,
  fondos: i32
): void {
  assert(titulo.length > 0, "El titulo no puede estar vacio.");
  assert(descripcion.length > 0, "La descripcion no puede estar vacia.");
  assert(fondos > 9, "Los fondos deben ser mayor a 10 Near");

  const nuevoProyecto = new Proyecto(
    listaProyectos.length,
    Context.sender,
    titulo,
    descripcion,
    fondos
  );
  listaProyectos.push(nuevoProyecto);
}

export function listarProyectos(): Proyecto[] {
  const listado: Proyecto[] = new Array<Proyecto>(listaProyectos.length);
  for (let i = 0; i < listaProyectos.length; i++) {
    listado[i] = listaProyectos[i];
  }
  return listado;
}

export function obtenerProyecto(id: i32): Proyecto {
  if (!listaProyectos.containsIndex(id)) {
    throw new Error("Proyecto no fue encontrado!");
  }
  return listaProyectos[id];
}

export function votarProyecto(id: i32): Proyecto {
  if (!listaProyectos.containsIndex(id)) {
    throw new Error("Este proyecto no existe");
  }
  let proyecto = listaProyectos[id];
  proyecto.cantidadDeVotos = proyecto.cantidadDeVotos + 1;
  proyecto.votos.push(Context.sender);
  listaProyectos.replace(id, proyecto);
  return proyecto;
}

export function eliminarProyecto(id: i32): string {
  if (!listaProyectos[id]) return "Este proyecto no existe";
  if (<String>listaProyectos[id].creador == <String>Context.sender) {
    listaProyectos.swap_remove(id);
    return "Proyecto eliminado";
  }
  return (
    "Este proyecto, solo puede ser eliminado por " + listaProyectos[id].creador
  );
}
