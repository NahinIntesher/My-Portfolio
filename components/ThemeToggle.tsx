"use client";
import {useEffect,useState} from "react";
import {Sun,Moon} from "lucide-react";
export default function ThemeToggle(){
 const [dark,setDark]=useState(false);
 useEffect(()=>{
  const sync=()=>setDark(document.documentElement.classList.contains("dark"));
  const apply=(d:boolean)=>{document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";sync();};
  const storage=(e:StorageEvent)=>{if(e.key==="theme")apply(e.newValue==="dark"||(!e.newValue&&matchMedia("(prefers-color-scheme: dark)").matches));};
  const mq=matchMedia("(prefers-color-scheme: dark)");
  const system=(e:MediaQueryListEvent)=>{try{if(!localStorage.getItem("theme"))apply(e.matches);}catch{apply(e.matches);}};
  const observer=new MutationObserver(sync);observer.observe(document.documentElement,{attributes:true,attributeFilter:["class"]});sync();addEventListener("storage",storage);mq.addEventListener("change",system);
  return()=>{observer.disconnect();removeEventListener("storage",storage);mq.removeEventListener("change",system);};
 },[]);
 function toggle(){const next=!document.documentElement.classList.contains("dark");document.documentElement.classList.toggle("dark",next);document.documentElement.style.colorScheme=next?"dark":"light";setDark(next);try{localStorage.setItem("theme",next?"dark":"light");}catch{}}
 return <button type="button" className="theme-toggle" onClick={toggle} aria-pressed={dark} aria-label="Toggle color theme" title={dark?"Switch to light mode":"Switch to dark mode"}>{dark?<Sun size={18} strokeWidth={1.8}/>:<Moon size={18} strokeWidth={1.8}/>}</button>;
}
