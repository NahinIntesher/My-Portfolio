import { academicProjects, personalProjects, research, selectedProjects, type ResearchItem } from "./data";
export const researchSlug = (r: ResearchItem) => (({ "R·01": "ai-awareness", "R·02": "nutrisight", "R·03": "mcp-security", "R·04": "int8-quantization", "R·05": "ai-assisted-parenting" } as Record<string,string>)[r.index] || r.index.toLowerCase());
const researchNotes = [
  { short: "Participatory design and deepfake awareness among older adults and adolescents.", tools: ["Python", "PyTorch", "OpenCV"], methods: ["Participatory design", "Interviews", "Surveys", "Computer vision", "Mobile awareness tool"] },
  { short: "Multi-food recognition and meal-level nutrition estimation in a mobile application.", tools: ["YOLO26n-Seg", "ViT-LSTM", "ViT-Small", "Expo / React Native", "FastAPI", "Nutrition5k"], methods: ["Detection and segmentation", "Recognition refinement", "Nutrition regression"] },
  { short: "Reproducing four security mechanisms and evaluating them on 299 MCP servers.", tools: ["SAMOS", "AgentBound", "MCPShield", "Breaking the Protocol"], methods: ["Controlled evaluation", "Information-flow control", "Capability restrictions", "Metadata misalignment detection"] },
  { short: "Accuracy, corruption robustness and deployment costs of INT8 models on edge hardware.", tools: ["FP32", "INT8 PTQ", "INT8 QAT", "INT8-RPTQ", "TinyCNN", "MobileNetV2", "CIFAR-10", "CIFAR-10-C"], methods: ["Degradation-aware calibration", "Robustness evaluation", "Hardware performance evaluation"] },
  { short: "A qualitative study of parental workload, emotional stress and trust in AI tools.", tools: [], methods: ["Qualitative study (N = 5)", "Thematic analysis", "User personas", "Design guidelines"] }
];
export const researchDetails = research.map((r, i) => ({ ...r, slug: researchSlug(r), ...researchNotes[i] }));
const identities = [
  ["deepshield", "DeepShield", "Video deepfake detection system"], ["nutrisight", "NutriSight", "Multi-food recognition and nutrition insights"],
  ["discoveryou", "DiscoverYou", "Talent discovery and development platform"], ["jiggasha", "Jiggasha", "Gamified educational platform"],
  ["mini-game-master", "Mini Game Master", "Multiplayer mini games"], ["cv-banao", "CV Banao", "Academic and professional CV builder"],
  ["wearqo", "WearQo", "Fashion e-commerce website"], ["diganta", "Diganta", "Coaching center website"], ["nahin-portfolio", "Nahin Portfolio", "Personal portfolio website"],
  ["start-to-do", "Start To Do", "Daily workflow and tasks"], ["abohawa", "Abohawa", "Weather application"], ["simple-calculator", "Simple Calculator", "Everyday calculations"], ["unit-converter", "Unit Converter", "Length, time and temperature conversion"]
];
const entries = [
  ...selectedProjects.map(p => ({ title: p.title, description: p.desc, technologies: p.tech, githubLink: p.github, date: p.year, category: "Research", demo: p.demo })),
  ...academicProjects.map(p => ({ ...p, category: "Academic", demo: p.demoLink })), ...personalProjects.map(p => ({ ...p, category: "Personal", demo: p.demoLink }))
];
export const projectDetails = entries.map((p, i) => ({ ...p, slug: identities[i][0], name: identities[i][1], subtitle: identities[i][2], cover: `/covers/${identities[i][0]}.webp` }));
