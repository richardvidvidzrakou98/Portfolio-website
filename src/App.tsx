import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { ContactModal } from "./components/ContactModal";
import { LandingPage } from "./pages/LandingPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";
import { ArrowUpRight } from "lucide-react";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-surface text-primary selection:bg-accent/15 selection:text-accent">
        
        {/* Universal Modular Sidebar / Bottom Floating Dock */}
        <Navigation onContactClick={() => setIsContactOpen(true)} />

        {/* Primary Content Container, incorporating mobile vertical top-bar/bottom-dock padding offsets */}
        <main className="flex-1 md:pl-60 pt-16 md:pt-0 pb-24 md:pb-8 min-h-screen w-full relative">
          
          <Routes>
            <Route 
              path="/" 
              element={<LandingPage onContactClick={() => setIsContactOpen(true)} />} 
            />
            <Route 
              path="/projects" 
              element={<ProjectsPage />} 
            />
            <Route 
              path="/projects/:slug" 
              element={<ProjectDetailsPage />} 
            />
            <Route 
              path="/contact" 
              element={
                <Navigate to="/" replace />
              } 
            />
            <Route 
              path="*" 
              element={<Navigate to="/" replace />} 
            />
          </Routes>

          {/* Footnotes / Shared minimalist footer */}
          <footer className="w-full mt-16 border-t border-border-lux bg-white/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="text-center sm:text-left">
                <span className="font-display font-black text-sm tracking-tight text-primary">
                  Richard Vidzrakou
                </span>
                <p className="text-secondary text-[11px] font-mono mt-1">
                  © 2026 Richard Vidzrakou. All specifications fully verified.
                </p>
              </div>
              <div className="flex gap-6 font-mono text-[11px] font-semibold text-secondary">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </footer>

        </main>

        {/* Global Modal Instance for client communications */}
        <ContactModal 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />
        
      </div>
    </Router>
  );
}
