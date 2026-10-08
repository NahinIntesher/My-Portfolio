from pathlib import Path
from html import escape
out=Path(__file__).resolve().parents[1]/'public/covers';out.mkdir(parents=True,exist_ok=True)
projects=[('deepshield','DeepShield','#264e66'),('nutrisight','NutriSight','#39745a'),('discoveryou','DiscoverYou','#736284'),('jiggasha','Jiggasha','#a76d36'),('mini-game-master','Mini Game Master','#4363a0'),('cv-banao','CV Banao','#6e6854'),('wearqo','WearQo','#383937'),('diganta','Diganta','#4d715e'),('nahin-portfolio','Nahin Portfolio','#466235'),('start-to-do','Start To Do','#a3654c'),('abohawa','Abohawa','#3d7c9b'),('simple-calculator','Simple Calculator','#5a637b'),('unit-converter','Unit Converter','#74638a')]
def rect(x,y,w,h,fill='#fff',r=12,stroke=None): return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}"'+(f' stroke="{stroke}"' if stroke else '')+'/>'
def text(x,y,t,size=18,color='#39423c',weight=400): return f'<text x="{x}" y="{y}" fill="{color}" font-family="Arial,sans-serif" font-size="{size}" font-weight="{weight}">{escape(str(t))}</text>'
def line(x,y,w=100): return rect(x,y,w,7,'#e1e5df',3)
def button(x,y,w,t,color): return rect(x,y,w,38,color,7)+text(x+16,y+25,t,13,'#fff',600)
def card(x,y,w,h,title,color): return rect(x,y,w,h,'#fff',10,'#e2e5df')+text(x+20,y+35,title,18,color,600)
for slug,name,color in projects:
 s=rect(0,0,1000,600,'#edf0e8',0)+rect(42,38,916,524,'#f9faf7',15,'#d6dbd1')
 s+=rect(42,38,916,58,'#fff',15)+rect(42,79,916,17,'#fff',0)
 s+=text(75,77,name,24,color,700)+text(773,75,'UI CONCEPT',11,'#91988c',500)
 s+='<path d="M42 96H958" stroke="#dfe3da"/>'
 if slug=='deepshield':
  s+=text(81,154,'Video analysis',31,color,600)+text(81,184,'Upload a video for deepfake detection',16)
  s+=rect(81,213,505,277,'#172735',12)+rect(255,252,143,172,'#263e50',5)
  s+='<path d="M273 273h24m-24 0v24M380 273h-24m24 0v24M273 405h24m-24 0v-24M380 405h-24m24 0v-24" stroke="#93c8cd" stroke-width="3" fill="none"/>'
  s+='<circle cx="326" cy="322" r="28" fill="#587888"/><path d="M284 393q42-79 84 0" fill="#587888"/>'
  s+=text(113,461,'Video preview',13,'#cfdee4')+card(609,213,306,130,'Analysis',color)+text(629,281,'Awaiting video',16)+line(629,303,244)
  s+=card(609,364,306,126,'Model pipeline',color)+text(629,429,'Swin + DCT → Temporal',15)+button(81,508,162,'Upload video',color)
 elif slug=='nutrisight':
  s+=text(81,152,'Nutrition insights',31,color,600)+text(81,180,'Recognize foods in your meal',16)
  s+=card(81,210,420,296,'Meal photo',color)+rect(101,264,380,200,'#e4eee2',10)
  s+='<circle cx="291" cy="364" r="83" fill="#faf9ee" stroke="#cbd8c2" stroke-width="4"/><ellipse cx="272" cy="337" rx="40" ry="26" fill="#83a479"/><ellipse cx="319" cy="382" rx="34" ry="26" fill="#d6a877"/><ellipse cx="250" cy="391" rx="23" ry="33" fill="#bcceaa"/>'
  s+=card(529,210,385,116,'Recognized foods',color)+text(549,281,'Upload a meal to begin',16)
  s+=card(529,344,385,162,'Nutrition overview',color)+text(549,415,'Calories     Protein     Carbs',15)+line(549,443,312)+button(81,517,177,'Scan a meal',color)
 elif slug=='discoveryou':
  s+=text(81,153,'Discover your talents',32,color,600)+text(81,183,'Contests · Courses · Community',17)+button(745,129,166,'Explore',color)
  for j,t in enumerate(['Contests','Courses','Community']):
   x=81+j*284;s+=card(x,226,265,263,t,color)+rect(x+19,289,227,119,['#e9e4ef','#e4eade','#f1e7db'][j],8)
   for k in range(3): s+=rect(x+45+k*49,320,26,58,color,13)
   s+=line(x+19,434,165)+text(x+19,471,'Explore →',14,color)
 elif slug=='jiggasha':
  s+=text(81,155,'Live exam arena',32,color,600)+text(81,185,'Learn through friendly competition',16)
  s+=card(81,224,517,277,'Exam room',color)+text(104,293,'Choose an exam to join',22)
  for j,t in enumerate(['Practice exam','Live exam','Leaderboard']): s+=rect(102,319+j*50,475,39,'#f5eee4',7)+text(120,345+j*50,t,15,color)
  s+=card(625,224,289,277,'Leaderboard',color)
  for j in range(4): s+=rect(646,287+j*45,30,30,'#eee4d5',15)+line(692,299+j*45,190)
 elif slug=='mini-game-master':
  s+=text(81,154,'Choose a mini game',32,color,600)+text(81,184,'Play together',17)
  for j in range(3):
   x=81+j*284;s+=rect(x,222,265,260,['#e7eaf5','#e7edf0','#eee7f1'][j],12)
   for row in range(3):
    for col in range(3): s+=rect(x+59+col*48,260+row*48,40,40,'#fff',6)
   s+=button(x+60,432,145,'Play',color)
 elif slug=='cv-banao':
  s+=text(81,153,'Build your CV',32,color,600)+text(81,184,'Academic · Research · Industry',16)
  s+=card(81,218,344,304,'CV sections',color)
  for j,t in enumerate(['Profile','Education','Research','Experience','Skills']): s+=rect(102,271+j*44,302,35,'#f2f0e8',5)+text(118,294+j*44,t,14)
  s+=rect(478,214,374,310,'#e6e4db',9)+rect(540,236,250,269,'#fff',2)+text(560,274,'Your name',19,color,600)
  for j in range(8): s+=line(560,296+j*23,174 if j%3 else 204)
  s+=button(694,139,177,'Preview CV',color)
 elif slug=='wearqo':
  s+=text(81,152,'The collection',34,color,600)+text(81,183,'Browse fashion',16)
  for j in range(3):
   x=81+j*284;s+=rect(x,218,263,256,['#dedbd2','#e3e5df','#d9d9d8'][j],6)
   s+=f'<path d="M{x+82} 275l-34 30 26 38 20-18v115h84V325l20 18 26-38-34-30-24-14q-30 30-60 0z" fill="{["#535d59","#a8977d","#434752"][j]}"/>'
   s+=text(x,511,'View collection →',14,color)
 elif slug=='diganta':
  s+=text(81,153,'Learning at Diganta',32,color,600)+text(81,184,'Students and teachers, connected',16)
  s+=rect(81,218,830,119,'#dfe9de',12)+text(105,264,'Coaching center',25,color,600)+text(105,300,'Classes 6–10',17)
  for j,t in enumerate(['Students','Teachers','Announcements']): s+=card(81+j*284,362,265,141,t,color)+line(102+j*284,432,184)+line(102+j*284,457,139)
 elif slug=='nahin-portfolio':
  s+=text(82,182,'Nahin Intesher',55,color,600)+text(83,219,'Computer Science & Engineering Student',18)
  s+=text(83,280,'Research · Teaching · Projects',23)+line(83,316,402)+line(83,340,370)+line(83,364,386)+button(83,413,179,'View research',color)
  s+=rect(652,145,240,337,'#dce4d4',5)+text(691,327,'NI',81,color,500)
 elif slug=='start-to-do':
  s+=text(81,154,'Your daily workflow',32,color,600)+button(750,128,155,'New task',color)
  s+=rect(81,215,830,288,'#fff',12,'#e2e5df')
  for j,t in enumerate(['Plan the day','Focus on a task','Review progress','Prepare for tomorrow']):
   s+=rect(109,243+j*62,26,26,'#f2e6dc',6)+text(155,263+j*62,t,18)+line(155,279+j*62,545)
 elif slug=='abohawa':
  s+=text(81,154,'Weather, wherever you are',31,color,600)+rect(81,190,830,47,'#fff',8,'#d6e2e6')+text(102,220,'Search a city',16,'#7d8b91')
  s+=rect(81,262,830,250,'#dfeef2',12)+text(108,310,'Weather overview',22,color,600)+text(112,412,'—°',80,color)
  s+='<circle cx="752" cy="349" r="45" fill="#ead9a6"/><ellipse cx="720" cy="403" rx="60" ry="25" fill="#fff"/><ellipse cx="775" cy="401" rx="57" ry="28" fill="#fff"/>'
  s+=text(108,466,'Select a city for the forecast',17,color)
 elif slug=='simple-calculator':
  s+=text(82,166,'Everyday calculations',30,color,600)+text(82,202,'A simple desktop calculator',16)
  s+=rect(615,120,277,396,'#27303e',16)+rect(635,141,237,79,'#394353',8)+text(826,195,'0',42,'#fff')
  keys=['7','8','9','÷','4','5','6','×','1','2','3','−','0','.','=','+']
  for j,k in enumerate(keys):
   x=635+(j%4)*61;y=238+(j//4)*65;s+=rect(x,y,53,54,'#81918a' if k=='=' else '#3e4858',7)+text(x+19,y+35,k,22,'#fff')
  for j in range(4): s+=line(83,293+j*36,330-j*36)
 elif slug=='unit-converter':
  s+=text(81,154,'Convert with ease',32,color,600)+text(81,184,'Length · Time · Temperature',17)
  s+=card(81,225,830,276,'Length conversion',color)+rect(109,294,342,67,'#f3f0f7',8)+rect(539,294,342,67,'#f3f0f7',8)+text(128,336,'Enter a value',20)+text(558,336,'Converted value',20)
  s+=text(480,337,'→',29,color)+text(109,399,'From unit',16)+text(539,399,'To unit',16)+button(109,432,772,'Convert',color)
 s+='</svg>'
 (out/f'{slug}.svg').write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" role="img"><title>{escape(name)} UI concept illustration</title>'+s)
print(f'Created {len(projects)} individual SVG interface covers.')
