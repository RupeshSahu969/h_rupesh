"use client";
import { useState, useEffect, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/utils/tw";
import { useSelectedLayoutSegment } from "next/navigation";
import LearnMoreButton from "./learnmorebutton";

export function MainNav() {
  const [header, setHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const ScrollHeader = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ScrollHeader);
    return () => {
      window.removeEventListener("scroll", ScrollHeader);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all",
        header ? "bg-white shadow-lg" : "bg-white"
      )}
    >
      <div className="flex justify-between items-center h-16 gap-3 px-5">
        <div className="flex items-center gap-3">
        
        </div>
        <div className="hidden md:flex items-center gap-12">
          
        
          <MainNavItem href="/services" title="Services" />
          <MainNavItem href="/careers" title="Careers" />
          <MainNavItem href="/blogs" title="Blogs" />
          {/* <MainNavItem href="/contact" title="Contact us" /> */}
          <MainNavItem href="/about" title="About Us" />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" color="black" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white">
          <MainNavItem href="/" title="Home" />
          
          <MainNavItem href="/services" title="Services" />
          <MainNavItem href="/careers" title="Careers" />
          <MainNavItem href="/blogs" title="Blogs" />
          <MainNavItem href="/contact" title="Contact us" />
          <MainNavItem href="/about" title="About us" />
        </div>
      )}
    </header>
  );
}

export function MainNavItem({
  href,
  title,
  disabled = false,
}: PropsWithChildren<{ href: string; disabled?: boolean; title: string }>) {
  const segment = useSelectedLayoutSegment();
  return (
    <Link
      href={disabled ? "#" : href}
      className={cn(
        "flex items-center text-sm font-medium transition-colors py-2 px-4",
        href === `/${segment}` ? "text-blue-500" : "text-gray-600",
        disabled && "cursor-not-allowed opacity-80"
      )}
    >
      {title}
    </Link>
  );
}
