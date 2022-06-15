# Reto Backend - Integracion con swapi (films)

## Instalación

### Con NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

## Endpoints

### Listar Peliculas

- Url: `/prod/peliculas`
- Metodo: `GET`
- Respuesta:
  - `statusCode`: _Number_ --- Codigo de estado
  - `message`: _string_ --- Mensaje de respuesta
  - `data`: _object[]_ --- Data de respuesta es un arreglo de el objeto Pelicula

### Buscar Pelicula

- Url: `/prod/peliculas/buscar?:id`
- Url de Ejemplo: `prod/peliculas/buscar?id=1`
- Metodo: `GET`
- Respuesta:
  - `statusCode`: _Number_ --- Codigo de estado
  - `message`: _string_ --- Mensaje de respuesta
  - `data`: _object_ --- Data de respuesta es un objeto Pelicula

### Crear Pelicula

- Url: `/prod/peliculas/crear`
- Metodo: `POST`
- Objeto de Prueba:
  ```javascript
  {
      "titulo": "prueba",
      "naves": ["navePrueba"],
      "editado": "2020-16-05",
      "planetas": ["planetaPrueba"],
      "productor": "productor",
      "url": "http://www.prueba.com",
      "fecha_estreno": "2020-16-05",
      "vehiculos": ["vehiculoPrueba"],
      "episodio_id": "1",
      "director": "el george",
      "creado": "2020-16-06",
      "introduccion": "introduccion",
      "personajes": ["personajePrueba"],
      "especies": ["especiePrueba"]
  }
  ```
- Respuesta:
  - `statusCode`: _Number_ --- Codigo de estado
  - `message`: _string_ --- Mensaje de respuesta
  - `data`: _object_ --- Data de respuesta es el objeto creado
