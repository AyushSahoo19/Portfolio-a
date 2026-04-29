import { Lightbulb, Users, Rocket, ArrowRight, Github, MessageSquare, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const bigIdeas = [
  {
    title: "Quantum-Enhanced RAG Systems",
    description:
      "Building next-generation retrieval systems using quantum computing to process and search through massive knowledge bases exponentially faster than classical methods.",
    status: "Active Development",
    collaborators: 3,
    tags: ["Quantum Computing", "AI", "Information Retrieval"],
    impact: "Could revolutionize how we search and retrieve information at scale",
    lookingFor: ["Quantum Researchers", "ML Engineers", "Backend Developers"],
  },
  {
    title: "Biological Computing Framework",
    description:
      "Developing a framework that mimics biological neural processes for more efficient and adaptive AI systems, inspired by neuroscience and biological computation principles.",
    status: "Research Phase",
    collaborators: 2,
    tags: ["Neuroscience", "AI", "Biological Computing"],
    impact: "Bridge the gap between biological intelligence and artificial systems",
    lookingFor: ["Neuroscientists", "AI Researchers", "Bioinformatics Experts"],
  },
  {
    title: "Genius Pattern Recognition Platform",
    description:
      "An AI-powered platform that analyzes patterns, strategies, and techniques used by geniuses across different domains to extract actionable insights for learning and innovation.",
    status: "Concept Stage",
    collaborators: 1,
    tags: ["AI", "Data Analysis", "Education"],
    impact: "Democratize genius-level thinking patterns for everyone",
    lookingFor: ["Data Scientists", "Psychologists", "Full-Stack Developers"],
  },
  {
    title: "Decentralized Research Collaboration Network",
    description:
      "A blockchain-based platform for researchers to collaborate, share findings, and get credited for contributions in real-time, solving the broken academic publishing model.",
    status: "Planning",
    collaborators: 0,
    tags: ["Blockchain", "Research", "Web3"],
    impact: "Transform how research is shared and credited globally",
    lookingFor: ["Blockchain Developers", "Researchers", "UX Designers"],
  },
]

export function IdeasSection() {
  return (
    <section id="ideas" className="min-h-screen flex items-center px-6 lg:px-12 py-24">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <Lightbulb className="h-8 w-8 text-primary" />
          <h3 className="text-sm font-mono text-primary uppercase tracking-wider">Ideas & Community</h3>
        </div>
        <h2 className="text-5xl lg:text-6xl font-bold mb-6">Big Ideas, Open Collaboration</h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-3xl">
          Ambitious projects and innovative ideas that need brilliant minds to bring them to life. Join the community
          and help shape the future of technology, research, and innovation.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {bigIdeas.map((idea, idx) => (
            <div
              key={idx}
              className="border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 bg-card/30 backdrop-blur-sm group relative overflow-hidden"
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {idea.status}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{idea.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{idea.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {idea.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Impact */}
              <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-primary mb-1">Potential Impact</p>
                    <p className="text-sm text-muted-foreground">{idea.impact}</p>
                  </div>
                </div>
              </div>

              {/* Looking For */}
              <div className="mb-6">
                <p className="text-xs font-medium text-foreground mb-3 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Looking for:
                </p>
                <div className="flex flex-wrap gap-2">
                  {idea.lookingFor.map((role, roleIdx) => (
                    <span
                      key={roleIdx}
                      className="px-3 py-1.5 text-xs rounded-lg bg-primary/10 text-primary font-medium border border-primary/20"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Collaborators & CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>
                    {idea.collaborators} {idea.collaborators === 1 ? "collaborator" : "collaborators"}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary hover:bg-primary/10 group/btn"
                >
                  Join Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Community Section */}
        <div className="border border-primary/30 rounded-2xl p-10 bg-gradient-to-br from-primary/5 to-transparent">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">Join the Innovation Community</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              These projects are open for collaboration. Whether you're a researcher, developer, designer, or domain
              expert, your contribution can make a real impact. Let's build the future together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-background hover:bg-primary/90 rounded-full px-6">
                <MessageSquare className="mr-2 h-4 w-4" />
                Start a Discussion
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 rounded-full px-6 bg-transparent"
                asChild
              >
                <a href="https://github.com/ayushsahoo" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
