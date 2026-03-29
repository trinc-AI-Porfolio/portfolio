"use client";
import { useState } from "react";
import { ExternalLink, GitBranch, LayoutDashboard, Smartphone } from "lucide-react";
import { projects, type Category } from "@/data/projects";
import DashboardViewer from "./DashboardViewer";
import styles from "./ProjectGrid.module.css";

const CATEGORIES: Category[] = [
  "All", "Machine Learning", "Data Analytics", "Mobile App",
];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const categoryColors: Record<string, string> = {
  Dashboard: "var(--accent-primary)",
  "Machine Learning": "var(--accent-secondary)",
  "Web App": "var(--accent-pink)",
  "Data Analytics": "#f59e0b",
  "Mobile App": "#6366f1",
};

export default function ProjectGrid() {
  const [active, setActive] = useState<Category>("All");
  const [viewDashboard, setViewDashboard] = useState<string | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const dashboardProject = projects.find((p) => p.id === viewDashboard);

  return (
    <>
      <div className={styles.filterBar}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((project) => {
          const canOpen = !!(project.demoUrl && project.embedDashboard);
          const color = categoryColors[project.category];
          return (
            <article key={project.id} className={`glass-card ${styles.card}`}>
              {/* Thumbnail */}
              <div
                className={`${styles.thumbnail} ${canOpen ? styles.thumbnailClickable : ""}`}
                style={{
                  background: `linear-gradient(135deg, ${color}22, ${color}08)`,
                  cursor: canOpen ? "pointer" : "default",
                }}
                onClick={() => canOpen && setViewDashboard(project.id)}
              >
                {/* Fallback icon — sits at z-index 1, always centered */}
                <div className={styles.thumbnailIcon} style={{ color }}>
                  <LayoutDashboard size={40} />
                </div>

                {/* Real image — z-index 2, covers icon when loaded.
                    onError hides it so icon shows through as fallback. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${BASE}${project.thumbnail}`}
                  alt={project.title}
                  className={styles.thumbnailImg}
                  style={{ objectFit: project.thumbnailFit || "cover", backgroundColor: project.thumbnailFit === "contain" ? "white" : "transparent" }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* Hover play overlay */}
                {canOpen && (
                  <div className={styles.thumbnailPlayOverlay}>
                    <span>▶ Xem Demo</span>
                  </div>
                )}

                {project.featured && (
                  <div className={styles.featuredBadge}>FEATURED</div>
                )}
              </div>

              {/* Content */}
              <div className={styles.content}>
                <span className={styles.category} style={{ color }}>
                  {project.category}
                </span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className={styles.actions}>
                  {project.demoUrl && (
                    <button
                      className={`btn-primary ${styles.btnSm}`}
                      onClick={() =>
                        project.embedDashboard
                          ? setViewDashboard(project.id)
                          : window.open(project.demoUrl, "_blank")
                      }
                    >
                      <ExternalLink size={14} />
                      {project.embedDashboard ? "Live Demo" : "Xem Demo"}
                    </button>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn-ghost ${styles.btnSm}`}
                    >
                      <GitBranch size={14} />
                      Code
                    </a>
                  )}
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn-primary ${styles.btnSm}`}
                    >
                      CH Play
                    </a>
                  )}
                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn-ghost ${styles.btnSm}`}
                    >
                      <Smartphone size={14} />
                      App Store
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {viewDashboard && dashboardProject?.demoUrl && (
        <DashboardViewer
          title={dashboardProject.title}
          url={dashboardProject.demoUrl}
          onClose={() => setViewDashboard(null)}
        />
      )}
    </>
  );
}
