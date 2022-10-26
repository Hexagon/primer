## primer

Deno example/benchmark showing prime number calculation on pure javascript vs. wasm

<img src="/primer.png">

### Running

No special tools required, just make sure Deno is installed ([https://deno.land/#installation](https://deno.land/#installation)).

Then ...

```deno task bench```

### Adding a new prime calculation implementation

1.   Add new folder `implementations/<name of implementation>`
2.   Add `index.js` which is the implementation entrypoint, index.js should export name (string), type (string), description (string) and checkPrime (function)
3.   **WASM only:**  If adding a wasm implementation, also add a new build task in `deno.jsonc` which is set up to generate the `.wasm`
4.   **WASM only:**  Build your module by running ```deno task build-<name of implementation>```
5.   Make sure your implementation pass all tests by running ```deno task test```

See `implementations/simplejs` or `implementations/aswasm` for examples.

#### WASM prerequisites

I recommend AssembyScript for compiling WASM, as it is a oneliner to install if you already have Node.

Other toolchains for building wasm modules includes Rust or Emscriptem.

### Folder structure
    .
    ├── implementations             
    │   ├── <implementation-name>   # One folder for each implementation, containg: 
    │   │   ├── README.md              # Implementation README   
    │   │   ├── index.js               # implementation entrypoint (mandatory)
    │   │   └── ...                    # (Implementation specific files and folders) 
    │   ├── ...                     # More implementations                      
    │   └── importer.js             # Helper that automatically imports all implementations
    ├── deno.jsonc                  # Deno task configuration
    ├── bench.deno.js               # Benchark runner, normally started using `deno task bench`
    ├── test.js                     # Test runner, normally started using `deno task test`
    └── ...

