import type { RequestHandler } from "@sveltejs/kit";
// import * as fs from "fs";
// import { PWDS_LOCATION_JSON } from "../add";
// import md5 from "md5";

export const get: RequestHandler = ({ params }) => {
  return {
    status: 200,
    body: {
      app: params.app
    }
  }
}

// export const post: RequestHandler = async ({ request, params }) => {
//   const data: any = await request.formData();
// 	const form = Object([...data.entries()]);
// 	const app = form[0][1];
// 	const password = form[1][1];
// 	const encApp = md5(app);
// 	const encPassword = md5(password);

// 	if (!fs.existsSync(PWDS_LOCATION_JSON)) {
// 		fs.writeFileSync(PWDS_LOCATION_JSON, "[]");
// 	} else {
// 		let realtimePwds = JSON.parse(fs.readFileSync(PWDS_LOCATION_JSON, "utf8"));
// 		const pwd = realtimePwds.find((pwd: { app: string; password: string }) => pwd.app === app);
//     let npwds = [];

//     realtimePwds.forEach((p: { app: string; password: string; }) => {
//       if (p.app === app) {
//         p["app"] = `${app}-${encApp}`;
//         p["password"] = `${password}-${encPassword}`;
//       }
//     });

// 		fs.writeFileSync(PWDS_LOCATION_JSON, JSON.stringify(realtimePwds));
// 	}

//   return {
//     body: {
//       message: "under construction"
//     }
//   }
// }