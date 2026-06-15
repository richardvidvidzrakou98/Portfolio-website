import { Link, useLocation } from "react-router-dom";
import { 
  User, 
  Folder, 
  Mail, 
  Home, 
  Terminal
} from "lucide-react";

interface NavigationProps {
  onContactClick: () => void;
}

export function Navigation({ onContactClick }: NavigationProps) {
  const location = useLocation();
  const path = location.pathname;

  const links = [
    { to: "/", label: "Overview", icon: User },
    { to: "/projects", label: "Projects", icon: Folder },
  ];

  return (
    <>
      {/* Desktop Navigation Drawer (Side Rail) */}
      <aside className="fixed left-0 top-0 h-full w-60 hidden md:flex flex-col bg-surface border-r border-border-lux z-50">
        <div className="flex flex-col py-8 h-full">
          {/* Logo / Identity */}
          <div className="px-6 mb-12">
            <Link to="/" className="group block focus:outline-none">
              <h1 className="font-display text-[22px] font-bold tracking-tight text-primary transition-colors group-hover:text-accent">
                R. Vidzrakou
              </h1>
              <p className="font-mono text-[10px] text-secondary tracking-wider uppercase mt-1">
                Software | Cloud | DevOps 
              </p>
            </Link>
          </div>

          {/* Links */}
          <nav className="flex-1 flex flex-col space-y-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = path === link.to || (link.to !== "/" && path.startsWith(link.to));
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-3 pl-6 py-3 font-display text-[14px] font-medium transition-smooth cursor-pointer ${
                    isActive
                      ? "text-accent bg-white border-l-2 border-accent font-semibold"
                      : "text-secondary hover:text-primary hover:bg-white/50 border-l-2 border-transparent"
                  }`}
                >
                  <Icon className="w-[18px] h-[18px]" />
                  {link.label}
                </Link>
              );
            })}

            {/* Custom Contact Trigger inside the rail */}
            <button
              onClick={onContactClick}
              className={`flex items-center gap-3 pl-6 py-3 font-display text-[14px] font-medium transition-smooth cursor-pointer w-full text-left focus:outline-none ${
                path === "/contact"
                  ? "text-accent bg-white border-l-2 border-accent font-semibold"
                  : "text-secondary hover:text-primary hover:bg-white/50 border-l-2 border-transparent"
              }`}
            >
              <Mail className="w-[18px] h-[18px]" />
              Contact
            </button>
          </nav>

          {/* Footer of the Navigation Rail */}
          <div className="px-6 mt-auto">
            <div className="flex items-center gap-2 text-secondary opacity-40 font-mono text-[10px]">
              <Terminal className="w-3.5 h-3.5 animate-pulse" />
              <span>STABLE // v4.0.24</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <header className="fixed top-0 left-0 w-full z-40 md:hidden bg-surface/90 backdrop-blur-md border-b border-border-lux flex justify-between items-center px-4 h-16">
        <Link to="/" className="flex items-center gap-3 focus:outline-none">
          <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-display font-semibold text-xs">
            RV
          </div>
          <span className="font-display font-bold text-[16px] text-primary">
            Richard Vidzrakou
          </span>
        </Link>
        <button 
          onClick={onContactClick}
          className="text-primary hover:text-accent p-2 transition-colors cursor-pointer"
          aria-label="Contact"
        >
          <Mail className="w-5 h-5" />
        </button>
      </header>

      {/* Mobile Bottom Floating Nav Bar */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] rounded-full md:hidden z-50 bg-white/80 backdrop-blur-md border border-border-lux shadow-lg flex justify-around items-center px-2 py-2.5">
        <Link
          to="/"
          className={`flex items-center justify-center rounded-full w-11 h-11 transition-smooth active:scale-95 cursor-pointer ${
            path === "/" 
              ? "bg-accent text-white" 
              : "text-secondary hover:text-primary"
          }`}
          aria-label="Overview"
        >
          <Home className="w-5 h-5" />
        </Link>
        <Link
          to="/projects"
          className={`flex items-center justify-center rounded-full w-11 h-11 transition-smooth active:scale-95 cursor-pointer ${
            path === "/projects" || path.startsWith("/projects/")
              ? "bg-accent text-white" 
              : "text-secondary hover:text-primary"
          }`}
          aria-label="Projects"
        >
          <Folder className="w-5 h-5" />
        </Link>
        <button
          onClick={onContactClick}
          className={`flex items-center justify-center rounded-full w-11 h-11 transition-smooth active:scale-95 cursor-pointer focus:outline-none ${
            path === "/contact"
              ? "bg-accent text-white" 
              : "text-secondary hover:text-primary"
          }`}
          aria-label="Contact"
        >
          <Mail className="w-5 h-5" />
        </button>
      </nav>
    </>
  );
}
