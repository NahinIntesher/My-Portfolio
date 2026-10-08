import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ProjectExplorer from "@/components/ProjectExplorer";
export const metadata:Metadata={title:"Projects",description:"Research prototypes, academic projects, and personal builds by Nahin Intesher."};
export default function ProjectsPage(){return <section className="section"><div className="container"><PageHead no="06" title="Projects" tag="Projects"/><ProjectExplorer/></div></section>}
