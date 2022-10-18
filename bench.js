import { AllImplementations } from "./implementations/importer.js";

console.log("");
console.log("Activated implementations:")

for(const impl of AllImplementations) {
    console.log(`   ${(impl.name + ":").padEnd(20,' ')}${impl.description}`);
}

console.log("");
console.log("Starting benchmark");

for(const impl of AllImplementations) {
    Deno.bench(`${impl.name.padEnd(15," ")}: Find all primes 0-100000`, { group: "0to1000000" }, () => {
        for(let i = 0n; i <= 100000n; i++) {
            impl.checkPrime(i);
        }
    });

    Deno.bench(`${impl.name.padEnd(15," ")}: Find all primes 1000000000-1000001000`, { group: "1000000000to1000001000" }, () => {
        for(let i = 1000000000n; i <= 1000001000n; i++) {
            impl.checkPrime(i);
        }
    });

    if (impl.type === "wasm") {
        Deno.bench(`${impl.name.padEnd(15," ")}: Find all primes 1000000000-1000050000 (wasm only)`, { group: "1000000000to1000050000" }, () => {
            for(let i = 1000000000n; i <= 1000050000n; i++) {
                impl.checkPrime(i);
            }
        });
    }
}