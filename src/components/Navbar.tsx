"use client";
import { useState, useEffect } from "react";
import { Code2, LayoutDashboard, Menu, X, GitBranch } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "#projects", label: "Dự Án" },
  { href: "#about", label: "Giới Thiệu" },
  { href: "#contact", label: "Liên Hệ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.inner} container`}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <div className={styles.logoIcon}>
            <LayoutDashboard size={18} />
          </div>
          <span className="gradient-text">Porfolio</span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://github.com/trinc-AI-Porfolio"
          target="_blank"
          rel="noreferrer"
          className={`btn-ghost ${styles.cta}`}
        >
          <GitBranch size={16} />
          GitHub
        </a>

        {/* Mobile toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
