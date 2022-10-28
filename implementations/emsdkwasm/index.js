import { readFile } from "../../common/filereader.js";
const buf = await readFile("./implementations/emsdkwasm/index.wasm");

const wasmModule = new WebAssembly.Module(buf);
const wasmInstance = new WebAssembly.Instance(wasmModule);

// Export
const 
    name = "EMSDK WASM",
    description = "Simple WASM implementation built using Emscripten",
    type = "wasm",
    checkPrime = wasmInstance.exports.checkPrime;

export { name, type, description, checkPrime };