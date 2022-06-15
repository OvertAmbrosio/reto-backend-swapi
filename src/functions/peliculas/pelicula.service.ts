import { generateId } from "@libs/utils";
import { ScanInput } from "aws-sdk/clients/dynamodb";

import type { BuscarPorParam, CrearPeliculaRequest } from "./pelicula.type";
import { Database } from "src/databases/dynamo.database";
import { config } from "src/helpers/constants.helper";

export const buscarTodo = async () => {
  const params: ScanInput = {
    TableName: config.tabla_peliculas,
  };

  const { Items, $response } = await Database.scan(params).promise();

  if ($response && $response.error) {
    throw new Error($response.error.message);
  }

  return Items;
};

export const buscarPorParam = async (params: BuscarPorParam) => {
  const query = {
    TableName: config.tabla_peliculas,
    Key: params,
  };

  const res = await Database.get(query).promise();

  if (res.$response && res.$response.error) {
    throw new Error(res.$response.error.message);
  }

  return res && res.Item ? res.Item : null;
};

export const crear = async (data: CrearPeliculaRequest, withId = true) => {
  if (withId) data.id = generateId();

  await Database.put({
    TableName: config.tabla_peliculas,
    Item: data,
  }).promise();

  return data;
};
