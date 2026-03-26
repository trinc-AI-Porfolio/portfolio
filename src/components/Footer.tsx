import { GitBranch, Link2, Mail, LayoutDashboard } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logoIcon}>
            <LayoutDashboard size={16} />
          </div>
          <span className="gradient-text" style={{ fontWeight: 800, fontSize: 18 }}>
            DevPortfolio
          </span>
        </div>

        <p className={styles.tagline}>
          Xây dựng các giải pháp dữ liệu & web thực tế.
          <br />
          Liên hệ để hợp tác hoặc trao đổi dự án.
        </p>

        {/* Social */}
        <div className={styles.social}>
          <a
            href="https://github.com/trinc-AI-Porfolio"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <GitBranch size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <Link2 size={18} />
          </a>
          <a
            href="mailto:your@email.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} DevPortfolio. Built with Next.js & ❤️
        </p>
      </div>
    </footer>
  );
}
