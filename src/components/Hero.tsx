import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-20">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-white font-mono">
            Addison Amin Reyes Cedano
          </h1>
          <h2 className="text-purple-400 font-mono">
            Ingeniero de Datos y Desarrollador de Software
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Construyendo pipelines de datos fiables y escalables con experiencia en desarrollo de software.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToProjects}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6"
          >
            Ver Proyectos de Datos
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
