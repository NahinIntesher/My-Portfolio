'use client';

import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import { useRouter } from 'next/navigation';

import { Save, Upload, Trash2, Plus, ChevronUp, ChevronDown, ExternalLink, LogOut, Image as ImageIcon, Download, FileText, Menu, X, LayoutDashboard, UserRound, FlaskConical, FolderKanban, GraduationCap, BookOpen, Award, Code2, Compass, Activity, ContactRound, Settings2, ArrowUpRight, ArrowRight, Search, Copy, Loader2, type LucideIcon } from 'lucide-react';

import ThemeToggle from '@/components/ThemeToggle';

import { defaultContent,type PortfolioContent } from '@/lib/content-defaults';

import { contentSchema } from '@/lib/content-validation';



type Value=string|Value[]|{[key:string]:Value};

type Media={url:string;name:string;size:number};

const titles:Record<string,string>={profile:'Profile & contact',heroBio:'Homepage bio',about:'About',researchInterests:'Research interests',research:'Research source',researchDetails:'Research',projectDetails:'Projects',publications:'Publications',education:'Education',teaching:'Teaching',teachingInterests:'Teaching interests',skills:'Skills',achievements:'Achievements',competitiveProgramming:'Programming profiles',reference:'Academic reference',now:'Current activity',routes:'Navigation'};

const groups=[

  {title:'Workspace',keys:['overview']},

  {title:'Portfolio',keys:['profile','heroBio','about','projectDetails']},

  {title:'Academic',keys:['researchDetails','researchInterests','publications','education','teaching','teachingInterests']},

  {title:'Experience',keys:['skills','achievements','competitiveProgramming','reference','now']},

  {title:'Manage',keys:['routes','media','advanced']},

];

const sectionIcons:Record<string,LucideIcon>={overview:LayoutDashboard,profile:UserRound,heroBio:FileText,about:ContactRound,projectDetails:FolderKanban,researchDetails:FlaskConical,researchInterests:Compass,publications:BookOpen,education:GraduationCap,teaching:GraduationCap,teachingInterests:BookOpen,skills:Code2,achievements:Award,competitiveProgramming:Code2,reference:ContactRound,now:Activity,routes:Compass,media:ImageIcon,advanced:Settings2};

const sectionTitle=(key:string)=>key==='overview'?'Overview':key==='media'?'Media library':key==='advanced'?'Backup & import':titles[key]||label(key);

const descriptions:Record<string,string>={overview:'Your portfolio at a glance.',profile:'Manage your personal details and contact links.',heroBio:'Edit the introduction on your homepage.',projectDetails:'Manage project details, covers and links.',researchDetails:'Manage your research and working pipelines.',media:'Upload and manage images and documents.',advanced:'Export a backup or import content into your draft.'};

const fieldLabels:Record<string,string>={cv:'CV page',cvFile:'CV document',github:'GitHub',linkedin:'LinkedIn',githubLink:'GitHub repository',phoneHref:'Phone link',pipelineImage:'Working pipeline image',pipelineCaption:'Pipeline caption',heroBio:'Introduction',researchDetails:'Research',projectDetails:'Projects',competitiveProgramming:'Programming profiles',demo:'Live demo',technologies:'Technologies'};
const label=(s:string)=>fieldLabels[s]||s.replace(/([a-z])([A-Z])/g,'$1 $2').replace(/^./,c=>c.toUpperCase());

function blank(value:Value):Value{return typeof value==='string'?'':Array.isArray(value)?[]:Object.fromEntries(Object.entries(value).map(([k,v])=>[k,blank(v)]));}

const mediaField=(name:string)=>/^(image|cover|pipelineImage|cvFile)$/.test(name);



