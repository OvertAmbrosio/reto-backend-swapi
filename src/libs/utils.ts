import { randomBytes } from "crypto";
import { LENGTH_UUID } from "src/helpers/constants.helper";

export function generateId(): string {
  return randomBytes(LENGTH_UUID).toString("hex");
}
