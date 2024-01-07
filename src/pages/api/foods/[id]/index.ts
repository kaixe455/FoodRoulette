import { client } from "src/db/dbConnection.ts";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
	const id = params.id;
	const record = await client.db.foodTypes.filter("name", id).getMany();
	return new Response(JSON.stringify(record), {
		headers: { "Content-Type": "application/json" },
		status: 200, // success
		statusText: "OK",
	});
};

export const PUT: APIRoute = async ({ params, request }) => {
	const id = params.id;
	console.log("id");
	if (!id) {
		return new Response(JSON.stringify({ error: "No id provided" }), {
			headers: { "Content-Type": "application/json" },
			status: 400, // success
			statusText: "Bad Request",
		});
	}
	const food = await request.json();
	const updatedFood = await client.db.foodTypes.update(id, food);
	return new Response(JSON.stringify(updatedFood), {
		headers: { "Content-Type": "application/json" },
		status: 200, // success
		statusText: "OK",
	});
};
