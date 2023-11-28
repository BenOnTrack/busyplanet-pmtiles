

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.bfeafbcc.js","_app/immutable/chunks/index.cb889fce.js","_app/immutable/chunks/stores.8f770604.js","_app/immutable/chunks/singletons.8ec05b82.js"];
export const stylesheets = [];
export const fonts = [];
