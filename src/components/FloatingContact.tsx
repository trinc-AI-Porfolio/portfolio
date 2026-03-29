"use client";
import { Mail } from "lucide-react";
import styles from "./FloatingContact.module.css";

const FbIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function FloatingContact() {
  return (
    <div className={styles.floatingContainer}>
      {/* Zalo */}
      <a
        href="https://zalo.me/0914567950"
        target="_blank"
        rel="noreferrer"
        className={`${styles.contactBtn} ${styles.zalo}`}
        aria-label="Zalo"
      >
        <span className={styles.zaloIcon}>Zalo</span>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/caotis/"
        target="_blank"
        rel="noreferrer"
        className={`${styles.contactBtn} ${styles.fb}`}
        aria-label="Facebook"
      >
        <FbIcon />
      </a>

      {/* Email */}
      <a
        href="mailto:trinc.work@gmail.com"
        className={`${styles.contactBtn} ${styles.email}`}
        aria-label="Email"
      >
        <Mail size={24} strokeWidth={1.5} />
      </a>
    </div>
  );
}
