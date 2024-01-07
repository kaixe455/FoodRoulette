import { client } from "@db/dbConnection.js";

export async function GET() {
	let record = await client.db.foodTypes.filter("tested", false).getMany();
	return new Response(JSON.stringify(record), {
		headers: { "Content-Type": "application/json" },
		status: 200, // success
		statusText: "OK",
	});
}
