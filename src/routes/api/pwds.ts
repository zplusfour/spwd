import type { RequestHandler } from "@sveltejs/kit";
import * as fs from "fs";
import { PWDS_LOCATION_JSON } from "./add";

export const get: RequestHandler = ({ request }) => {
  const pwds = fs.readFileSync(PWDS_LOCATION_JSON);

  return {
    status: 200,
    body: pwds
  }
}