import { readAll } from "https://deno.land/std@0.160.0/streams/conversion.ts";

//loads wasm file
export const f = await Deno.open("./implementations/simplewasm/index.wasm")
const buf = await readAll(f);

//load it as module
const wasmModule = new WebAssembly.Module(buf);
const wasmInstance = new WebAssembly.Instance(wasmModule);

// Export name, description and checkPrime function
const 
    name = "Simple WASM",
    description = "Simple implementation in pure WASM",
    checkPrime = wasmInstance.exports.checkPrime;

export { name, description, checkPrime };