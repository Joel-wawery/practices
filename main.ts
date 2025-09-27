// src/main.ts
interface ProjectConfig {
  name: string;
  version: string;
  technologies: string[];
}

const config: ProjectConfig = {
  name: "Full-Stack Journey",
  version: "1.0.0",
  technologies: ["TypeScript", "Node.js", "Git"]
};

function displayConfig(cfg: ProjectConfig): void {
  console.log(`Project: ${cfg.name} v${cfg.version}`);
  console.log(`Tech Stack: ${cfg.technologies.join(", ")}`);
}

displayConfig(config);