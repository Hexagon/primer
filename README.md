## primer

Deno example/benchmark showing prime number calculation on pure javascript vs. wasm

### För att provköra

#### Installera Deno

https://deno.land/#installation

#### Kör!

```deno task benchmark```

### För att bygga en wasm-modul

För att c -> webassembly krävs emscriptem SDK

#### Installera emscriptem sdk (kräver python på burken, 3.9 från windows store funkade fint, säkert andra versioner också)

https://emscripten.org/docs/getting_started/downloads.html

#### Bygg index.c -> index.wasm

```deno task build-simplewasm```

Eller manuellt ...

```emcc -O3 -s WASM_BIGINT --no-entry implementations/simplewasm/src/index.c -o implementations/simplewasm/index.wasm```