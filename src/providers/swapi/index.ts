import axios from "axios";
import { config } from "src/helpers/constants.helper";

const api = axios.create({
  baseURL: config.swapi_url,
});

export async function swapiProvider(
  url: string,
  method: string,
  params?: Record<string, unknown>
) {
  return api({ url, method, params }).then((res) => res.data).catch((err) => {
    console.log({
      message: err.message ? err.message : JSON.stringify(err),
      service: "swapiProvider",
    });
    return null;
  });
}
