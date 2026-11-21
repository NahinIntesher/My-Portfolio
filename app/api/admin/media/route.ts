import { NextRequest,NextResponse } from 'next/server';
import { put,del } from '@vercel/blob';
import { randomUUID } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { checkOrigin,isAdmin } from '@/lib/admin-auth';
import { fileType,mediaItems,uploadDirectory } from '@/lib/media';
import { readSnapshot,storageReady } from '@/lib/content-store';
export const runtime='nodejs';
export const dynamic='force-dynamic';
export async function GET(){
  if(!await isAdmin())return NextResponse.json({error:'Sign in to continue.'},{status:401});
  try{return NextResponse.json({items:await mediaItems()},{headers:{'Cache-Control':'no-store'}});}catch{return NextResponse.json({error:'Media storage is unavailable.'},{status:503});}
}
export async function POST(req:NextRequest){
  if(!checkOrigin(req))return NextResponse.json({error:'Invalid request origin.'},{status:403});
  if(!await isAdmin())return NextResponse.json({error:'Sign in to continue.'},{status:401});
  if(!storageReady()||(process.env.VERCEL&&!process.env.BLOB_READ_WRITE_TOKEN))return NextResponse.json({error:'Connect the database and public Blob store first.'},{status:503});
  if(Number(req.headers.get('content-length')||0)>4400000)return NextResponse.json({error:'Maximum file size is 4 MB.'},{status:413});
  try{
    const form=await req.formData();const file=form.get('file');
    if(!(file instanceof File)||!file.size||file.size>4*1024*1024)return NextResponse.json({error:'Choose a PNG, JPG, WebP or PDF up to 4 MB.'},{status:400});
    const bytes=Buffer.from(await file.arrayBuffer()),type=fileType(bytes);
    if(!type)return NextResponse.json({error:'Unsupported file content. Use PNG, JPG, WebP or PDF.'},{status:400});
    const name=`${randomUUID()}.${type.ext}`;let url:string;
    if(process.env.BLOB_READ_WRITE_TOKEN){const blob=await put('portfolio/'+name,bytes,{access:'public',contentType:type.mime,addRandomSuffix:false});url=blob.url;}
    else{await fs.mkdir(uploadDirectory(),{recursive:true});await fs.writeFile(path.join(uploadDirectory(),name),bytes,{flag:'wx'});url='/uploads/'+name;}
    return NextResponse.json({url,name,size:file.size});
  }catch{return NextResponse.json({error:'Upload failed. Try again.'},{status:503});}
}
export async function DELETE(req:NextRequest){
  if(!checkOrigin(req))return NextResponse.json({error:'Invalid request origin.'},{status:403});
  if(!await isAdmin())return NextResponse.json({error:'Sign in to continue.'},{status:401});
  try{
    const {url}=await req.json();if(typeof url!=='string'||url.length>2000)return NextResponse.json({error:'Invalid file.'},{status:400});
    if(JSON.stringify((await readSnapshot()).content).includes(url))return NextResponse.json({error:'This file is in use. Remove its references and save before deleting it.'},{status:409});
    const item=(await mediaItems()).find(m=>m.url===url);if(!item)return NextResponse.json({error:'File not found in this portfolio library.'},{status:404});
    if(process.env.BLOB_READ_WRITE_TOKEN)await del(item.url);
    else await fs.unlink(path.join(uploadDirectory(),item.name));
    return NextResponse.json({ok:true});
  }catch{return NextResponse.json({error:'Could not delete file.'},{status:503});}
}
