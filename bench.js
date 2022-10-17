import { AllImplementations } from "./implementations/importer.js";

console.log("");
console.log("Activated implementations:")

for(const impl of AllImplementations) {
    console.log(`   ${(impl.name + ":").padEnd(20,' ')}${impl.description}`);
}

console.log("");
console.log("Starting benchmark");

for(const impl of AllImplementations) {
    Deno.bench("Find all prime numbers between 0 and 100000, " + impl.name, { group: "0to1000000" }, () => {
        for(let i = 0n; i <= 100000n; i++) {
            impl.checkPrime(i);
        }
    });

    Deno.bench("Find all prime numbers between 1000000000 and 1000010000, " + impl.name, { group: "1000000000to1000010000" }, () => {
        for(let i = 1000000000n; i <= 1000010000n; i++) {
            impl.checkPrime(i);
        }
    });
}