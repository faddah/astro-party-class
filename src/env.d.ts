/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
	readonly ITEMS_PER_PAGE: number;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}