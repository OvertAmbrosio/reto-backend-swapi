import { handlerPath } from "@libs/handler-resolver";

export default {
  listarPeliculas: {
    handler: `${handlerPath(__dirname)}/handler.listarPeliculas`,
    events: [
      {
        http: {
          method: "get",
          path: "peliculas",
        },
      },
    ],
  },
  buscarPelicula: {
    handler: `${handlerPath(__dirname)}/handler.obtenerPeliculaPorId`,
    events: [
      {
        http: {
          method: "get",
          path: "peliculas/buscar",
        },
      },
    ],
  },
  crearPelicula: {
    handler: `${handlerPath(__dirname)}/handler.crearPelicula`,
    events: [
      {
        http: {
          method: "post",
          path: "peliculas/crear",
        },
      },
    ],
  },
};
