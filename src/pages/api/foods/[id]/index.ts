import {client} from '@db/dbConnection'
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({params, request}) => {
    const id = params.id
    let record = await client.db.foodTypes.filter("name",id).getMany();
    return new Response(JSON.stringify(record), {
        headers: { "Content-Type": "application/json" },
        status: 200, // success
        statusText: "OK"
    });
}