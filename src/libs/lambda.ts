import middy from "@middy/core";
import middyJsonBodyParser from "@middy/http-json-body-parser";
import { ObjectSchema } from "joi";
import validatorMiddleware from "src/middlewares/validators.middleware";

export const middyfy = (handler, schema?: ObjectSchema) => {
  return middy(handler)
    .use(validatorMiddleware(schema))
    .use(middyJsonBodyParser());
};
