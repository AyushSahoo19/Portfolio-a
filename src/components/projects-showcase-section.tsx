
import { useState } from "react"
import { ChevronDown, Github, Code2, Lightbulb, Wrench, CheckCircle, Globe } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Lumina",
    description: "A high-end, editorial-style link-saving dashboard and workspace designed for curated discovery and minimalist digital organization.",
    category: "Web Application",
    domain: "Productivity",
    status: "Live & Deployed",
    stages: ["Idea", "Research", "Development", "Testing"],
    currentStage: 3,
    tools: ["Vanilla JS", "Tailwind CSS", "HTML5", "Lucide Icons", "Thum.io API"],
    problemSolved: "Organizing fragmented digital resources into a cohesive, visually stunning dashboard with real-time link previews.",
    documentation: "Fully responsive architecture with dynamic content rendering and category-based filtering.",
    github: "https://github.com/AyushSahoo19/Lumina",
    url: "https://lumina-six-xi.vercel.app/",
    features: [
      "Editorial-style sidebar navigation",
      "Dynamic thumbnail generation for links",
      "Dual-layer filtering (Category + Sub-category)",
      "Ultra-minimalist Bento grid layout",
    ],
  },
  {
    id: 2,
    title: "Eng-10X",
    description: "An advanced engineering educational platform focused on mastering the software development lifecycle and modern tech stacks.",
    category: "Educational Platform",
    domain: "Engineering Education",
    status: "Live & Deployed",
    stages: ["Idea", "Research", "Development", "Testing"],
    currentStage: 3,
    tools: ["Next.js 15", "React 19", "Tailwind CSS 4.0", "Framer Motion", "Vercel"],
    problemSolved: "Providing a structured roadmap for engineers to master high-level system design and agentic AI implementation.",
    documentation: "Comprehensive guides on software engineering life-cycles and veteran-led deep dives.",
    github: "https://github.com/AyushSahoo19/ENG-10X",
    url: "https://eng-10-x.vercel.app/",
    features: [
      "Lifecycle matrix implementation",
      "High-density 'Engineering Core' matrix",
      "Modular handbook structure",
      "Advanced motion design and transitions",
    ],
  },
  {
    id: 3,
    title: "LibOS",
    description: "An autonomous coding and engineering playbook repository integrated with high-signal assets for rapid development.",
    category: "DevOS / Playbook",
    domain: "Autonomous Systems",
    status: "Live & Deployed",
    stages: ["Idea", "Research", "Development", "Testing"],
    currentStage: 3,
    tools: ["Next.js", "Radix UI", "Tailwind CSS", "Lucide Icons", "GitHub API"],
    problemSolved: "Centralizing engineering playbooks and marketing assets for rapid product launches and developer efficiency.",
    documentation: "Integrated G-Stack assets and autonomous coding engineering playbooks.",
    github: "https://github.com/AyushSahoo19/LibOS",
    url: "https://lib-os.vercel.app/",
    features: [
      "Autonomous coding playbook integration",
      "Marketing asset management",
      "G-Stack repository synchronization",
      "Product Hunt launch optimization kit",
    ],
  },
]

const domains = ["All", "Productivity", "Engineering Education", "Autonomous Systems"]

const stageIcons = {
  Idea: Lightbulb,
  Research: Code2,
  Development: Wrench,
  Testing: CheckCircle,
}

export function ProjectsShowcaseSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [selectedDomain, setSelectedDomain] = useState("All")

  const filteredProjects = selectedDomain === "All" ? projects : projects.filter((p) => p.domain === selectedDomain)

  return (
    <section id="projects-showcase" className="min-h-screen flex items-center px-6 lg:px-12 py-24">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold mb-4 text-white relative inline-block">
          All Projects
          <span className="absolute -bottom-2 left-0 w-20 h-0.5 bg-primary" />
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          Detailed breakdown of projects with code, documentation, and development stages
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
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="border border-white/10 rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
              >
                {/* Project Header */}
                <button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="w-full p-6 flex items-start justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary border border-primary/30">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{project.description}</p>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform flex-shrink-0 ml-4 ${
                      expandedProject === project.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Project Details */}
                {expandedProject === project.id && (
                  <div className="border-t border-white/10 p-6 bg-white/2 space-y-6">
                    {/* Development Stages */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-4">Development Stages</h4>
                      <div className="flex items-center gap-2">
                        {project.stages.map((stage, index) => {
                          const Icon = stageIcons[stage as keyof typeof stageIcons]
                          const isCompleted = index < project.currentStage
                          const isCurrent = index === project.currentStage
                          return (
                            <div key={stage} className="flex items-center">
                              <div
                                className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all ${
                                  isCompleted || isCurrent
                                    ? "bg-primary/20 border-primary text-primary"
                                    : "border-white/20 text-gray-500"
                                }`}
                              >
                                <Icon className="h-4 w-4" />
                              </div>
                              {index < project.stages.length - 1 && (
                                <div className={`h-0.5 w-8 mx-1 ${isCompleted ? "bg-primary" : "bg-white/10"}`} />
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Problem & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">Problem Solved</h4>
                        <p className="text-sm text-gray-300">{project.problemSolved}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">Status</h4>
                        <p className="text-sm text-primary font-medium">{project.status}</p>
                      </div>
                    </div>

                    {/* Tools & Technologies */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="text-sm text-gray-300 flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Front Page Showcase */}
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all">
                      <img 
                        src={`https://s.wordpress.com/mshots/v1/${project.url}?w=1200`} 
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p className="text-white text-xs font-medium">Click View Live Site to explore</p>
                      </div>
                    </div>

                    {/* Documentation & Code */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3">Links & Documentation</h4>
                      <p className="text-sm text-gray-300 mb-4">{project.documentation}</p>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-black hover:bg-primary/90 transition-colors text-sm font-bold"
                        >
                          <Globe className="h-4 w-4" />
                          View Live Site
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors text-sm font-medium"
                        >
                          <Github className="h-4 w-4" />
                          GitHub Repo
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">No projects found in this domain</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
