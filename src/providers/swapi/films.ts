import { HttpMethods } from "src/helpers/constants.helper";
import { swapiProvider } from ".";

export async function getFilm(id: string) {
  console.log({ message: "Bucando films en external API", service: "getFilm" });
  return swapiProvider(`films/${id}`, HttpMethods.GET, { id });
}
