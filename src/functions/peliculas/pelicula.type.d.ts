import { Pelicula } from "./pelicula.model"

export type Film = {
  starships: string[]; // -- An array of starship resource URLs that are in this film.
  edited: string; // -- the ISO 8601 date format of the time that this resource was edited.
  planets: string[]; // -- An array of planet resource URLs that are in this film.
  producer: string; // -- The name(s) of the producer(s) of this film. Comma separated.
  title: string; // -- The title of this film
  url: string; // -- the hypermedia URL of this resource.
  release_date: string; // -- The ISO 8601 date format of film release at original creator country.
  vehicles: string[]; // -- An array of vehicle resource URLs that are in this film.
  episode_id: number; // -- The episode number of this film.
  director: string; // -- The name of the director of this film.
  created: string; // -- the ISO 8601 date format of the time that this resource was created.
  opening_crawl: string; // -- The opening paragraphs at the beginning of this film.
  characters: string[]; // -- An array of people resource URLs that are in this film.
  species: string[]; // -- An array of species resource URLs that are in this film.
}

export type BuscarPorIdRequest = {
  id: string;
}

export type CrearPeliculaRequest = Omit<Pelicula, 'setId'>;

export type BuscarPorParam = {
  id?: string;
}