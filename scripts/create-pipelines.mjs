import {mkdir,writeFile} from 'node:fs/promises';
const flows={
 'research-ai-awareness':['AI awareness research',['Interviews & surveys','Perception analysis','Participatory design','Vision model','Mobile awareness tool']],
 'research-nutrisight':['NutriSight recognition & nutrition',['Food image','YOLO26n-Seg','ViT-LSTM refinement','ViT-Small regression','Nutrition insights']],
 'research-mcp-security':['MCP security evaluation',['299 MCP servers','Metadata collection','Four security frameworks','Controlled experiments','Comparative evaluation']],
 'research-int8-quantization':['INT8 quantization evaluation',['CIFAR-10 / CIFAR-10-C','TinyCNN / MobileNetV2','FP32 / PTQ / QAT','INT8-RPTQ calibration','Robustness & device cost']],
 'research-ai-assisted-parenting':['AI-assisted parenting study',['Parent interviews','Qualitative coding','Thematic analysis','User personas','Design guidelines']],
 deepshield:['DeepShield video analysis',['Video input','Face detection & frames','Swin + DCT features','Temporal Transformer','Real / deepfake prediction']],
 nutrisight:['NutriSight application workflow',['Mobile meal capture','FastAPI inference','Segmentation & recognition','Nutrition estimation','Dietary profile insights']],
 discoveryou:['DiscoverYou platform architecture',['React interface','Node.js services','Contests & courses','MySQL persistence','Talent & opportunities']],
 jiggasha:['Jiggasha learning workflow',['Next.js interface','Node.js backend','Live exam sessions','PostgreSQL records','Results & rankings']],
 'mini-game-master':['Mini Game Master application',['Two players','JavaFX interface','Java game logic','MySQL persistence','Game results']],
 'cv-banao':['CV Banao document workflow',['Profile information','React Native editor','CV sections','Academic / industry layout','Document preview']],
 diganta:['Diganta hosted platform',['Next.js web + Flutter app','Node.js / Express API','Role-based services','MySQL database','Realtime & live classes']],
 'nahin-portfolio':['Portfolio publishing workflow',['Owner edits & uploads','Authenticated admin','Content & media storage','Next.js rendering','Responsive portfolio']],
 'start-to-do':['Start To Do workflow',['Create task','Flutter interface','Task state','Complete / update','Daily task list']],
 abohawa:['Abohawa weather workflow',['City input','Flutter interface','Weather lookup','Forecast response','Weather display']],
 'simple-calculator':['Calculator workflow',['Number input','JavaFX controls','Operation selection','Java calculation','Result display']],
 'unit-converter':['Unit Converter workflow',['Input value','Source & target units','JavaScript conversion','Validated result','Converted value']],
};
function escape(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));}
function wrap(s){const words=s.split(' '),lines=[''];for(const word of words){const i=lines.length-1;if((lines[i]+' '+word).trim().length>19&&lines[i])lines.push(word);else lines[i]+=(lines[i]?' ':'')+word;}return lines;}
await mkdir('public/pipelines',{recursive:true});
for(const [slug,[title,steps]] of Object.entries(flows)){
 let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="480" viewBox="0 0 1200 480" role="img" aria-labelledby="title desc"><title id="title">${escape(title)}</title><desc id="desc">${escape(steps.join(' → '))}. Simplified working pipeline.</desc><defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#53745c"/></marker></defs><rect width="1200" height="480" fill="#f4f7f2"/><path d="M48 102H1152" stroke="#cbd6c8"/><text x="48" y="67" fill="#25432d" font-family="Arial,sans-serif" font-size="27" font-weight="600">${escape(title)}</text>`;
 steps.forEach((step,i)=>{const x=48+i*226,lines=wrap(step);if(i<4)svg+=`<path d="M${x+200} 254 H${x+217}" stroke="#53745c" stroke-width="2" marker-end="url(#arrow)"/>`;svg+=`<rect x="${x}" y="166" width="200" height="180" rx="14" fill="${i===4?'#e1ecda':'#fff'}" stroke="#c3d0bd"/><rect x="${x+76}" y="188" width="48" height="42" rx="10" fill="#edf3e8"/><path d="M${x+88} 209h24m-12-10v20" stroke="#47694d" stroke-width="2"/><text x="${x+100}" y="${260-(lines.length-1)*3}" text-anchor="middle" fill="#243b2b" font-family="Arial,sans-serif" font-size="18" font-weight="500">${lines.map((line,j)=>`<tspan x="${x+100}" dy="${j?25:0}">${escape(line)}</tspan>`).join('')}</text>`;});
 svg+='<text x="48" y="429" fill="#657361" font-family="Arial,sans-serif" font-size="16">Simplified workflow · open full size to inspect</text></svg>';
 await writeFile(`public/pipelines/${slug}.svg`,svg);
}
console.log(`Created ${Object.keys(flows).length} working-pipeline diagrams.`);
