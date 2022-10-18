import { readAll } from "https://deno.land/std@0.160.0/streams/conversion.ts";

export const f = await Deno.open("./implementations/aswasm/build/release.wasm")
const buf = await readAll(f);

const wasmModule = new WebAssembly.Module(buf);
const wasmInstance = new WebAssembly.Instance(wasmModule);

// Export
const 
    name = "AssemblyScript WASM",
    description = "Simple WASM implementation build with AssemblyScript",
    type = "wasm",
    checkPrime = wasmInstance.exports.checkPrime;

export { name, type, description, checkPrime };