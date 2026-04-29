"use client"

import { useState } from "react"
import { Calendar, Clock, ArrowRight, BookOpen, FileText, ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"

const blogPosts = [
  {
    title: "The Future of Quantum Computing in Finance",
    excerpt:
      "Exploring how quantum algorithms are revolutionizing financial modeling, risk analysis, and portfolio optimization in modern markets.",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Quantum Computing",
    domain: "Quantum",
  },
  {
    title: "Building Scalable RAG Systems",
    excerpt:
      "A deep dive into architecting Retrieval-Augmented Generation systems that can handle enterprise-scale knowledge bases efficiently.",
    date: "2024-03-10",
    readTime: "12 min read",
    category: "AI/ML",
    domain: "AI",
  },
  {
    title: "Philosophy of Problem Solving",
    excerpt:
      "How studying philosophy and neurology has transformed my approach to software engineering and complex problem-solving.",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Philosophy",
    domain: "Philosophy",
  },
]

const books = [
  {
    title: "Quantum Thinking: A Developer's Journey",
    description:
      "My exploration of quantum computing concepts and their practical applications in modern software development.",
    status: "In Progress",
    progress: 65,
    domain: "Quantum",
    why: "Understanding quantum mechanics is crucial for the future of computing and optimization problems.",
    author: "Ayush Kumar Sahoo",
  },
  {
    title: "The Art of Full Stack Mastery",
    description:
      "A comprehensive guide to becoming a world-class full-stack developer through systematic learning and practice.",
    status: "Planning",
    progress: 15,
    domain: "Engineering",
    why: "Documenting the journey of mastering full-stack development with practical insights and strategies.",
    author: "Ayush Kumar Sahoo",
  },
]

const readingList = [
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    status: "Completed",
    domain: "Psychology",
    why: "Essential for understanding cognitive biases and decision-making processes in problem-solving.",
  },
  {
    title: "The Beginning of Infinity",
    author: "David Deutsch",
    status: "Reading",
    domain: "Physics",
    why: "Explores the nature of knowledge and how understanding works, fundamental to scientific thinking.",
  },
  {
    title: "Superintelligence",
    author: "Nick Bostrom",
    status: "Reading",
    domain: "AI",
    why: "Critical analysis of AI risks and the future of artificial general intelligence.",
  },
  {
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    status: "Completed",
    domain: "Philosophy",
    why: "Explores consciousness, self-reference, and the nature of intelligence through art and mathematics.",
  },
]

const domains = ["All", "Quantum", "AI", "Philosophy", "Engineering", "Physics", "Psychology"]

export function BlogSection() {
  const [selectedDomain, setSelectedDomain] = useState("All")
  const [expandedBook, setExpandedBook] = useState<string | null>(null)

  const filteredPosts = selectedDomain === "All" ? blogPosts : blogPosts.filter((p) => p.domain === selectedDomain)
  const filteredBooks = selectedDomain === "All" ? books : books.filter((b) => b.domain === selectedDomain)
  const filteredReading =
    selectedDomain === "All" ? readingList : readingList.filter((b) => b.domain === selectedDomain)

  return (
    <section id="blog" className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-7xl w-full mx-auto">
        <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">Blog & Writing</h3>
        <h2 className="text-5xl lg:text-6xl font-bold mb-6">
          Thoughts and <span className="underline decoration-primary">insights</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
          Sharing my learnings, research findings, and perspectives on technology, philosophy, and innovation.
        </p>

        {/* Domain Filter */}
        <div className="flex flex-wrap gap-2 mb-16">
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`text-xs px-4 py-2 rounded-full transition-all ${
                selectedDomain === domain ? "bg-primary text-background" : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Featured article */}
          <Card className="lg:col-span-2 p-8 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Featured Article</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
              {filteredPosts[0]?.title || blogPosts[0].title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              {filteredPosts[0]?.excerpt || blogPosts[0].excerpt}
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(filteredPosts[0]?.date || blogPosts[0].date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{filteredPosts[0]?.readTime || blogPosts[0].readTime}</span>
              </div>
            </div>
            <div className="flex items-center text-primary group-hover:gap-2 transition-all">
              <span className="text-sm font-semibold">Read article</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </Card>

          {/* Recent articles */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-4">Recent Articles</h4>
            {filteredPosts.slice(1).map((post, index) => (
              <Card
                key={index}
                className="p-6 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group bg-card/50 backdrop-blur-sm"
              >
                <span className="text-xs font-mono text-primary uppercase tracking-wider">{post.category}</span>
                <h4 className="text-lg font-bold mt-2 mb-2 group-hover:text-primary transition-colors">{post.title}</h4>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{post.readTime}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Books section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Books in Progress</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredBooks.map((book, index) => (
              <div
                key={index}
                className="border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold flex-1">{book.title}</h4>
                  <span className="text-xs font-mono text-primary uppercase tracking-wider px-3 py-1 bg-primary/10 rounded-full whitespace-nowrap ml-4">
                    {book.status}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{book.description}</p>

                {/* Expandable details */}
                <button
                  onClick={() => setExpandedBook(expandedBook === `book-${index}` ? null : `book-${index}`)}
                  className="flex items-center gap-2 text-primary text-sm mb-4 hover:gap-3 transition-all"
                >
                  <span>Why read this</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expandedBook === `book-${index}` ? "rotate-180" : ""}`}
                  />
                </button>

                {expandedBook === `book-${index}` && (
                  <div className="mb-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-gray-300 mb-3">{book.why}</p>
                    <p className="text-xs text-gray-400">By {book.author}</p>
                  </div>
                )}

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-primary font-semibold">{book.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reading List */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Currently Reading & Studied</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredReading.map((book, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-xl p-4 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <BookOpen className="h-4 w-4 text-primary flex-shrink-0" />
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      book.status === "Completed" ? "bg-green-500/10 text-green-500" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {book.status}
                  </span>
                </div>
                <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{book.title}</h4>
                <p className="text-xs text-muted-foreground mb-3">{book.author}</p>
                <button className="text-xs text-primary hover:underline">Why read →</button>
                <p className="text-xs text-gray-400 mt-2 hidden group-hover:block">{book.why}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
