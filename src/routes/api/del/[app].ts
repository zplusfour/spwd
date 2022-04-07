import type { RequestHandler } from "@sveltejs/kit";
import * as fs from "fs";
import { PWDS_LOCATION_JSON } from "../add";

export const get: RequestHandler = ({ params }) => {
  return {
    status: 200,
    body: {
      app: params.app
    }
  } as any;
}

export const post: RequestHandler = async ({ request, params }) => {
  const { app } = params;
  const pwds = JSON.parse(fs.readFileSync(PWDS_LOCATION_JSON, "utf8"));

  const pwd = pwds.find((pwd: { app: string; password: string }) => pwd.app === app);

  if (!pwd) {
    return {
      status: 404,
      body: {
        error: "Not found"
      }
    } as any;
  } else {
    var npwds = [];

    pwds.forEach((pwd: { app: string; password: string }) => {
      if (pwd.app !== app) {
        npwds.push(pwd);
      } else {
        // dont
      }
    });

    return {
      status: 200,
      Headers: {
        Location: "/"
      }
    } as any;
  }
}