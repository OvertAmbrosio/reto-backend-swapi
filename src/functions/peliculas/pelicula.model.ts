import { generateId } from "@libs/utils";

import type { Film } from "./pelicula.type"

export class Pelicula {
  constructor(film: Film) {
    this.naves = film.starships;
    this.editado = film.edited;
    this.planetas = film.planets;
    this.productor = film.producer;
    this.titulo = film.title;
    this.url = film.url;
    this.fecha_estreno = film.release_date;
    this.vehiculos = film.vehicles;
    this.episodio_id = film.episode_id;
    this.director = film.director;
    this.creado = film.created;
    this.introduccion = film.opening_crawl;
    this.personajes = film.characters;
    this.especies = film.species;
  }

  id: string;
  naves: string[];
  editado: string;
  planetas: string[];
  productor: string;
  titulo: string;
  url: string;
  fecha_estreno: string;
  vehiculos: string[];
  episodio_id: number;
  director: string;
  creado: string;
  introduccion: string;
  personajes: string[];
  especies: string[];

  setId() {
    this.id = generateId();
  }
}