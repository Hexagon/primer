
import { join } from 'https://deno.land/std@0.160.0/path/mod.ts';

const AllImplementations = [];

const 
    folder = "implementations",
    dir = Deno.readDirSync(folder);

for (const impl of [...dir]) {

    // Only directories
	if (!impl.isDirectory) continue;

    // Ignore hidden files
    if(impl.name[0] === ".") continue;

    // Dynamic import of implementation
    const path = join(impl.name, "index.js").replace("\\","/");
    const implImport = await import(`./${path}`);

    AllImplementations.push(implImport);
}

// Exportera alla implementationer
export { AllImplementations };