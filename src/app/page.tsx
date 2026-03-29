import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────── */}
        <Hero />

        {/* ── Projects ─────────────────────── */}
        <section id="projects" className="section">
          <div className="container">
            <p className="section-label">Dự Án</p>
            <h2 className="section-title">
              Các Dự Án{" "}
              <span className="gradient-text">Thực Tế</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 48 }}>
              Tổng hợp các dự án về data analytics, machine learning và phát
              triển web — click để xem demo hoặc dashboard tương tác.
            </p>
            <ProjectGrid />
          </div>
        </section>


        {/* ── About ────────────────────────── */}
        <section id="about" className="section">
          <div className="container">
            <div className={styles.aboutGrid}>
              <div>
                <p className="section-label">Giới Thiệu</p>
                <h2 className="section-title">
                  Về <span className="gradient-text">Tôi</span>
                </h2>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginTop: 16 }}>
                  Tôi là một developer đam mê xây dựng các giải pháp dữ liệu và web. 
                  Chuyên về phân tích dữ liệu, machine learning và xây dựng dashboard 
                  tương tác giúp doanh nghiệp đưa ra quyết định tốt hơn.
                </p>
                <div className={styles.skills}>
                  {["Python", "JavaScript/TypeScript", "SQL", "Machine Learning", "Data Visualization", "Next.js"].map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
              <div className={styles.aboutStats}>
                {[
                  { n: "10+", l: "Dự án hoàn thành" },
                  { n: "5+", l: "Dashboard live" },
                  { n: "3+", l: "Năm kinh nghiệm" },
                  { n: "100%", l: "Cam kết chất lượng" },
                ].map((s) => (
                  <div key={s.l} className={`glass-card ${styles.aboutStat}`}>
                    <span className={`gradient-text ${styles.aboutStatNum}`}>{s.n}</span>
                    <span className={styles.aboutStatLabel}>{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
