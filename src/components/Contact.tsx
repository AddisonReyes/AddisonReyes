import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-4 font-mono text-white">
          Contacto
        </h2>
        <p className="text-center text-gray-400 mb-12">
          ¿Interesado en colaborar? Conectemos.
        </p>
        
        <div className="max-w-xl mx-auto">
          <h3 className="font-mono text-purple-400 mb-8 text-center">
            Encuéntrame en:
          </h3>
          
          <div className="space-y-4">
            <a 
              href="https://github.com/AddisonReyes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group"
            >
              <div className="p-3 bg-gray-900 group-hover:bg-purple-900/30 transition-colors">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <div className="font-mono">GitHub</div>
                <div className="text-sm text-gray-500">@AddisonReyes</div>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/addison-reyes-9aa017208/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group"
            >
              <div className="p-3 bg-gray-900 group-hover:bg-purple-900/30 transition-colors">
                <Linkedin className="h-6 w-6" />
              </div>
              <div>
                <div className="font-mono">LinkedIn</div>
                <div className="text-sm text-gray-500">Addison Reyes</div>
              </div>
            </a>
            
            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-3 bg-gray-900">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <div className="font-mono">Email</div>
                <div className="text-sm text-gray-500">addison.reyes@email.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
