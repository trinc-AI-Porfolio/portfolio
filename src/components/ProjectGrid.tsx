"use client";
import { useState } from "react";
import { ExternalLink, GitBranch, LayoutDashboard } from "lucide-react";
import { projects, type Category } from "@/data/projects";
import DashboardViewer from "./DashboardViewer";
import styles from "./ProjectGrid.module.css";

const CATEGORIES: Category[] = [
  "All",
  "Dashboard",
  "Machine Learning",
  "Web App",
  "Data Analytics",
];

const categoryColors: Record<string, string> = {
  Dashboard: "var(--accent-primary)",
  "Machine Learning": "var(--accent-secondary)",
  "Web App": "var(--accent-pink)",
  "Data Analytics": "#f59e0b",
};

export default function ProjectGrid() {
  const [active, setActive] = useState<Category>("All");
  const [viewDashboard, setViewDashboard] = useState<string | null>(null);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const dashboardProject = projects.find((p) => p.id === viewDashboard);

  return (
    <>
      {/* Filter bar */}
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

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map((project) => (
          <article key={project.id} className={`glass-card ${styles.card}`}>
            {/* Thumbnail — shows real image if it loads, otherwise icon fallback */}
            <div
              className={styles.thumbnail}
              style={{ background: `linear-gradient(135deg, ${categoryColors[project.category]}22, ${categoryColors[project.category]}08)` }}
            >
              {/* Real thumbnail image — hidden via onError if file not found */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.thumbnail}
                alt={project.title}
                className={styles.thumbnailImg}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Icon fallback (always rendered, shows through when image fails/absent) */}
              <div
                className={styles.thumbnailIcon}
                style={{ color: categoryColors[project.category] }}
              >
                <LayoutDashboard size={40} />
              </div>
              {project.featured && (
                <div className={styles.featuredBadge}>Featured</div>
              )}
            </div>

            {/* Content */}
            <div className={styles.content}>
              <div className={styles.categoryRow}>
                <span
                  className={styles.category}
                  style={{ color: categoryColors[project.category] }}
                >
                  {project.category}
                </span>
              </div>

              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              {/* Tags */}
              <div className={styles.tags}>
                {project.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
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
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Dashboard modal */}
      {viewDashboard && dashboardProject && (
        <DashboardViewer
          title={dashboardProject.title}
          url={dashboardProject.demoUrl!}
          onClose={() => setViewDashboard(null)}
        />
      )}
    </>
  );
}
