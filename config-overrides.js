import { resolve } from 'path';

export function paths(paths) {
	paths.appIndexJs = resolve(__dirname, 'source/index.js');
	paths.appSrc = resolve(__dirname, 'source');
	return paths;
}
