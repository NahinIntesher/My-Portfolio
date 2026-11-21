"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type Star = { x:number; y:number; phase:number; size:number };
type SurfacePoint = { x:number; y:number; z:number; light:number; size:number };
type RingPoint = { angle:number; radius:number; height:number; light:number; size:number };

/** A genuinely rotating point-cloud sphere and independently orbiting dust bands. */
export default function LiveBackground() {
  const ref=useRef<HTMLCanvasElement>(null);
  const admin=usePathname().startsWith("/admin");
  useEffect(()=>{
    const canvas=ref.current, ctx=canvas?.getContext("2d",{alpha:true});
    if(admin||!canvas||!ctx)return;
    const motion=matchMedia("(prefers-reduced-motion: reduce)");
    let width=0,height=0,raf=0,last=0,drawn=0,time=0;
    let stars:Star[]=[],surface:SurfacePoint[]=[],rings:RingPoint[][]=[];

    function resize(){
      width=innerWidth;height=innerHeight;
      const dpr=Math.min(devicePixelRatio||1,1.5,Math.sqrt(3500000/(width*height)));
      canvas!.width=Math.round(width*dpr);canvas!.height=Math.round(height*dpr);
      ctx!.setTransform(dpr,0,0,dpr,0,0);
      let seed=617;
      const rand=()=>{seed=seed*16807%2147483647;return seed/2147483647;};
      const mobile=width<800;
      stars=Array.from({length:mobile?55:110},()=>({x:rand(),y:rand(),phase:rand()*Math.PI*2,size:.4+rand()*.9}));
      const total=mobile?1500:3900;
      surface=Array.from({length:total},(_,i)=>{
        const y=1-2*(i+.5)/total,angle=i*2.399963229728653+(rand()-.5)*.04;
        const r=Math.sqrt(1-y*y)*(1+(rand()-.5)*.025),x=Math.cos(angle)*r,z=Math.sin(angle)*r;
        // Bright patches belong to the sphere, so their motion reveals axial rotation.
        const cloud=Math.sin(x*6.1+z*3.4)*Math.cos(y*7.3)+.5*Math.sin(z*10.2-x*3.8);
        return {x,y,z,light:.24+Math.max(0,cloud)*.58,size:.45+rand()*.9};
      });
      rings=Array.from({length:3},(_,band)=>Array.from({length:mobile?500:1200},()=>({
        angle:rand()*Math.PI*2,radius:1.55+band*.29+(rand()-.5)*.1,
        height:(rand()-.5)*.025,light:.2+rand()*.8,size:.35+rand()*.8,
      })));
    }

    function render(){
      const night=document.documentElement.classList.contains("dark");
      const mobile=width<800;
      ctx!.clearRect(0,0,width,height);
      const rgb=night?"165,235,214":"8,32,29";
      for(const star of stars){
        const x=(star.x*width+Math.sin(time*.07+star.phase)*6+width)%width;
        const y=(star.y*height+time*.6)%height;
        ctx!.fillStyle=`rgba(${rgb},${(night?.33:.15)*(.7+.3*Math.sin(time*.65+star.phase))})`;
        ctx!.beginPath();ctx!.arc(x,y,star.size,0,Math.PI*2);ctx!.fill();
      }
      // The sphere sits left of the portrait on wide screens; on mobile it floats behind the right edge.
      const cx=width*(mobile?.78:.60),cy=height*(mobile?.59:.40);
      const radius=mobile?Math.min(width*.24,125):Math.min(width*.115,205);
      const tilt=-.34,ct=Math.cos(tilt),st=Math.sin(tilt);
      const project=(x:number,y:number,z:number)=>{
        const px=x*ct-y*st,py=x*st+y*ct;
        const perspective=5.5/(5.5-z);
        return {x:cx+px*radius*perspective,y:cy+py*radius*perspective,z,scale:perspective};
      };
      const ink=(alpha:number)=>`rgba(${rgb},${Math.min(.98,alpha)})`;
      // A few fine constellation segments keep the observatory character without a bitmap planet.
      ctx!.strokeStyle=ink(.13);ctx!.lineWidth=.6;
      const constellations=[{x:.46,y:.13},{x:.9,y:.76},{x:.56,y:.81}];
      for(const group of constellations){
        const offsets=[[0,18],[24,0],[53,13],[69,-9],[96,5]];
        ctx!.beginPath();offsets.forEach(([x,y],i)=>{const px=group.x*width+x,py=group.y*height+y;i?ctx!.lineTo(px,py):ctx!.moveTo(px,py);});ctx!.stroke();
        ctx!.fillStyle=ink(.32);for(const [x,y]of offsets){ctx!.beginPath();ctx!.arc(group.x*width+x,group.y*height+y,1.1,0,Math.PI*2);ctx!.fill();}
      }
      const atmosphere=ctx!.createRadialGradient(cx,cy,radius*.7,cx,cy,radius*1.35);
      atmosphere.addColorStop(0,ink(0));atmosphere.addColorStop(.38,ink(.07));atmosphere.addColorStop(1,ink(0));
      ctx!.fillStyle=atmosphere;ctx!.beginPath();ctx!.arc(cx,cy,radius*1.35,0,Math.PI*2);ctx!.fill();
      const speeds=[.19,-.135,.095];
      function drawRings(front:boolean){
        for(let band=0;band<rings.length;band++){
          const inclination=.29+band*.065+Math.sin(time*.045+band)*.025;
          if(!night){
            // Fine, continuous tracks make the dust bands readable on an off-white page.
            ctx!.strokeStyle=ink(front?.34:.18);ctx!.lineWidth=front?.9:.65;
            ctx!.beginPath();let connected=false;
            for(let step=0;step<=120;step++){
              const angle=step/120*Math.PI*2,r=1.55+band*.29,along=Math.sin(angle)*r;
              const z=along*Math.sqrt(1-inclination*inclination);
              if((z>=0)!==front){connected=false;continue;}
              const p=project(Math.cos(angle)*r,along*inclination,z);
              connected?ctx!.lineTo(p.x,p.y):ctx!.moveTo(p.x,p.y);connected=true;
            }
            ctx!.stroke();
          }
          for(const dot of rings[band]){
            const a=dot.angle+time*speeds[band],x=Math.cos(a)*dot.radius;
            const along=Math.sin(a)*dot.radius;
            const y=along*inclination+dot.height,z=along*Math.sqrt(1-inclination*inclination);
            if((z>=0)!==front)continue;
            const p=project(x,y,z);
            const texture=night?.52+.48*Math.sin(dot.angle*7+band):.7+.3*Math.sin(dot.angle*7+band);
            ctx!.fillStyle=ink((night?(front?.8:.38):(front?1:.6))*dot.light*texture);
            ctx!.beginPath();ctx!.arc(p.x,p.y,dot.size*p.scale*(night?1:1.15),0,Math.PI*2);ctx!.fill();
          }
        }
      }
      drawRings(false);
      // Dark inner fill occludes the rear ring and gives the transparent point cloud real depth.
      const shade=ctx!.createRadialGradient(cx-radius*.3,cy-radius*.25,0,cx,cy,radius*1.03);
      shade.addColorStop(0,night?"rgba(9,34,38,.92)":"rgba(221,236,230,.97)");
      shade.addColorStop(.8,night?"rgba(5,18,25,.96)":"rgba(199,222,213,.96)");
      shade.addColorStop(1,night?"rgba(5,14,20,.35)":"rgba(178,207,194,.75)");
      ctx!.fillStyle=shade;ctx!.beginPath();ctx!.arc(cx,cy,radius,0,Math.PI*2);ctx!.fill();
      const rotation=time*.16,cr=Math.cos(rotation),sr=Math.sin(rotation);
      // Rotate each 3D surface point around the Y axis, then project it into the tilted view.
      for(const dot of surface){
        const x=dot.x*cr+dot.z*sr,z=-dot.x*sr+dot.z*cr;
        const p=project(x,dot.y,z);
        const facing=(z+1)*.5,light=night?(.13+facing*.7)*dot.light:(.22+facing*.7)*(.35+dot.light*.75);
        ctx!.fillStyle=ink(Math.min(.95,light*(night?1.7:1.35)));
        ctx!.beginPath();ctx!.arc(p.x,p.y,dot.size*(.65+facing*.45)*(night?1:1.2),0,Math.PI*2);ctx!.fill();
      }
      ctx!.strokeStyle=ink(night?.17:.38);ctx!.lineWidth=night?.6:1;
      ctx!.beginPath();ctx!.arc(cx,cy,radius,0,Math.PI*2);ctx!.stroke();
      drawRings(true);
      // Two small satellites travel with the dust bands, rather than unrelated floating dots.
      for(let i=0;i<2;i++){
        const angle=time*speeds[i]+i*2.8;
        const r=1.55+i*.29,along=Math.sin(angle)*r;
        const p=project(Math.cos(angle)*r,along*(.29+i*.065),along*.94);
        const satellite=Math.max(3,radius*.027)*p.scale;
        const glow=ctx!.createRadialGradient(p.x-satellite*.3,p.y-satellite*.3,0,p.x,p.y,satellite);
        glow.addColorStop(0,ink(.85));glow.addColorStop(1,ink(.06));
        ctx!.fillStyle=glow;ctx!.beginPath();ctx!.arc(p.x,p.y,satellite,0,Math.PI*2);ctx!.fill();
      }
    }

    function tick(now:number){
      raf=0;
      if(document.hidden||motion.matches){last=0;return;}
      if(last)time+=Math.min(now-last,80)/1000;last=now;
      if(now-drawn>=1000/30){drawn=now;render();}
      raf=requestAnimationFrame(tick);
    }
    function sync(){cancelAnimationFrame(raf);raf=0;last=0;if(motion.matches)ctx!.clearRect(0,0,width,height);else if(!document.hidden)raf=requestAnimationFrame(tick);}
    function onResize(){resize();if(!motion.matches)render();}
    resize();sync();
    addEventListener("resize",onResize);document.addEventListener("visibilitychange",sync);motion.addEventListener("change",sync);
    return()=>{cancelAnimationFrame(raf);removeEventListener("resize",onResize);document.removeEventListener("visibilitychange",sync);motion.removeEventListener("change",sync);};
  },[admin]);
  return admin?null:<canvas ref={ref} className="live-background" aria-hidden="true"/>;
}
