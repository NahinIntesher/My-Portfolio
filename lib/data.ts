/* ===================================================================
   lib/data.ts — the single source of content for the whole site.
   Sources: official CV (LaTeX) + personal project list. Update here only.
   =================================================================== */

export const profile = {
  name: "Nahin Intesher",
  role: "Computer Science & Engineering Student",
  location: "Dhaka, Bangladesh",
  email: "nahinsikdar123@gmail.com",
  phone: "+880 1815-808291",
  phoneHref: "tel:+8801815808291",
  cv: "/cv",
  github: "https://github.com/nahinintesher",
  linkedin: "https://www.linkedin.com/in/nahinintesher",
  website: "https://nahin.com.bd",
};

export const heroBio =
  "Final-trimester Computer Science & Engineering student looking to build intelligent, human-centric systems for practical applications — through teaching, research, collaboration, and further studies.";

export const about = {
  paragraphs: [
    "I am a final-trimester Computer Science & Engineering student at United International University, Dhaka, with a CGPA of 3.93/4.00. My coursework — from Digital Image Processing to Machine Learning — pulled me toward the intersection of Computer Vision, Human-Computer Interaction, and Assistive Technology.",
    "A recurring question runs through my work: how can intelligent systems genuinely help people? My undergraduate thesis, Bridging the Gap, studies how vulnerable communities — older adults and younger users — perceive AI-generated synthetic media, and turns those insights into an AI-awareness tool built from participants' own data.",
    "Teaching runs parallel to my research. I have served as an Undergraduate Teaching Assistant at UIU since 2023, and I run Diganta Coaching Center, where I teach school students — daily proof that explaining an idea clearly is as demanding, and as rewarding, as building one.",
  ],
  goal: "Looking for opportunities to build intelligent, human-centric systems for practical applications — through teaching, research, collaboration, and further studies.",
};

/* CV er Research Interests section er sathe exact match */
export const researchInterests = ["Human-Computer Interaction", "Computer Vision", "Quantum Machine Learning"];

/* ---------------- Research ---------------- */
export type ResearchItem = {
  index: string;
  title: string;
  desc: string;
  areas: string[];
  status: string;
};

