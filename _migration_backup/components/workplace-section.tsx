"use client"

import { useState } from "react"
import { Play, BookOpen, Lightbulb, BarChart3, FileText } from "lucide-react"

const teachingModules = [
  {
    id: 1,
    title: "Quantum Computing Fundamentals",
    description: "A comprehensive guide to understanding quantum computing from basics to advanced concepts",
    type: "Video Series",
    domain: "Quantum Computing",
    duration: "12 hours",
    modules: [
      {
        name: "Introduction to Quantum Mechanics",
        content: "Learn the fundamental principles of quantum mechanics and how they apply to computing",
        hasVideo: true,
        hasNotes: true,
        hasDiagrams: true,
      },
      {
        name: "Quantum Gates and Circuits",
        content: "Understanding quantum gates, circuits, and their implementation",
        hasVideo: true,
        hasNotes: true,
        hasDiagrams: true,
      },
      {
        name: "Quantum Algorithms",
        content: "Deep dive into Shor's algorithm, Grover's algorithm, and more",
        hasVideo: true,
        hasNotes: true,
        hasDiagrams: true,
      },
    ],
  },
  {
    id: 2,
    title: "AI & RAG Systems Deep Dive",
    description: "Master Retrieval-Augmented Generation systems and modern AI architectures",
    type: "Interactive Course",
    domain: "AI & RAG Systems",
    duration: "8 hours",
    modules: [
      {
        name: "RAG Architecture Overview",
        content: "Understanding the components and flow of RAG systems",
        hasVideo: true,
        hasNotes: true,
        hasDiagrams: true,
      },
      {
        name: "Vector Databases & Embeddings",
        content: "Working with embeddings, vector stores, and similarity search",
        hasVideo: true,
        hasNotes: true,
        hasDiagrams: true,
      },
      {
        name: "Building Production RAG Systems",
        content: "Practical implementation and deployment strategies",
        hasVideo: true,
        hasNotes: true,
        hasDiagrams: true,
      },
    ],
  },
  {
    id: 3,
    title: "Philosophy of AI & Ethics",
    description: "Exploring the philosophical implications and ethical considerations of AI",
    type: "Seminar Series",
    domain: "Philosophy & Cognition",
    duration: "6 hours",
    modules: [
      {
        name: "AI Consciousness & Sentience",
        content: "Philosophical perspectives on machine consciousness",
        hasVideo: true,
        hasNotes: true,
        hasDiagrams: false,
      },
      {
        name: "Ethical AI Development",
        content: "Building AI systems with ethical considerations",
        hasVideo: true,
        hasNotes: true,
        hasDiagrams: true,
      },
      {
        name: "Future of AI & Society",
        content: "Discussing the societal impact and future of AI",
        hasVideo: true,
        hasNotes: true,
        hasDiagrams: false,
      },
    ],
  },
]

const domains = ["All", "Quantum Computing", "AI & RAG Systems", "Philosophy & Cognition"]

export function WorkplaceSection() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null)
  const [selectedDomain, setSelectedDomain] = useState("All")

  const filteredModules =
    selectedDomain === "All" ? teachingModules : teachingModules.filter((m) => m.domain === selectedDomain)

  return (
    <section id="workplace" className="min-h-screen flex items-center px-6 lg:px-12 py-24">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold mb-4 text-white relative inline-block">
          Workplace & Teaching
          <span className="absolute -bottom-2 left-0 w-20 h-0.5 bg-primary" />
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          Learn from my research, projects, and insights through videos, diagrams, and interactive content
        </p>

        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-gray-400 uppercase">Filter by domain:</span>
          <div className="flex flex-wrap gap-2">
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                  selectedDomain === domain
                    ? "bg-primary text-black font-semibold"
                    : "bg-white/5 text-gray-300 border border-white/10 hover:border-primary/30"
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredModules.length > 0 ? (
            filteredModules.map((module) => (
              <div
                key={module.id}
                className="border border-white/10 rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
              >
                {/* Module Header */}
                <button
                  onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                  className="w-full p-6 flex items-start justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white">{module.title}</h3>
                      <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary border border-primary/30">
                        {module.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{module.description}</p>
                    <p className="text-xs text-gray-500">Duration: {module.duration}</p>
                  </div>
                  <Play
                    className={`h-5 w-5 text-primary transition-transform flex-shrink-0 ml-4 ${
                      expandedModule === module.id ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {/* Module Content */}
                {expandedModule === module.id && (
                  <div className="border-t border-white/10 p-6 bg-white/2 space-y-4">
                    {module.modules.map((lesson, index) => (
                      <div
                        key={index}
                        className="border border-white/5 rounded-lg p-4 hover:border-primary/20 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-white mb-1">{lesson.name}</h4>
                            <p className="text-xs text-gray-400">{lesson.content}</p>
                          </div>
                        </div>

                        {/* Learning Resources */}
                        <div className="flex flex-wrap gap-2">
                          {lesson.hasVideo && (
                            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors text-xs font-medium">
                              <Play className="h-3 w-3" />
                              Video
                            </button>
                          )}
                          {lesson.hasNotes && (
                            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors text-xs font-medium">
                              <FileText className="h-3 w-3" />
                              Notes
                            </button>
                          )}
                          {lesson.hasDiagrams && (
                            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 transition-colors text-xs font-medium">
                              <BarChart3 className="h-3 w-3" />
                              Diagrams
                            </button>
                          )}
                        </div>
                      </div>
                    ))}

                    {/* Learning Path */}
                    <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-sm font-semibold text-white mb-1">Learning Path</h5>
                          <p className="text-xs text-gray-300">
                            Start with the fundamentals, progress through intermediate concepts, and master advanced
                            topics. Each module builds upon the previous one.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">No teaching modules found in this domain</p>
            </div>
          )}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border border-white/10 hover:border-primary/30 transition-colors">
            <BookOpen className="h-5 w-5 text-primary mb-3" />
            <h4 className="text-sm font-semibold text-white mb-1">Research Papers</h4>
            <p className="text-xs text-gray-400">Access curated research papers and academic resources</p>
          </div>
          <div className="p-4 rounded-lg border border-white/10 hover:border-primary/30 transition-colors">
            <BarChart3 className="h-5 w-5 text-primary mb-3" />
            <h4 className="text-sm font-semibold text-white mb-1">Interactive Visualizations</h4>
            <p className="text-xs text-gray-400">Explore complex concepts through interactive diagrams</p>
          </div>
          <div className="p-4 rounded-lg border border-white/10 hover:border-primary/30 transition-colors">
            <Lightbulb className="h-5 w-5 text-primary mb-3" />
            <h4 className="text-sm font-semibold text-white mb-1">Code Examples</h4>
            <p className="text-xs text-gray-400">Practical code snippets and implementation guides</p>
          </div>
        </div>
      </div>
    </section>
  )
}
