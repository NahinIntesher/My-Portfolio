import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import ts from 'typescript';
const native=createRequire(import.meta.url),cache=new Map();
export function load(file){
  const absolute=path.resolve(file);
  if(cache.has(absolute))return cache.get(absolute).exports;
  const module={exports:{}};cache.set(absolute,module);
  const code=ts.transpileModule(fs.readFileSync(absolute,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;
  const require=(id)=>{if(id==='server-only')return {};if(id.startsWith('.')||id.startsWith('@/')){const base=id.startsWith('@/')?path.resolve(id.slice(2)):path.resolve(path.dirname(absolute),id);return load(base+(path.extname(base)?'':'.ts'));}return native(id);};
  new Function('require','module','exports',code)(require,module,module.exports);return module.exports;
}
