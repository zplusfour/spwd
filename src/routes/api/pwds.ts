import type { RequestHandler } from "@sveltejs/kit";
import * as fs from "fs";
import { PWDS_LOCATION_JSON } from "./add";

export const get: RequestHandler = ({ request }) => {
  var pwds: any;

  if (!fs.existsSync(PWDS_LOCATION_JSON)) {
    fs.writeFileSync(PWDS_LOCATION_JSON, "[]");
  } else {
    pwds = fs.readFileSync(PWDS_LOCATION_JSON);
  }

  return {
    status: 200,
    body: pwds
  }
}