export const research: ResearchItem[] = [
  {
    index: "R·01",
    title:
      "Bridging the Gap: Towards Building AI Awareness Among Vulnerable Populations",
    desc: "Explored deepfake susceptibility and synthetic media perception among vulnerable age groups — older adults (55+) and adolescents (11-18). A participatory design study with interviews and surveys captured perceptual insights; a vision model was then trained and a mobile application built from participant data to serve as an interactive AI-awareness tool for marginal communities. The work analyses systemic challenges at the intersection of Computer Vision, Human-Computer Interaction, and Social Computing.",
    areas: [
      "Deepfake",
      "Computer Vision",
      "Human-Computer Interaction",
      "Social Computing",
    ],
    status: "Undergraduate Thesis · In preparation",
  },
  {
    index: "R·02",
    title:
      "NutriSight: An AI-Powered Multi-Food Recognition and Personalized Nutrition Insight System",
    desc: "A multi-stage vision pipeline: YOLO26n-Seg for detection and segmentation, a ViT-LSTM model for confidence-aware recognition refinement, and a ViT-Small model for meal-level nutrition estimation. It reaches an F1-score of 0.9007 on multi-food recognition refinement and a test MAE of 18.05 for meal-level calorie and macronutrient regression. Delivered as a full-stack mobile platform (Expo React Native frontend, FastAPI backend) with customizable dietary profiles for allergy and condition management.",
    areas: [
      "Computer Vision",
      "Food Recognition",
      "Vision Transformers",
      "Mobile Health",
    ],
    status: "Primary Author · 2026 · Manuscript written, unpublished",
  },
  {
    index: "R·03",
    title:
      "Reproducing and Evaluating Security Mechanisms for the Model Context Protocol (MCP)",
    desc: "Re-implemented and evaluated four security frameworks — SAMOS, AgentBound, MCPShield, and Breaking the Protocol — on a dataset of 299 MCP servers and 27,861 metadata entries. Controlled experiments covered least-privilege capability boundaries, gateway information-flow control, metadata misalignment detection (78.38% detection rate), and protocol-level vulnerabilities. Reproduced metrics were benchmarked against the original papers, highlighting limitations in LLM agent tool integration and defense-in-depth strategies.",
    areas: ["LLM Agents", "MCP Security", "Reproducibility"],
    status: "Author · 2026 · Manuscript written, unpublished",
  },
  {
    index: "R·04",
    title:
      "Robustness-Efficiency Trade-offs of INT8 Quantization on Resource-Constrained Edge Devices",
    desc: "A systematic evaluation of FP32, INT8 Post-Training Quantization (PTQ), and INT8 Quantization-Aware Training (QAT) using custom TinyCNN and MobileNetV2 on CIFAR-10 and CIFAR-10-C. Proposes INT8-RPTQ, a degradation-aware PTQ calibration strategy that improves robustness to noise, blur, and compression without full QAT retraining, and analyses deployment trade-offs across latency, peak memory, throughput, power consumption, and energy per inference.",
    areas: ["Quantization", "Edge AI", "Robustness", "Deep Learning"],
    status: "Primary Author · 2026 · Manuscript written, unpublished",
  },
  {
    index: "R·05",
    title:
      "AI-Assisted Parenting: Mental Workload, Trust, and Design Guidelines",
    desc: "A qualitative study (N=5) evaluating parental mental workload, emotional stressors, and trust dynamics when using AI tools for child development and health decision-making. Thematic analysis was used to derive user personas and actionable design guidelines for building trustworthy parental AI assistants.",
    areas: [
      "Human-Computer Interaction",
      "Trust in AI",
      "Qualitative Research",
    ],
    status: "Qualitative Study · 2024",
  },
];

/* ---------------- Publications ----------------
   Nothing below is published yet — manuscripts are written but unsubmitted/unpublished.
   When a paper is accepted, update status/type/year and add venue + doi to the bibtex. */
export type Publication = {
  id: string;
  index: string;
  title: string;
  type: string;
  year: string;
  status: string;
  abstract: string;
  bibtex: string;
};

const bib = (key: string, title: string, note: string) =>
  `@unpublished{${key},\n  author = {Intesher, Nahin},\n  title  = {${title}},\n  year   = {2026},\n  note   = {${note}}\n}`;

