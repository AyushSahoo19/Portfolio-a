"use client"

import { Microscope, Lightbulb, Rocket, FileText, ExternalLink } from "lucide-react"

const researchProjects = [
  {
    title: "Quantum Machine Learning Framework",
    category: "Quantum Computing",
    description:
      "Developing novel quantum algorithms for machine learning applications, exploring the intersection of quantum mechanics and artificial intelligence to solve complex optimization problems.",
    tools: ["Qiskit", "TensorFlow Quantum", "Python", "Cirq"],
    impact: "Achieved 40% faster convergence on specific optimization tasks",
    status: "Ongoing",
    icon: Microscope,
  },
  {
    title: "RAG System for Scientific Literature",
    category: "AI Research",
    description:
      "Building an advanced Retrieval-Augmented Generation system specifically designed for scientific paper analysis, enabling researchers to extract insights from vast academic databases.",
    tools: ["LangChain", "Pinecone", "OpenAI", "FastAPI"],
    impact: "Processes 10,000+ papers with 95% accuracy",
    status: "Published",
    icon: FileText,
  },
  {
    title: "Biological Computing Simulation",
    category: "BioComputing",
    description:
      "Simulating neural networks inspired by biological systems, investigating how natural computation can inform artificial intelligence architectures.",
    tools: ["NEURON", "Brian2", "NumPy", "Matplotlib"],
    impact: "Novel insights into energy-efficient computing",
    status: "Ongoing",
    icon: Lightbulb,
  },
  {
    title: "Quantum Finance Models",
    category: "Quantum Finance",
    description:
      "Applying quantum computing principles to financial modeling, portfolio optimization, and risk assessment in modern financial markets.",
    tools: ["Q#", "Python", "QuantLib", "Azure Quantum"],
    impact: "Improved portfolio optimization by 25%",
    status: "Completed",
    icon: Rocket,
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="min-h-screen py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm font-medium mb-2 tracking-wider uppercase">Research & Innovation</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Exploring the frontiers of
            <br />
            <span className="text-primary">science and technology</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Domain-specific research projects focusing on quantum computing, AI systems, biological computing, and
            innovative solutions to complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {researchProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={index}
                className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                {/* Status badge */}
                <div className="absolute top-6 right-6">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      project.status === "Ongoing"
                        ? "bg-primary/10 text-primary"
                        : project.status === "Published"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-blue-500/10 text-blue-500"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{project.category}</p>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <p className="text-sm font-medium mb-2">Tools & Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-background border border-border rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm">
                    <span className="text-muted-foreground">Impact:</span>{" "}
                    <span className="text-foreground font-medium">{project.impact}</span>
                  </p>
                </div>

                <ExternalLink className="absolute bottom-6 right-6 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
