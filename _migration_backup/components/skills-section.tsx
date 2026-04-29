import { Code2, Database, Cloud, Cpu, Brain, Atom, Server, Globe, Layers, GitBranch, Terminal, Zap } from "lucide-react"

const skillCategories = [
  {
    category: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Layers },
      { name: "TypeScript", icon: Terminal },
      { name: "Tailwind CSS", icon: Zap },
    ],
  },
  {
    category: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Python", icon: Code2 },
      { name: "Go", icon: Cpu },
      { name: "FastAPI", icon: Zap },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Redis", icon: Zap },
      { name: "Pinecone", icon: Brain },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "TensorFlow", icon: Brain },
      { name: "PyTorch", icon: Brain },
      { name: "LangChain", icon: Layers },
      { name: "OpenAI", icon: Zap },
    ],
  },
  {
    category: "Quantum Computing",
    icon: Atom,
    skills: [
      { name: "Qiskit", icon: Atom },
      { name: "Cirq", icon: Atom },
      { name: "Quantum ML", icon: Brain },
      { name: "Quantum Finance", icon: Cpu },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "Docker", icon: Layers },
      { name: "Kubernetes", icon: Server },
      { name: "CI/CD", icon: GitBranch },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center px-6 lg:px-12 py-24">
      <div className="max-w-6xl w-full mx-auto">
        <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">Skills</h3>
        <h2 className="text-5xl lg:text-6xl font-bold mb-16">Technical expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon
            return (
              <div
                key={index}
                className="border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <CategoryIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
                      >
                        <SkillIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
