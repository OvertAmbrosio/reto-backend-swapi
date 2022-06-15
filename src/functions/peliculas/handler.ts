import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { handleResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import type { CrearPeliculaRequest, BuscarPorIdRequest } from "./pelicula.type";
import { crearPeliculaSchema, bucarPorIdSchema } from "./pelicula.schema";
import * as PeliculaService from "./pelicula.service";
import { getFilm } from "src/providers/swapi/films";
import { Pelicula } from "./pelicula.model";

const listarTodo: ValidatedEventAPIGatewayProxyEvent<{}> = async () => {
  const peliculas = await PeliculaService.buscarTodo();

  return handleResponse({
    statusCode: 200,
    message: `Peliculas obtenidas correctamente`,
    data: peliculas,
  });
};

const buscarPorId: ValidatedEventAPIGatewayProxyEvent<
  BuscarPorIdRequest
> = async (event) => {
  const { id } = event.queryStringParameters;

  const pelicula = await PeliculaService.buscarPorParam({ id });

  if (!pelicula) {
    const peliculaFromApi = await getFilm(id);

    if (peliculaFromApi && Object.values(peliculaFromApi).length) {
      const nuevaPelicula = new Pelicula(peliculaFromApi);
      nuevaPelicula.id = id;
      await PeliculaService.crear(nuevaPelicula, false);

      return handleResponse({
        statusCode: 200,
        message: `Pelicula <${nuevaPelicula.titulo}> obtenida correctamente`,
        data: nuevaPelicula,
      });
    }

    return handleResponse({
      statusCode: 404,
      message: "Pelicula no encontrada",
    });
  } else {
    return handleResponse({
      statusCode: 200,
      message: `Pelicula <${pelicula.titulo}> obtenida correctamente`,
      data: pelicula,
    });
  }
};

const crear: ValidatedEventAPIGatewayProxyEvent<CrearPeliculaRequest> = async (
  event
) => {
  const data = event.body;
  delete data.id;

  const nuevaPelicula = await PeliculaService.crear(data);

  return handleResponse({
    statusCode: 200,
    message: `Pelicula creada correctamente`,
    data: nuevaPelicula,
  });
};

export const listarPeliculas = middyfy(listarTodo);
export const obtenerPeliculaPorId = middyfy(buscarPorId, bucarPorIdSchema);
export const crearPelicula = middyfy(crear, crearPeliculaSchema);
