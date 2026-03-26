"use client";
import { useState } from "react";
import { ExternalLink, Loader2, Monitor, LayoutDashboard } from "lucide-react";
import { projects } from "@/data/projects";
import DashboardViewer from "./DashboardViewer";
import styles from "./DashboardSection.module.css";

export default function DashboardSection() {
  const dashboardProjects = projects.filter(
    (p) => p.category === "Dashboard" || p.embedDashboard
  );
  const [activeId, setActiveId] = useState(dashboardProjects[0]?.id ?? null);
  const [modalUrl, setModalUrl] = useState<{ title: string; url: string } | null>(null);

  const activeProject = dashboardProjects.find((p) => p.id === activeId);

  return (
    <>
      <div className={styles.wrapper}>
        {/* Sidebar tab list */}
        <aside className={styles.sidebar}>
          <p className={styles.sidebarLabel}>Chọn Dashboard</p>
          {dashboardProjects.map((p) => (
            <button
              key={p.id}
              className={`${styles.tab} ${activeId === p.id ? styles.tabActive : ""}`}
              onClick={() => setActiveId(p.id)}
            >
              <LayoutDashboard size={16} />
              <span>{p.title}</span>
            </button>
          ))}
        </aside>

        {/* Preview panel */}
        <div className={styles.preview}>
          {activeProject ? (
            <>
              {/* Browser chrome top bar */}
              <div className={styles.chromeBar}>
                <div className={styles.chromeDots}>
                  <span /><span /><span />
                </div>
                <div className={styles.chromeUrl}>
                  <Monitor size={12} />
                  <span>{activeProject.demoUrl ?? "No URL"}</span>
                </div>
                <div className={styles.chromeActions}>
                  {activeProject.demoUrl && (
                    <>
                      {activeProject.embedDashboard && (
                        <button
                          className={styles.chromeBtn}
                          onClick={() =>
                            setModalUrl({
                              title: activeProject.title,
                              url: activeProject.demoUrl!,
                            })
                          }
                        >
                          Mở rộng
                        </button>
                      )}
                      <a
                        href={activeProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.chromeBtn}
                      >
                        <ExternalLink size={13} />
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Iframe or placeholder */}
              <div className={styles.frame}>
                {activeProject.embedDashboard && activeProject.demoUrl ? (
                  <EmbedFrame url={activeProject.demoUrl} title={activeProject.title} />
                ) : (
                  <div className={styles.placeholder}>
                    <LayoutDashboard size={48} />
                    <p>{activeProject.title}</p>
                    <p className={styles.placeholderSub}>{activeProject.description}</p>
                    {activeProject.demoUrl && (
                      <a
                        href={activeProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                        style={{ marginTop: 16 }}
                      >
                        <ExternalLink size={15} />
                        Mở Dashboard
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Info strip */}
              <div className={styles.infoStrip}>
                <div>
                  <span className={styles.infoTitle}>{activeProject.title}</span>
                  <span className={styles.infoDesc}>{activeProject.description}</span>
                </div>
                <div className={styles.infoTags}>
                  {activeProject.tags.map((t) => (
                    <span key={t} className="tag tag-cyan">{t}</span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className={styles.placeholder}>
              <LayoutDashboard size={48} />
              <p>Chưa có dashboard nào</p>
            </div>
          )}
        </div>
      </div>

      {modalUrl && (
        <DashboardViewer
          title={modalUrl.title}
          url={modalUrl.url}
          onClose={() => setModalUrl(null)}
        />
      )}
    </>
  );
}

function EmbedFrame({ url, title }: { url: string; title: string }) {
  const [loading, setLoading] = useState(true);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {loading && (
        <div
          style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 12, color: "var(--text-muted)", fontSize: 14,
            background: "var(--bg-card)",
          }}
        >
          <Loader2 size={28} style={{ animation: "spin 1s linear infinite" }} />
          Đang tải dashboard…
        </div>
      )}
      <iframe
        src={url}
        title={title}
        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        onLoad={() => setLoading(false)}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
}
