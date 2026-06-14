import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Filter } from "lucide-react";
import { projectsData } from "../data/projects";
import { motion, AnimatePresence } from "motion/react";

type FilterCategory = "All" | "Web" | "Cloud" | "AI" | "Security" | "Mobile";

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const categories: FilterCategory[] = [
    "All", "Web", "Cloud", "AI", "Security", "Mobile"
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Editorial Header */}
      <section className="mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-[#9c9ea0] mb-2 block font-semibold">
          Engineering Logs
        </span>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-primary leading-tight">
          Selected Projects
        </h1>
        <p className="font-sans text-lg text-secondary max-w-2xl mt-4 leading-relaxed">
          A high-precision index of production platforms, distributed databases, and automated AI utilities. Crafted under rigorous modular standards.
        </p>
      </section>

      {/* Category Filter Controls */}
      <section className="mb-16">
        <div className="flex items-center gap-3 border-b border-border-lux pb-4 flex-wrap">
          <div className="flex items-center gap-2 text-[#9c9ea0] pr-4 border-r border-border-lux mr-2">
            <Filter className="w-4 h-4" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">Filter Registry</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-1.5 rounded text-xs font-display font-semibold cursor-pointer transition-smooth focus:outline-none ${
                    isActive
                      ? "bg-accent text-white shadow-sm"
                      : "bg-[#FFFFFF] border border-border-lux text-secondary hover:text-primary hover:border-primary"
                  }`}
                >
                  {category === "All" ? "All Registry" : `${category}`}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Asymmetric Portfolio Grid */}
      <section className="min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-white border border-border-lux rounded-lg"
            >
              <p className="font-mono text-sm text-secondary">
                No verified system architectures match the current registry filter.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {filteredProjects.map((project, index) => {
                // Layout scheduling logic: alternate layout spans and style densities to maintain an editorial visual rhythm
                const isFeaturedLayout = index === 0 && activeCategory === "All";
                const isEven = index % 2 === 0;
                
                const spanClass = isFeaturedLayout
                  ? "md:col-span-12"
                  : isEven 
                    ? "md:col-span-7" 
                    : "md:col-span-5";

                const aspectClass = isFeaturedLayout
                  ? "aspect-[21/9]"
                  : isEven
                    ? "aspect-[16/10]"
                    : "aspect-square";

                return (
                  <motion.div
                    layout
                    key={project.slug}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className={`${spanClass} group`}
                  >
                    <div className="bg-white border border-border-lux rounded-lg overflow-hidden flex flex-col h-full shadow-sm transition-smooth hover:border-accent">
                      
                      {/* Image Frame */}
                      <div className={`relative ${aspectClass} overflow-hidden bg-surface shrink-0 border-b border-border-lux`}>
                        <img
                          src={project.featuredImage}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale transition-all duration-750 group-hover:grayscale-0 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-primary/5 group-hover:opacity-0 transition-opacity duration-300" />
                        <span className="absolute top-4 left-4 px-2.5 py-1 bg-white/90 backdrop-blur-sm shadow border border-border-lux font-mono text-[9px] uppercase font-bold tracking-widest text-[#1B365D] rounded">
                          {project.year}
                        </span>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 flex flex-col justify-between flex-grow">
                        <div>
                          <div className="flex justify-between items-baseline mb-4">
                            <h3 className="font-display text-2xl md:text-3.5xl font-bold text-primary group-hover:text-accent transition-colors">
                              {project.title}
                            </h3>
                            <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#9c9ea0] border border-border-lux px-2 py-0.5 rounded bg-surface">
                              {project.category}
                            </span>
                          </div>

                          <p className="font-sans text-sm text-secondary mb-8 leading-relaxed max-w-2xl">
                            {project.summary}
                          </p>
                        </div>

                        <div className="pt-6 border-t border-border-lux/60 flex flex-wrap gap-4 items-center justify-between mt-auto">
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech.name}
                                className="px-2.5 py-0.5 bg-surface border border-border-lux text-secondary font-mono text-[9px] uppercase tracking-wider rounded"
                              >
                                {tech.name}
                              </span>
                            ))}
                          </div>
                          
                          <Link
                            to={`/projects/${project.slug}`}
                            className="inline-flex items-center gap-1.5 font-display text-[13px] font-bold text-primary hover:text-accent group-hover:underline transition-colors focus:outline-none cursor-pointer"
                          >
                            <span>Read Deep Docs</span>
                            <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Link>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </section>
    </motion.div>
  );
}
