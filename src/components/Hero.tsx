"use client";
import React, { useState } from "react";
import { ArrowDown, GitBranch, Link2, Sparkles, X } from "lucide-react";
import styles from "./Hero.module.css";

const stats = [
  { value: "10+", label: "Dự Án" },
  { value: "5+", label: "Dashboard" },
  { value: "3+", label: "Năm KN" },
];

export default function Hero() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <section className={styles.hero}>
      {/* Background blobs */}
      <div className={`blob blob-purple ${styles.blob1}`} />
      <div className={`blob blob-cyan ${styles.blob2}`} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.contentLeft}>
          {/* Badge Removed per user request */}

          {/* Heading */}
          <h1 className={styles.title}>
            Chào mừng đến với{" "}
            <span className="gradient-text">Portfolio</span>
            <br />
            của Nguyễn Cao Trị
          </h1>

          <p className={styles.subtitle}>
            Website này tôi xây dựng nhằm mục đích để các bạn có thể hiểu rõ hơn về tôi. 
            Và là nơi để tôi đăng các dự án thực tế đã làm để các bạn có thể trải nghiệm 
            trực tiếp ngay trên trang mà không cần phải chạy code cầu kỳ. 
            Cảm ơn các bạn đã dành thời gian quan tâm đến Portfolio của tôi.
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
          <div 
            className={styles.imageWrapper}
            onClick={() => setIsCvOpen(true)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/thumbnails/cv.png`} 
              alt="My CV Resume" 
              className={styles.heroImage} 
            />
            <div className={styles.cvOverlay}>
              <span>✨ Xem Toàn Màn Hình</span>
            </div>
          </div>
        </div>
      </div>

      {/* CV Lightbox Modal */}
      {isCvOpen && (
        <div className={styles.lightbox} onClick={() => setIsCvOpen(false)}>
          <button className={styles.lightboxClose} onClick={() => setIsCvOpen(false)}>
            <X size={24} />
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/thumbnails/cv.png`} 
              alt="My CV Resume Fullscreen" 
              className={styles.lightboxImage} 
            />
          </div>
        </div>
      )}
    </section>
  );
}
