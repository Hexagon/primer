import Benchmark from "benchmark";

import { AllImplementations } from "./importer.js";

if (!process.env.BENCH_QUIET) {
    console.log("Runtime information:");
    console.log("\tRuntime:\tBun (" + process.versions.bun + ")");
    console.log("\tEngine: \tJavaScriptCore (unknown)");

    console.log("\nAvailable implementations:")
    for(const impl of AllImplementations) {
        console.log(`\t${(impl.name + ":").padEnd(15,' ')}${impl.description}`);
    }

    console.log("\nStarting benchmark");
}
const suite = new Benchmark.Suite;
for(const impl of AllImplementations) {
    suite.add(`${impl.name.padEnd(16," ")}: Find all primes 3000000000-3000001000`, () => {
        for(let i = 3000000000n; i <= 3000001000n; i++) {
            impl.checkPrime(i);
        }
    });
}

suite
    .on('cycle', function(event, a) {
        console.log('\t' + String(event.target) + " avg " + (event.target.stats.mean*1000).toFixed(2) + " ms/iter");
    })
    .on('complete', function() {
        console.log('\tFastest is ' + this.filter('fastest').map('name'));
    })
    .run();