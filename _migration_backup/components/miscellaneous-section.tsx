"use client"

import { Sparkles, Layers, Network, Zap, ExternalLink, ArrowRight } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Quantum-Biological Neural Interface",
    tagline: "Bridging quantum computing with biological systems",
    description:
      "A revolutionary framework combining quantum algorithms with biological neural networks to create adaptive computing systems that learn from organic processes.",
    ecosystem: "Custom quantum-bio framework",
    domains: ["Quantum Computing", "Neuroscience", "AI"],
    topics: ["Research", "Innovation"],
    subjects: ["Quantum", "Biology"],
    status: "Active Research",
    innovation: "First-ever integration of quantum entanglement principles with biological neural plasticity",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    accentColor: "text-cyan-400",
  },
  {
    id: 2,
    title: "Philosophical AI Reasoning Engine",
    tagline: "Teaching machines to think philosophically",
    description:
      "An AI system that applies philosophical reasoning frameworks (Socratic method, dialectics, phenomenology) to solve complex ethical and existential problems.",
    ecosystem: "PhilosoAI Framework",
    domains: ["Philosophy", "AI Ethics", "Logic"],
    topics: ["Research", "Theory"],
    subjects: ["Philosophy", "AI"],
    status: "Prototype",
    innovation: "First AI to implement multi-paradigm philosophical reasoning with self-questioning capabilities",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    accentColor: "text-purple-400",
  },
  {
    id: 3,
    title: "Cosmological Data Synthesis Platform",
    tagline: "Understanding the universe through data",
    description:
      "A platform that synthesizes cosmological observations, theoretical physics models, and computational simulations to predict cosmic phenomena and dark matter behavior.",
    ecosystem: "CosmosNet Framework",
    domains: ["Cosmology", "Data Science", "Physics"],
    topics: ["Research", "Analysis"],
    subjects: ["Cosmology", "Physics"],
    status: "Development",
    innovation: "Novel approach to dark matter detection using machine learning on gravitational lensing data",
    color: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-500/30",
    accentColor: "text-indigo-400",
  },
  {
    id: 4,
    title: "Cross-Domain Genius Pattern Analyzer",
    tagline: "Decoding the DNA of genius",
    description:
      "An analytical system that identifies common patterns, strategies, and cognitive frameworks used by geniuses across different domains to achieve mastery.",
    ecosystem: "GeniusMap Framework",
    domains: ["Psychology", "Data Analysis", "History"],
    topics: ["Research", "Analysis"],
    subjects: ["Psychology", "History"],
    status: "Research Phase",
    innovation: "First comprehensive cross-domain analysis of genius-level achievement patterns",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
    accentColor: "text-amber-400",
  },
  {
    id: 5,
    title: "Temporal Knowledge Graph",
    tagline: "Mapping knowledge evolution through time",
    description:
      "A dynamic knowledge graph that tracks how ideas, theories, and innovations evolve and interconnect across time, revealing hidden patterns in human intellectual progress.",
    ecosystem: "ChronoGraph Framework",
    domains: ["Knowledge Engineering", "History", "Network Science"],
    topics: ["Research", "Innovation"],
    subjects: ["Knowledge", "History"],
    status: "Active Development",
    innovation: "First temporal knowledge graph with predictive capabilities for future innovation trajectories",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    accentColor: "text-emerald-400",
  },
  {
    id: 6,
    title: "Synthetic Intuition Engine",
    tagline: "Building artificial intuition from first principles",
    description:
      "A system that develops intuitive reasoning capabilities by combining pattern recognition, analogical thinking, and heuristic learning to make leaps of insight.",
    ecosystem: "IntuiNet Framework",
    domains: ["Cognitive Science", "AI", "Mathematics"],
    topics: ["Research", "Theory"],
    subjects: ["AI", "Cognition"],
    status: "Experimental",
    innovation: "First attempt to formalize and implement intuitive reasoning in computational systems",
    color: "from-rose-500/20 to-red-500/20",
    borderColor: "border-rose-500/30",
    accentColor: "text-rose-400",
  },
]

export function MiscellaneousSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null)
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)

  const domains = Array.from(new Set(projects.flatMap((p) => p.domains)))
  const topics = Array.from(new Set(projects.flatMap((p) => p.topics)))
  const subjects = Array.from(new Set(projects.flatMap((p) => p.subjects)))

  const filteredProjects = projects.filter((project) => {
    if (selectedDomain && !project.domains.includes(selectedDomain)) return false
    if (selectedTopic && !project.topics.includes(selectedTopic)) return false
    if (selectedSubject && !project.subjects.includes(selectedSubject)) return false
    return true
  })

  return (
    <section id="miscellaneous" className="min-h-screen py-20 px-6 lg:px-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Never Done Before</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Miscellaneous
            <span className="block text-primary mt-2">Innovations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cross-domain projects that challenge conventional boundaries. Each project represents a unique perspective,
            combining multiple disciplines to create something that has never been explored before.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Filter:</span>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDomain(null)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                selectedDomain === null
                  ? "bg-primary text-background"
                  : "bg-background border border-border hover:border-primary"
              }`}
            >
              All Domains
            </button>
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedDomain === domain
                    ? "bg-primary text-background"
                    : "bg-background border border-border hover:border-primary"
                }`}
              >
                {domain}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTopic(null)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                selectedTopic === null
                  ? "bg-primary text-background"
                  : "bg-background border border-border hover:border-primary"
              }`}
            >
              All Topics
            </button>
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedTopic === topic
                    ? "bg-primary text-background"
                    : "bg-background border border-border hover:border-primary"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedSubject(null)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                selectedSubject === null
                  ? "bg-primary text-background"
                  : "bg-background border border-border hover:border-primary"
              }`}
            >
              All Subjects
            </button>
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedSubject === subject
                    ? "bg-primary text-background"
                    : "bg-background border border-border hover:border-primary"
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Unique Hexagonal/Overlapping Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${index % 3 === 0 ? "lg:col-span-2" : ""}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div
                className={`relative p-8 rounded-2xl border ${project.borderColor} bg-gradient-to-br ${project.color} backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10`}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium border border-border">
                    {project.status}
                  </span>
                </div>

                {/* Project Header */}
                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`p-3 rounded-xl bg-background/50 backdrop-blur-sm border ${project.borderColor}`}>
                      <Network className={`h-6 w-6 ${project.accentColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className={`text-sm ${project.accentColor} font-medium`}>{project.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                {/* Innovation Highlight */}
                <div className="mb-6 p-4 rounded-lg bg-background/30 backdrop-blur-sm border border-border/50">
                  <div className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">Innovation</p>
                      <p className="text-sm text-foreground/90">{project.innovation}</p>
                    </div>
                  </div>
                </div>

                {/* Domains */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Cross-Domain
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.domains.map((domain) => (
                      <span
                        key={domain}
                        className="px-3 py-1 rounded-full bg-background/50 backdrop-blur-sm text-xs font-medium border border-border"
                      >
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ecosystem */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Ecosystem:</span> {project.ecosystem}
                    </span>
                  </div>
                  <button
                    className={`flex items-center gap-2 text-sm font-medium ${project.accentColor} hover:gap-3 transition-all duration-300`}
                  >
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}
                />
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects match your filters. Try adjusting your selection.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 p-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Have a Unique Idea?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These projects represent just the beginning. If you have innovative ideas that cross traditional boundaries,
            let's collaborate and create something unprecedented.
          </p>
          <button className="px-8 py-3 rounded-full bg-primary text-background font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
            Start a Conversation
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
