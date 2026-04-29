
import { useState } from "react"
import { 
  Code2, Database, Cloud, Brain, Atom, Server, Globe, ChevronDown, Terminal, Zap
} from "lucide-react"

const toolCategories = [
  {
    name: "Foundational LLMs & Platforms",
    icon: Brain,
    items: [
      {
        name: "Claude 3.5 Sonnet",
        logo: "https://cdn.simpleicons.org/anthropic",
        description: "State-of-the-art reasoning model by Anthropic",
        useCase: "Complex coding orchestration and agentic reasoning",
      },
      {
        name: "GPT-4o",
        logo: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIyLjI4IDkuODJhNiA2IDAgMCAwLS41MS00LjkxIDYuMDUgNi4wNSAwIDAgMC00LTIuODMgNi4wNCA2LjA0IDAgMCAwLTUuMjkgMS4wNiA2LjA1IDYuMDUgMCAwIDAtNC40NC0xLjk2IDYuMDUgNi4wNSAwIDAgMC01LjE5IDIuOTIgNi4wNSA2LjA1IDAgMCAwLTEuMDQgNS4yOSA2LjA1IDYuMDUgMCAwIDAgMS45NiA0LjQ0IDYuMDUgNi4wNSAwIDAgMCAyLjkyIDUuMTkgNi4wNSA2LjA1IDAgMCAwIDUuMjkgMS4wNCA2LjA1IDYuMDUgMCAwIDAgNC40NC0xLjk2IDYuMDUgNi4wNSAwIDAgMCA1LjE5LTIuOTIgNi4wNSA2LjA1IDAgMCAwIDEuMDQtNS4yOSA2LjA1IDYuMDUgMCAwIDAtMS45Ni00LjQ0em0tOS4xIDEwLjQ1bC00LjU0LTIuNjJhLjYgLjYgMCAwIDEtLjMtLjUyVjEwLjdsMi4xNSAxLjI0YS42IC42IDAgMCAxIC4wNy4wNiAxLjA2IDEuMDYgMCAwIDAgMS4wNiAwYzEuMDYtMS44MyAxLjA2LTQuMDkgMC01LjkyTDEzLjc3IDQuOGEuNiAuNiAwIDAgMSAuNTItLjNoLjA2YzEuMDYgMCAyLjUzLjQyIDMuNTQgMS4xMmwtLjA2LjA0LTQuNTQgMi42MmEuNiAuNiAwIDAgMC0uMy41MnY2LjQybDIuMTUtMS4yNGEuNiAuNiAwIDAgMSAuMDcuMDYgMS4wNiAxLjA2IDAgMCAwIDEuMDYtNS45MnoiIGZpbGw9IndoaXRlIi8+PC9zdmc+",
        description: "Omni-model for multimodal intelligence",
        useCase: "Real-time voice, vision, and text-based agent interaction",
      },
      {
        name: "Mistral Large",
        logo: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI0IDEydjEyaC02VjEyaDZ6TTEyIDEydjEySDZWMTJoNnptMC0xMnYxMmgtNlYwaDZ6TTAgMHYxMmg2VjBIMHpNMjQgMHYxMmgtNlYwaDZ6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==",
        description: "High-performance open-source foundation model",
        useCase: "Private, edge-based inference for sensitive data",
      },
      {
        name: "Perplexity AI",
        logo: "https://cdn.simpleicons.org/perplexity",
        description: "Pro-search and discovery engine",
        useCase: "Dynamic technical research and real-time knowledge synthesis",
      },
    ],
  },
  {
    name: "Agentic Systems & Frameworks",
    icon: Zap,
    items: [
      {
        name: "LangGraph",
        logo: "https://cdn.simpleicons.org/langchain",
        description: "Framework for building stateful, multi-agent systems",
        useCase: "Orchestrating complex, cyclic agentic workflows",
      },
      {
        name: "CrewAI",
        logo: "https://cdn.simpleicons.org/crewai",
        description: "Role-based multi-agent orchestration framework",
        useCase: "Coordinating autonomous teams of specialized AI agents",
      },
      {
        name: "Claude Code",
        logo: "https://cdn.simpleicons.org/anthropic",
        description: "Agentic coding assistant by Anthropic",
        useCase: "Autonomous terminal-based engineering and refactoring",
      },
      {
        name: "Autogen",
        logo: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgxMS40djExLjRIMFYwem0xMi42IDBIMjR2MTEuNEgxMi42VjB6TTAgMTIuNmgxMS40VjI0SDBWMTIuNnptMTIuNiAwSDI0VjI0SDEyLjZWMTIuNnoiIGZpbGw9IndoaXRlIi8+PC9zdmc+",
        description: "Multi-agent conversation framework",
        useCase: "Simulating complex human-agent collaborative sessions",
      },
    ],
  },
  {
    name: "AI Infrastructure & RAG",
    icon: Database,
    items: [
      {
        name: "Pinecone",
        logo: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDBMMy43NSAxNUgyMC4yNUwxMiAwWk0zLjc1IDE3TDEyIDI0TDIwLjI1IDE3SDMuNzVaIiBmaWxsPSIjMjU4YWZmIi8+PC9zdmc+",
        description: "Managed vector database for high-performance AI",
        useCase: "Sub-millisecond semantic search for RAG pipelines",
      },
      {
        name: "Groq",
        logo: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMHptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNmMxLjY1NyAwIDMuMTU3LjY3MiA0LjI0MyAxLjc1N2wtMS40MTQgMS40MTRDMTQuMTA1IDguNDQ4IDEzLjEwNSA4IDEyIDhjLTIuMjA5IDAtNCAxLjc5MS00IDRzMS43OTEgNCA0IDRjMS4xMDUgMCAyLjEwNS0uNDQ4IDIuODI4LTEuMTcybDEuNDE0IDEuNDE0QzE1LjE1NyAxNy4zMjggMTMuNjU3IDE4IDEyIDE4eiIgZmlsbD0iI2Y1NTAzNiIvPjwvc3ZnPg==",
        description: "LPU inference engine for near-instant response",
        useCase: "Optimizing token throughput for real-time agent loops",
      },
      {
        name: "PostgreSQL (pgvector)",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        description: "Relational database with vector capabilities",
        useCase: "Hybrid structured/unstructured long-term memory",
      },
      {
        name: "Hugging Face",
        logo: "https://cdn.simpleicons.org/huggingface",
        description: "Model hub and inference endpoints",
        useCase: "Serving open-source models via serverless Inference APIs",
      },
    ],
  },
  {
    name: "Languages & Core",
    icon: Code2,
    items: [
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        description: "The primary language for AI and Data Science",
        useCase: "Engineering RAG pipelines and automation scripts",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        description: "Type-safe development for modern web apps",
        useCase: "Building robust, type-safe fullstack applications",
      },
      {
        name: "Next.js",
        logo: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4LjY2MyAyMS4wMTJsLTkuMzM2LTEyaC0yLjEyN3YxMS40aDIuMTI3di04LjEyN2w3LjIxIDkuMjczYy42OTEtLjE5MSAxLjMyLS41MTkgMS44Ni0uOTQ2em0xLjMzNy0xNC4xODVWMTguNTJjLjY5LS45NiAxLjEzNS0yLjA5MSAxLjI1NS0zLjMyaC0xLjI1NXYtOC4zNzN6TTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMHptMCAyMS4xMjdjLTUuMDQ1IDAtOS4xMjctNC4wODItOS4xMjctOS4xMjdTNi45NTUgMi44NzMgMTIgMi44NzNzOS4xMjcgNC4wODIgOS4xMjcgOS4xMjctNC4wODIgOS4xMjctOS4xMjcgOS4xMjd6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==",
        description: "The React framework for production-grade web apps",
        useCase: "Server-side rendering and static site generation",
      },
      {
        name: "Astro",
        logo: "https://cdn.simpleicons.org/astro",
        description: "Modern web framework for content-heavy sites",
        useCase: "Building highly optimized, editorial portfolios",
      },
    ],
  },
  {
    name: "Backend & Systems",
    icon: Server,
    items: [
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        description: "Robust, object-oriented enterprise language",
        useCase: "Architecting high-concurrency enterprise backend systems",
      },
      {
        name: "Spring Boot",
        logo: "https://cdn.simpleicons.org/springboot",
        description: "Framework for building production-ready microservices",
        useCase: "Developing cloud-native RESTful microservices",
      },
      {
        name: "Node.js",
        logo: "https://cdn.simpleicons.org/nodedotjs",
        description: "JavaScript runtime for building scalable network applications",
        useCase: "Building real-time event-driven websocket servers",
      },
      {
        name: "Postman",
        logo: "https://cdn.simpleicons.org/postman",
        description: "API development and testing platform",
        useCase: "Automated API testing and contract documentation",
      },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    icon: Cloud,
    items: [
      {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        description: "Scalable cloud computing solutions for global deployment",
        useCase: "Managing EC2, S3, and Lambda serverless architectures",
      },
      {
        name: "Vercel",
        logo: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI0IDIyLjUyNUgwbDEyLTIxLjA1IDEyIDIxLjA1eiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=",
        description: "Platform for frontend frameworks and static sites",
        useCase: "Continuous deployment for Next.js and Astro projects",
      },
      {
        name: "Docker",
        logo: "https://cdn.simpleicons.org/docker",
        description: "Containerization platform for consistent development",
        useCase: "Containerizing microservices for consistent environments",
      },
    ],
  },
  {
    name: "AI-Native Development",
    icon: Terminal,
    items: [
      {
        name: "Antigravity",
        logo: "https://cdn.simpleicons.org/google",
        description: "Premium agentic AI coding environment",
        useCase: "Next-gen collaborative autonomous code generation",
      },
      {
        name: "Cursor",
        logo: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLjA3NiAxNS43OTZsLTEuMzg4LTIuNDAzTDkuNTEyIDExLjAybC0zLjU1NyA2LjE2aDEzLjE0NWwtMS4wNzEtMS44NTVIMTMuMDc2em00LjM3OS0xMS41NDZIMi4yNWExLjUwMSAxLjUwMSAwIDAgMC0xLjU1MSAxLjQ5NnYxMS41MThhMS41MDEgMS41MDEgMCAwIDAgMS40OTYgMS40OTZoMy4yNDJsOC4xMDktMTQuNTEwaC41MzFsOC4xMDkgMTQuNTEwaDMuMjQyYTEuNTAxIDEuNTAxIDAgMCAwIDEuNDk2LTEuNDk2VjUuNzQ2YTEuNTAxIDEuNTAxIDAgMCAwLTEuNDk2LTEuNDk2SDE3LjQ1NXoiIGZpbGw9IndoaXRlIi8+PC9zdmc+",
        description: "The AI-native IDE",
        useCase: "Iterative fullstack engineering with deep context",
      },
      {
        name: "Warp",
        logo: "https://cdn.simpleicons.org/warp",
        description: "AI-integrated modern terminal",
        useCase: "Smart command-line automation and troubleshooting",
      },
    ],
  },
  {
    name: "Design & Creative",
    icon: Globe,
    items: [
      {
        name: "Canva AI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        description: "AI-powered creative design platform",
        useCase: "Rapid visual asset generation and brand synthesis",
      },
      {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        description: "Collaborative design with AI plugins",
        useCase: "Prototyping advanced AI-driven user experiences",
      },
      {
        name: "Dribbble",
        logo: "https://cdn.simpleicons.org/dribbble",
        description: "Design inspiration and showcase platform",
        useCase: "Visual research and UI/UX trend synthesis",
      },
    ],
  },
  {
    name: "Databases & Storage",
    icon: Database,
    items: [
      {
        name: "Redis",
        logo: "https://cdn.simpleicons.org/redis",
        description: "In-memory data structure store used as a database",
        useCase: "High-performance caching and message brokering",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.simpleicons.org/mongodb",
        description: "Flexible, document-based NoSQL database",
        useCase: "Managing unstructured data for dynamic applications",
      },
    ],
  },
]

