import { readdirSync, lstatSync } from 'fs';
import { join } from 'path';

const AllImplementations = [];

const 
    folder = "implementations",
    dir = readdirSync(folder);

for (const impl of [...dir]) {

    const stat = lstatSync(join(folder,impl));
    
    // Only directories
	if (!stat.isDirectory()) continue;

    // Ignore hidden files
    if(impl[0] === ".") continue;

    // Dynamic import of implementation
    const path = join("..", folder, impl, "index.js").replace("\\","/");
    const implImport = await import(`./${path}`);

    AllImplementations.push(implImport);
}

// Exportera alla implementationer
export { AllImplementations };