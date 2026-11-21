import 'server-only';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { list } from '@vercel/blob';
export const uploadDirectory=() => path.join(process.cwd(),'public','uploads');
export type MediaItem = { url:string; name:string; size:number };
export async function mediaItems():Promise<MediaItem[]> {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    let cursor:string|undefined; const items:MediaItem[]=[];
    do { const page=await list({prefix:'portfolio/',cursor,limit:1000}); items.push(...page.blobs.map(b=>({url:b.url,name:b.pathname.split('/').pop()||b.pathname,size:b.size}))); cursor=page.hasMore?page.cursor:undefined; } while(cursor);
    return items;
  }
  if (process.env.VERCEL) throw new Error('Connect Vercel Blob first.');
  try { const names=await fs.readdir(uploadDirectory());return Promise.all(names.filter(n=>/^[a-z0-9.-]+$/i.test(n)).map(async name=>({name,url:'/uploads/'+name,size:(await fs.stat(path.join(uploadDirectory(),name))).size}))); }
  catch(e){if((e as NodeJS.ErrnoException).code==='ENOENT')return [];throw e;}
}
export function fileType(bytes:Buffer) {
  if(bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])))return {ext:'png',mime:'image/png'};
  if(bytes[0]===255&&bytes[1]===216&&bytes[2]===255)return {ext:'jpg',mime:'image/jpeg'};
  if(bytes.subarray(0,4).toString()==='RIFF'&&bytes.subarray(8,12).toString()==='WEBP')return {ext:'webp',mime:'image/webp'};
  if(bytes.subarray(0,5).toString()==='%PDF-')return {ext:'pdf',mime:'application/pdf'};
  return null;
}
