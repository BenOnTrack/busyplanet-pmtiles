

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.d4eafe09.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.cb889fce.js"];
export const stylesheets = [];
export const fonts = [];