function Field({name,value,template,onChange,notify,library,path}:{name:string;value:Value;template?:Value;onChange:(v:Value)=>void;notify:(s:string)=>void;library:Media[];path:string}){

  const [uploading,setUploading]=useState(false);

  const inputId='field-'+path.replace(/[^a-z0-9-]/gi,'-');

  async function upload(file:File){setUploading(true);try{const f=new FormData();f.set('file',file);const r=await fetch('/api/admin/media',{method:'POST',body:f});const b=await r.json();if(!r.ok)throw new Error(b.error);onChange(b.url);notify('Uploaded. Save changes to publish this file.');}catch(e){notify((e as Error).message);}finally{setUploading(false);}}

  if(typeof value==='string')return <div className={'admin-field'+(mediaField(name)?' admin-media-field':'')}><label htmlFor={inputId}>{label(name)}</label>{mediaField(name)&&value&&name!=='cvFile'&&<img className="admin-image-preview" src={value} alt={`${label(name)} preview`}/>} {(value.length>110||/^(desc|description|abstract|bibtex|heroBio|detail|goal|short|text)$/.test(name))?<textarea id={inputId} rows={name==='bibtex'?7:4} value={value} onChange={e=>onChange(e.target.value)}/>:<input id={inputId} value={value} onChange={e=>onChange(e.target.value)}/>} {mediaField(name)&&<div className="admin-media-actions"><label className="admin-secondary admin-upload"><Upload size={15}/>{uploading?'Uploading…':'Upload file'}<input type="file" accept={name==='cvFile'?'.pdf':'.png,.jpg,.jpeg,.webp'} disabled={uploading} onChange={e=>{if(e.target.files?.[0])void upload(e.target.files[0]);e.target.value='';}}/></label>{library.length>0&&<select aria-label={`Choose ${label(name)} from library`} value="" onChange={e=>onChange(e.target.value)}><option value="">Choose existing file</option>{library.map(m=><option key={m.url} value={m.url}>{m.name}</option>)}</select>}{value&&<button type="button" className="admin-secondary" onClick={()=>onChange('')}><X size={14}/>Clear</button>}<span>PNG, JPG, WebP or PDF · up to 4 MB</span></div>}</div>;

  if(Array.isArray(value)){

    const example=(template as Value[]|undefined)?.[0]??value[0]??(name==='gallery'?{image:'',caption:''}:'');

    return <section className="admin-array"><div className="admin-array-heading"><h3>{label(name)} <span>{value.length}</span></h3><button type="button" className="admin-secondary" onClick={()=>onChange([...value,blank(example)])}><Plus size={15}/> Add item</button></div>{!value.length&&<p className="admin-empty">No items yet.</p>}{value.map((v,i)=>{const title=typeof v==='string'?`${label(name)} ${i+1}`:Array.isArray(v)?`Item ${i+1}`:String(v.name||v.title||v.degree||v.role||v.label||v.category||v.platform||`Item ${i+1}`);return <details className="admin-entry" key={i} open={typeof v==='string'||undefined}><summary>{title||`Item ${i+1}`}</summary><div className="admin-entry-tools"><button type="button" disabled={!i} aria-label={`Move item ${i+1} up`} onClick={()=>{const a=[...value];[a[i-1],a[i]]=[a[i],a[i-1]];onChange(a);}}><ChevronUp size={17}/></button><button type="button" disabled={i===value.length-1} aria-label={`Move item ${i+1} down`} onClick={()=>{const a=[...value];[a[i+1],a[i]]=[a[i],a[i+1]];onChange(a);}}><ChevronDown size={17}/></button><button type="button" className="admin-danger" onClick={()=>{if(confirm(`Remove item ${i+1}? This is published only when you save.`))onChange(value.filter((_,n)=>n!==i));}}><Trash2 size={15}/> Remove</button></div><Field name={typeof v==='string'?'Text':'Details'} value={v} template={example} path={`${path}-${i}`} notify={notify} library={library} onChange={next=>onChange(value.map((old,n)=>n===i?next:old))}/></details>;})}</section>;

  }

  return <div className="admin-fields">{Object.entries(value).map(([k,v])=><Field key={k} name={k} value={v} template={template&&!Array.isArray(template)&&typeof template==='object'?template[k]:undefined} path={`${path}-${k}`} onChange={next=>onChange({...value,[k]:next})} notify={notify} library={library}/>)}</div>;

}