export const publications: Publication[] = [
  {
    id: "p1",
    index: "P·01",
    title:
      "Bridging the Gap: Towards Building AI Awareness Among Vulnerable Populations",
    type: "Undergraduate Thesis",
    year: "2026",
    status: "In preparation",
    abstract:
      "This thesis examines deepfake susceptibility and synthetic media perception among older adults (55+) and adolescents (11-18). Using a participatory design approach that combines interviews and surveys, it captures how these groups perceive AI-generated content. Insights from participants informed a trained vision model and a mobile application that acts as an interactive AI-awareness tool for marginal communities, analysed through Computer Vision, Human-Computer Interaction, and Social Computing perspectives.",
    bibtex: bib(
      "intesher2026gap",
      "Bridging the Gap: Towards Building AI Awareness Among Vulnerable Populations",
      "Undergraduate thesis, United International University — in preparation",
    ),
  },
  {
    id: "p2",
    index: "P·02",
    title:
      "NutriSight: An AI-Powered Multi-Food Recognition and Personalized Nutrition Insight System",
    type: "Research Paper",
    year: "2026",
    status: "Manuscript written — not yet published",
    abstract:
      "NutriSight combines YOLO26n-Seg detection and segmentation, a ViT-LSTM model for confidence-aware recognition refinement, and a ViT-Small model for meal-level nutrition estimation. It achieves an F1-score of 0.9007 on multi-food recognition refinement and a test MAE of 18.05 for meal-level calorie and macronutrient regression, and is deployed in a mobile application with customizable dietary profiles for allergies and health conditions.",
    bibtex: bib(
      "intesher2026nutrisight",
      "NutriSight: An AI-Powered Multi-Food Recognition and Personalized Nutrition Insight System",
      "Unpublished manuscript",
    ),
  },
  {
    id: "p3",
    index: "P·03",
    title:
      "Reproducing and Evaluating Security Mechanisms for the Model Context Protocol (MCP)",
    type: "Research Paper",
    year: "2026",
    status: "Manuscript written — not yet published",
    abstract:
      "This study re-implements four MCP security frameworks (SAMOS, AgentBound, MCPShield, and Breaking the Protocol) and evaluates them on 299 MCP servers and 27,861 metadata entries. Experiments examine least-privilege boundaries, gateway information-flow control, metadata misalignment detection (78.38% detection rate), and protocol-level vulnerabilities, and compare reproduced results with the originally reported values.",
    bibtex: bib(
      "intesher2026mcp",
      "Reproducing and Evaluating Security Mechanisms for the Model Context Protocol (MCP)",
      "Unpublished manuscript",
    ),
  },
  {
    id: "p4",
    index: "P·04",
    title:
      "Robustness-Efficiency Trade-offs of INT8 Quantization on Resource-Constrained Edge Devices",
    type: "Research Paper",
    year: "2026",
    status: "Manuscript written — not yet published",
    abstract:
      "This paper evaluates FP32, INT8 post-training quantization (PTQ), and INT8 quantization-aware training (QAT) with TinyCNN and MobileNetV2 on CIFAR-10 and CIFAR-10-C. It introduces INT8-RPTQ, a degradation-aware PTQ calibration strategy that improves corruption robustness without full QAT retraining, and analyses latency, peak memory, throughput, power, and energy per inference on edge devices.",
    bibtex: bib(
      "intesher2026int8",
      "Robustness-Efficiency Trade-offs of INT8 Quantization on Resource-Constrained Edge Devices",
      "Unpublished manuscript",
    ),
  },
];

/* ---------------- Education ---------------- */
export type EducationItem = {
  degree: string;
  school: string;
  place: string;
  years: string;
  result: string;
  notes: { label: string; text: string }[];
};

export const education: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "United International University",
    place: "Dhaka, Bangladesh",
    years: "2022 - Present (Final Trimester)",
    result: "CGPA 3.93 / 4.00 (till 11th trimester)",
    notes: [
      {
        label: "Relevant coursework",
        text: "Data Structures & Algorithms · Database Management Systems · Software Engineering · Computer Networks · Artificial Intelligence · Data Mining · Machine Learning · Digital Image Processing",
      },
      {
        label: "Undergraduate thesis",
        text: "Bridging the Gap: Towards Building AI Awareness among Vulnerable Populations — see Research & Publications",
      },
    ],
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    school: "Dhaka Residential Model College",
    place: "Dhaka, Bangladesh",
    years: "2018 - 2020",
    result: "GPA 5.00 / 5.00",
    notes: [],
  },
  {
    degree: "Secondary School Certificate (Science)",
    school: "Shamshul Haque Khan School & College",
    place: "Dhaka, Bangladesh",
    years: "2016 - 2018",
    result: "GPA 5.00 / 5.00",
    notes: [],
  },
  { degree: "Junior School Certificate (Science)", school: "Shamshul Haque Khan School and College", place: "Dhaka, Bangladesh", years: "2015", result: "GPA 5.00 / 5.00", notes: [] },
  // Earlier education records retained.
  // firete chaile niche er pattern-e ekta entry copy korun:
  // { degree: "Junior School Certificate (Science)", school: "Shamshul Haque Khan School & College", place: "Dhaka, Bangladesh", years: "2015", result: "GPA 5.00 / 5.00", notes: [] },
];

