import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { 
  projectsData 
} from "../data/projects";
import { 
  ArrowLeft, 
  ArrowRight, 
  Cpu, 
  CheckCircle2, 
  Database, 
  Layers, 
  Wrench,
  ShieldCheck,
  Code2
} from "lucide-react";
import { motion } from "motion/react";

export function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");

  // Fetch match project
  const project = projectsData.find(p => p.slug === slug);

  // Define doc subsections to watch for Scroll-Spy
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem Statement" },
    { id: "goals", label: "Goals" },
    { id: "architecture", label: "Architecture" },
    { id: "techstack", label: "Tech Stack" },
    { id: "challenges", label: "Challenges & Solutions" },
    { id: "gallery", label: "Project Gallery" },
    { id: "lessons", label: "Lessons Learned" }
  ];

  // Set up intersection observer for scroll-spy highlighting
  useEffect(() => {
    if (!project) return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Detect active section in middle of viewport
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [project, slug]);

  // Scroll window to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="max-w-xl mx-auto px-6 py-24 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-primary">
          Log Entry Missing
        </h2>
        <p className="font-sans text-sm text-secondary mt-3">
          The requested engineering record cannot be extracted from active storage pools.
        </p>
        <Link
          to="/projects"
          className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded font-display text-xs font-bold tracking-wider uppercase focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit Registry</span>
        </Link>
      </div>
    );
  }

  // Get index to fetch previous/next
  const currentIndex = projectsData.findIndex(p => p.slug === slug);
  const prevProject = projectsData[currentIndex - 1] || projectsData[projectsData.length - 1];
  const nextProject = projectsData[currentIndex + 1] || projectsData[0];

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Back button */}
      <div className="mb-12">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary font-mono text-xs uppercase tracking-wider group focus:outline-none cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to registry listing</span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start relative">
        
        {/* Sticky side rail navigation (Inspired by Stripe & Vercel docs) */}
        <aside className="hidden lg:block w-60 sticky top-24 shrink-0 border-l border-border-lux pl-4 py-2 mt-40">
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#9c9ea0] block mb-4">
            Specification
          </span>
          <nav className="flex flex-col space-y-2.5">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => handleScrollTo(sec.id, e)}
                  className={`font-display text-[13px] transition-smooth border-l pl-3 -ml-[17px] cursor-pointer focus:outline-none ${
                    isActive
                      ? "text-[#1B365D] border-[#1B365D] font-bold"
                      : "text-secondary border-transparent hover:text-primary hover:border-[#D3D3D3]"
                  }`}
                >
                  {sec.label}
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Core Case Study Content Canvas */}
        <div className="flex-1 max-w-3xl prose-doc">
          
          {/* Header Metadata block */}
          <section id="overview" className="scroll-mt-24 mb-16 border-b border-border-lux pb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-bold bg-accent/5 px-2 py-0.5 rounded">
                Case Study // {project.year}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary/40" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-secondary font-medium">
                {project.category} Architecture
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-none mb-6">
              {project.title}
            </h1>

            <p className="font-sans text-lg md:text-xl text-secondary leading-relaxed font-light mb-8">
              {project.overview}
            </p>

            {/* Impact Metrics and core role table */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-border-lux">
              <div>
                <span className="font-mono text-[10px] text-secondary uppercase block mb-1 font-semibold tracking-wider">
                  Role Assignation
                </span>
                <span className="font-display text-sm font-bold text-primary">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-secondary uppercase block mb-1 font-semibold tracking-wider">
                  Timeline
                </span>
                <span className="font-display text-sm font-bold text-primary">
                  {project.timeline}
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-secondary uppercase block mb-1 font-semibold tracking-wider text-accent">
                  Performance Impact
                </span>
                <span className="font-display text-sm font-bold text-[#1B365D] bg-accent/5 px-2 py-0.5 rounded">
                  {project.impact}
                </span>
              </div>
            </div>
          </section>

          {/* Problem Statement Section */}
          <section id="problem" className="scroll-mt-24 mb-16 border-b border-border-lux pb-12">
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Problem Statement</h2>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              {project.problemStatement}
            </p>

            <div className="bg-white border border-border-lux rounded-lg p-6 my-8 shadow-sm">
              <h4 className="font-display text-sm uppercase tracking-wider font-bold text-primary mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1B365D]" />
                <span>Critical Structural Challenges</span>
              </h4>
              <ul className="space-y-3 font-sans text-xs text-secondary">
                {project.painPoints.map((point, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="font-mono text-accent font-bold mt-0.5">0{index + 1}.</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Goals Section */}
          <section id="goals" className="scroll-mt-24 mb-16 border-b border-border-lux pb-12">
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Goals</h2>
            <p className="font-sans text-sm text-secondary leading-relaxed mb-6">
              Our target was to implement a rigorous, resilient infrastructure stack optimizing for two main objectives:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {project.goals.map((goal, index) => (
                <div key={index} className="p-6 bg-white border border-border-lux rounded-lg flex flex-col justify-between shadow-sm">
                  <div className="w-8 h-8 rounded bg-accent/5 flex items-center justify-center mb-4 text-[#1B365D] font-mono text-xs font-bold">
                    0{index + 1}
                  </div>
                  <h4 className="font-display text-md font-bold text-primary mb-1">
                    {goal.title}
                  </h4>
                  <p className="font-sans text-xs text-secondary leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture Section */}
          <section id="architecture" className="scroll-mt-24 mb-16 border-b border-border-lux pb-12">
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Architecture</h2>
            <p className="font-sans text-sm text-secondary leading-relaxed mb-8">
              {project.architecture.description}
            </p>

            {/* Architecture points */}
            <div className="space-y-6">
              {project.architecture.points.map((pt, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="font-mono text-xs font-bold text-accent bg-[#DCE6F2] w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h5 className="font-display text-sm font-bold text-primary">{pt.title}</h5>
                    <p className="font-sans text-xs text-secondary mt-1 leading-relaxed">{pt.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="techstack" className="scroll-mt-24 mb-16 border-b border-border-lux pb-12">
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Tech Stack</h2>
            <p className="font-sans text-sm text-secondary leading-relaxed mb-6">
              The systems are engineered with modern, high-precision technical libraries matching developer best-practices:
            </p>

            <div className="bg-white border border-border-lux rounded-lg divide-y divide-border-lux overflow-hidden shadow-sm">
              {project.techStack.map((tech) => (
                <div 
                  key={tech.name} 
                  className="flex items-center justify-between p-4 hover:bg-surface/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Code2 className="w-4 h-4 text-secondary shrink-0" />
                    <span className="font-display font-bold text-sm text-primary">{tech.name}</span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-accent bg-[#DCE6F2] font-bold px-2.5 py-0.5 rounded ml-auto">
                    {tech.type}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section id="challenges" className="scroll-mt-24 mb-16 border-b border-border-lux pb-12">
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Challenges &amp; Solutions</h2>
            <p className="font-sans text-sm text-secondary leading-relaxed mb-8">
              Building at scale introduced several tough technical obstacles that required custom mitigations:
            </p>

            <div className="space-y-8">
              {project.challenges.map((c, index) => (
                <div key={index} className="space-y-2 border-l-2 border-accent pl-6 py-1">
                  <h4 className="font-display text-[15px] font-bold text-primary uppercase tracking-wide">
                    {c.challenge}
                  </h4>
                  <p className="font-sans text-xs text-secondary leading-relaxed">
                    {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Project Gallery */}
          <section id="gallery" className="scroll-mt-24 mb-16 border-b border-border-lux pb-12">
            <h2 className="font-display text-2xl font-bold text-primary mb-4 font-semibold">Project Gallery</h2>
            <p className="font-sans text-sm text-secondary leading-relaxed mb-6">
              Operational screenshots representing both dynamic container topologies and executive metrics dashboards:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshots.map((s, idx) => {
                const isWide = idx === 2;
                const gridClass = isWide ? "md:col-span-2 aspect-[16/9]" : "aspect-square";
                return (
                  <div 
                    key={idx} 
                    className={`${gridClass} bg-white border border-border-lux rounded-lg overflow-hidden shrink-0 hover:scale-[1.01] transition-smooth`}
                  >
                    <img 
                      src={s.url} 
                      alt={s.alt} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                );
              })}
            </div>
          </section>

          {/* Lessons Learned */}
          <section id="lessons" className="scroll-mt-24 mb-16">
            <h2 className="font-display text-2xl font-bold text-primary mb-4 font-semibold">Lessons Learned</h2>
            <p className="font-sans text-sm text-secondary leading-relaxed mb-6">
              Reflecting on operational telemetry and distributed metrics yielded several critical engineering takeaways:
            </p>

            <ul className="space-y-3 font-sans text-xs text-secondary list-disc pl-5 leading-relaxed">
              {project.lessons.map((lesson, idx) => (
                <li key={idx}>
                  {lesson}
                </li>
              ))}
            </ul>
          </section>

          {/* Previous / Next Projects Bottom navigation */}
          <div className="mt-20 pt-10 border-t border-border-lux flex justify-between items-center bg-white/20 p-4 rounded-lg">
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group flex flex-col items-start gap-1 focus:outline-none cursor-pointer"
            >
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#9c9ea0] font-bold">
                Previous Case Study
              </span>
              <span className="font-display text-[15px] font-bold text-primary group-hover:text-accent transition-colors flex items-center gap-1.5 mt-0.5">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> {prevProject.title}
              </span>
            </Link>
            
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-end text-right gap-1 focus:outline-none cursor-pointer"
            >
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#9c9ea0] font-bold">
                Next Case Study
              </span>
              <span className="font-display text-[15px] font-bold text-primary group-hover:text-accent transition-colors flex items-center gap-1.5 mt-0.5">
                {nextProject.title} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
