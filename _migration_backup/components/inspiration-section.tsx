"use client"

import { useState } from "react"
import { Lightbulb, Award, Zap, ChevronDown } from "lucide-react"

const geniusMinds = [
  {
    domain: "Physics & Cosmology",
    geniuses: [
      {
        name: "Albert Einstein",
        field: "Theoretical Physics",
        contributions: [
          "Theory of Relativity (Special & General)",
          "E=mc² equation",
          "Photoelectric effect explanation",
          "Brownian motion theory",
        ],
        innovations: "Revolutionized our understanding of space, time, gravity, and energy",
        biggestIdea: "Space and time are relative and interconnected; gravity is the curvature of spacetime",
        projects: "Development of quantum theory foundations, unified field theory attempts",
        impact: "Foundation of modern physics and cosmology",
      },
      {
        name: "Richard Feynman",
        field: "Quantum Mechanics",
        contributions: [
          "Feynman diagrams",
          "Path integral formulation",
          "Quantum electrodynamics",
          "Nanotechnology vision",
        ],
        innovations: "Made quantum mechanics intuitive and visual through diagrams",
        biggestIdea: "Particles take all possible paths; sum over histories approach",
        projects: "Quantum computing concepts, molecular machines",
        impact: "Transformed how physicists visualize and calculate quantum processes",
      },
    ],
  },
  {
    domain: "Artificial Intelligence & Computing",
    geniuses: [
      {
        name: "Alan Turing",
        field: "Computer Science & AI",
        contributions: [
          "Turing Machine concept",
          "Turing Test for AI",
          "Computability theory",
          "Cryptanalysis (Enigma)",
        ],
        innovations: "Defined what computation means and the limits of computability",
        biggestIdea: "Any computable problem can be solved by a universal machine",
        projects: "ACE computer design, morphogenesis patterns",
        impact: "Foundation of theoretical computer science and AI philosophy",
      },
      {
        name: "Geoffrey Hinton",
        field: "Deep Learning",
        contributions: [
          "Backpropagation algorithm",
          "Convolutional neural networks",
          "Restricted Boltzmann machines",
          "Capsule networks",
        ],
        innovations: "Enabled training of deep neural networks at scale",
        biggestIdea: "Distributed representations in neural networks",
        projects: "AlexNet, modern deep learning architectures",
        impact: "Sparked the deep learning revolution in AI",
      },
    ],
  },
  {
    domain: "Mathematics & Logic",
    geniuses: [
      {
        name: "Kurt Gödel",
        field: "Mathematical Logic",
        contributions: ["Incompleteness theorems", "Consistency proofs", "Gödel numbering", "Constructible universe"],
        innovations: "Proved fundamental limits of formal systems",
        biggestIdea: "Any consistent formal system has true statements it cannot prove",
        projects: "Foundations of mathematics, philosophical implications",
        impact: "Transformed understanding of mathematics and logic",
      },
      {
        name: "John von Neumann",
        field: "Mathematics & Computing",
        contributions: [
          "Von Neumann architecture",
          "Game theory",
          "Quantum mechanics formalism",
          "Self-replicating machines",
        ],
        innovations: "Unified mathematics, physics, and computing",
        biggestIdea: "Universal constructor and self-replication principles",
        projects: "EDVAC computer, cellular automata",
        impact: "Foundation of modern computer architecture",
      },
    ],
  },
  {
    domain: "Philosophy & Cognition",
    geniuses: [
      {
        name: "Ludwig Wittgenstein",
        field: "Philosophy of Language",
        contributions: [
          "Language games concept",
          "Logical positivism critique",
          "Philosophy of mind insights",
          "Tractatus Logico-Philosophicus",
        ],
        innovations: "Revolutionized how we think about language and meaning",
        biggestIdea: "Meaning is use; language is a tool with multiple functions",
        projects: "Philosophical investigations, logic foundations",
        impact: "Shaped 20th century philosophy and cognitive science",
      },
      {
        name: "Douglas Hofstadter",
        field: "Cognitive Science",
        contributions: [
          "Strange loops concept",
          "Self-reference in consciousness",
          "Analogy-making mechanisms",
          "Artificial intelligence philosophy",
        ],
        innovations: "Connected mathematics, art, and consciousness",
        biggestIdea: "Consciousness emerges from strange loops of self-reference",
        projects: "Copycat AI, FARG framework",
        impact: "Bridged AI, mathematics, and philosophy",
      },
    ],
  },
  {
    domain: "Quantum Computing & Finance",
    geniuses: [
      {
        name: "David Deutsch",
        field: "Quantum Computing",
        contributions: [
          "Quantum Turing machine",
          "Quantum algorithms theory",
          "Constructor theory",
          "Quantum parallelism concept",
        ],
        innovations: "Showed quantum computers can solve problems exponentially faster",
        biggestIdea: "Quantum computers exploit superposition for massive parallelism",
        projects: "Quantum algorithm design, constructor theory development",
        impact: "Foundation of quantum computing field",
      },
      {
        name: "John Preskill",
        field: "Quantum Information",
        contributions: [
          "Quantum error correction",
          "NISQ era concept",
          "Quantum supremacy analysis",
          "Quantum machine learning",
        ],
        innovations: "Made quantum computing practical and error-tolerant",
        biggestIdea: "Near-term quantum devices can provide practical advantages",
        projects: "Quantum computing roadmaps, error correction codes",
        impact: "Guided realistic quantum computing development",
      },
    ],
  },
  {
    domain: "Neurology & Biological Computing",
    geniuses: [
      {
        name: "Santiago Ramón y Cajal",
        field: "Neuroscience",
        contributions: [
          "Neuron doctrine",
          "Synaptic transmission concept",
          "Neural circuit mapping",
          "Neuroplasticity insights",
        ],
        innovations: "Revealed the brain is made of individual neurons",
        biggestIdea: "Neurons communicate through synapses, not continuous networks",
        projects: "Brain mapping, neural circuit analysis",
        impact: "Foundation of modern neuroscience",
      },
      {
        name: "Jeff Hawkins",
        field: "Neuroscience & AI",
        contributions: [
          "Hierarchical temporal memory",
          "Cortical learning algorithms",
          "Thousand brains theory",
          "Numenta framework",
        ],
        innovations: "Applied neuroscience principles to AI",
        biggestIdea: "Intelligence is prediction; brain uses hierarchical temporal patterns",
        projects: "HTM algorithms, neuromorphic computing",
        impact: "Bridged neuroscience and artificial intelligence",
      },
    ],
  },
]

