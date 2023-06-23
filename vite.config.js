import { sveltekit } from '@sveltejs/kit/vite';
import inlangPlugin from "@inlang/sdk-js/adapter-sveltekit";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [inlangPlugin(), sveltekit()],
};

export default config;
