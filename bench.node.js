import Benchmark from "benchmark";

import { AllImplementations } from "./implementations/importer.node.js";

console.log("");
console.log("Activated implementations:")

for(const impl of AllImplementations) {
    console.log(`   ${(impl.name + ":").padEnd(20,' ')}${impl.description}`);
}

console.log("");
console.log("Starting benchmark");

const g1 = new Benchmark.Suite;
const g2 = new Benchmark.Suite;
const g3 = new Benchmark.Suite;

for(const impl of AllImplementations) {
    g1.add(`${impl.name.padEnd(15," ")}: Find all primes 0-100000`, () => {
        for(let i = 0n; i <= 100000n; i++) {
            impl.checkPrime(i);
        }
    });

    g2.add(`${impl.name.padEnd(15," ")}: Find all primes 1000000000-1000001000`, () => {
        for(let i = 1000000000n; i <= 1000001000n; i++) {
            impl.checkPrime(i);
        }
    });

    if (impl.type === "wasm") {
        g3.add(`${impl.name.padEnd(15," ")}: Find all primes 1000000000-1000050000 (wasm only)`, () => {
            for(let i = 1000000000n; i <= 1000050000n; i++) {
                impl.checkPrime(i);
            }
        });
    }
}
for(const group of [g1,g2,g3]) {
    group.on('cycle', function(event) {
        console.log(String(event.target));
    })
    group.on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
}
await g1.run({ 'async': true });
//await g2.run({ 'async': true });
//await g3.run({ 'async': true });