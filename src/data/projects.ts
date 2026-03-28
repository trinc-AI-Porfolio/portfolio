export type Category = "All" | "Dashboard" | "Machine Learning" | "Web App" | "Data Analytics";

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
  // ─── DỰ ÁN MẪU (xóa khi có đủ dự án thật) ───────────────
  {
    id: "sales-dashboard",
    title: "Sales Analytics Dashboard",
    description: "Dashboard phân tích doanh thu theo thời gian thực với biểu đồ tương tác.",
    longDescription:
      "Hệ thống dashboard theo dõi KPI doanh thu, so sánh hiệu suất theo tháng/quý/năm và phân tích xu hướng bán hàng theo khu vực địa lý.",
    category: "Dashboard",
    tags: ["Python", "Plotly", "Streamlit", "Pandas"],
    thumbnail: "/thumbnails/sales.png",
    demoUrl: undefined,
    embedDashboard: false,
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation ML",
    description: "Mô hình phân cụm khách hàng sử dụng K-Means và PCA visualization.",
    longDescription:
      "Phân tích RFM (Recency, Frequency, Monetary) kết hợp thuật toán clustering để nhóm khách hàng thành các segment có giá trị kinh doanh rõ ràng.",
    category: "Machine Learning",
    tags: ["Scikit-learn", "K-Means", "PCA", "Python"],
    thumbnail: "/thumbnails/ml.png",
    demoUrl: undefined,
    embedDashboard: false,
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "ecommerce-app",
    title: "E-Commerce Web App",
    description: "Ứng dụng bán hàng full-stack với giỏ hàng và thanh toán trực tuyến.",
    longDescription:
      "Web app thương mại điện tử với tính năng quản lý sản phẩm, giỏ hàng, xác thực người dùng và tích hợp cổng thanh toán.",
    category: "Web App",
    tags: ["Next.js", "PostgreSQL", "Stripe", "TypeScript"],
    thumbnail: "/thumbnails/ecommerce.png",
    demoUrl: undefined,
    embedDashboard: false,
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "hr-analytics",
    title: "HR Analytics Dashboard",
    description: "Dashboard phân tích dữ liệu nhân sự — tỷ lệ nghỉ việc, hiệu suất nhóm.",
    longDescription:
      "Công cụ BI cho phòng HR theo dõi headcount, attrition rate, performance distribution và satisfaction index theo từng phòng ban.",
    category: "Data Analytics",
    tags: ["Power BI", "SQL", "DAX", "Excel"],
    thumbnail: "/thumbnails/hr.png",
    demoUrl: undefined,
    embedDashboard: false,
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis API",
    description: "API phân tích cảm xúc văn bản tiếng Việt sử dụng PhoBERT.",
    longDescription:
      "Mô hình NLP fine-tuned trên PhoBERT để phân loại sentiment (positive/negative/neutral) cho review sản phẩm và bình luận mạng xã hội tiếng Việt.",
    category: "Machine Learning",
    tags: ["PyTorch", "Transformers", "PhoBERT", "FastAPI"],
    thumbnail: "/thumbnails/nlp.png",
    demoUrl: undefined,
    embedDashboard: false,
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "inventory-dashboard",
    title: "Inventory Management Dashboard",
    description: "Dashboard quản lý tồn kho real-time với cảnh báo tự động.",
    longDescription:
      "Hệ thống theo dõi tồn kho với tính năng cảnh báo low-stock, phân tích ABC classification và dự báo nhu cầu bằng time-series.",
    category: "Dashboard",
    tags: ["Streamlit", "Python", "SQLite", "Plotly"],
    thumbnail: "/thumbnails/inventory.png",
    demoUrl: undefined,
    embedDashboard: false,
    githubUrl: "https://github.com",
    featured: false,
  },
];
