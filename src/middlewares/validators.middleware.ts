// import { handleResponse } from "@libs/api-gateway"
import { handleResponse } from "@libs/api-gateway";
import { ObjectSchema } from "joi";
import { StatusCode } from "src/helpers/constants.helper";

const validatorMiddleware = (schema?: ObjectSchema) => {
  const customMiddlewareBefore = async ({ event }) => {
    const { queryStringParameters, body } = event;
    const objectToEvaluate = JSON.parse(body)
      ? JSON.parse(body)
      : queryStringParameters;

    if (schema) {
      await schema.validateAsync(objectToEvaluate).catch((err) => {
        if (err && err.message) {
          throw new Error(err.message);
        } else {
          throw new Error(JSON.stringify(err));
        }
      });
    }
  };

  const customMiddlewareOnError = async ({ error }) => {
    if (error === undefined) {
      return handleResponse({
        statusCode: StatusCode.INTERNAL_ERROR,
        message: "Error interno del servidor",
      });
    }
    return handleResponse({
      statusCode: StatusCode.BAD_REQUEST,
      message: error.message,
    });
  };

  return {
    before: customMiddlewareBefore,
    onError: customMiddlewareOnError,
  };
};

export default validatorMiddleware;
