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
                  Là sinh viên năm cuối chuyên ngành <strong>Trí tuệ nhân tạo</strong> tại Đại học FPT.
                  Tôi là người có tinh thần trách nhiệm cao, chịu được áp lực tốt và luôn ưu tiên 
                  ứng dụng thực tế hơn là lý thuyết suông. Phương châm làm việc của tôi rất rõ ràng: 
                  <em>"Một khi đã làm, sẽ làm cho đến mức hoàn hảo"</em>. 
                </p>
                <div className={styles.skills}>
                  {["Python", "C++", "AI Development", "Computer Vision", "Embedded & Robotics", "Web (Next.js/React Native)"].map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
              <div className={styles.aboutStats}>
                {[
                  { n: "2026", l: "Năm Tốt nghiệp (FPTU)" },
                  { n: "3+", l: "Năm Kinh nghiệm (Freelance)" },
                  { n: "100%", l: "Say mê với thực hành" },
                  { n: "10+", l: "Dự án thực tế" },
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
