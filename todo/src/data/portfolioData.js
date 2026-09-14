export const initialPortfolioData = {
  profile: {
    name: "NGUYỄN ĐỨC MẠNH",
    role: "Programmer · Developer · Builder",
    roleVi: "Lập trình viên · Người xây dựng sản phẩm",
    edition: "VOL. I / PORTFOLIO",
    subEdition: "FIRST EDITION · LEARNING · BUILDING · EXPERIMENTING",
    location: "Việt Nam",
    isbn: "PORTFOLIO · 2026",
    bio: "I am a programmer focused on learning web development, programming languages, and building practical projects. I enjoy experimenting with new technologies and turning ideas into functional digital products.",
    bioVi: "Tôi là một lập trình viên đang tập trung học phát triển web, các ngôn ngữ lập trình và xây dựng các dự án thực tế. Tôi thích thử nghiệm công nghệ mới và biến ý tưởng thành những sản phẩm số hữu dụng.",
    manifesto: "Learning. Building. Experimenting.",
    manifestoVi: "Học — Xây dựng — Thử nghiệm.",
    manifestoBody: [
      "I am learning to build for the web the way one learns a language: by speaking it every day. C taught me how machines think. Python taught me how to solve problems calmly. JavaScript taught me that the browser is a small operating system waiting to be programmed.",
      "This portfolio is a working notebook, not a trophy shelf. Every project collected here was built because I needed it, wanted to understand it, or simply wanted to see if I could make it run. The todo calendar I use every day lives one click away from this page.",
      "What I want to build next: small, useful, honest software. Tools that load fast, work offline when they can, and do exactly what they promise — nothing more, nothing less."
    ],
    manifestoBodyVi: [
      "Tôi học lập trình web như học một ngôn ngữ: dùng nó mỗi ngày. C dạy tôi cách máy tính suy nghĩ. Python dạy tôi cách giải quyết vấn đề một cách bình tĩnh. JavaScript dạy tôi rằng trình duyệt là một hệ điều hành nhỏ đang chờ được lập trình.",
      "Trang này là cuốn sổ tay làm việc, không phải kệ trưng bày giải thưởng. Mỗi dự án ở đây được xây dựng vì tôi cần nó, muốn hiểu nó, hoặc đơn giản là muốn xem mình có làm nó chạy được không. Cuốn lịch công việc tôi dùng mỗi ngày cách trang này đúng một cú click.",
      "Điều tôi muốn xây dựng tiếp theo: những phần mềm nhỏ, hữu ích và trung thực. Công cụ tải nhanh, hoạt động tốt và làm đúng những gì chúng hứa — không hơn, không kém."
    ],
    stats: [
      { label: "Projects Built", value: "01" },
      { label: "Languages Learning", value: "03" },
      { label: "Tools in Use", value: "05" },
      { label: "Learning Since", value: "2026" }
    ],
    contact: {
      email: "[THÊM EMAIL CỦA BẠN]",
      phone: "[THÊM SỐ ĐIỆN THOẠI]",
      instagram: "[THÊM INSTAGRAM]",
      studioAddress: "[THÊM ĐỊA CHỈ]",
      pressContact: "[THÊM EMAIL PHỤ]",
      newWorkNote: "Luôn sẵn sàng trò chuyện về lập trình, học tập và các dự án mới."
    }
  },
  projects: [
    {
      id: "proj-01",
      catalogCode: "PROJECT 01 · 2026",
      title: "Lịch Công Việc",
      subtitle: "Todo Calendar — ứng dụng lịch công việc cá nhân dùng hằng ngày.",
      category: "Web App / Productivity",
      year: "2026",
      client: "Cá nhân — Personal",
      award: "",
      scope: "Thiết kế & lập trình toàn bộ",
      overview: "A personal task-management web app built from scratch: a month-grid calendar on the left, a live task list on the right, a full-screen 24-hour timeline view, per-day background colors & images, quick-paste task lists, reminders via browser notifications, and Excel/CSV import-export. Data syncs in realtime through Firebase, so the same calendar works across devices.",
      overviewVi: "Ứng dụng quản lý công việc cá nhân được xây dựng từ đầu: lịch tháng ở cột trái, danh sách công việc theo thời gian thực ở cột phải, chế độ thời gian biểu 24 giờ toàn màn hình, đổi màu & ảnh nền cho từng ô ngày, dán nhanh danh sách việc, nhắc việc qua thông báo trình duyệt, và nhập/xuất dữ liệu Excel/CSV. Dữ liệu đồng bộ realtime qua Firebase nên dùng được trên nhiều thiết bị.",
      dimensions: "Month Grid · 24h Timeline · Realtime Sync",
      paperStock: "HTML · CSS · JavaScript",
      cmyk: ["HTML", "CSS", "JS", "FIREBASE"],
      pantone: "Firebase Realtime Database · SheetJS Excel/CSV",
      tags: ["Vanilla JS", "Firebase Realtime", "Excel Import/Export", "24h Timeline"],
      imageHero: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
      imageDetails: [
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop"
      ],
      editorialNotes: "The best project is the one you open every morning. This one I open every morning.",
      vectorKey: "todo",
      liveUrl: "todo-calendar.html",
      githubUrl: ""
    }
  ],
  typeSpecimens: [
    {
      id: "spec-01",
      name: "RAUHBART",
      style: "NO. 01 / DISPLAY · 2023",
      foundry: "Nguyễn Đức Mạnh Type Foundry",
      year: "2023",
      sampleText: "RAUHBART DISPLAY 1962 // SAXON SIGN PAINTER",
      tagline: "One weight, one alternate, one opinion.",
      characterSet: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 & ! ? . , — \" \"",
      fontFamily: "'Cormorant Garamond', serif",
      defaultSize: 38,
      defaultWeight: 700,
      defaultSpacing: -1,
      colorTheme: "bg-[#0A0A0C] text-[#F4F4F5] border-silver/30"
    }
  ],
  filmstripSwatches: [
    { name: "Obsidian Pure Black", hex: "#000000", cmyk: "60 / 50 / 40 / 100", rgb: "0 / 0 / 0", category: "Pure Black Primary (00-01)" },
    { name: "Carbon Dark Gray", hex: "#0A0A0C", cmyk: "70 / 60 / 60 / 90", rgb: "10 / 10 / 12", category: "Base Dark Layer (00-02)" },
    { name: "Graphite Mid", hex: "#141416", cmyk: "65 / 55 / 55 / 80", rgb: "20 / 20 / 22", category: "Dark Gray Card (00-03)" },
    { name: "Slate Charcoal", hex: "#202024", cmyk: "60 / 50 / 50 / 70", rgb: "32 / 32 / 36", category: "Textured Ground (00-04)" },
    { name: "Titanium Muted", hex: "#71717A", cmyk: "35 / 28 / 25 / 15", rgb: "113 / 113 / 122", category: "Muted Metal (00-05)" },
    { name: "Steel Dark Silver", hex: "#A1A1AA", cmyk: "25 / 18 / 18 / 5", rgb: "161 / 161 / 170", category: "Silver Medium (00-06)" },
    { name: "Metallic Silver 877 C", hex: "#C4C4C8", cmyk: "18 / 12 / 12 / 0", rgb: "196 / 196 / 200", category: "Foil · Metallic Accent (00-07)" },
    { name: "Chrome Silver Light", hex: "#D4D4D8", cmyk: "12 / 8 / 8 / 0", rgb: "212 / 212 / 216", category: "Silver Highlight (00-08)" },
    { name: "Platinum Silver White", hex: "#E4E4E7", cmyk: "6 / 4 / 4 / 0", rgb: "228 / 228 / 231", category: "Pure Foil Edge (00-09)" },
    { name: "Crisp Silver White", hex: "#F4F4F5", cmyk: "2 / 1 / 1 / 0", rgb: "244 / 244 / 245", category: "Type · Headline (00-10)" }
  ],
  lectures: []
};
