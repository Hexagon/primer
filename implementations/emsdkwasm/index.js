import { readAll } from "https://deno.land/std@0.160.0/streams/conversion.ts";

export const f = await Deno.open("./implementations/emsdkwasm/index.wasm")
const buf = await readAll(f);

const wasmModule = new WebAssembly.Module(buf);
const wasmInstance = new WebAssembly.Instance(wasmModule);

// Export
const 
    name = "EMSDK WASM",
    description = "Simple WASM implementation build with Emscripten",
    type = "wasm",
    checkPrime = wasmInstance.exports.checkPrime;

export { name, type, description, checkPrime };