export function ToolsSection() {
  return (
    <section id="tools" className="min-h-screen flex items-center px-6 lg:px-12 py-24">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground tracking-tight">
              Mastering the <span className="text-primary italic">Modern Stack</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              A curated collection of technologies I use to build autonomous agents, 
              high-performance backends, and editorial-grade user interfaces.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Always Learning</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {toolCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div 
                key={category.name}
                className={`group relative p-8 rounded-3xl border border-border/50 bg-card/50 hover:bg-card transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                } ${index === 2 ? "md:row-span-2" : ""}`}
              >
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-500" />
                
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
                  </div>

                  <div className={`grid gap-3 mb-8 ${
                    index === 0 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                  }`}>
                    {category.items.map((tool) => (
                      <div 
                        key={tool.name}
                        className="flex flex-col gap-2 p-4 rounded-2xl bg-background border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all group/item cursor-default"
                        title={tool.description}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center p-1.5 group-hover/item:border-primary/30 transition-colors">
                            <img 
                              src={tool.logo} 
                              alt={tool.name} 
                              className="w-full h-full object-contain opacity-80 group-hover/item:opacity-100 transition-opacity" 
                            />
                          </div>
                          <span className="text-sm font-bold text-foreground/80 group-hover/item:text-primary transition-colors">{tool.name}</span>
                        </div>
                        {tool.useCase && (
                          <p className="text-[10px] text-muted-foreground/60 leading-tight pl-11">
                            {tool.useCase}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary/50 group-hover:text-primary transition-colors">
                    {category.items.length} Tools Mastered
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
