
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ExternalLink, Code2, Globe, Database } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"

const webApplications = [
  {
    name: "AI Research Dashboard",
    description: "Advanced analytics platform for AI research",
    url: "https://ai-research-dashboard.vercel.app",
    category: "AI & ML",
    icon: Code2,
  },
  {
    name: "Quantum Circuit Visualizer",
    description: "Interactive quantum computing simulator",
    url: "https://quantum-viz.vercel.app",
    category: "Quantum Computing",
    icon: Globe,
  },
  {
    name: "Startup Analytics Platform",
    description: "Comprehensive startup data analysis tool",
    url: "https://startup-analytics.vercel.app",
    category: "Analytics",
    icon: Database,
  },
  {
    name: "Portfolio Tracker",
    description: "Real-time investment portfolio management",
    url: "https://portfolio-tracker.vercel.app",
    category: "Finance",
    icon: Database,
  },
]

export function HeroSection() {
  return (
    <section id="intro" className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative">
      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>
      
      <div className="max-w-4xl w-full">
        <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight text-foreground">
          I turn ideas into{" "}
          <span className="relative inline-block">
            <span className="italic">meaningful</span>
            <span className="absolute bottom-2 left-0 w-full h-1 bg-primary/30" />
          </span>{" "}
          design solutions that{" "}
          <span className="relative inline-block">
            inspire
            <span className="absolute bottom-2 left-0 w-full h-1 bg-primary" />
          </span>
          .
        </h1>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          Software Engineer at <span className="text-foreground font-semibold">Tata Steel</span>. Building the future through{" "}
          <span className="italic text-foreground">AI</span>, <span className="italic text-foreground">quantum computing</span>,
          and <span className="italic text-foreground">full-stack innovation</span>.
        </p>

        <div className="flex flex-wrap gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 flex items-center gap-2"
              >
                View my work
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-80 bg-card border-border/50 backdrop-blur-sm"
              align="start"
              sideOffset={8}
            >
              <div className="p-3">
                <h3 className="text-sm font-semibold text-foreground mb-2">Web Applications</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Explore my live web applications and projects
                </p>
              </div>
              <DropdownMenuSeparator className="bg-border/50" />
              {webApplications.map((app, index) => {
                const Icon = app.icon
                return (
                  <DropdownMenuItem
                    key={index}
                    className="p-3 cursor-pointer hover:bg-accent/50 focus:bg-accent/50"
                    asChild
                  >
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 w-full"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-foreground truncate">
                            {app.name}
                          </span>
                          <ExternalLink className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                        </div>
                        <p className="text-xs text-muted-foreground mb-1 line-clamp-2">
                          {app.description}
                        </p>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {app.category}
                        </span>
                      </div>
                    </a>
                  </DropdownMenuItem>
                )
              })}
              <DropdownMenuSeparator className="bg-border/50" />
              <DropdownMenuItem
                className="p-3 cursor-pointer hover:bg-accent/50 focus:bg-accent/50"
                onClick={() => document.getElementById("projects-showcase")?.scrollIntoView({ behavior: "smooth" })}
              >
                <div className="flex items-center gap-3 w-full">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    View All Projects
                  </span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-border text-foreground hover:border-primary hover:text-primary bg-transparent"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  )
}
