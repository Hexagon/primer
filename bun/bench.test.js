import { expect, test } from "bun:test";

import { AllImplementations } from "./importer.js";
console.log("");
console.log("Activated implementations:")

for(const impl of AllImplementations) {
    console.log(`   ${(impl.name + ":").padEnd(20,' ')}${impl.description}`);
}

console.log("");
console.log("Starting tests");

for(const impl of AllImplementations) {
    test(impl.name + " basics (0,1,2,3,4,5,6,7,8,10)", () => {
        expect(impl.checkPrime(0n)).toBe(0);
        expect(impl.checkPrime(1n)).toBe(0);
        expect(impl.checkPrime(2n)).toBe(1);
        expect(impl.checkPrime(3n)).toBe(1);
        expect(impl.checkPrime(4n)).toBe(0);
        expect(impl.checkPrime(5n)).toBe(1);
        expect(impl.checkPrime(6n)).toBe(0);
        expect(impl.checkPrime(7n)).toBe(1);
        expect(impl.checkPrime(8n)).toBe(0);
        expect(impl.checkPrime(9n)).toBe(0);
        expect(impl.checkPrime(10n)).toBe(0);
        expect(impl.checkPrime(11n)).toBe(1);
    });
    test(impl.name + " (INT_MAX-1) 2147483646n is not a prime", () => {
        expect(impl.checkPrime(2147483646n)).toBe(0);
    });
    test(impl.name + " (INT_MAX-1 previous) 2147483659n is a prime", () => {
        expect(impl.checkPrime(2147483629n)).toBe(1);
    });
    test(impl.name + " (INT_MAX+1) 2147483648n is not a prime", () => {
        expect(impl.checkPrime(2147483648n)).toBe(0);
    });
    test(impl.name + " (INT_MAX+1 next) 2147483659n is a prime", () => {
        expect(impl.checkPrime(2147483659n)).toBe(1);
    });
    test(impl.name + " (ULONG_MAX-1) 4294967294n is not a prime", () => {
        expect(impl.checkPrime(4294967296n)).toBe(0);
    });
    test(impl.name + " (ULONG_MAX-1 previous) 4294967291n is a prime", () => {
        expect(impl.checkPrime(4294967291n)).toBe(1);
    });
    test(impl.name + " (ULONG_MAX+1) 4294967296n is not a prime", () => {
        expect(impl.checkPrime(4294967296n)).toBe(0);
    });
    test(impl.name + " (ULONG_MAX+1 next) 4294967311n is a prime", () => {
        expect(impl.checkPrime(4294967311n)).toBe(1);
    });
    if(impl.type==="wasm") {
        // These are too slow for the pure js implementations
        test(impl.name + " WASM extra (ULLONG_MAX) 18446744073709551615n is not a prime", () => {
            expect(impl.checkPrime(18446744073709551615n)).toBe(0);
        });
        test(impl.name + " WASM extra (ULLONG_MAX+1) 18446744073709551616n is not a prime", () => {
            expect(impl.checkPrime(18446744073709551615n)).toBe(0);
        });
        test(impl.name + " WASM extra (ULLONG_MAX+1 next) 18446744073709551629n is a prime", () => {
            expect(impl.checkPrime(18446744073709551629n)).toBe(1);
        });   
        test(impl.name + " WASM extra, very high number 2934582304520459245820582034598203582034958 is not a prime", () => {
            expect(impl.checkPrime(2934582304520459245820582034598203582034958n)).toBe(0);
        });   
        /*test("WASM extra, very high number 2934582304520459245820582034598203582035023 is a prime", () => {
            expect(impl.checkPrime(2934582304520459245820582034598203582035023n)).toBe(1);
        });*/
    }
}