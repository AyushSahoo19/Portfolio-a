
import { BookOpen, FileText, Newspaper, ExternalLink, Calendar } from "lucide-react"

const publications = {
  articles: [
    {
      title: "The Future of Quantum Computing in AI",
      date: "2024-01-15",
      readTime: "8 min read",
      description:
        "Exploring how quantum computing will revolutionize artificial intelligence and machine learning in the next decade.",
      tags: ["Quantum", "AI", "Future Tech"],
      link: "#",
    },
    {
      title: "Building Scalable RAG Systems",
      date: "2023-12-10",
      readTime: "12 min read",
      description:
        "A comprehensive guide to building production-ready Retrieval-Augmented Generation systems with best practices.",
      tags: ["AI", "RAG", "Engineering"],
      link: "#",
    },
    {
      title: "First Principles Thinking in Software",
      date: "2023-11-05",
      readTime: "6 min read",
      description: "How applying first principles thinking can lead to breakthrough solutions in software engineering.",
      tags: ["Philosophy", "Engineering", "Innovation"],
      link: "#",
    },
  ],
  books: [
    {
      title: "Quantum Minds: The Intersection of Physics and Consciousness",
      status: "In Progress",
      progress: 65,
      description:
        "Exploring the philosophical implications of quantum mechanics on our understanding of consciousness.",
      chapters: 12,
      completedChapters: 8,
    },
    {
      title: "The Genius Playbook: Strategies from History's Greatest Minds",
      status: "Planning",
      progress: 20,
      description: "A compilation of thinking patterns and strategies used by geniuses across different domains.",
      chapters: 15,
      completedChapters: 3,
    },
  ],
  reading: [
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", status: "Completed" },
    { title: "The Beginning of Infinity", author: "David Deutsch", status: "Reading" },
    { title: "Superintelligence", author: "Nick Bostrom", status: "Reading" },
    { title: "Gödel, Escher, Bach", author: "Douglas Hofstadter", status: "Completed" },
  ],
}

export function PublicationsSection() {
  return (
    <section id="publications" className="min-h-screen py-20 px-6 lg:px-16 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm font-medium mb-2 tracking-wider uppercase">Publications & Writings</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Sharing ideas and
            <br />
            <span className="text-primary">building knowledge</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Articles, books, and thoughts on technology, philosophy, and the pursuit of mastery.
          </p>
        </div>

        {/* Articles */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Articles & Blog Posts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.articles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                className="group block bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>
                <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{article.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-primary">
                  Read article
                  <ExternalLink className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Books in Progress */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Books in Progress</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {publications.books.map((book, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold flex-1">{book.title}</h4>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      book.status === "In Progress"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted-foreground/10 text-muted-foreground"
                    }`}
                  >
                    {book.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{book.description}</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">
                      {book.completedChapters}/{book.chapters} chapters
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-500"
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
            <Newspaper className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Currently Reading & Studied</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {publications.reading.map((book, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-xl p-4 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <BookOpen className="h-4 w-4 text-primary flex-shrink-0" />
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      book.status === "Completed" ? "bg-green-500/10 text-green-500" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {book.status}
                  </span>
                </div>
                <h4 className="font-semibold text-sm mb-1">{book.title}</h4>
                <p className="text-xs text-muted-foreground">{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
