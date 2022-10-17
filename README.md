## primer

Deno example/benchmark showing prime number calculation on pure javascript vs. wasm

<img src="/primer.png">

### Running

Running the bemchmark require no special tools, just make sure deno is installed ([https://deno.land/#installation](https://deno.land/#installation)).

Then ...

```deno task benchmark```

### Adding a new prime calculation implementation

1.   Add new folder `implementations/<name of implementation>`
2.   Add `index.js` which is the implementation entrypoint, index.js should export name (string), description (string) and checkPrime (function)
3.   **WASM only:**  If adding a wasm implementation, also add `src/index.c`, a new build task in `deno.jsonc` which generates `index.wasm`
4.   **WASM only:**  Build your module by running ```deno task build-simplewasm```
5.   Add import of your implementation in `/implementations.js`

See `implementations/simplejs` or `implementations/simplewasm` for examples.

#### WASM prerequisites

Install Emscriptem SDK as described [here](https://emscripten.org/docs/getting_started/downloads.html).