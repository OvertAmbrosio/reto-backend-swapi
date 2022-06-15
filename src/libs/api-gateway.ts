import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
// import type { FromSchema } from "json-schema-to-ts";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, "body"> & {
  body: S;
  queryStringParameters: S;
};
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<
  ValidatedAPIGatewayProxyEvent<S>,
  APIGatewayProxyResult
>;
type ResponseProps = {
  statusCode: number;
  message: string;
  data?: any;
};

export function handleResponse(props: ResponseProps) {
  return {
    statusCode: props.statusCode,
    body: JSON.stringify(props),
  }
}
