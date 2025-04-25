import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
		adapter: adapter({
		fallback: 'index.html',
		pages: 'build',
		assets: 'build',
		precompress: false
		}),
		paths: {
		base: '' // HARUS kosong untuk username.github.io
		}
  }
};

export default config;