import { readFile } from "../../common/filereader.js";

const buf = await readFile("./implementations/opt-aswasm/build/release.wasm");

const wasmModule = new WebAssembly.Module(buf);
const wasmInstance = new WebAssembly.Instance(wasmModule);

// Export
const 
    name = "AS WASM (opt)",
    description = "Optimized AssemblyScript WASM implementation",
    type = "wasm",
    checkPrime = wasmInstance.exports.checkPrime;

export { name, type, description, checkPrime };