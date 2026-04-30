import { Mail, Github, Linkedin, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 lg:px-12 py-24">
      <div className="max-w-5xl w-full mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">Contact</h3>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">Let's build something amazing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, innovative ideas, research collaborations, or opportunities to
            be part of groundbreaking work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">For professional inquiries and collaborations</p>
            <a href="mailto:ayush.kumar.sahoo10@gmail.com" className="text-primary hover:underline font-semibold">
              ayush.kumar.sahoo10@gmail.com
            </a>
          </div>

          <div className="border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Schedule a Call</h3>
            <p className="text-muted-foreground mb-4">Let's discuss your project or idea in detail</p>
            <Button className="bg-primary text-background hover:bg-primary/90 rounded-full px-6">Book a meeting</Button>
          </div>
        </div>

        <div className="border-t border-border pt-12 text-center">
          <h3 className="text-lg font-bold mb-6">Connect with me</h3>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/AyushSahoo19"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:border-primary hover:text-primary transition-all duration-300 bg-card/50"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-kumar-sahoo-984a65307/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:border-primary hover:text-primary transition-all duration-300 bg-card/50"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>© 2025 Ayush Kumar Sahoo. Built with Astro and passion for innovation.</p>
        </div>
      </div>
    </section>
  )
}
