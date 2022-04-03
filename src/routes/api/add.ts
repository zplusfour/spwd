import type { RequestHandler } from "@sveltejs/kit";

export const post: RequestHandler = async ({ request }) => {
  const data = await request.formData();

  return {
    body: {
      data
    }
  } as any;
}

export const get: RequestHandler = ({ request }) => {
  return {
    body: {
      test: true
    }
  } as any;
};