const AllImplementations = [];

// Ladda in och namnge alla implementationer
import * as SimpleJS from "./implementations/simplejs/index.js"; AllImplementations.push(SimpleJS);
import * as SimpleWASM from "./implementations/simplewasm/index.js"; AllImplementations.push(SimpleWASM);

// Exportera alla implementationer
export { AllImplementations };