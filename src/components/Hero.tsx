"use client";
import { ArrowDown, GitBranch, Link2, Sparkles } from "lucide-react";
import styles from "./Hero.module.css";

const stats = [
  { value: "10+", label: "Dự Án" },
  { value: "5+", label: "Dashboard" },
  { value: "3+", label: "Năm KN" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background blobs */}
      <div className={`blob blob-purple ${styles.blob1}`} />
      <div className={`blob blob-cyan ${styles.blob2}`} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.contentLeft}>
          {/* Badge */}
          <div className={styles.badge}>
            <Sparkles size={13} />
            <span>Open to opportunities</span>
          </div>

          {/* Heading */}
          <h1 className={styles.title}>
            Chào mừng đến với{" "}
            <span className="gradient-text">Portfolio</span>
            <br />
            của tôi
          </h1>

          <p className={styles.subtitle}>
            Tôi xây dựng các ứng dụng web, dashboard phân tích dữ liệu và mô
            hình machine learning. Khám phá các dự án thực tế và thử nghiệm
            trực tiếp ngay trên trang này.
          </p>

          {/* CTAs */}
          <div className={styles.actions}>
            <a href="#projects" className="btn-primary">
              Xem Dự Án
              <ArrowDown size={16} />
            </a>
            <a href="#dashboards" className="btn-ghost">
              Live Dashboard
            </a>
          </div>

          {/* Social links */}
          <div className={styles.social}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <GitBranch size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <Link2 size={20} />
            </a>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={`gradient-text ${styles.statValue}`}>
                  {s.value}
                </span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.contentRight}>
          <div className={styles.imageWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/thumbnails/cv.png`} 
              alt="My CV Resume" 
              className={styles.heroImage} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
