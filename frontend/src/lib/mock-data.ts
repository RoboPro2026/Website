import { StrapiCollectionResponse, News } from '@/types/cms';

export const MOCK_NEWS_LIST: StrapiCollectionResponse<News> = {
  data: [
    {
      id: 1,
      attributes: {
        title: "NHK学生ロボコン2024に出場決定！",
        content: "今年もNHK学生ロボコンに出場します。応援よろしくお願いします！...（ここに詳細な本文が入ります）",
        date: "2024-06-01",
        image: {
          data: {
            id: 1,
            attributes: {
              name: "robocon2024.jpg",
              url: "/assets/news/robocon2024.jpg",
              // ... 他のメディア属性
            }
          }
        },
        category: "大会情報",
        excerpt: "NHK学生ロボコン2024に出場が決定しました！今年も応援よろしくお願いします。",
        createdAt: "2024-06-01T12:00:00.000Z",
        updatedAt: "2024-06-01T12:00:00.000Z",
        publishedAt: "2024-06-01T12:00:00.000Z",
      }
    },
    {
      id: 2,
      attributes: {
        title: "新入生歓迎会を開催しました",
        content: "たくさんの新入生が参加してくれました。...（ここに詳細な本文が入ります）",
        date: "2024-04-15",
        image: {
          data: {
            id: 2,
            attributes: {
              name: "welcome.jpg",
              url: "/assets/news/welcome.jpg",
              // ... 他のメディア属性
            }
          }
        },
        category: "イベント",
        excerpt: "新入生歓迎会を開催し、多くの新入生が参加してくれました。",
        createdAt: "2024-04-15T12:00:00.000Z",
        updatedAt: "2024-04-15T12:00:00.000Z",
        publishedAt: "2024-04-15T12:00:00.000Z",
      }
    },
    {
      id: 3,
      attributes: {
        title: "スポンサー様ご紹介",
        content: "新たに3社のスポンサー様にご支援いただくことになりました。...（ここに詳細な本文が入ります）",
        date: "2024-03-10",
        image: {
          data: {
            id: 3,
            attributes: {
              name: "sponsor.jpg",
              url: "/assets/news/sponsor.jpg",
              // ... 他のメディア属性
            }
          }
        },
        category: "お知らせ",
        excerpt: "新たに3社のスポンサー様にご支援いただくことになりました。",
        createdAt: "2024-03-10T12:00:00.000Z",
        updatedAt: "2024-03-10T12:00:00.000Z",
        publishedAt: "2024-03-10T12:00:00.000Z",
      }
    }
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 3,
    }
  }
};
