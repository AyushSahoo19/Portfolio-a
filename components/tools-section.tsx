"use client"

import { useState } from "react"
import { Code2, Database, Cloud, Brain, Atom, Server, Globe, ChevronDown } from "lucide-react"

const toolCategories = [
  {
    name: "AI Agents & LLMs",
    icon: Brain,
    items: [
      {
        name: "Claude Code",
        description: "Agentic coding assistant by Anthropic",
        useCase: "Autonomous software engineering and complex code refactoring",
        features: ["Agentic workflows", "Precise code generation", "Context-aware editing"],
      },
      {
        name: "Hugging Face",
        description: "The home of machine learning models and datasets",
        useCase: "Accessing pre-trained models and building NLP pipelines",
        features: ["Model Hub", "Transformers library", "Datasets", "Inference API"],
      },
      {
        name: "Higgsfield AI",
        description: "Advanced video generation and AI creativity platform",
        useCase: "Creating cinematic AI-generated video content",
        features: ["High-fidelity video", "Motion control", "Creative AI tools"],
      },
      {
        name: "LLM Stack",
        description: "Experience with GPT-4, Claude 3.5 Sonnet, and Gemini Pro",
        useCase: "Multi-model orchestration for complex reasoning tasks",
        features: ["Context windows", "Function calling", "Prompt engineering"],
      },
      {
        name: "AI Agent Frameworks",
        description: "Building autonomous agents with LangGraph and CrewAI",
        useCase: "Developing multi-agent systems for business automation",
        features: ["State management", "Inter-agent communication", "Tool usage"],
      },
    ],
  },
  {
    name: "Design & Creative",
    icon: Globe,
    items: [
      {
        name: "Canva",
        description: "Modern design platform for rapid asset creation",
        useCase: "Marketing materials, presentations, and social media assets",
        features: ["Brand kits", "Collaboration", "Rapid prototyping"],
      },
      {
        name: "Dribbble",
        description: "Design inspiration and showcase platform",
        useCase: "Visual research and design trend analysis",
        features: ["Portfolio building", "Community feedback", "Design trends"],
      },
      {
        name: "Figma",
        description: "Collaborative interface design tool",
        useCase: "UI/UX design and high-fidelity prototyping",
        features: ["Auto-layout", "Components", "Design systems"],
      },
    ],
  },
  {
    name: "Backend & Systems",
    icon: Server,
    items: [
      {
        name: "Java",
        description: "Robust, object-oriented enterprise language",
        useCase: "Building scalable backend architectures and systems",
        features: ["Spring Boot", "JVM optimization", "Multithreading"],
      },
      {
        name: "RAG Systems",
        description: "Retrieval-Augmented Generation architectures",
        useCase: "Connecting LLMs to private knowledge bases",
        features: ["Vector search", "Document chunking", "Knowledge graphs"],
      },
      {
        name: "Postman",
        description: "API development and testing platform",
        useCase: "Architecting, testing, and documenting complex APIs",
        features: ["API Collections", "Automated testing", "Environments"],
      },
      {
        name: "Agentic AI Stacks",
        description: "Full-stack development for agentic systems",
        useCase: "Integrating agents into production environments",
        features: ["Asynchronous processing", "Memory persistence", "Tracing"],
      },
    ],
  },
  {
    name: "Languages & Core",
    icon: Code2,
    items: [
      {
        name: "Python",
        description: "The primary language for AI and Data Science",
        useCase: "ML modeling, automation scripts, and RAG pipelines",
        features: ["NumPy", "Pandas", "Scikit-learn", "FastAPI"],
      },
      {
        name: "TypeScript",
        description: "Type-safe development for modern web apps",
        useCase: "Building robust frontend and backend applications",
        features: ["Strict typing", "Interfaces", "Modern ES6+"],
      },
    ],
  },
  {
    name: "Databases & Storage",
    icon: Database,
    items: [
      {
        name: "Pinecone",
        description: "Vector database for AI applications",
        useCase: "Storing high-dimensional embeddings for RAG",
        features: ["Sub-second search", "Scalability", "Serverless"],
      },
      {
        name: "PostgreSQL",
        description: "Advanced relational database system",
        useCase: "Structured data management and system persistence",
        features: ["ACID compliance", "JSONB support", "Performance"],
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight">
              Mastering the <span className="text-primary italic">Modern Stack</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              A curated collection of technologies I use to build autonomous agents, 
              high-performance backends, and editorial-grade user interfaces.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Always Learning</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {toolCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div 
                key={category.name}
                className={`group relative p-8 rounded-3xl border border-white/10 bg-white/2 hover:bg-white/5 transition-all duration-500 flex flex-col justify-between overflow-hidden ${
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
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {category.items.map((tool) => (
                      <div 
                        key={tool.name}
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-300 hover:border-primary/50 hover:text-white transition-all cursor-default"
                        title={tool.description}
                      >
                        {tool.name}
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
