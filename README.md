## primer

Benchmarking project showing prime number calculation on pure JavaScript vs. WASM in Node and/or Deno.

<img src="/primer.png">

### Running

No special tools required. Just make sure the runtime you want to benchmark is installed, or simply open this repository in a GitHub Codespace - both Deno and Node will be pre-installed and ready to run.

#### Deno

1.   Install a recent version of Deno, see [https://deno.land/#installation](https://deno.land/#installation).
2.   Run using command ```deno task bench```

#### Node

1.   Install a recent version of Node.
2.   Run using command ```npm run bench```

### Contributing

To add a new prime calculation implementation

1.   Add new folder `implementations/<name of implementation>`
2.   Add `index.js` which is the implementation entrypoint, index.js should export name (string), type (string), description (string) and checkPrime (function)
3.   **WASM only:**  If adding a wasm implementation, also add a new build task in `deno.jsonc` which is set up to generate the `.wasm`
4.   **WASM only:**  Build your module by running ```deno task build-<name of implementation>```
5.   Make sure your implementation pass all tests by running ```deno task test```

See `implementations/simplejs` or `implementations/aswasm` for examples.

#### WASM prerequisites

I recommend AssembyScript for compiling WASM, as installing it is a oneliner if you already have Node.

Alternative toolchains for building wasm modules include Rust or Emscriptem.

### Folder structure
    .
    ├── implementations             
    │   ├── <implementation-name>   # One folder for each implementation, containg: 
    │   │   ├── README.md              # Implementation README   
    │   │   ├── index.js               # implementation entrypoint (mandatory)
    │   │   └── ...                    # (Implementation specific files and folders) 
    │   └── ...                     # More implementations
    │
    ├── common                      # Cross platform helper javascript
    │   └── filereader.js             # Cross platform file reader
    │
    ├── deno, node, ...?            # One folder per runtime environment
    │   ├── bench.js                  # Runtime specific benchmark runnner
    │   ├── tests.js                  # Runtime specific implementation tests
    │   └── importer.js               # Runtime specific helper to automatically import all implementations
    │
    ├── deno.jsonc                  # Deno task configuration
    ├── package.json                # Node task configuration
    └── ...

