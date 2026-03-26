"use client";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Loader2, Maximize2, X } from "lucide-react";
import styles from "./DashboardViewer.module.css";

interface Props {
  title: string;
  url: string;
  onClose: () => void;
}

export default function DashboardViewer({ title, url, onClose }: Props) {
  const [loading, setLoading] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={`${styles.overlay} ${fullscreen ? styles.fullscreen : ""}`}>
      {/* Backdrop */}
      <div className={styles.backdrop} onClick={onClose} />

      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.dot} />
            <div className={styles.dot} style={{ background: "#f59e0b" }} />
            <div className={styles.dot} style={{ background: "#10b981" }} />
            <span className={styles.headerTitle}>{title}</span>
          </div>
          <div className={styles.headerRight}>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className={styles.iconBtn}
              title="Mở trong tab mới"
            >
              <ExternalLink size={15} />
            </a>
            <button
              className={styles.iconBtn}
              onClick={() => setFullscreen(!fullscreen)}
              title="Toàn màn hình"
            >
              <Maximize2 size={15} />
            </button>
            <button
              className={`${styles.iconBtn} ${styles.closeBtn}`}
              onClick={onClose}
              title="Đóng"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* URL bar */}
        <div className={styles.urlBar}>
          <div className={styles.urlShield}>🔒</div>
          <span className={styles.urlText}>{url}</span>
        </div>

        {/* iframe */}
        <div className={styles.iframeWrap}>
          {loading && (
            <div className={styles.loader}>
              <Loader2 size={32} className={styles.spin} />
              <span>Đang tải dashboard...</span>
            </div>
          )}
          <iframe
            ref={iframeRef}
            src={url}
            title={title}
            className={styles.iframe}
            onLoad={() => setLoading(false)}
            allow="fullscreen"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
}
