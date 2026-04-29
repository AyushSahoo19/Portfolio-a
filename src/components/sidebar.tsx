
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { id: "intro", label: "Intro" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects-showcase", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "applications", label: "Applications" },
  { id: "tools", label: "Tools & Tech" },
  { id: "contact", label: "Contact" },
]

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("intro")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-card"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-background border-r border-border/50 px-6 py-12 flex flex-col justify-between transition-transform duration-300 z-40 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div>
          <div className="mb-12">
            <h1 className="text-[10px] font-bold mb-1 text-foreground tracking-widest uppercase truncate">Ayush Kumar Sahoo</h1>
          </div>

          <nav className="space-y-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex items-center w-full text-left py-1.5 text-xs transition-colors ${
                  activeSection === item.id 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className={`absolute -left-3 text-[10px] transition-all duration-200 ${
                    activeSection === item.id
                      ? "opacity-100 text-primary"
                      : "opacity-0 group-hover:opacity-100 group-hover:text-primary"
                  }`}
                >
                  →
                </span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-6">
          <Button
            className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-background rounded-full transition-all duration-300 text-xs py-2"
            onClick={() => scrollToSection("contact")}
          >
            Get in touch
          </Button>

          <div className="flex items-center justify-between">
            <div className="flex gap-5">
              <a
                href="https://github.com/AyushSahoo19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-kumar-sahoo-984a65307/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:ayush.kumar.sahoo10@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
