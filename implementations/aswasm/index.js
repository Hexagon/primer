import { readFile } from "../filereader.js";
const buf = await readFile("./implementations/aswasm/build/release.wasm");

const wasmModule = new WebAssembly.Module(buf);
const wasmInstance = new WebAssembly.Instance(wasmModule);

// Export
const 
    name = "AS WASM",
    description = "Simple WASM implementation built using AssemblyScript",
    type = "wasm",
    checkPrime = wasmInstance.exports.checkPrime;

export { name, type, description, checkPrime };