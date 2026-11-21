// Disposable local verification. Does not read or use the owner's credentials.
import {spawn} from 'node:child_process';
import {randomBytes} from 'node:crypto';
import {mkdir,rm,readFile} from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const origin='http://localhost:3107';
const directory=path.join(process.cwd(),'.portfolio','verification');
await mkdir(directory,{recursive:true});
const username='verification-owner',password='Portfolio-Verification-Only-2026!';
const server=spawn(process.execPath,['node_modules/next/dist/bin/next','start','-H','127.0.0.1','-p','3107'],{stdio:['ignore','pipe','pipe'],env:{...process.env,ADMIN_USERNAME:username,ADMIN_PASSWORD:password,ADMIN_SESSION_SECRET:randomBytes(48).toString('base64url'),APP_ORIGIN:origin,DATABASE_URL:'',BLOB_READ_WRITE_TOKEN:'',PORTFOLIO_LOCAL_DATA_DIR:directory}});
let logs='';server.stdout.on('data',b=>{logs+=b;});server.stderr.on('data',b=>{logs+=b;});
let cookie='';
async function request(url,method='GET',body,authenticated=true,source=origin){const headers={Origin:source};if(authenticated&&cookie)headers.Cookie=cookie;if(body&&!(body instanceof FormData))headers['Content-Type']='application/json';return fetch(origin+url,{method,headers,body:body instanceof FormData?body:body?JSON.stringify(body):undefined,redirect:'manual'});}
async function waitReady(){for(let i=0;i<60;i++){try{if((await fetch(origin)).ok)return;}catch{}await new Promise(r=>setTimeout(r,500));}throw new Error('Server did not become ready. '+logs.slice(-1500));}
try{
 await waitReady();
 assert.equal((await request('/api/admin/content')).status,401);
 assert.equal((await request('/admin')).status,307);
 assert.equal((await request('/api/admin/login','POST',{username,password},false,'https://invalid.example')).status,403);
 assert.equal((await request('/api/admin/login','POST',{username,password:'incorrect'},false)).status,401);
 const login=await request('/api/admin/login','POST',{username,password},false);assert.equal(login.status,200);cookie=login.headers.get('set-cookie').split(';')[0];assert.match(login.headers.get('set-cookie'),/HttpOnly/i);assert.match(login.headers.get('set-cookie'),/SameSite=Strict/i);
 const initial=await (await request('/api/admin/content')).json();assert.ok(initial.content.profile.name);
 const changed=structuredClone(initial.content);changed.heroBio='Verification-only updated biography';
 assert.equal((await request('/api/admin/content','PUT',{revision:initial.revision,content:changed})).status,200);
 assert.match(await (await fetch(origin)).text(),/Verification-only updated biography/);
 assert.equal((await request('/api/admin/content','PUT',{revision:initial.revision,content:initial.content})).status,409);
 const current=await (await request('/api/admin/content')).json();
 const invalid=structuredClone(current.content);invalid.profile.github='javascript:alert(1)';assert.equal((await request('/api/admin/content','PUT',{revision:current.revision,content:invalid})).status,400);
 const form=new FormData();form.set('file',new File([await readFile('public/cvimage.jpg')],'test.jpg',{type:'image/jpeg'}));const upload=await request('/api/admin/media','POST',form);assert.equal(upload.status,200);const image=await upload.json();assert.match(image.url,/^\/uploads\//);
 const using=structuredClone(current.content);using.profile.image=image.url;
 assert.equal((await request('/api/admin/content','PUT',{revision:current.revision,content:using})).status,200);
 assert.equal((await request('/api/admin/media','DELETE',{url:image.url})).status,409);
 const latest=await (await request('/api/admin/content')).json();assert.equal((await request('/api/admin/content','PUT',{revision:latest.revision,content:initial.content})).status,200);
 assert.equal((await request('/api/admin/media','DELETE',{url:image.url})).status,200);
 const badFile=new FormData();badFile.set('file',new File(['<svg onload="alert(1)"></svg>'],'unsafe.svg',{type:'image/svg+xml'}));assert.equal((await request('/api/admin/media','POST',badFile)).status,400);
 const empty=structuredClone(initial.content);for(const k of Object.keys(empty))if(Array.isArray(empty[k]))empty[k]=[];
 const snapshot=await (await request('/api/admin/content')).json();assert.equal((await request('/api/admin/content','PUT',{revision:snapshot.revision,content:empty})).status,200);
 for(const route of ['/','/research','/projects','/achievements','/education','/teaching','/skills','/publications'])assert.equal((await fetch(origin+route)).status,200,route);
 const beforeRestore=await (await request('/api/admin/content')).json();assert.equal((await request('/api/admin/content','PUT',{revision:beforeRestore.revision,content:initial.content})).status,200);
 assert.equal((await request('/api/admin/logout','POST',{})).status,200);
 console.log('PASS: auth, origin checks, session cookie, persisted edit, stale revision, URL validation, upload, in-use deletion guard, deletion, SVG rejection, empty collections and original-content restore.');
 if(process.argv.includes('--keep-open')){console.log('Disposable admin verification server: '+origin+'/admin');process.stdin.resume();await new Promise(resolve=>{process.once('SIGINT',resolve);process.once('SIGTERM',resolve);process.stdin.once('data',resolve);});process.stdin.pause();}
}finally{server.kill();await rm(directory,{recursive:true,force:true});}
