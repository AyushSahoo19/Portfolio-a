import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Quantum Finance Analyzer",
    description:
      "Advanced quantum computing application for financial modeling and risk analysis. Implements quantum algorithms for portfolio optimization and market prediction.",
    technologies: ["Qiskit", "Python", "TensorFlow", "React", "FastAPI"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "AI-Powered RAG System",
    description:
      "Retrieval-Augmented Generation system for intelligent document processing and knowledge extraction. Built with custom embeddings and vector databases.",
    technologies: ["LangChain", "OpenAI", "Pinecone", "Next.js", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Neural Network Visualizer",
    description:
      "Interactive tool for visualizing and understanding deep learning architectures. Real-time training visualization and model interpretation.",
    technologies: ["PyTorch", "D3.js", "WebGL", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Distributed Computing Framework",
    description:
      "Custom framework for distributed computing and parallel processing. Optimized for large-scale data processing and machine learning workloads.",
    technologies: ["Go", "Kubernetes", "Redis", "gRPC"],
    github: "https://github.com",
    demo: null,
  },
]

export function ProjectsSection() {
  return (
    <section id="work" className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-16 text-white">Selected work</h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

              <p className="text-sm text-gray-500">{project.technologies.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
