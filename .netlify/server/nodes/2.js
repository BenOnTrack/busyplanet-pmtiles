import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.98dc5ebb.js","_app/immutable/chunks/index.cb889fce.js","_app/immutable/chunks/stores.8f770604.js","_app/immutable/chunks/singletons.8ec05b82.js"];
export const stylesheets = ["_app/immutable/assets/2.ea6465d0.css"];
export const fonts = [];
