import { AllImplementations } from "./importer.js";

console.log("\nRuntime information:");
console.log("\tRuntime:\tDeno (" + Deno.version.deno + ")");
console.log("\tEngine: \tV8 (" + Deno.version.v8 + ")");

console.log("\nAvailable implementations:")
for(const impl of AllImplementations) {
    console.log(`\t${(impl.name + ":").padEnd(16,' ')}${impl.description}`);
}

console.log("\nStarting Deno benchmark");
for(const impl of AllImplementations) {
    Deno.bench(`\t${impl.name.padEnd(16," ")} Find all primes 3000000000-3000001000`, () => {
        for(let i = 3000000000n; i <= 3000001000n; i++) {
            impl.checkPrime(i);
        }
    });
}