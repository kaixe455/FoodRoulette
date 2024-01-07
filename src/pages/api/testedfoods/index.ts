import { client } from "src/db/dbConnection";

export async function GET() {
	let record = await client.db.foodTypes.filter("tested", true).getMany();
	return new Response(JSON.stringify(record), {
		headers: { "Content-Type": "application/json" },
		status: 200, // success
		statusText: "OK",
	});
}
