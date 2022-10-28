// Function to read a file that work in all runtimes. 
// Created to be able to use implementations in both Node and Deno

async function readFile(fileName) {
    // Deno
    if (typeof Deno !== "undefined") {
        const conversion = await import("https://deno.land/std@0.160.0/streams/conversion.ts");
        const { readAll } = conversion;
        const f = await Deno.open(fileName)
        const buf = await readAll(f);
        return buf;
    // Node
    } else {
        const fs = await import('fs/promises');
        const data = await fs.readFile(fileName);
        return data;
    }
}

export { readFile };