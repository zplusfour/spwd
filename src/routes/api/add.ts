import type { RequestHandler } from '@sveltejs/kit';
import md5 from 'md5';
import * as fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const PWDS_LOCATION_JSON: string = __dirname + "/pwds.json"; // you can edit that later

export const post: RequestHandler = async ({ request }) => {
	const data: any = await request.formData();
	const form = Object([...data.entries()]);
	const app = form[0][1];
	const password = form[1][1];
	const encApp = md5(app);
	const encPassword = md5(password);

	if (!fs.existsSync(PWDS_LOCATION_JSON)) {
		fs.writeFileSync(PWDS_LOCATION_JSON, "[]");
	} else {
		let realtimePwds = JSON.parse(fs.readFileSync(PWDS_LOCATION_JSON, "utf8"));
		realtimePwds.push({app: `${app}-${encApp}`, password: `${password}-${encPassword}`});

		fs.writeFileSync(PWDS_LOCATION_JSON, JSON.stringify(realtimePwds));
	}

	return {
		headers: { Location: '/' },
		status: 302
	};
};

export const get: RequestHandler = ({ url }) => {
	return {
		body: {
			somepropidk: url,
			test: true
		}
	} as any;
};
