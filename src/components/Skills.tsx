import React from "react";
import { Code, Server, Database, Layout } from "lucide-react";

const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript", "Typescript", "React", "Tailwind"],
  backend: ["Node.js", "Express", "Java", "Spring", "MySQL", "SQLite"],
  tools: ["Git", "VS Code", "npm", "Maven"],
  soft: ["Problem Solving", "Team Collaboration", "Communication"],
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            title="Frontend"
            skills={skills.frontend}
            icon={<Layout className="w-6 h-6" />}
          />
          <SkillCard
            title="Backend"
            skills={skills.backend}
            icon={<Server className="w-6 h-6" />}
          />
          <SkillCard
            title="Development Tools"
            skills={skills.tools}
            icon={<Code className="w-6 h-6" />}
          />
          <SkillCard
            title="Soft Skills"
            skills={skills.soft}
            icon={<Database className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  title,
  skills,
  icon,
}: {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