/* ---------------- Teaching ---------------- */
export type TeachingEntry = {
  period: string;
  role: string;
  org: string;
  place: string;
  desc: string;
  points: string[];
};

export const teaching: TeachingEntry[] = [
  {
    period: "2023 - 2026",
    role: "Undergraduate Teaching Assistant",
    org: "United International University",
    place: "Dhaka, Bangladesh",
    desc: "Appointed as an undergraduate TA at the Department of CSE, supporting course instructors with academic problem-solving and concept clarification alongside my own studies.",
    points: [
      "Guided many students through academic problems and core technical concepts with practical exercises.",
      "Supported students in Data Structures and Algorithms, Object-Oriented Programming, Structured Programming Language, and Introduction to Computer Systems.",
      "Conducted lab sessions, mentored students on programming and debugging, held consultations, and graded lab work and assessments with constructive technical feedback.",
    ],
  },
  {
    period: "2024 - Present",
    role: "Owner & Academic Instructor",
    org: "Diganta Coaching Center",
    place: "Dhaka, Bangladesh",
    desc: "Founded and run a coaching center for school students — an ongoing, hands-on exercise in explaining material clearly to learners of very different levels.",
    points: [
      "Help students of classes 6-10 understand their topics easily and build genuine confidence in them.",
      "Encourage students toward sectors where they can contribute and grow.",
    ],
  },
];

export const teachingInterests = [
  "Programming Fundamentals",
  "Data Structures & Algorithms",
  "Database Systems",
  "Computer Networks",
  "Artificial Intelligence & Machine Learning",
  "Human-Computer Interaction",
];

/* ---------------- Projects ---------------- */

/* Curated research-grade builds — editorial rows on /projects */
export type Project = {
  title: string;
  desc: string;
  tech: string[];
  year: string;
  github: string;
  demo?: string;
};

export const selectedProjects: Project[] = [
  {
    title: "Deepfake Detection System (DeepShield) — Thesis Project",
    desc: "Video deepfake detection combining a Swin Transformer and DCT backbone with a Temporal Transformer. Datasets include Celeb-DF-v2, FaceForensics++ (C23), and the Arabic Deepfake dataset.",
    tech: [
      "Python",
      "PyTorch",
      "OpenCV",
      "Insightface",
      "Swin + DCT",
      "Temporal Transformer",
    ],
    year: "06/2025 - 10/2026",
    github: "https://github.com/NahinIntesher/deepshield",
  },
  {
    title: "NutriSight — Multi-Food Recognition & Nutrition Insight System",
    desc: "A multi-stage vision pipeline: YOLO26n-Seg for detection and segmentation, a ViT-LSTM model for confidence-aware recognition refinement, and a ViT-Small model for meal-level nutrition estimation. Delivered as a full-stack mobile platform (Expo React Native frontend, FastAPI backend) with customizable dietary profiles for allergy and condition management.",
    tech: ["Python", "PyTorch", "OpenCV", "FastAPI", "React Native"],
    year: "06/2026 - 08/2026",
    github:
      "https://github.com/NahinIntesher/NeutriSight---Mobile-App-of-Multi-Food-Nutrition-Model",
  },
];

/* Academic record — coursework & team projects (image grid) */
export type GalleryProject = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  date: string;
  image: string;
  demoLink?: string;
};

export const academicProjects: GalleryProject[] = [
  {
    title: "DISCOVERYOU",
    description:
      "DiscoverYou is a platform where users can discover, develop, and showcase their talents through contests, courses, communities, and expert guidance. It connects users with job opportunities and a marketplace to monetize creative work.",
    technologies: ["React", "Node.js", "MySQL"],
    githubLink: "https://github.com/NahinIntesher/DiscoverYou",
    date: "06/2024 - 08/2024",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Jiggasha",
    description:
      "An online gamified educational platform — students compete in live, battle-royale-style exams and see how they rank against others.",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    githubLink: "https://github.com/NahinIntesher/Jiggasha",
    date: "04/2025 - 06/2025",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Mini Game Master",
    description: "A multiplayer game where 2 players can play together.",
    technologies: ["Java", "JavaFX", "MySQL"],
    githubLink: "https://github.com/NahinIntesher/MiniGameMaster",
    date: "08/2024 - 09/2024",
    image:
      "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=1200&auto=format&fit=crop",
  },
];

