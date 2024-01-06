/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly XATA_API_KEY: string;
	readonly XATA_BRANCH?: string;
	readonly REACT_API_URL: string;
	readonly API_URL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
