import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Real-Time ETL Data Pipeline",
    description: "Distributed processing system for massive data ingestion and transformation using PySpark and Docker. Implementation of Lambda architecture for batch and streaming processing.",
    techs: ["PySpark", "Docker", "PostgreSQL", "Python", "Kafka"],
    github: "#",
    architecture: "#"
  },
  {
    title: "Scalable Data Warehouse",
    description: "Design and implementation of a dimensional data warehouse for business analytics. Complex query optimization and data modeling following Kimball methodology.",
    techs: ["SQL", "PostgreSQL", "Python", "dbt", "Airflow"],
    github: "#",
    architecture: "#"
  },
  {
    title: "Data Quality Monitoring System",
    description: "Automated framework for data quality validation and monitoring across multiple sources. Implementation of alerts and dashboards for tracking quality metrics.",
    techs: ["Python", "MongoDB", "Docker", "Grafana"],
    github: "#",
    architecture: "#"
  },
  {
    title: "Multi-Source Data Aggregation API",
    description: "REST API for aggregation and normalization of data from multiple relational and NoSQL databases. Implementation of distributed caching and rate limiting.",
    techs: ["Python", "MongoDB", "PostgreSQL", "Redis", "FastAPI"],
    github: "#",
    architecture: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-4 font-mono">
          Data Engineering Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Portfolio of projects focused on scalable architectures, distributed processing, and data quality.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-2 hover:border-purple-400 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-mono text-purple-700">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="font-mono border-purple-300 text-purple-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-gray-300 hover:border-purple-400"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GitBranch className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-gray-300 hover:border-purple-400"
                    asChild
                  >
                    <a href={project.architecture} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Architecture
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
