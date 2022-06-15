export const LENGTH_UUID = 8;

export enum StatusCode {
  INTERNAL_ERROR = 500,
  BAD_REQUEST = 400
}

export enum EnvType {
  DEV = 'dev',
  PROD = 'prod'
}

export const config = {
  tabla_peliculas: 'peliculasTable',
  swapi_url: 'https://swapi.py4e.com/api/',
}

export enum HttpMethods {
  GET = 'get',
}