export function InspirationSection() {
  const [expandedGenius, setExpandedGenius] = useState<string | null>(null)

  return (
    <section id="inspiration" className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-6xl w-full mx-auto">
        <div className="mb-16">
          <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">My Inspiration</h3>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Genius minds across <span className="underline decoration-primary">domains</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Studying the strategies, techniques, and ideas of extraordinary minds who shaped their fields and pushed the
            boundaries of human knowledge.
          </p>
        </div>

        <div className="space-y-8">
          {geniusMinds.map((domainGroup) => (
            <div key={domainGroup.domain} className="border-b border-gray-800 pb-8">
              <h3 className="text-2xl font-bold mb-8 text-primary">{domainGroup.domain}</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {domainGroup.geniuses.map((genius) => {
                  const geniusKey = `${domainGroup.domain}-${genius.name}`
                  const isExpanded = expandedGenius === geniusKey

                  return (
                    <div
                      key={geniusKey}
                      className="bg-white/5 border border-gray-800 rounded-lg overflow-hidden hover:border-primary/30 transition-all"
                    >
                      <button
                        onClick={() => setExpandedGenius(isExpanded ? null : geniusKey)}
                        className="w-full p-6 text-left hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-1">{genius.name}</h4>
                            <p className="text-sm text-primary">{genius.field}</p>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {genius.contributions.slice(0, 2).map((contrib, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                              {contrib}
                            </span>
                          ))}
                          {genius.contributions.length > 2 && (
                            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded-full">
                              +{genius.contributions.length - 2} more
                            </span>
                          )}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-6 pb-6 border-t border-gray-800 space-y-4">
                          <div>
                            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                              All Contributions
                            </p>
                            <ul className="space-y-1">
                              {genius.contributions.map((contrib, idx) => (
                                <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                  <Zap className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" />
                                  {contrib}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                              Biggest Idea
                            </p>
                            <p className="text-sm text-gray-300 italic">{genius.biggestIdea}</p>
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                              Key Innovation
                            </p>
                            <p className="text-sm text-gray-300">{genius.innovations}</p>
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                              Major Projects
                            </p>
                            <p className="text-sm text-gray-300">{genius.projects}</p>
                          </div>

                          <div className="pt-2 border-t border-gray-800">
                            <div className="flex items-start gap-2">
                              <Award className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-gray-300">
                                <span className="font-semibold text-primary">Impact:</span> {genius.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-lg">
          <div className="flex items-start gap-4">
            <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Why Study Genius Minds?</h4>
              <p className="text-gray-300 leading-relaxed">
                By studying how geniuses across different domains think, solve problems, and innovate, I extract
                universal principles and strategies that transcend specific fields. This cross-domain learning
                accelerates my own growth and helps me approach problems with fresh perspectives and proven
                methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
