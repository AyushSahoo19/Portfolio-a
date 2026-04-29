
import { Brain, BookOpen, Target, Sparkles } from "lucide-react"

const geniusCategories = [
  {
    domain: "Physics & Mathematics",
    geniuses: ["Einstein", "Feynman", "Ramanujan", "Newton"],
    insights: [
      "Deep focus and thought experiments",
      "Visual thinking and intuition",
      "Pattern recognition across domains",
      "Persistence through failure",
    ],
    icon: Brain,
  },
  {
    domain: "Technology & Innovation",
    geniuses: ["Tesla", "Jobs", "Musk", "Turing"],
    insights: [
      "First principles thinking",
      "Obsessive attention to detail",
      "Cross-pollination of ideas",
      "Vision beyond current limitations",
    ],
    icon: Sparkles,
  },
  {
    domain: "Business & Startups",
    geniuses: ["Bezos", "Gates", "Thiel", "Buffett"],
    insights: [
      "Long-term thinking over short-term gains",
      "Customer obsession",
      "Calculated risk-taking",
      "Building systems, not just products",
    ],
    icon: Target,
  },
  {
    domain: "Philosophy & Science",
    geniuses: ["Darwin", "Curie", "Hawking", "Sagan"],
    insights: [
      "Curiosity-driven exploration",
      "Rigorous methodology",
      "Communicating complex ideas simply",
      "Interdisciplinary thinking",
    ],
    icon: BookOpen,
  },
]

const researchPapers = [
  { title: "Attention Is All You Need", authors: "Vaswani et al.", year: 2017, impact: "Transformers" },
  { title: "Deep Residual Learning", authors: "He et al.", year: 2015, impact: "ResNet" },
  { title: "Quantum Supremacy", authors: "Arute et al.", year: 2019, impact: "Quantum Computing" },
  { title: "AlphaFold: Protein Structure", authors: "Jumper et al.", year: 2021, impact: "Biology AI" },
]

export function GeniusStudiesSection() {
  return (
    <section id="genius-studies" className="min-h-screen py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm font-medium mb-2 tracking-wider uppercase">Genius Studies</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Learning from the
            <br />
            <span className="text-primary">masters of every field</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Studying the strategies, techniques, and thinking patterns of geniuses across domains to understand how
            mastery is achieved.
          </p>
        </div>

        {/* Genius Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {geniusCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.domain}</h3>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Studied Geniuses:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.geniuses.map((genius, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {genius}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-3">Key Insights:</p>
                  <ul className="space-y-2">
                    {category.insights.map((insight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">→</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Research Papers */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Breakthrough Research Papers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {researchPapers.map((paper, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 bg-card border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                    {paper.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    {paper.authors} • {paper.year}
                  </p>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{paper.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
