"use client"

import { ExternalLink, ChevronDown } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    year: "2024 — Present",
    role: "Software Engineer",
    company: "Tata Steel",
    description:
      "Developing enterprise-scale software solutions for one of India's largest steel manufacturers. Working on full-stack applications, AI integration, and process optimization systems.",
    technologies: ["React", "Node.js", "Python", "AI/ML", "Cloud Computing"],
    link: "https://tatasteel.com",
    projects: [
      {
        name: "Steel Production Optimization System",
        description: "AI-powered system for optimizing steel production processes",
        tools: ["Python", "TensorFlow", "React", "PostgreSQL"],
      },
      {
        name: "Enterprise Data Dashboard",
        description: "Real-time analytics dashboard for production metrics",
        tools: ["React", "Node.js", "MongoDB", "D3.js"],
      },
      {
        name: "Supply Chain Management Platform",
        description: "Full-stack application for supply chain tracking",
        tools: ["Next.js", "Python", "PostgreSQL", "Redis"],
      },
    ],
  },
  {
    year: "2023 — 2024",
    role: "Research & Development",
    company: "Independent Projects",
    description:
      "Conducted extensive research in quantum computing, quantum finance, and AI systems. Developed proprietary frameworks for accelerated learning and innovation in computer science.",
    technologies: ["Quantum Computing", "Python", "TensorFlow", "Research"],
    link: null,
    projects: [
      {
        name: "Quantum Algorithm Research",
        description: "Research on quantum algorithms for optimization problems",
        tools: ["Qiskit", "Python", "NumPy", "Jupyter"],
      },
      {
        name: "AI RAG System Development",
        description: "Building retrieval-augmented generation systems",
        tools: ["LangChain", "OpenAI", "Python", "Pinecone"],
      },
      {
        name: "Quantum Finance Models",
        description: "Exploring quantum computing applications in finance",
        tools: ["Qiskit Finance", "Python", "NumPy", "Pandas"],
      },
    ],
  },
]

export function ExperienceSection() {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null)

  return (
    <section id="experience" className="min-h-screen flex items-center px-6 lg:px-12 py-24">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-16 text-white relative inline-block">
          Work experience
          <span className="absolute -bottom-2 left-0 w-20 h-0.5 bg-primary" />
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="w-10 h-10 rounded-lg bg-white/5 mb-6 flex items-center justify-center">
                <div className="w-6 h-6 rounded bg-white/10" />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-white italic">{exp.company}</h3>

              <p className="text-sm text-gray-400 mb-3">
                <span className="font-semibold">{exp.role}</span> ({exp.year})
              </p>

              <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl">{exp.description}</p>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
                {exp.technologies.map((tech, i) => (
                  <span key={tech}>
                    {tech}
                    {i < exp.technologies.length - 1 && " · "}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setExpandedCompany(expandedCompany === exp.company ? null : exp.company)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all mb-6 text-sm font-medium text-primary"
              >
                <span>Projects & Tools</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${expandedCompany === exp.company ? "rotate-180" : ""}`}
                />
              </button>

              {expandedCompany === exp.company && (
                <div className="ml-6 mb-6 space-y-4 border-l border-primary/30 pl-6">
                  {exp.projects.map((project, i) => (
                    <div key={i} className="group/project">
                      <h4 className="text-sm font-semibold text-white mb-1 group-hover/project:text-primary transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-xs text-gray-400 mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  View company
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
