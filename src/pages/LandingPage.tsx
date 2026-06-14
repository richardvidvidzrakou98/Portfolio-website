import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Cpu,
  Smartphone,
  Database,
  CodeXml,
  ArrowRight,
} from "lucide-react";
import { projectsData, articlesData } from "../data/projects";
import { ProjectIconBadge } from "../components/ProjectIconBadge";
import { TypewriterText } from "../components/TypewriterText";
import { motion } from "motion/react";

const HERO_LINES = [
  "Hi, I'm Richard Vidzrakou — a Fullstack Developer, Cloud Engineer, and DevOps engineer passionate about building meaningful digital systems.",
  "My journey started with curiosity — exploring how technology works and how software can solve everyday problems.",
  "Over time, that curiosity evolved into building web applications, engineering cloud solutions, and creating systems designed to scale.",
  "Today, I focus on thoughtful execution — building reliable products, improving infrastructure, and turning ideas into practical solutions.",
  "If you're building something meaningful, exploring possibilities, or solving a tough problem — let's connect.",
];

interface LandingPageProps {
  onContactClick: () => void;
}

export function LandingPage({ onContactClick }: LandingPageProps) {
  const landingProjects = projectsData.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* 1. Identity Section */}
      <section
        className="pt-8 md:pt-16 pb-24 border-b border-border-lux"
        id="identity"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <span className="font-mono text-xs font-semibold tracking-wider text-accent uppercase bg-accent/5 px-3 py-1 rounded">
              Identity Portal // 2026
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-primary leading-[1.05]">
              Richard Vidzrakou
            </h1>
            <p className="font-sans text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed">
              Web Developer · Cloud Engineer · DevOps
            </p>
            <p className="font-mono text-sm md:text-base text-secondary max-w-xl leading-relaxed border-l-2 border-accent pl-6 italic min-h-[7rem] md:min-h-[5.5rem]">
              <TypewriterText texts={HERO_LINES} pauseDuration={3200} />
            </p>
          </div>

          {/* Availability Card */}
          <div className="lg:col-span-4 bg-white border border-border-lux p-8 rounded-lg shadow-sm">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-secondary mb-6 border-b border-border-lux pb-2 font-semibold">
              About Me
            </h3>
            <ul className="space-y-4 font-sans text-sm text-primary">
              <li className="flex items-center justify-between pb-3 border-b border-border-lux/60">
                <span className="text-secondary">Location</span>
                <span className="font-semibold text-right">Ghana</span>
              </li>
              <li className="flex items-center justify-between pb-3 border-b border-border-lux/60">
                <span className="text-secondary">Focus</span>
                <span className="font-semibold">Web & Cloud</span>
              </li>
              <li className="flex items-center justify-between pb-3 border-b border-border-lux/60">
                <span className="text-secondary">Skills</span>
                <span className="font-semibold">DevOps & AWS</span>
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
            What I work with day to day — from writing code to deploying it in the cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Software Engineering */}
          <div className="p-8 bg-white border border-border-lux flex flex-col gap-4 transition-smooth hover:border-accent">
            <CodeXml className="text-accent w-8 h-8 shrink-0" />
            <h4 className="font-display text-[18px] font-bold text-primary">
              Software Engineering
            </h4>
            <p className="text-secondary text-xs leading-relaxed">
              Clean, well-structured code for web apps and APIs — built to be easy to maintain and extend.
            </p>
          </div>

          {/* Cloud Infrastructure */}
          <div className="p-8 bg-white border border-border-lux flex flex-col gap-4 transition-smooth hover:border-accent">
            <Cpu className="text-accent w-8 h-8 shrink-0" />
            <h4 className="font-display text-[18px] font-bold text-primary">
              Cloud Infrastructure
            </h4>
            <p className="text-secondary text-xs leading-relaxed">
              AWS, Docker, Kubernetes, Terraform, and CI/CD pipelines — setting up and managing cloud environments.
            </p>
          </div>

          {/* Frontend Systems */}
          <div className="p-8 bg-white border border-border-lux flex flex-col gap-4 transition-smooth hover:border-accent">
            <Smartphone className="text-accent w-8 h-8 shrink-0" />
            <h4 className="font-display text-[18px] font-bold text-primary">
              Frontend Systems
            </h4>
            <p className="text-secondary text-xs leading-relaxed">
              Fast, responsive websites and interfaces with React — designed to look good on any screen size.
            </p>
          </div>

          {/* Backend Engineering */}
          <div className="p-8 bg-white border border-border-lux flex flex-col gap-4 transition-smooth hover:border-accent">
            <Database className="text-accent w-8 h-8 shrink-0" />
            <h4 className="font-display text-[18px] font-bold text-primary">
              Backend Engineering
            </h4>
            <p className="text-secondary text-xs leading-relaxed">
              APIs and server-side logic with Python and Node.js — connecting apps to databases and external services.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Selected Work */}
      <section className="py-16 md:py-20 border-b border-border-lux" id="projects">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9c9ea0] mb-1 block font-semibold">
              Selected Work
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-primary">
              Recent Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-1 font-display text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            <span>View all</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {landingProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group flex flex-col gap-3 p-4 bg-white border border-border-lux rounded-lg hover:border-accent/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center justify-between gap-3">
                <ProjectIconBadge slug={project.slug} size="sm" />
                <span className="font-mono text-[10px] text-secondary tabular-nums">
                  {project.year}
                </span>
              </div>

              <div className="min-w-0 space-y-1">
                <h3 className="font-display text-[15px] font-semibold text-primary leading-snug group-hover:text-accent transition-colors truncate">
                  {project.title}
                </h3>
                <p className="text-secondary text-xs leading-relaxed line-clamp-2">
                  {project.summary}
                </p>
              </div>

              <div className="flex items-center justify-between gap-2 pt-1 border-t border-border-lux/50">
                <div className="flex flex-wrap gap-1 min-w-0">
                  {project.techStack.slice(0, 2).map((tech) => (
                    <span
                      key={tech.name}
                      className="px-1.5 py-0.5 bg-surface text-secondary font-mono text-[8px] uppercase tracking-wide rounded truncate max-w-[7rem]"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </Link>
          ))}
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
              Notes &amp; Write-ups
            </h2>
          </div>
          <span className="text-secondary font-mono text-xs mt-2 md:mt-0 opacity-60">
            Things I learned along the way
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
            Have a project in mind, need help with cloud setup, or just want to say hello? I'd love to hear from you.
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
