import ProjectCard from "../../components/ProjectCard";

const personalProjects = [
  {
    title: "WEARQO",
    description: "WearQo is a fashion e-commerce company, sells brand stuff.",
    technologies: ["Next JS"],
    githubLink: "https://github.com/orgs/Wearqo/repositories",
    date: "07/2024 - Present",
  },
  {
    title: "Nahin Portfolio",
    description: "My portfolio website to know more about myself.",
    technologies: ["Next JS"],
    githubLink: "https://github.com/nahinintesher/My-Portfolio",
    date: "07/2024 - Present",
  },
  {
    title: "START TO DO",
    description: "Simple Todo App to maintain daily workflow.",
    technologies: ["Flutter"],
    githubLink:
      "https://github.com/nahinintesher/Flutter-Projects/tree/main/todo_app",
    date: "05/2024 - 06/2024",
  },
  {
    title: "ABOHAWA",
    description: "Simple Weather App to know the weather of any city.",
    technologies: ["Flutter"],
    githubLink:
      "https://github.com/nahinintesher/Flutter-Projects/tree/main/abohawa",
    date: "05/2024 - 06/2024",
  },
  {
    title: "SIMPLE CALCULATOR",
    description: "Simple Calculator App for doing daily life calculations.",
    technologies: ["Java", "JavaFX"],
    githubLink:
      "https://github.com/nahinintesher/Java_Projects/tree/main/normalcalculator",
    date: "01/2023 - 02/2023",
  },
  {
    title: "UNIT CONVERTER",
    description: "A Unit Converter app to convert length, time, temperature.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink:
      "https://github.com/nahinintesher/Dev/tree/main/Java%20Script/Converter",
    date: "01/2023 - 02/2023",
  },
];

const academicProjects = [
  {
    title: "DISCOVERYOU",
    description:
      "DiscoverYou is a platform where users can discover and develop their talents.",
    technologies: ["React JS", "Node JS", "MySQL"],
    githubLink: "https://github.com/nahinintesher/DiscoverYou",
    date: "08/2024 - Present",
  },
  {
    title: "TIC TAC TOE",
    description:
      "A Tic Tac Toe game where two people can play with each other.",
    technologies: ["Java", "JavaFX"],
    githubLink: "https://github.com/nahinintesher/Tic-Tac-Toe-Game",
    date: "03/2023 - 04/2023",
  },
];

function Projects() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#E7F5DC] text-white px-4 py-12">
      <div className="max-w-6xl w-full p-5">
        <h1 className="text-4xl sm:text-5xl font-bold mb-14 text-center text-[#728156]">
          My Projects
        </h1>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-[#728156] border-b-2 border-[#728156] pb-2">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-[#728156] border-b-2 border-[#B6C99B] pb-2">
            Academic Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
        {/* Add Research Projects section here if you have any */}
      </div>
    </main>
  );
}

export default Projects;
