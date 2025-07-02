import { notFound } from "next/navigation";

const newsList = [
  {
    id: "1",
    title: "NHK学生ロボコン2024に出場決定！",
    date: "2024-06-01",
    image: "/assets/news/robocon2024.jpg",
    content: "今年もNHK学生ロボコンに出場します。応援よろしくお願いします！",
    category: "大会情報",
  },
  {
    id: "2",
    title: "新入生歓迎会を開催しました",
    date: "2024-04-15",
    image: "/assets/news/welcome.jpg",
    content: "たくさんの新入生が参加してくれました。",
    category: "イベント",
  },
  {
    id: "3",
    title: "スポンサー様ご紹介",
    date: "2024-03-10",
    image: "/assets/news/sponsor.jpg",
    content: "新たに3社のスポンサー様にご支援いただくことになりました。",
    category: "お知らせ",
  },
];

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const news = newsList.find((n) => n.id === params.id);
  if (!news) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8">
        <div className="mb-6">
          <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow font-semibold mr-2">{news.category}</span>
          <span className="text-xs text-gray-400">{news.date}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{news.title}</h1>
        <img src={news.image} alt={news.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <div className="text-gray-800 text-base leading-relaxed whitespace-pre-line">{news.content}</div>
      </div>
    </main>
  );
} 