export default function AdminEditor({initial}:{initial:{revision:number;content:PortfolioContent}}){

  const router=useRouter();const [content,setContent]=useState(initial.content),[revision,setRevision]=useState(initial.revision),[section,setSection]=useState('overview'),[saved,setSaved]=useState(JSON.stringify(initial.content)),[busy,setBusy]=useState(false),[message,setMessage]=useState(''),[media,setMedia]=useState<Media[]>([]),[navOpen,setNavOpen]=useState(false),[raw,setRaw]=useState('');

  const dirty=JSON.stringify(content)!==saved;const importing=useRef<HTMLInputElement>(null);const drawer=useRef<HTMLDialogElement>(null);const libraryUpload=useRef<HTMLInputElement>(null);const [navQuery,setNavQuery]=useState(''),[mediaQuery,setMediaQuery]=useState(''),[mediaFilter,setMediaFilter]=useState('all'),[mediaBusy,setMediaBusy]=useState(false);

  useEffect(()=>{const el=drawer.current;if(!el)return;if(navOpen){el.showModal();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=old;};}if(el.open)el.close();},[navOpen]);

  useEffect(()=>{const mq=matchMedia('(min-width:1001px)');const close=()=>{if(mq.matches)setNavOpen(false);};mq.addEventListener('change',close);return()=>mq.removeEventListener('change',close);},[]);

  useEffect(()=>{const before=(e:BeforeUnloadEvent)=>{if(dirty){e.preventDefault();e.returnValue='';}};window.addEventListener('beforeunload',before);return()=>window.removeEventListener('beforeunload',before);},[dirty]);

  async function loadMedia(){try{const r=await fetch('/api/admin/media',{cache:'no-store'});const b=await r.json();if(!r.ok)throw new Error(b.error);setMedia(b.items);}catch(e){setMessage((e as Error).message);}}

  useEffect(()=>{void loadMedia();},[]);

  useEffect(()=>{window.scrollTo({top:0});},[section]);

  async function save(){setBusy(true);setMessage('');const validation=contentSchema.safeParse(content);if(!validation.success){setMessage(validation.error.issues.slice(0,4).map(i=>`${i.path.join(' / ')}: ${i.message}`).join('\n'));setBusy(false);return;}try{const r=await fetch('/api/admin/content',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({content,revision})});const b=await r.json();if(!r.ok)throw new Error(b.error);setRevision(b.revision);setSaved(JSON.stringify(content));setMessage('Changes saved and published.');router.refresh();}catch(e){setMessage((e as Error).message);}finally{setBusy(false);}}

  function exportDraft(){const blob=new Blob([JSON.stringify({revision,content},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='portfolio-content.json';a.click();URL.revokeObjectURL(a.href);}

  async function importDraft(file:File){try{if(file.size>1000000)throw new Error('Import must be under 1 MB.');const input=JSON.parse(await file.text());const valid=contentSchema.safeParse(input.content??input);if(!valid.success)throw new Error('This file does not match the portfolio content structure.');if(confirm('Replace your current draft with the imported content?')){setContent(valid.data as PortfolioContent);setMessage('Imported into your draft. Review and save to publish.');}}catch(e){setMessage((e as Error).message);}}

  async function logout(){if(dirty&&!confirm('You have unsaved changes. Sign out anyway?'))return;await fetch('/api/admin/logout',{method:'POST'});router.replace('/admin/login');router.refresh();}

  async function removeMedia(item:Media){if(!confirm(`Permanently delete ${item.name}?`))return;if(JSON.stringify(content).includes(item.url)){setMessage('This file is in the current draft. Remove its references and save first.');return;}try{const r=await fetch('/api/admin/media',{method:'DELETE',headers:{'Content-Type':'application/json'},body:JSON.stringify({url:item.url})});const b=await r.json();if(!r.ok)throw new Error(b.error);setMedia(m=>m.filter(x=>x.url!==item.url));setMessage('File deleted.');}catch(e){setMessage((e as Error).message);}}

  function navigate(key:string){if(key==='advanced')setRaw(JSON.stringify(content,null,2));setSection(key);setNavOpen(false);setMessage('');if(key==='media')void loadMedia();}

  async function uploadToLibrary(file:File){setMediaBusy(true);try{const data=new FormData();data.set('file',file);const r=await fetch('/api/admin/media',{method:'POST',body:data});const b=await r.json();if(!r.ok)throw new Error(b.error);await loadMedia();setMessage('File uploaded. Select it from an image or document field.');}catch(e){setMessage((e as Error).message);}finally{setMediaBusy(false);}}

  const filteredMedia=media.filter(item=>item.name.toLowerCase().includes(mediaQuery.toLowerCase())&&(mediaFilter==='all'||(mediaFilter==='documents'?item.url.endsWith('.pdf'):!item.url.endsWith('.pdf'))));

  const navigation=(mobile=false)=><>

    <div className="studio-admin-logo"><span className="studio-admin-mark"><BookOpen size={20}/></span><div>Nahin<small>PORTFOLIO ADMIN</small></div>{mobile&&<button className="studio-admin-close" aria-label="Close admin navigation" onClick={()=>setNavOpen(false)}><X size={20}/></button>}</div>

    <label className="studio-nav-search"><Search size={15}/><input aria-label={mobile?'Find mobile section':'Find section'} placeholder="Find a section" value={navQuery} onChange={e=>setNavQuery(e.target.value)}/></label>

    <nav aria-label={mobile?'Mobile admin sections':'Admin sections'}>{groups.map(group=>{const keys=group.keys.filter(key=>sectionTitle(key).toLowerCase().includes(navQuery.toLowerCase()));return keys.length?<div className="studio-nav-group" key={group.title}><p>{group.title}</p>{keys.map(key=>{const Icon=sectionIcons[key]||FileText;return <button key={key} aria-current={section===key?'page':undefined} onClick={()=>navigate(key)}><Icon size={17} strokeWidth={1.7}/><span>{sectionTitle(key)}</span>{key==='projectDetails'&&<small>{content.projectDetails.length}</small>}{key==='researchDetails'&&<small>{content.researchDetails.length}</small>}</button>;})}</div>:null;})}</nav>

    <div className="studio-admin-owner"><img src={content.profile.image} alt=""/><div><strong>{content.profile.name}</strong><small>Administrator</small></div><button onClick={logout} aria-label="Sign out" title="Sign out"><LogOut size={17}/></button></div>

  </>;

  const stats=[{key:'projectDetails',title:'Projects',value:content.projectDetails.length,Icon:FolderKanban},{key:'researchDetails',title:'Research',value:content.researchDetails.length,Icon:FlaskConical},{key:'publications',title:'Publications',value:content.publications.length,Icon:BookOpen},{key:'media',title:'Media files',value:media.length,Icon:ImageIcon}];

  return <div className="admin-workspace admin-studio">

    <aside className="studio-admin-sidebar">{navigation()}</aside>

    <dialog ref={drawer} id="admin-navigation-drawer" className="studio-admin-drawer" aria-label="Admin navigation" onCancel={()=>setNavOpen(false)} onClick={e=>{if(e.target===e.currentTarget)setNavOpen(false);}}><div className="studio-admin-drawer-content">{navigation(true)}</div></dialog>

    <div className="studio-admin-body">

      <header className="admin-header"><button className="admin-menu" aria-label="Open admin navigation" aria-expanded={navOpen} aria-controls="admin-navigation-drawer" onClick={()=>setNavOpen(true)}><Menu size={21}/></button><div className="studio-admin-breadcrumb"><span>Workspace</span><span>/</span><strong>{sectionTitle(section)}</strong></div><div className="admin-header-actions"><span className={'studio-save-state'+(dirty?' is-dirty':'')} role="status"><i/>{dirty?'Unpublished':'Saved'}</span><ThemeToggle/><a href="/" target="_blank" rel="noopener noreferrer" className="admin-secondary studio-view-site" aria-label="View website"><ExternalLink size={16}/><span>View website</span></a><button className="admin-primary" aria-label="Save changes" aria-busy={busy} onClick={save} disabled={busy||!dirty}>{busy?<Loader2 className="studio-spin" size={16}/>:<Save size={16}/>}<span>{busy?'Saving…':'Save changes'}</span></button></div></header>

      <section className="admin-main"><div className="admin-page-heading"><div><p className="studio-section-label">PORTFOLIO WORKSPACE</p><h1>{sectionTitle(section)}</h1><p>{descriptions[section]||'Edit your portfolio content.'}</p></div><span className="studio-revision">Revision {revision}</span></div>

      {message&&<div className={'admin-notice'+(/failed|invalid|unavailable|cannot|incorrect|does not match|conflict/i.test(message)?' is-error':'')} role={/failed|invalid|unavailable|cannot|incorrect|does not match|conflict/i.test(message)?'alert':'status'}><span>{message}</span><button aria-label="Dismiss notification" onClick={()=>setMessage('')}><X size={16}/></button></div>}

      {section==='overview'?<>

        <div className="studio-stat-grid">{stats.map(({key,title,value,Icon})=><button className="studio-stat-card" key={key} onClick={()=>navigate(key)}><span className="studio-stat-icon"><Icon size={21} strokeWidth={1.6}/></span><ArrowUpRight className="studio-stat-arrow" size={17}/><strong>{value.toString().padStart(2,'0')}</strong><span>{title}</span></button>)}</div>

        <div className="studio-overview-grid"><section className="studio-profile-card"><div className="studio-card-heading"><h2>Profile</h2><button onClick={()=>navigate('profile')}>Edit profile <ArrowUpRight size={15}/></button></div><div className="studio-profile-summary"><img src={content.profile.image} alt={content.profile.name}/><div><span className={"studio-published"+(dirty?" is-dirty":"")}><i/>{dirty?"Draft":"Published"}</span><h3>{content.profile.name}</h3><p>{content.profile.role}</p><small>{content.profile.location}</small></div></div><div className="studio-profile-bottom"><span>{content.profile.email}</span><a href="/" target="_blank" rel="noopener noreferrer">View portfolio <ArrowUpRight size={16}/></a></div></section>

        <section className="studio-quick-card"><div className="studio-card-heading"><h2>Quick actions</h2></div>{[{key:'heroBio',name:'Edit introduction',Icon:FileText},{key:'projectDetails',name:'Manage projects',Icon:FolderKanban},{key:'media',name:'Upload media',Icon:Upload},{key:'advanced',name:'Back up content',Icon:Download}].map(({key,name,Icon})=><button className="studio-quick-action" key={key} onClick={()=>navigate(key)}><span><Icon size={18}/></span>{name}<ArrowRight size={16}/></button>)}</section></div>

        <section className="studio-project-list"><div className="studio-card-heading"><h2>Projects</h2><button onClick={()=>navigate('projectDetails')}>Manage all <ArrowUpRight size={15}/></button></div>{content.projectDetails.slice(0,4).map(project=><button className="studio-project-row" key={project.slug} onClick={()=>navigate('projectDetails')}><img src={project.cover} alt=""/><div><strong>{project.name}</strong><span>{project.category}</span></div><span className="studio-project-tags">{project.technologies.slice(0,2).join(' · ')}</span><ArrowUpRight size={17}/></button>)}</section>

      </>:section==='media'?<><div className="studio-media-toolbar"><label className="studio-media-search"><Search size={17}/><input aria-label="Search media" placeholder="Search files" value={mediaQuery} onChange={e=>setMediaQuery(e.target.value)}/></label><select aria-label="Filter file type" value={mediaFilter} onChange={e=>setMediaFilter(e.target.value)}><option value="all">All files</option><option value="images">Images</option><option value="documents">Documents</option></select><button className="admin-primary" disabled={mediaBusy} onClick={()=>libraryUpload.current?.click()}>{mediaBusy?<Loader2 size={16} className="studio-spin"/>:<Upload size={16}/>} Upload files</button><input ref={libraryUpload} hidden type="file" accept=".png,.jpg,.jpeg,.webp,.pdf" onChange={e=>{if(e.target.files?.[0])void uploadToLibrary(e.target.files[0]);e.target.value='';}}/></div><div className="admin-library">{filteredMedia.map(item=><article key={item.url}><a className="studio-file-preview" href={item.url} target="_blank" rel="noopener noreferrer">{item.url.endsWith('.pdf')?<FileText size={42}/>:<img src={item.url} alt={item.name}/>}</a><p title={item.name}>{item.name}</p><small>{Math.ceil(item.size/1024)} KB · {item.url.endsWith('.pdf')?'PDF':'Image'}</small><div><button className="admin-secondary" aria-label={`Copy link for ${item.name}`} onClick={()=>void navigator.clipboard.writeText(item.url).then(()=>setMessage('File link copied.')).catch(()=>setMessage('Open the file to copy its address.'))}><Copy size={15}/>Copy link</button><button className="admin-danger admin-secondary" aria-label={`Delete ${item.name}`} onClick={()=>void removeMedia(item)}><Trash2 size={15}/></button></div></article>)}</div>{!filteredMedia.length&&<div className="studio-empty-state"><span><ImageIcon size={30} strokeWidth={1.4}/></span><h2>{media.length?'No matching files':'Your media library'}</h2><p>{media.length?'Try a different search or file type.':'Upload images and documents for your portfolio.'}</p>{!media.length&&<button className="admin-primary" onClick={()=>libraryUpload.current?.click()}><Plus size={16}/>Upload your first file</button>}</div>}</>:section==='advanced'?<div className="admin-advanced admin-form-panel"><div className="studio-backup-heading"><span className="studio-stat-icon"><Download size={22}/></span><div><h2>Content backup</h2><p>Imports stay in your draft until you save.</p></div></div><div className="admin-advanced-actions"><button className="admin-secondary" onClick={exportDraft}><Download size={16}/> Export draft</button><button className="admin-secondary" onClick={()=>importing.current?.click()}><Upload size={16}/> Import JSON</button><input ref={importing} type="file" accept="application/json,.json" hidden onChange={e=>{if(e.target.files?.[0])void importDraft(e.target.files[0]);e.target.value='';}}/></div><label htmlFor="raw-content">Content JSON</label><textarea id="raw-content" rows={20} value={raw} onChange={e=>setRaw(e.target.value)} spellCheck={false}/><button className="admin-secondary" onClick={()=>{try{const valid=contentSchema.safeParse(JSON.parse(raw));if(!valid.success)throw new Error(valid.error.issues.slice(0,3).map(i=>`${i.path.join('.')}: ${i.message}`).join('\n'));setContent(valid.data as PortfolioContent);setMessage('Draft updated. Review and save to publish.');}catch(e){setMessage((e as Error).message);}}}>Apply to draft</button></div>:<div className="admin-form-panel"><Field name={section} path={section} value={content[section as keyof PortfolioContent] as unknown as Value} template={defaultContent[section as keyof PortfolioContent] as unknown as Value} onChange={value=>setContent(c=>({...c,[section]:value}))} notify={msg=>{setMessage(msg);void loadMedia();}} library={media}/></div>}

      <footer className="studio-admin-footnote"><span>Nahin · Portfolio administration</span><span>{dirty?'Draft not published':'Up to date'}</span></footer>

      </section>

    </div>

  </div>;

}
