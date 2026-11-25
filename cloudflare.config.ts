import { bindings, defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "memos-worker",
		compatibilityDate: "2025-08-19",
		entrypoint: "src/index.js",
		assets: {
			runWorkerFirst: [
				"/api/*",
				"/rss.xml",
				"/explore/rss.xml",
			],
		},
		domains: [
			"memos.rushia.eu.org",
		],
		env: {
			DB: bindings.d1({
				name: "notes-db",
				id: "ec18ab97-d7f5-4960-8e9f-1ef3e7cc0d78",
			}),
			NOTES_KV: bindings.kv({
				id: "ae897c2fc66844b08c6cd9177c708a19",
			}),
			NOTES_R2_BUCKET: bindings.r2({
				name: "notes-r2-bucket",
			}),
		},
	},
});
