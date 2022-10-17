import { assertEquals } from "https://deno.land/std@0.160.0/testing/asserts.ts";

import { AllImplementations } from "./implementations/importer.js";
console.log("");
console.log("Activated implementations:")

for(const impl of AllImplementations) {
    console.log(`   ${(impl.name + ":").padEnd(20,' ')}${impl.description}`);
}

console.log("");
console.log("Starting tests");

for(const impl of AllImplementations) {
    Deno.test("Testing implementation: " + impl.name, async (t) => {
        await t.step("basics (0,1,2,3,4,5,6,7,8,10)", () => {
            assertEquals(impl.checkPrime(0n), 0);
            assertEquals(impl.checkPrime(1n), 0);
            assertEquals(impl.checkPrime(2n), 1);
            assertEquals(impl.checkPrime(3n), 1);
            assertEquals(impl.checkPrime(4n), 0);
            assertEquals(impl.checkPrime(5n), 1);
            assertEquals(impl.checkPrime(6n), 0);
            assertEquals(impl.checkPrime(7n), 1);
            assertEquals(impl.checkPrime(8n), 0);
            assertEquals(impl.checkPrime(9n), 0);
            assertEquals(impl.checkPrime(10n), 0);
            assertEquals(impl.checkPrime(11n), 1);
        });
        await t.step("(INT_MAX-1) 2147483646n is not a prime", () => {
            assertEquals(impl.checkPrime(2147483646n), 0);
        });
        await t.step("(INT_MAX-1 previous) 2147483659n is a prime", () => {
            assertEquals(impl.checkPrime(2147483629n), 1);
        });
        await t.step("(INT_MAX+1) 2147483648n is not a prime", () => {
            assertEquals(impl.checkPrime(2147483648n), 0);
        });
        await t.step("(INT_MAX+1 next) 2147483659n is a prime", () => {
            assertEquals(impl.checkPrime(2147483659n), 1);
        });
        await t.step("(ULONG_MAX-1) 4294967294n is not a prime", () => {
            assertEquals(impl.checkPrime(4294967296n), 0);
        });
        await t.step("(ULONG_MAX-1 previous) 4294967291n is a prime", () => {
            assertEquals(impl.checkPrime(4294967291n), 1);
        });
        await t.step("(ULONG_MAX+1) 4294967296n is not a prime", () => {
            assertEquals(impl.checkPrime(4294967296n), 0);
        });
        await t.step("(ULONG_MAX+1 next) 4294967311n is a prime", () => {
            assertEquals(impl.checkPrime(4294967311n), 1);
        });
        if(impl.type==="wasm") {
            // These are too slow for the pure js implementations
            await t.step("WASM extra (ULLONG_MAX) 18446744073709551615n is not a prime", () => {
                assertEquals(impl.checkPrime(18446744073709551615n), 0);
            });
            await t.step("WASM extra (ULLONG_MAX+1) 18446744073709551616n is not a prime", () => {
                assertEquals(impl.checkPrime(18446744073709551615n), 0);
            });
            await t.step("WASM extra (ULLONG_MAX+1 next) 18446744073709551629n is a prime", () => {
                assertEquals(impl.checkPrime(18446744073709551629n), 1);
            });   
            await t.step("WASM extra, very high number 2934582304520459245820582034598203582034958 is not a prime", () => {
                assertEquals(impl.checkPrime(2934582304520459245820582034598203582034958n), 0);
            });   
            /*await t.step("WASM extra, very high number 2934582304520459245820582034598203582035023 is a prime", () => {
                assertEquals(impl.checkPrime(2934582304520459245820582034598203582035023n), 1);
            });*/
        }
    });
}