export const personalProjects: GalleryProject[] = [
  {
    title: "CV Banao Mobile App",
    description: "A dedicated CV builder for academic, research, PhD and higher-study, and industry applications.",
    technologies: ["React Native", "TypeScript"],
    githubLink: "https://github.com/NahinIntesher/CV-Banao-App",
    date: "2026",
    image: "",
  },
  {
    title: "WEARQO",
    description: "WearQo is a fashion e-commerce company, sells brand stuff.",
    technologies: ["Next.js"],
    githubLink: "https://github.com/orgs/Wearqo/repositories",
    date: "07/2024 - Present",
    image:
      "https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Diganta",
    description:
      "Diganta is my Coaching Center. I made a website for my coaching to facilitate communication between students and teachers.",
    technologies: ["Next.js"],
    githubLink: "https://github.com/NahinIntesher/diganta",
    date: "05/2025 - Present",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Nahin Portfolio",
    description: "My portfolio website to know more about myself.",
    technologies: ["Next.js"],
    githubLink: "https://github.com/nahinintesher/My-Portfolio",
    date: "07/2024 - Present",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "START TO DO",
    description: "Simple Todo App to maintain daily workflow.",
    technologies: ["Flutter"],
    githubLink:
      "https://github.com/nahinintesher/Flutter-Projects/tree/main/todo_app",
    date: "05/2024 - 06/2024",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "ABOHAWA",
    description: "Simple Weather App to know the weather of any city.",
    technologies: ["Flutter"],
    githubLink:
      "https://github.com/nahinintesher/Flutter-Projects/tree/main/abohawa",
    date: "05/2024 - 06/2024",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "SIMPLE CALCULATOR",
    description: "Simple Calculator App for doing daily life calculations.",
    technologies: ["Java", "JavaFX"],
    githubLink:
      "https://github.com/nahinintesher/Java_Projects/tree/main/normalcalculator",
    date: "01/2023 - 02/2023",
    image:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "UNIT CONVERTER",
    description: "A Unit Converter app to convert length, time, temperature.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink:
      "https://github.com/nahinintesher/Dev/tree/main/Java%20Script/Converter",
    date: "01/2023 - 02/2023",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
  },
];

/* ---------------- Skills (CV onujayi) ---------------- */
export const skills = [
  {
    category: "Programming",
    items: ["Python", "C", "C++", "JavaScript", "TypeScript"],
  },
  {
    category: "AI / Machine Learning",
    items: ["PyTorch", "OpenCV", "Hugging Face", "Deep Learning"],
  },
  {
    category: "Web Development",
    items: ["Next.js", "React", "Node.js", "Express.js", "React Native"],
  },
  { category: "Database", items: ["PostgreSQL", "MySQL"] },
  { category: "Tools", items: ["Git", "GitHub", "Linux", "Adobe Illustrator"] },
];

/* ---------------- Achievements (CV onujayi) ---------------- */
export type Achievement = {
  year: string;
  title: string;
  tag: string;
  detail: string;
  link?: { label: string; href: string };
};

