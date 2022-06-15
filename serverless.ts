import peliculas from "@functions/peliculas";
import type { AWS } from "@serverless/typescript";

import { config } from "src/helpers/constants.helper";

const serverlessConfiguration: AWS = {
  service: "reto-backend-swapi",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-offline"],
  custom: {
    esbuild: {
      bundle: true,
      minify: true,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    stage: 'prod',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
    iam: {
      role: {
        statements: [
          {
            Effect: "Allow",
            Action: ["dynamodb:*", "dynamodb:CreateTable"],
            Resource: "arn:aws:dynamodb:${aws:region}:*:table/peliculasTable",
          },
        ],
      },
    },
  },
  // import the function via paths
  functions: { ...peliculas },
  package: { individually: true },
  resources: {
    Resources: {
      peliculasTable: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: config.tabla_peliculas,
          AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
          KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
          },
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
