import { XataClient } from "../xata.ts";

export const client = new XataClient({
	apiKey: import.meta.env.XATA_API_KEY,
	branch: import.meta.env.XATA_BRANCH,
});
