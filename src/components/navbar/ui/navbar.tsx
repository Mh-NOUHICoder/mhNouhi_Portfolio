"use client";

import Link from "next/link";
import { Logo } from "~/components/ui/logo";
import { NumberTicker } from "~/components/ui/number-ticker";
import { IoLogoGithub } from "react-icons/io";
import { FaStar, FaTimes } from "react-icons/fa";
import { useGitHubRepoData } from "~/hooks/useGitHubRepoData";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { usePathname } from "next/navigation";

// Define your navigation links
const navLinks = [
  { href: "/", title: "Home" },
  { href: "#skills", title: "Skills" },
  { href: "#projects", title: "Projects" },
  { href: "#", title: "Blog" },
  { href: "#contact", title: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const repoData = useGitHubRepoData("Mh-NOUHICoder", "Mh-NOUHICoder");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", changeBackground);
    return () => document.removeEventListener("scroll", changeBackground);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 left-[calc(100vw-100%)] top-4 z-50 mx-4 flex h-[60px] items-center justify-between rounded-3xl border border-border bg-card px-4 shadow-sm saturate-100 backdrop-blur-[4px] transition-all duration-200 md:mx-auto md:max-w-4xl md:px-6 lg:max-w-6xl",
          isScrolled && "border-transparent bg-background/80"
        )}
      >
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <Logo className="w-28" />
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden items-center space-x-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-foreground hover:scale-105",
                  (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)))
                    ? "text-foreground font-semibold"
                    : "text-foreground/60"
                )}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* GitHub Star Button */}
          <div className="hidden md:flex">
            <Link
              className="group flex items-center gap-2 transition-all duration-300 hover:brightness-125 hover:scale-105"
              target="_blank"
              href={repoData.url}
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-1 rounded-lg bg-accent px-3 py-1.5">
                <IoLogoGithub size={18} />
                <span className="hidden text-sm font-medium sm:flex">
                  Star on GitHub
                </span>
              </div>
              <div className="flex items-center gap-1 rounded-lg border border-border bg-background px-2 py-1.5">
                <FaStar
                  className="transition-all duration-300 ease-in-out group-hover:rotate-180 group-hover:text-yellow-400"
                  size={14}
                />
                <NumberTicker
                  className="text-sm font-medium tracking-tight"
                  value={repoData.starCount}
                />
              </div>
            </Link>
          </div>

          {/* Mobile Navigation Trigger - IMPROVED DESIGN */}
          <button 
            onClick={toggleMobileMenu}
            className="group relative flex items-center justify-center w-10 h-10 rounded-2xl bg-accent/20 hover:bg-accent/40 transition-all duration-300 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              {/* Animated Hamburger Lines */}
              <span className={cn(
                "absolute block h-0.5 w-5 bg-foreground rounded-full transition-all duration-300",
                isMobileMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45 opacity-100" : "top-0.5 opacity-100"
              )} />
              <span className={cn(
                "absolute block h-0.5 w-5 bg-foreground rounded-full transition-all duration-200",
                isMobileMenuOpen ? "opacity-0 scale-0" : "top-1/2 -translate-y-1/2 opacity-100 scale-100"
              )} />
              <span className={cn(
                "absolute block h-0.5 w-5 bg-foreground rounded-full transition-all duration-300",
                isMobileMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45 opacity-100" : "bottom-0.5 opacity-100"
              )} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-background/90 backdrop-blur-xl transition-all duration-500 md:hidden",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Close Button - FLOATING & ELEGANT */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(false);
          }}
          className="fixed top-8 right-6 z-50 group flex items-center justify-center w-12 h-12 rounded-2xl bg-card/80 border border-border hover:bg-accent/30 hover:border-accent/50 transition-all duration-300 shadow-lg backdrop-blur-sm"
          aria-label="Close menu"
        >
          <FaTimes className="w-4 h-4 text-foreground/80 group-hover:text-foreground group-hover:scale-110 transition-all duration-300" />
        </button>

        {/* Mobile Menu Content */}
        <div 
          className={cn(
            "fixed inset-x-6 top-24 bottom-6 z-40 rounded-3xl border border-border bg-card/95 p-8 shadow-2xl backdrop-blur-xl transition-all duration-700 transform overflow-y-auto",
            isMobileMenuOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation Links - Mobile */}
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-xl font-semibold py-4 px-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] border-2 border-transparent overflow-hidden",
                  (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)))
                    ? "text-foreground bg-gradient-to-r from-accent/20 to-accent/10 border-accent/30 shadow-lg"
                    : "text-foreground/80 hover:text-foreground hover:bg-accent/10"
                )}
                style={{
                  animationDelay: isMobileMenuOpen ? `${index * 80}ms` : '0ms'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <span className="relative flex items-center justify-between">
                  {link.title}
                  <span className={cn(
                    "text-foreground/40 text-lg transition-all duration-300 group-hover:text-foreground group-hover:translate-x-1",
                    (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)))
                      ? "text-accent" : ""
                  )}>
                    →
                  </span>
                </span>
              </Link>
            ))}
          </nav>

          {/* GitHub Star Button - Mobile */}
          <div className="mt-8 pt-8 border-t border-border/50">
            <Link
              className="group relative flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-4 shadow-lg border border-accent/20 overflow-hidden"
              target="_blank"
              href={repoData.url}
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <IoLogoGithub size={20} className="relative z-10" />
              <span className="relative z-10 text-sm font-semibold">
                Star on GitHub
              </span>
              <div className="relative z-10 flex items-center gap-1 rounded-lg bg-background/90 px-3 py-1.5 border border-border/50">
                <FaStar
                  className="transition-all duration-300 ease-in-out group-hover:rotate-180 group-hover:text-yellow-400"
                  size={14}
                />
                <NumberTicker
                  className="text-sm font-medium tracking-tight"
                  value={repoData.starCount}
                />
              </div>
            </Link>
          </div>

          {/* Subtle Close Hint */}
          <div className="mt-6 text-center">
            <p className="text-foreground/30 text-xs font-medium">Tap outside to close</p>
          </div>
        </div>
      </div>
    </>
  );
}