import * as data from './data';
import { projectDetails, researchDetails } from './details';

export const defaultContent = {
  profile: { ...data.profile, image: '/cvimage.jpg', cvFile: '/cv.pdf' },
  heroBio: data.heroBio,
  about: data.about,
  researchInterests: data.researchInterests,
  publications: data.publications,
  education: data.education,
  teaching: data.teaching,
  teachingInterests: data.teachingInterests,
  skills: data.skills,
  achievements: data.achievements,
  competitiveProgramming: data.competitiveProgramming,
  reference: data.reference,
  now: data.now,
  routes: data.routes,
  projectDetails: projectDetails.map(p => ({ ...p, demo: p.demo || '', pipelineImage: `/pipelines/${p.slug}.svg`, pipelineCaption: 'Working pipeline', gallery: [] as { image: string; caption: string }[] })),
  researchDetails: researchDetails.map(r => ({ ...r, pipelineImage: `/pipelines/research-${r.slug}.svg`, pipelineCaption: 'Research workflow', gallery: [] as { image: string; caption: string }[] })),
};
export type PortfolioContent = typeof defaultContent;
