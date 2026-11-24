#!/usr/bin/env node
import { cp, mkdir, readFile, readdir, rename, rm, lstat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { createInterface } from 'node:readline/promises';
const source = fileURLToPath(new URL('../skills/premium-ui-ux/', import.meta.url));
const version = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8')).version;
const agents = ['codex', 'claude-code', 'cursor'];
const marker = '.ui-craft-install.json';
const help = 'Usage: ui-craft [install|update|uninstall] --agent codex|claude-code|cursor|all [--global]\nWithout flags, choose agent and scope interactively. Existing unmanaged or modified skills are never overwritten.';
const exists = async p => { try { await lstat(p); return true; } catch(e) { if(e.code === 'ENOENT') return false; throw e; } };
function target(agent, global) {
  const base = global ? homedir() : process.cwd();
  const dir = agent === 'claude-code' ? '.claude' : agent === 'cursor' && global ? '.cursor' : '.agents';
  return join(base, dir, 'skills', 'premium-ui-ux');
}
import { createHash, randomUUID } from 'node:crypto';
import { writeFile } from 'node:fs/promises';
async function digest(dir) {
  const hash = createHash('sha256');
  async function walk(path, prefix='') {
    for (const ent of (await readdir(path,{withFileTypes:true})).sort((a,b)=>a.name.localeCompare(b.name))) {
      if (!prefix && ent.name === marker) continue;
      const rel = prefix + ent.name;
      if (ent.isDirectory()) await walk(join(path,ent.name),rel+'/');
      else if(ent.isFile()) hash.update(JSON.stringify([rel,(await readFile(join(path,ent.name))).toString('base64')]));
      else throw new Error('Unexpected non-file entry: '+rel);
    }
  }
  await walk(dir); return hash.digest('hex');
}
async function managed(path) {
  if (!(await exists(path))) return false;
  if (!(await lstat(path)).isDirectory()) throw new Error('Not a managed directory: '+path);
  let meta;
  try { meta=JSON.parse(await readFile(join(path,marker),'utf8')); } catch { throw new Error('Refusing to modify unmanaged skill: '+path); }
  if(meta.package !== '@ayshrj/ui-craft' || meta.digest !== await digest(path)) throw new Error('Refusing to modify changed skill: '+path);
  return true;
}
async function main() {
  const args=process.argv.slice(2);
  if(args.includes('--help') || args.includes('-h')) return console.log(help);
  if(args.includes('--version') || args.includes('-v')) return console.log(version);
  let action='install', agent, global=false;
  if(['install','update','uninstall'].includes(args[0])) action=args.shift();
  for(let i=0;i<args.length;i++){
    if(args[i]==='--agent' || args[i]==='-a') agent=args[++i];
    else if(args[i]==='--global' || args[i]==='-g') global=true;
    else throw new Error('Unknown argument: '+args[i]);
  }
  if(!agent) {
    if(!process.stdin.isTTY) throw new Error('Specify --agent in non-interactive mode.');
    const rl=createInterface({input:process.stdin,output:process.stdout});
    try {
      agent=(await rl.question('Agent (codex / claude-code / cursor / all): ')).trim();
      if(!global) global=(await rl.question('Install globally? [y/N]: ')).trim().toLowerCase()==='y';
    } finally {rl.close();}
  }
  if(!agents.includes(agent) && agent!=='all') throw new Error('Unknown agent: '+agent);
  const paths=[...new Set((agent==='all'?agents:[agent]).map(a=>target(a,global)))];
  for(const path of paths) await managed(path);
  for(const path of paths){
    const present=await managed(path);
    if(action==='uninstall'){ if(present) await rm(path,{recursive:true}); console.log(present?'Removed '+path:'Not installed: '+path); continue; }
    if(action==='update' && !present) throw new Error('Not installed: '+path);
    await mkdir(dirname(path),{recursive:true});
    const temp=path+'.tmp-'+randomUUID(), backup=path+'.bak-'+randomUUID();
    try {
      await cp(source,temp,{recursive:true,errorOnExist:true,force:false});
      await writeFile(join(temp,marker),JSON.stringify({package:'@ayshrj/ui-craft',version,digest:await digest(temp)},null,2)+'\n');
      if(present) await rename(path,backup);
      try { await rename(temp,path); } catch(e) { if(present) await rename(backup,path); throw e; }
      if(present) await rm(backup,{recursive:true});
      console.log('Installed '+version+' at '+path);
    } finally { await rm(temp,{recursive:true,force:true}); }
  }
}
main().catch(e=>{console.error(e.message);process.exitCode=1;});
