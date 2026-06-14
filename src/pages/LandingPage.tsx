import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Cpu, 
  LineChart, 
  Shield, 
  Terminal, 
  Smartphone, 
  Database,
  CodeXml,
  Compass,
  ArrowRight
} from "lucide-react";
import { projectsData, articlesData } from "../data/projects";
import { motion } from "motion/react";

interface LandingPageProps {
  onContactClick: () => void;
}

export function LandingPage({ onContactClick }: LandingPageProps) {
  // Extract primary projects
  const featuredProject = projectsData.find(p => p.slug === "bookafrica");
  const secondaryProjects = projectsData.filter(p => p.slug !== "bookafrica");

  const cardVariants = {
    hover: {
      scale: 1.01,
      backgroundColor: "#F6F5F2",
      borderColor: "#1B365D",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* 1. Identity Section */}
      <section className="pt-8 md:pt-16 pb-24 border-b border-border-lux" id="identity">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <span className="font-mono text-xs font-semibold tracking-wider text-accent uppercase bg-accent/5 px-3 py-1 rounded">
              Identity Portal // 2026
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-primary leading-[1.05]">
              Richard Vidzrakou
            </h1>
            <p className="font-sans text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed">
              Fullstack Developer • Software Engineer • <span className="text-primary font-semibold">Cloud &amp; Product Builder</span>.
            </p>
            <p className="font-mono text-sm md:text-base text-secondary max-w-xl leading-relaxed border-l-2 border-accent pl-6 italic">
              "Building scalable systems, cloud applications, and digital products that solve real-world problems with extreme fidelity."
            </p>
          </div>

          {/* Availability Card */}
          <div className="lg:col-span-4 bg-white border border-border-lux p-8 rounded-lg shadow-sm">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-secondary mb-6 border-b border-border-lux pb-2 font-semibold">
              Current Dispatch Status
            </h3>
            <ul className="space-y-4 font-sans text-sm text-primary">
              <li className="flex items-center justify-between pb-3 border-b border-border-lux/60">
                <span className="text-secondary">Location</span>
                <span className="font-semibold text-right">Ghana</span>
              </li>
              <li className="flex items-center justify-between pb-3 border-b border-border-lux/60">
                <span className="text-secondary">Focus</span>
                <span className="font-semibold">Fullstack Systems</span>
              </li>
              <li className="flex items-center justify-between pb-3 border-b border-border-lux/60">
                <span className="text-secondary">Infrastructure</span>
                <span className="font-semibold">Cloud Engineering</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-secondary">Availability</span>
                <span className="px-2.5 py-1 bg-accent/10 text-accent text-[10px] rounded uppercase font-bold tracking-widest">
                  Collaborations Open
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <button
                onClick={onContactClick}
                className="block w-full text-center bg-primary text-white py-3 font-display rounded font-semibold text-xs tracking-wider uppercase hover:bg-accent hover:shadow-md transition-smooth cursor-pointer focus:outline-none"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Expertise Section (Capabilities) */}
      <section className="py-24 border-b border-border-lux" id="expertise">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#9c9ea0] mb-2 block font-semibold">
            Capabilities
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Core Technical Expertise
          </h2>
          <p className="font-sans text-sm text-secondary mt-3 leading-relaxed">
            A spectrum of architectural planning, systems safety analysis, and visual design synthesis applied to enterprise applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Software Engineering */}
          <div className="p-8 bg-white border border-border-lux flex flex-col gap-4 transition-smooth hover:border-accent">
            <CodeXml className="text-accent w-8 h-8 shrink-0" />
            <h4 className="font-display text-[18px] font-bold text-primary">Software Engineering</h4>
            <p className="text-secondary text-xs leading-relaxed">
              Robust architectural design patterns and strict type principles applied to high-concurrency solutions.
            </p>
          </div>

          {/* Cloud Infrastructure */}
          <div className="p-8 bg-white border border-border-lux flex flex-col gap-4 transition-smooth hover:border-accent">
            <Cpu className="text-accent w-8 h-8 shrink-0" />
            <h4 className="font-display text-[18px] font-bold text-primary">Cloud Infrastructure</h4>
            <p className="text-secondary text-xs leading-relaxed">
              Provisioning secure AWS/Azure systems with structured Terraform states, Docker clusters, and automated pipelines.
            </p>
          </div>

          {/* Frontend Systems */}
          <div className="p-8 bg-white border border-border-lux flex flex-col gap-4 transition-smooth hover:border-accent">
            <Smartphone className="text-accent w-8 h-8 shrink-0" />
            <h4 className="font-display text-[18px] font-bold text-primary">Frontend Systems</h4>
            <p className="text-secondary text-xs leading-relaxed">
              Responsive, fully accessible, and performant visual interfaces designed with React, Next.js, and static assets.
            </p>
          </div>

          {/* Backend Engineering */}
          <div className="p-8 bg-white border border-border-lux flex flex-col gap-4 transition-smooth hover:border-accent">
            <Database className="text-accent w-8 h-8 shrink-0" />
            <h4 className="font-display text-[18px] font-bold text-primary">Backend Engineering</h4>
            <p className="text-secondary text-xs leading-relaxed">
              High-velocity RESTful / gRPC APIs, distributed transaction pipelines, and secure storage in PostgreSQL/Redis databases.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Selected Work */}
      <section className="py-24 border-b border-border-lux" id="projects">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9c9ea0] mb-2 block font-semibold">
              Selected Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Engineering Case Studies
            </h2>
          </div>
          <Link
            to="/projects"
            className="group flex items-center gap-1.5 font-display text-sm font-semibold text-accent hover:text-accent-hover transition-colors cursor-pointer"
          >
            <span>View All Engineering Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="group bg-white border border-border-lux rounded-lg overflow-hidden flex flex-col lg:flex-row mb-12 shadow-sm">
            <div className="lg:w-3/5 overflow-hidden relative">
              <img
                src={featuredProject.featuredImage}
                alt={featuredProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-80 lg:h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:opacity-0 transition-opacity duration-300" />
            </div>
            <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-6">
                <span className="px-2.5 py-1 bg-accent/10 text-accent text-[9px] uppercase font-bold tracking-widest rounded">
                  Featured Case Study
                </span>
                <span className="font-mono text-xs text-secondary">{featuredProject.year}</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-primary mb-4">
                {featuredProject.title}
              </h3>
              <p className="text-secondary text-sm mb-8 leading-relaxed">
                {featuredProject.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.techStack.slice(0, 3).map((tech) => (
                  <span key={tech.name} className="px-2 py-1 bg-surface-card border border-border-lux text-secondary font-mono text-[9px] uppercase tracking-wider rounded">
                    {tech.name}
                  </span>
                ))}
              </div>
              <Link
                to={`/projects/${featuredProject.slug}`}
                className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-primary hover:text-accent transition-colors cursor-pointer"
              >
                <span>Read case study documentation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Bento/Asymmetric Grid for Secondary Projects */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {secondaryProjects.map((project, idx) => {
            const isWide = idx % 3 === 0;
            const cardClasses = isWide ? "md:col-span-8" : "md:col-span-4";
            return (
              <motion.div
                key={project.slug}
                whileHover="hover"
                variants={cardVariants}
                className={`${cardClasses} bg-white border border-border-lux p-8 rounded-lg flex flex-col justify-between shadow-sm transition-smooth relative`}
              >
                <div>
                  <div className="flex justify-between items-center mb-10">
                    <span className="font-mono text-xs text-secondary">{project.year}</span>
                    <span className="px-2.5 py-0.5 bg-[#DCE6F2] text-accent text-[9px] uppercase font-bold tracking-widest rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="font-display text-2xl font-bold text-primary mb-3">
                    {project.title}
                  </h4>
                  <p className="text-secondary text-xs leading-relaxed max-w-md mb-8">
                    {project.summary}
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-border-lux/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 2).map((tech) => (
                      <span key={tech.name} className="px-2 py-0.5 border border-border-lux text-secondary font-mono text-[9px] uppercase tracking-wider rounded">
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-surface border border-border-lux text-primary hover:bg-primary hover:text-white transition-smooth cursor-pointer focus:outline-none"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Technical Thinking/Articles */}
      <section className="py-24 border-b border-border-lux" id="writing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9c9ea0] mb-2 block font-semibold">
              Thinking
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Technical Documentation &amp; Essays
            </h2>
          </div>
          <span className="text-secondary font-mono text-xs mt-2 md:mt-0 opacity-60">
            A deep-dive on scalable architecture
          </span>
        </div>

        <div className="divide-y divide-border-lux border-t border-b border-border-lux">
          {articlesData.map((article) => (
            <div
              key={article.slug}
              className="group py-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/40 transition-colors px-4 -mx-4 rounded"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 lg:gap-8 flex-1">
                <span className="font-mono text-xs text-secondary font-semibold tracking-wider shrink-0 w-28">
                  {article.date}
                </span>
                <div>
                  <h4 className="font-display text-lg md:text-xl font-bold text-primary group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-secondary text-xs mt-1.5 leading-relaxed max-w-2xl">
                    {article.summary}
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 shrink-0 flex items-center gap-2 text-secondary font-mono text-xs">
                <span>{article.readTime}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all shrink-0 text-accent" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="py-24">
        <div className="bg-primary text-white py-20 px-8 md:px-16 rounded-lg overflow-hidden relative shadow-lg text-center">
          {/* Muted background architectural overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[200%] border border-white rounded-full" />
          </div>

          <span className="font-mono text-xs text-[#87a0cd] tracking-widest uppercase mb-4 block font-semibold">
            Let's Collaborate
          </span>
          <h3 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-none text-white">
            Start a conversation
          </h3>
          <p className="text-[#87a0cd] font-sans text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you have a localized technical hurdle, a multi-zone cloud migration plan, or simply want to explore high-precision integration frameworks, my communication channels are open.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={onContactClick}
              className="bg-white text-primary px-8 py-3.5 rounded font-display font-bold text-xs uppercase tracking-wider hover:bg-[#F6F5F2] hover:shadow-md transition-smooth cursor-pointer w-full sm:w-auto focus:outline-none"
            >
              Expose Contact Portal
            </button>
            <a
              href="mailto:richardvidzrakou98@gmail.com"
              className="border border-white/20 text-white hover:border-white hover:bg-white/5 px-8 py-3.5 rounded font-display font-semibold text-xs uppercase tracking-wider transition-smooth w-full sm:w-auto"
            >
              Transmit Direct Email
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
