export type Category = "All" | "Machine Learning" | "Data Analytics" | "Mobile App";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: Exclude<Category, "All">;
  tags: string[];
  thumbnail: string;
  demoUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  thumbnailFit?: "cover" | "contain";
  embedDashboard: boolean; // true = iframe embed; false = open in new tab
  featured: boolean;
}

// ─────────────────────────────────────────────
// ✏️  THÊM / XÓA DỰ ÁN Ở ĐÂY
// ─────────────────────────────────────────────
export const projects: Project[] = [
  // ─── DỰ ÁN THỰC TẾ ──────────────────────────────────────
  {
    id: "stock-analysis-ba",
    title: "Phân Tích Cổ Phiếu — BA",
    description:
      "Phân tích & dự báo biến động cổ phiếu META và RDDT dùng Python, SQL, Power BI và các mô hình hồi quy.",
    longDescription:
      "Dự án BA cuối kỳ nhóm 5: Thu thập và xử lý dữ liệu lịch sử giá cổ phiếu META (Meta Platforms) và RDDT (Reddit). " +
      "Phân tích biến động, xu hướng, tăng/giảm mạnh qua SQL và Python (pandas, seaborn, statsmodels). " +
      "Build 5 mô hình hồi quy (Linear Regression, Random Forest, Decision Tree, SVR, KNN) để dự báo price_change_pct. " +
      "Dự báo biến động tháng tới bằng VAR model và KNN. Trực quan hóa bằng heatmap tương quan, boxplot, line chart và Power BI dashboard. " +
      "Kết quả: xác định được mô hình tốt nhất cho từng mã và dự báo xu hướng biến động tháng tiếp theo.",
    category: "Data Analytics",
    tags: ["Python", "SQL", "Power BI", "Scikit-learn", "Pandas", "Seaborn", "VAR", "Random Forest"],
    thumbnail: "/thumbnails/stock-thumbnail.png",
    demoUrl: "https://stock-analysis-bngmvfkfqzeizfpga54yos.streamlit.app/",
    embedDashboard: false,
    githubUrl: "https://github.com/trinc-AI-Porfolio/stock-analysis-ba",
    featured: true,
  },
  {
    id: "dap-aqi-analysis",
    title: "Phân Tích Chất Lượng Không Khí — AQI",
    description:
      "Phân tích & dự báo chỉ số AQI dùng Python, ML models và Streamlit Dashboard tích hợp Gemini AI Chatbot.",
    longDescription:
      "Dự án DAP cuối kỳ: Thu thập và xử lý dữ liệu AQI (Air Quality Index) từ nhiều nguồn. " +
      "Phân tích xu hướng ô nhiễm không khí theo thời gian và khu vực địa lý. " +
      "Train các mô hình ML (Random Forest, XGBoost) để dự báo chỉ số AQI. " +
      "Xây dựng Streamlit Dashboard tương tác với Gemini AI Chatbot để truy vấn dữ liệu bằng ngôn ngữ tự nhiên. " +
      "Lưu trữ dữ liệu bằng SQLite và trực quan hóa bằng Plotly, Seaborn.",
    category: "Data Analytics",
    tags: ["Python", "Streamlit", "Gemini AI", "Scikit-learn", "Pandas", "SQLite", "Plotly"],
    thumbnail: "/thumbnails/aqi-thumbnail.png",
    demoUrl: "https://dap-aqi-analys-vay3uhxyj5lkhtajjrq63q.streamlit.app/",
    embedDashboard: false,
    githubUrl: "https://github.com/trinc-AI-Porfolio/dap-aqi-analysis",
    featured: true,
  },
  {
    id: "aml-detective",
    title: "AML Detective — Phát Hiện Rửa Tiền Bitcoin",
    description:
      "Phát hiện ví Bitcoin bất hợp pháp trên dataset Elliptic++ (822K wallets) dùng Random Forest, XGBoost & Shiny dashboard (R).",
    longDescription:
      "Hệ thống Anti-Money Laundering phát hiện ví Bitcoin illicit trên mạng Bitcoin. " +
      "Trích xuất 40 features từ bipartite graph (wallet ↔ transaction) bao gồm behavioral features và graph-derived features. " +
      "Huấn luyện 3 mô hình: Logistic Regression, Random Forest (⭐ best), XGBoost GPU. " +
      "Đánh giá robustness qua 36-window walk-forward temporal evaluation (Mean F1 = 0.9999). " +
      "Dashboard Shiny 5 tabs: Data Analysis, Visualization (10 charts), Model Comparison, Temporal Robustness, Wallet Inspector. " +
      "Lưu ý: kết quả F1 cao do target leakage từ graph features — xem README để hiểu hạn chế.",
    category: "Machine Learning",
    tags: ["R", "Shiny", "Random Forest", "XGBoost", "Graph Features", "AML", "Bitcoin"],
    thumbnail: "/thumbnails/aml-thumbnail.png",
    demoUrl: "https://trinc-ai.shinyapps.io/aml-detective/",
    embedDashboard: false,
    githubUrl: "https://github.com/trinc-AI-Porfolio/aml-detective",
    featured: true,
  },
  {
    id: "giadinh-driving-test",
    title: "Gia Định — Thi Thử Bằng Lái Xe A1",
    description: "Ứng dụng di động luyện thi bằng lái xe máy đa nền tảng. Đã phát hành chính thức trên App Store và CH Play.",
    longDescription:
      "Sản phẩm ứng dụng di động thương mại thực tế nhắm tới người dùng chuẩn bị thi sát hạch lái xe máy A1. " +
      "Ứng dụng cung cấp kho đề thi chuẩn cấu trúc của bộ GTVT, chấm điểm tự động, luyện tập biển báo và mẹo ghi nhớ. " +
      "Tôi trực tiếp phát triển hệ thống bằng React Native (Expo) và quản lý xuất bản lên cả iOS (Apple App Store) và Android (Google Play Store). " +
      "Vì bảo mật thông tin khách hàng khóa (Closed Source), chỉ hiển thị sản phẩm cuối tại đây.",
    category: "Mobile App",
    tags: ["React Native", "Expo", "iOS", "Android"],
    thumbnail: "/thumbnails/driving-app-3d.jpg",
    thumbnailFit: "contain",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.trungtamgiadinh.app",
    appStoreUrl: "https://apps.apple.com/vn/app/thi-th%E1%BB%AD-b%E1%BA%B1ng-l%C3%A1i-xe-a1-a/id6758683906?l=vi",
    embedDashboard: false,
    featured: true,
  },
];
