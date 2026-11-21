import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {load} from './modules.mjs';
const {defaultContent}=load('lib/content-defaults.ts');
const {contentSchema}=load('lib/content-validation.ts');
const clone=()=>structuredClone(defaultContent);

test('project identities remain attached to their own repositories after list edits',()=>{
  const expected={diganta:'diganta','cv-banao-app':'cv-banao','my-portfolio':'nahin-portfolio',todo_app:'start-to-do',abohawa:'abohawa',normalcalculator:'simple-calculator',converter:'unit-converter'};
  for(const [repository,slug] of Object.entries(expected)){
    const project=defaultContent.projectDetails.find(p=>p.githubLink.toLowerCase().endsWith('/'+repository));
    assert.ok(project,repository);
    assert.equal(project.slug,slug);
    assert.equal(project.cover,`/covers/${slug}.webp`);
    assert.equal(project.pipelineImage,`/pipelines/${slug}.svg`);
  }
});
test('bundled content satisfies the editable schema, including optional award links',()=>assert.equal(contentSchema.safeParse(defaultContent).success,true));
test('rejects executable and protocol-relative URLs in nested content',()=>{for(const bad of ['javascript:alert(1)','//evil.example/a','data:text/html,test','/\\evil.example']){const c=clone();c.projectDetails[0].gallery=[{image:bad,caption:'x'}];assert.equal(contentSchema.safeParse(c).success,false);}});
test('rejects duplicate and invalid detail slugs',()=>{const c=clone();c.projectDetails[1].slug=c.projectDetails[0].slug;assert.equal(contentSchema.safeParse(c).success,false);c.projectDetails[1].slug='../test';assert.equal(contentSchema.safeParse(c).success,false);});
test('owner can delete every list entry and add a valid project',()=>{const c=clone();for(const k of Object.keys(c))if(Array.isArray(c[k]))c[k]=[];assert.equal(contentSchema.safeParse(c).success,true);c.projectDetails=[{...defaultContent.projectDetails[0],slug:'new-project'}];assert.equal(contentSchema.safeParse(c).success,true);});
test('workflow assets exist for every research and project',async()=>{for(const x of [...defaultContent.projectDetails,...defaultContent.researchDetails]){const b=await fs.readFile(path.join('public',x.pipelineImage));assert.match(b.toString(),/role="img"/);assert.match(b.toString(),/<desc/);}});
test('atomic local saves reject a stale revision without overwriting published data',async()=>{const dir=await fs.mkdtemp(path.join(os.tmpdir(),'portfolio-store-test-'));process.env.PORTFOLIO_LOCAL_DATA_DIR=dir;const {readSnapshot,saveSnapshot}=load('lib/content-store.ts');try{const initial=await readSnapshot();assert.equal(initial.revision,0);const c=clone();c.heroBio='Test content';assert.equal(await saveSnapshot(c,0),1);await assert.rejects(()=>saveSnapshot(clone(),0),/CONFLICT/);assert.equal((await readSnapshot()).content.heroBio,'Test content');const results=await Promise.allSettled([saveSnapshot(c,1),saveSnapshot(c,1)]);assert.equal(results.filter(r=>r.status==='fulfilled').length,1);}finally{delete process.env.PORTFOLIO_LOCAL_DATA_DIR;await fs.rm(dir,{recursive:true,force:true});}});
