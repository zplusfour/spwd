import type { RequestHandler } from '@sveltejs/kit';
import md5 from 'md5';

export const post: RequestHandler = async ({ request }) => {
	const data: any = await request.formData();
	const form = Object([...data.entries()]);
	const app = form[0][1];
	const password = form[1][1];
	const encApp = md5(app);
	const encPassword = md5(password);

	return {
		status: 200,
		body: {
			app: encApp,
			password: encPassword,
			rApp: app,
			rPassword: password
		}
	};
};

export const get: RequestHandler = ({ url }) => {
	return {
		body: {
			v: url,
			test: true
		}
	} as any;
};
