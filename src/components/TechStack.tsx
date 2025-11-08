import { 
  Code2, 
  Database, 
  Server,
  Cloud,
  Layers,
  Globe
} from "lucide-react";

const techCategories = [
  {
    title: "Languages",
    icon: Code2,
    techs: ["Python", "JavaScript", "TypeScript", "SQL", "NoSQL"],
    color: "purple"
  },
  {
    title: "Data Engineering",
    icon: Layers,
    techs: ["Pandas", "NumPy"],
    color: "purple"
  },
  {
    title: "Databases & Storage",
    icon: Database,
    techs: ["PostgreSQL", "Oracle DB", "MongoDB"],
    color: "purple"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    techs: ["Docker"],
    color: "purple"
  },
  {
    title: "Backend Frameworks",
    icon: Server,
    techs: ["Django", "Flask", "FastAPI", "Node.js", "Express.js"],
    color: "purple"
  },
  {
    title: "Web Technologies",
    icon: Globe,
    techs: ["HTML5", "CSS3"],
    color: "purple"
  }
];

export function TechStack() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 font-mono">
          Stack Tecnológico
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="border-2 border-gray-200 p-6 hover:border-purple-400 transition-colors duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-purple-100 rounded-lg">
                    <Icon className="h-12 w-12 text-purple-600" />
                  </div>
                  <h3 className="font-mono text-gray-900">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.techs.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm border border-gray-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
