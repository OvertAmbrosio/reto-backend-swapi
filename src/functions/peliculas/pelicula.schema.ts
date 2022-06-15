import * as Joi from "joi";

export const bucarPorIdSchema = Joi.object().keys({
  id: Joi.string().required(),
}).required();

export const crearPeliculaSchema = Joi.object().keys({
  naves: Joi.array().items(Joi.string().required()).required(),
  editado: Joi.string().required(),
  planetas: Joi.array().items(Joi.string().required()).required(),
  productor: Joi.string().required(),
  titulo: Joi.string().required(),
  url: Joi.string().required(),
  fecha_estreno: Joi.string().required(),
  vehiculos: Joi.array().items(Joi.string().required()).required(),
  episodio_id: Joi.number().required().positive(),
  director: Joi.string().required(),
  creado: Joi.string().required(),
  introduccion: Joi.string().required(),
  personajes: Joi.array().items(Joi.string().required()).required(),
  especies: Joi.array().items(Joi.string().required()).required(),
}).required();