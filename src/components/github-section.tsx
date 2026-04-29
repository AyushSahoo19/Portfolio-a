import { Github, Star, GitFork, ExternalLink, Code2, Terminal, Zap, Brain } from "lucide-react"

const myRepos = [
  {
    name: "LibOS",
    description: "The Ultimate Library — A curated, high-signal repository engine for modern developers and innovators.",
    stars: 24,
    forks: 5,
    language: "TypeScript",
    url: "https://github.com/AyushSahoo19/LibOS",
    tag: "Productivity",
  },
  {
    name: "Lumina",
    description: "Bespoke digital workspace for seamless exploration and editorial-grade resource organization.",
    stars: 18,
    forks: 3,
    language: "JavaScript",
    url: "https://github.com/AyushSahoo19/Lumina",
    tag: "UI/UX",
  },
  {
    name: "Portfolio-a",
    description: "Premium editorial portfolio built with Astro 6 and React 19, featuring Bento-grid layouts.",
    stars: 12,
    forks: 2,
    language: "Astro",
    url: "https://github.com/AyushSahoo19/Portfolio-a",
    tag: "Design",
  },
  {
    name: "CSxSE",
    description: "The modular handbook and dictionary for the modern software engineering lifecycle.",
    stars: 15,
    forks: 4,
    language: "TypeScript",
    url: "https://github.com/AyushSahoo19/CSxSE",
    tag: "Education",
  },
  {
    name: "Tata-Steel-Web-App",
    description: "Enterprise-grade mobile web application built for industrial orchestration and management.",
    stars: 8,
    forks: 2,
    language: "JavaScript",
    url: "https://github.com/AyushSahoo19/tata-steel-mobile-web-app",
    tag: "Enterprise",
  },
  {
    name: "SMARTIX.AI",
    description: "AI-driven platform for intelligent automation and data synthesis.",
    stars: 21,
    forks: 6,
    language: "Python",
    url: "https://github.com/AyushSahoo19/SMARTIX.AI",
    tag: "AI/ML",
  },
  {
    name: "ENG-10X",
    description: "The advanced engineering educational platform focused on software development mastery.",
    stars: 45,
    forks: 12,
    language: "React",
    url: "https://github.com/AyushSahoo19/ENG-10X",
    tag: "Education",
  },
]

const workflowRepos = [
  {
    name: "Claude-Code-Skills",
    description: "A collection of agentic skills and workflows to enhance Claude Code's autonomous engineering capabilities.",
    owner: "Anthropic / Community",
    url: "https://github.com/anthropic/claude-code-skills",
    type: "Skill Repository",
    icon: Terminal,
  },
  {
    name: "Cursor-Rules-Pro",
    description: "Highly optimized .cursorrules for advanced TypeScript, React, and Astro development.",
    owner: "Community / Engineering",
    url: "https://github.com/a-h/cursor-rules",
    type: "Configuration",
    icon: Code2,
  },
  {
    name: "G-Stack",
    description: "Garry Tan's high-signal repository engine for modern startups and rapid MVPs.",
    owner: "Garry Tan",
    url: "https://github.com/garrytan/g-stack",
    type: "Boilerplate",
    icon: Zap,
  },
  {
    name: "Agentic-Workflow-Engine",
    description: "Standardized protocols for multi-agent systems and task orchestration.",
    owner: "Open Source",
    url: "https://github.com/langchain-ai/langgraph",
    type: "Framework",
    icon: Zap,
  },
  {
    name: "LLM-Prompts-Hub",
    description: "A curated library of complex system prompts and prompt engineering techniques.",
    owner: "AI Research",
    url: "https://github.com/dair-ai/Prompt-Engineering-Guide",
    type: "Knowledge Base",
    icon: Brain,
  },
]

export function GithubSection() {
  return (
    <section id="github" className="min-h-screen py-24 px-6 lg:px-12 bg-background/50">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Github className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-mono text-primary uppercase tracking-widest">Repository Engine</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground tracking-tight">
              Open Source <span className="text-primary italic">& Workflows</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Tracking my primary engineering output and the specialized repositories 
              that power my autonomous development workflows.
            </p>
          </div>
          <a 
            href="https://github.com/AyushSahoo19" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full hover:border-primary transition-all group"
          >
            <span className="text-sm font-medium">Follow on GitHub</span>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        <div className="mb-10">
          <span className="text-xs font-black text-primary border-2 border-primary/40 px-4 py-2 rounded-full bg-primary/10 tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(37,138,255,0.2)]">
            OWNED & BUILT BY ME
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* My Primary Repos - Scrollbox Wrapper */}
          <div className="md:col-span-2 h-[650px] overflow-y-auto pr-4 custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {myRepos.map((repo) => (
                <a 
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-8 rounded-3xl border border-border/50 bg-card/50 hover:bg-card transition-all duration-500 overflow-hidden flex flex-col h-full min-h-[280px]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="px-3 py-1 rounded-full bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-tighter">
                      {repo.tag}
                    </div>
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {repo.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-8 line-clamp-3">
                    {repo.description}
                  </p>
  
                  <div className="flex items-center gap-6 mt-auto">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Star className="h-3.5 w-3.5" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <GitFork className="h-3.5 w-3.5" />
                      <span>{repo.forks}</span>
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-[10px] font-medium uppercase">{repo.language}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Workflow Enhancement Repos - Internal Scroll */}
          <div className="p-8 rounded-3xl border border-border/50 bg-primary/5 flex flex-col overflow-hidden h-[600px]">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 flex-shrink-0">
              <Terminal className="h-5 w-5 text-primary" />
              Workflow Powerups
            </h3>
            
            <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {workflowRepos.map((repo) => {
                const Icon = repo.icon
                return (
                  <a 
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-background border border-border group-hover:border-primary/30 transition-colors">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <h4 className="text-sm font-bold text-foreground truncate">{repo.name}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                      {repo.description}
                    </p>
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase text-primary/70">
                      <span>{repo.type}</span>
                      <span className="text-muted-foreground/50">{repo.owner}</span>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-background border border-dashed border-border text-center flex-shrink-0">
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                Leveraging specialized skillsets to enhance <span className="text-primary font-bold">Claude Code</span> and other agentic entities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
