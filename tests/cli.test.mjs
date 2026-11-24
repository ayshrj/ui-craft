import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile, mkdir, rm, access } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
const cli=fileURLToPath(new URL('../bin/cli.mjs',import.meta.url));
test('install, update, refuse modified files, uninstall',async()=>{
  const cwd=await mkdtemp(join(tmpdir(),'ui-craft-'));
  const run=(...args)=>spawnSync(process.execPath,[cli,...args],{cwd,encoding:'utf8'});
  const path=join(cwd,'.agents','skills','premium-ui-ux');
  try {
    assert.equal(run('install','--agent','all').status,0);
    const original=await readFile(join(path,'SKILL.md'),'utf8');
    assert.match(original,/name: premium-ui-ux/);
    await access(join(path,'references','premium-ui-ux-craft-playbook.md'));
    await access(join(cwd,'.claude','skills','premium-ui-ux','SKILL.md'));
    assert.equal(run('update','--agent','all').status,0);
    await writeFile(join(path,'SKILL.md'),original+'\nLocal edit');
    assert.notEqual(run('uninstall','--agent','codex').status,0);
    assert.match(await readFile(join(path,'SKILL.md'),'utf8'),/Local edit/);
    await writeFile(join(path,'SKILL.md'),original);
    assert.equal(run('uninstall','--agent','all').status,0);
    await assert.rejects(access(path));
    await mkdir(path,{recursive:true});
    assert.notEqual(run('install','--agent','codex').status,0);
    assert.notEqual(run('install','--agent','unknown').status,0);
  } finally { await rm(cwd,{recursive:true,force:true}); }
});
