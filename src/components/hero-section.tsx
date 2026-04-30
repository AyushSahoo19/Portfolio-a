
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ExternalLink, Code2, Globe, Database, Zap } from "lucide-react"
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
    name: "Lumina",
    description: "High-end editorial-style link discovery workspace",
    url: "https://lumina-six-xi.vercel.app/",
    category: "Productivity",
    icon: Code2,
  },
  {
    name: "Eng-10X",
    description: "Advanced engineering lifecycle educational platform",
    url: "https://eng-10-x.vercel.app/",
    category: "Education",
    icon: Globe,
  },
  {
    name: "LibOS",
    description: "Autonomous coding and engineering playbook repository",
    url: "https://lib-os.vercel.app/",
    category: "DevOS",
    icon: Database,
  },
]

export function HeroSection() {
  return (
    <section id="intro" className="min-h-screen flex flex-col items-start justify-center px-6 lg:px-24 pt-32 bg-background relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10 -ml-32" />

      {/* Main Content Container */}
      <div className="max-w-4xl w-full flex flex-col items-start text-left">
        
        {/* Minimal Profile Header - Positioned with ample top spacing */}
        <div className="flex items-center gap-3 mb-14 group cursor-default">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border group-hover:border-primary/50 transition-colors shadow-lg">
            <div className="absolute inset-0 bg-primary/10 animate-pulse group-hover:bg-transparent" />
            <img 
              src="/ayush_raw.jpeg" 
              alt="Ayush Kumar Sahoo" 
              className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[11px] font-bold text-foreground uppercase tracking-[0.2em] leading-none mb-1.5">
              Ayush Kumar Sahoo
            </span>
            <span className="text-[9px] text-muted-foreground uppercase tracking-widest leading-none">
              Software Engineer @ Tata Steel
            </span>
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight text-foreground tracking-tight">
          I turn ideas into{" "}
          <span className="relative inline-block">
            <span className="italic">meaningful</span>
            <span className="absolute bottom-2 left-0 w-full h-1 bg-primary/30" />
          </span>{" "}
          design solutions that{" "}
          <span className="relative inline-block text-primary">
            inspire
            <span className="absolute bottom-2 left-0 w-full h-1 bg-primary/40" />
          </span>
          .
        </h1>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          Building the future through <span className="text-foreground font-medium">AI</span>, 
          <span className="text-foreground font-medium"> quantum computing</span>,
          and <span className="text-foreground font-medium">full-stack innovation</span>.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-sm font-bold shadow-xl shadow-primary/10 transition-all flex items-center gap-2"
              >
                Explore My Work
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-80 bg-card border-border/50 backdrop-blur-xl shadow-2xl"
              align="start"
              sideOffset={8}
            >
              <div className="p-4">
                <h3 className="text-sm font-bold text-foreground mb-1">Ecosystem Hub</h3>
                <p className="text-xs text-muted-foreground">
                  Direct access to my autonomous frameworks and platforms.
                </p>
              </div>
              <DropdownMenuSeparator className="bg-border/50" />
              {webApplications.map((app, index) => {
                const Icon = app.icon
                return (
                  <DropdownMenuItem
                    key={index}
                    className="p-3 cursor-pointer hover:bg-primary/10 focus:bg-primary/10 rounded-lg mx-1 transition-colors"
                    asChild
                  >
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 w-full"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-sm font-bold text-foreground truncate">
                            {app.name}
                          </span>
                          <ExternalLink className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                        </div>
                        <p className="text-[10px] text-muted-foreground line-clamp-1">
                          {app.description}
                        </p>
                      </div>
                    </a>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-10 h-14 border-border text-foreground hover:border-primary hover:text-primary bg-transparent text-sm font-medium transition-all"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in touch
          </Button>
        </div>
      </div>

      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>
    </section>
  )
}
