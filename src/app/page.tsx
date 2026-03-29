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
                  Là sinh viên năm cuối ngành <strong>Trí Tuệ Nhân Tạo</strong> tại Đại Học FPT. 
                  Phương châm làm việc của tôi là thà không làm nhưng làm thì phải hoàn hảo. 
                  Tôi là một người làm việc hiệu quả dưới áp lực cao, ưu tiên thực tế, 
                  đam mê nghiên cứu và là một người có trách nhiệm với những sản phẩm mình làm ra.
                </p>
                <div className={styles.skills}>
                  {["Python", "C++", "AI Development", "Computer Vision", "Embedded & Robotics", "Web (Next.js/React Native)"].map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
              <div className={styles.aboutStats}>
                {[
                  { n: "Web / AI", l: "Lĩnh vực cốt lõi" },
                  { n: "3+", l: "Năm Freelance" },
                  { n: "100%", l: "Trách nhiệm sản phẩm" },
                  { n: "5", l: "Dự án nổi bật" },
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
