/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
	readonly ITEMS_PER_PAGE: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}