export const achievements: Achievement[] = [
  {
    year: "2025",
    title: "Champion — UIU CSE Project Show (Summer)",
    tag: "Champion",
    detail: "System Analysis & Design track.",
    link: {
      label: "Jiggasha",
      href: "https://github.com/NahinIntesher/Jiggasha",
    },
  },
  {
    year: "2024",
    title: "Champion — UIU CSE Project Show (Summer)",
    tag: "Champion",
    detail: "Database Management Systems track.",
    link: {
      label: "DiscoverYou",
      href: "https://github.com/NahinIntesher/DiscoverYou",
    },
  },
  {
    year: "2024",
    title: "2nd Runner-up — UIU CSE Project Show (Fall)",
    tag: "Contest",
    detail: "Software Engineering track — DiscoverYou App.",
  },
  {
    year: "2024",
    title: "3rd Runner-up — UIU CSE Project Show (Fall)",
    tag: "Contest",
    detail: "Advanced Object Oriented Programming track.",
    link: {
      label: "MiniGameMaster",
      href: "https://github.com/NahinIntesher/MiniGameMaster",
    },
  },
  {
    year: "2024",
    title: "1st Runner-up — UIU Juniors Programming Contest",
    tag: "Contest",
    detail: "Intra-university programming contest, Department of CSE.",
  },
  {
    year: "2022 -",
    title: "Academic Scholarship — United International University",
    tag: "Scholarship",
    detail:
      "100% tuition scholarship in 9 trimesters, and 50% in a further 3 trimesters.",
  },
];

/* ---------------- Competitive Programming (CV onujayi) ---------------- */
export type CpProfile = {
  platform: string;
  handle: string;
  url: string;
  detail: string;
};

export const competitiveProgramming: CpProfile[] = [
  {
    platform: "Codeforces",
    handle: "Nahin_Intesher",
    url: "https://codeforces.com/profile/Nahin_Intesher",
    detail: "270 problems solved",
  },
  {
    platform: "LeetCode",
    handle: "NahinIntesher",
    url: "https://leetcode.com/u/NahinIntesher/",
    detail: "41 problems solved",
  },
];

/* ---------------- Site index ---------------- */
export type Route = {
  no: string;
  href: string;
  label: string;
  short: string;
  desc: string;
};

export const routes: Route[] = [
  {
    no: "01",
    href: "/about",
    label: "About Me",
    short: "About",
    desc: "Academic biography, motivation, and long-term direction.",
  },
  {
    no: "02",
    href: "/research",
    label: "Research",
    short: "Research",
    desc: "Thesis on AI awareness, NutriSight, MCP security, INT8 quantization, and more.",
  },
  {
    no: "03",
    href: "/publications",
    label: "Publications & Research Output",
    short: "Publications",
    desc: "Thesis and unpublished manuscripts, with copy-ready BibTeX.",
  },
  {
    no: "04",
    href: "/education",
    label: "Education",
    short: "Education",
    desc: "B.Sc. at UIU (CGPA 3.93) and academic record.",
  },
  {
    no: "05",
    href: "/teaching",
    label: "Teaching & Academic Experience",
    short: "Teaching",
    desc: "Undergraduate TA at UIU and founder of Diganta Coaching Center.",
  },
  {
    no: "06",
    href: "/projects",
    label: "Projects",
    short: "Projects",
    desc: "Research builds, academic projects, and personal work.",
  },
  {
    no: "07",
    href: "/skills",
    label: "Technical Skills",
    short: "Skills",
    desc: "The working toolbox behind the research and teaching.",
  },
  {
    no: "08",
    href: "/achievements",
    label: "Achievements",
    short: "Achievements",
    desc: "Project Show championships, scholarships, and contest results.",
  },
  {
    no: "09",
    href: "/contact",
    label: "Contact",
    short: "Contact",
    desc: "Teaching, research, higher studies, and collaboration.",
  },
];

export const now = [
  { label: "Thesis", value: "Bridging the Gap — in preparation" },
  { label: "Papers", value: "Manuscripts written, not yet published" },
  { label: "Status", value: "Final trimester, B.Sc. CSE at UIU" },
];

export const reference = { name: "Dr. Novia Nurain", role: "Assistant Professor", department: "Department of Computer Science & Engineering", institution: "Bangladesh University of Engineering and Technology (BUET)", contact: "Contact details available on request." };
