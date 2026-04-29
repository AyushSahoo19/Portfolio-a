export function AboutSection() {
  const interests = [
    {
      category: "AI & Machine Learning",
      items: [
        { name: "RAG Systems", link: "#" },
        { name: "LLMs & Transformers", link: "#" },
        { name: "Neural Networks", link: "#" },
        { name: "Deep Learning", link: "#" },
        { name: "Computer Vision", link: "#" },
        { name: "NLP", link: "#" },
        { name: "Reinforcement Learning", link: "#" },
        { name: "Transfer Learning", link: "#" },
      ],
    },
    {
      category: "Quantum Computing",
      items: [
        { name: "Quantum Algorithms", link: "#" },
        { name: "Quantum Finance", link: "#" },
        { name: "Quantum ML", link: "#" },
        { name: "Quantum Cryptography", link: "#" },
        { name: "Quantum Simulation", link: "#" },
        { name: "Variational Algorithms", link: "#" },
        { name: "Quantum Error Correction", link: "#" },
        { name: "QAOA", link: "#" },
      ],
    },
    {
      category: "Philosophy & Cognition",
      items: [
        { name: "Epistemology", link: "#" },
        { name: "Neurology", link: "#" },
        { name: "Cognitive Science", link: "#" },
        { name: "Philosophy of Mind", link: "#" },
        { name: "Consciousness Studies", link: "#" },
        { name: "Logic & Reasoning", link: "#" },
        { name: "Phenomenology", link: "#" },
        { name: "Metaphysics", link: "#" },
      ],
    },
    {
      category: "Physics & Cosmology",
      items: [
        { name: "Cosmology", link: "#" },
        { name: "Quantum Physics", link: "#" },
        { name: "Biological Computing", link: "#" },
        { name: "Theoretical Physics", link: "#" },
        { name: "Relativity", link: "#" },
        { name: "String Theory", link: "#" },
        { name: "Astrophysics", link: "#" },
        { name: "Particle Physics", link: "#" },
      ],
    },
    {
      category: "Research & Innovation",
      items: [
        { name: "Research Papers", link: "#" },
        { name: "Startup Strategies", link: "#" },
        { name: "Genius Studies", link: "#" },
        { name: "Problem Solving", link: "#" },
        { name: "Systems Thinking", link: "#" },
        { name: "Innovation Frameworks", link: "#" },
        { name: "Disruptive Tech", link: "#" },
        { name: "Future Trends", link: "#" },
      ],
    },
    {
      category: "Full-Stack Development",
      items: [
        { name: "Web Technologies", link: "#" },
        { name: "Backend Systems", link: "#" },
        { name: "Database Design", link: "#" },
        { name: "Cloud Architecture", link: "#" },
        { name: "DevOps", link: "#" },
        { name: "Microservices", link: "#" },
        { name: "API Design", link: "#" },
        { name: "System Design", link: "#" },
      ],
    },
  ]

  return (
    <section id="about" className="min-h-screen flex flex-col items-center px-6 lg:px-12 py-24">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl font-bold mb-12 text-foreground relative inline-block">
          About
          <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-primary" />
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg mb-16">
          <p>
            I'm a <span className="text-foreground font-semibold">Software Engineer at Tata Steel</span>, deeply passionate
            about <span className="italic text-foreground">pushing the boundaries</span> of what's possible with technology.
          </p>
          <p>
            My journey spans across multiple cutting-edge domains:{" "}
            <span className="text-foreground font-semibold border-b border-primary/30">AI and RAG systems</span>,{" "}
            <span className="text-foreground font-semibold border-b border-primary/30">quantum computing</span>,{" "}
            <span className="text-foreground font-semibold border-b border-primary/30">quantum finance</span>, and{" "}
            <span className="text-foreground font-semibold border-b border-primary/30">quantum machine learning</span>. I've
            designed a <span className="italic text-foreground">highly classified ecosystem and framework</span> to
            accelerate my learning and research.
          </p>
          <p>
            Beyond code, I immerse myself in <span className="text-foreground font-medium">philosophy</span>,{" "}
            <span className="text-foreground font-medium">neurology</span>,{" "}
            <span className="text-foreground font-medium">biological computing</span>,{" "}
            <span className="text-foreground font-medium">cosmology</span>, and the{" "}
            <span className="italic text-foreground">science of thinking and problem-solving</span>. I study the strategies
            and techniques of geniuses across all domains, analyze groundbreaking research papers, and continuously work
            on innovative projects that blend research with practical full-stack applications.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-foreground relative inline-block">
            My Interests
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary" />
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-widest mb-4">
                  {section.category}
                </h4>
                <div className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <a
                      key={itemIdx}
                      href={item.link}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0.5 h-0.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
