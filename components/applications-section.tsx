"use client"

import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"

const applications = [
  {
    title: "LibOS",
    description: "The Ultimate Library — A curated, minimalist directory representing the absolute best repositories, tools, frameworks, and workflows for modern developers and innovators.",
    problem: "Fragmented engineering resources and high-noise developer environments",
    solution: "A centralized, high-signal repository engine with curated collections",
    tools: ["Next.js", "Radix UI", "Tailwind CSS", "Lucide Icons", "GitHub API"],
    metrics: ["Curated Collections", "Minimalist UX", "Repo Engine"],
    github: "https://github.com/AyushSahoo19/LibOS",
    live: "https://lib-os.vercel.app/",
    image: "https://s.wordpress.com/mshots/v1/https://lib-os.vercel.app/?w=1200",
    domain: "Engineering",
    topic: "Playbooks",
    subject: "Automation",
  },
  {
    title: "Lumina",
    description: "Curated Discovery — Your minimal digital workspace for seamless exploration and high-end resource organization.",
    problem: "Digital clutter and lack of editorial-grade discovery tools",
    solution: "A bespoke workspace with Bento-grid layouts and dual-layer filtering",
    tools: ["Vanilla JS", "Tailwind CSS", "HTML5", "Lucide Icons", "Thum.io API"],
    metrics: ["Editorial UX", "Seamless Exploration", "Bento Layout"],
    github: "https://github.com/AyushSahoo19/Lumina",
    live: "https://lumina-six-xi.vercel.app/",
    image: "https://s.wordpress.com/mshots/v1/https://lumina-six-xi.vercel.app/?w=1200",
    domain: "Productivity",
    topic: "Dashboard",
    subject: "UX/UI",
  },
  {
    title: "Polymath (Eng-10X)",
    description: "Master Anything — An advanced educational platform covering AI, ML, Quantum Computing, Neurology, and Quantum ML.",
    problem: "Lack of structured, high-level roadmaps for complex engineering domains",
    solution: "Interactive lifecycle matrices and multi-domain engineering roadmaps",
    tools: ["Next.js 15", "React 19", "Tailwind CSS 4.0", "Framer Motion", "Vercel"],
    metrics: ["Multi-Domain", "Advanced Roadmaps", "Motion Design"],
    github: "https://github.com/AyushSahoo19/ENG-10X",
    live: "https://eng-10-x.vercel.app/",
    image: "https://s.wordpress.com/mshots/v1/https://eng-10-x.vercel.app/?w=1200",
    domain: "Education",
    topic: "Polymathy",
    subject: "Engineering",
  },
]

export function ApplicationsSection() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null)
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)

  const domains = Array.from(new Set(applications.map((app) => app.domain)))
  const topics = Array.from(new Set(applications.map((app) => app.topic)))
  const subjects = Array.from(new Set(applications.map((app) => app.subject)))

  const filteredApplications = applications.filter((app) => {
    if (selectedDomain && app.domain !== selectedDomain) return false
    if (selectedTopic && app.topic !== selectedTopic) return false
    if (selectedSubject && app.subject !== selectedSubject) return false
    return true
  })

  return (
    <section id="applications" className="min-h-screen py-20 px-6 lg:px-16 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm font-medium mb-2 tracking-wider uppercase">Full-Stack Applications</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Building products that
            <br />
            <span className="text-primary">solve real problems</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Production-ready applications delivering value to users across research, education, and business domains.
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

        <div className="space-y-12">
          {filteredApplications.map((app, index) => (
            <div
              key={index}
              className={`group grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                  <img src={app.image || "/placeholder.svg"} alt={app.title} className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{app.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{app.description}</p>

                {/* Problem & Solution */}
                <div className="space-y-3 mb-6">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1 bg-red-500/50 rounded-full" />
                    <div>
                      <p className="text-sm font-medium text-red-500">Problem</p>
                      <p className="text-sm text-muted-foreground">{app.problem}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1 bg-primary rounded-full" />
                    <div>
                      <p className="text-sm font-medium text-primary">Solution</p>
                      <p className="text-sm text-muted-foreground">{app.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div className="mb-6">
                  <p className="text-sm font-medium mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {app.tools.map((tool, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-background border border-border rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {app.metrics.map((metric, i) => (
                    <div key={i} className="text-center p-3 bg-card border border-border/50 rounded-lg">
                      <p className="text-xs text-muted-foreground">{metric}</p>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={app.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                  <a
                    href={app.live}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredApplications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No applications match your filters. Try adjusting your selection.</p>
          </div>
        )}
      </div>
    </section>
  )
}
