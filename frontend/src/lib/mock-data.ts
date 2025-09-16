import { StrapiCollectionResponse, News } from '@/types/cms';

export const MOCK_NEWS_LIST: StrapiCollectionResponse<News> = {
  data: [
    {
      id: 1,
      attributes: {
        title: "NHK学生ロボコン2024に出場決定！",
        content: `# NHK学生ロボコン2024出場について

今年も**NHK学生ロボコン2024**に出場することが決定いたしました！

## 大会概要

- **開催日**: 2024年6月15日（土）
- **会場**: 東京都内の競技会場
- **テーマ**: 「未来への挑戦」

## チームの準備状況

### 機械班
- ロボットの設計・製作が順調に進んでいます
- 新しい機構の開発に成功しました

### 回路班  
- 制御回路の最適化が完了
- センサー系統の精度向上を実現

### 制御班
- アルゴリズムの改良により動作精度が大幅に向上
- 自動制御システムの安定性を確保

### 運営班
- 大会運営のサポート体制を整備
- 広報活動を積極的に展開

## 応援のお願い

皆様の温かいご支援とご声援をよろしくお願いいたします。

> 私たちは**世界一**を目指して日々努力しています！

詳細な情報は随時更新いたします。`,
        date: "2024-06-01",
        image: {
          data: {
            id: 1,
            attributes: {
              name: "robocon2024.jpg",
              alternativeText: "NHK学生ロボコン2024の様子",
              caption: null,
              width: 800,
              height: 600,
              formats: {
                thumbnail: { name: "thumb_robocon2024.jpg", hash: "thumb_hash", ext: ".jpg", mime: "image/jpeg", path: null, width: 150, height: 113, size: 15000, url: "/assets/news/robocon2024.jpg" },
                small: { name: "small_robocon2024.jpg", hash: "small_hash", ext: ".jpg", mime: "image/jpeg", path: null, width: 400, height: 300, size: 45000, url: "/assets/news/robocon2024.jpg" },
                medium: { name: "medium_robocon2024.jpg", hash: "medium_hash", ext: ".jpg", mime: "image/jpeg", path: null, width: 600, height: 450, size: 75000, url: "/assets/news/robocon2024.jpg" },
                large: { name: "large_robocon2024.jpg", hash: "large_hash", ext: ".jpg", mime: "image/jpeg", path: null, width: 800, height: 600, size: 120000, url: "/assets/news/robocon2024.jpg" }
              },
              hash: "robocon2024_hash",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 120000,
              url: "/assets/news/robocon2024.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-06-01T12:00:00.000Z",
              updatedAt: "2024-06-01T12:00:00.000Z"
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
        content: `# 新入生歓迎会開催報告

## イベント概要

2024年4月15日、長岡技科大ロボコンプロジェクトの新入生歓迎会を開催いたしました。

### 参加者数
- **新入生**: 25名
- **在校生**: 35名
- **合計**: 60名

## イベント内容

### 1. プロジェクト紹介
各班の活動内容と過去の実績について詳しく説明しました。

### 2. ロボット実演
- 昨年度製作したロボットのデモンストレーション
- 実際の動作を見て、多くの新入生が興味を示してくれました

### 3. 体験コーナー
- **機械班**: CAD操作体験
- **回路班**: 基板製作体験  
- **制御班**: プログラミング体験
- **運営班**: 企画立案ワークショップ

## 新入生の声

> 「実際にロボットが動いているのを見て、とても感動しました！」

> 「先輩方がとても親切で、安心して参加できました。」

## 今後の予定

新入生の皆さんには、各班での活動に参加していただき、実際のロボット製作を通じて技術を身につけていただきます。

**一緒に世界を目指しましょう！**`,
        date: "2024-04-15",
        image: {
          data: {
            id: 2,
            attributes: {
              name: "welcome.jpg",
              alternativeText: "新入生歓迎会の様子",
              caption: null,
              width: 800,
              height: 600,
              formats: {
                thumbnail: { name: "thumb_welcome.jpg", hash: "thumb_hash", ext: ".jpg", mime: "image/jpeg", path: null, width: 150, height: 113, size: 15000, url: "/assets/news/welcome.jpg" },
                small: { name: "small_welcome.jpg", hash: "small_hash", ext: ".jpg", mime: "image/jpeg", path: null, width: 400, height: 300, size: 45000, url: "/assets/news/welcome.jpg" },
                medium: { name: "medium_welcome.jpg", hash: "medium_hash", ext: ".jpg", mime: "image/jpeg", path: null, width: 600, height: 450, size: 75000, url: "/assets/news/welcome.jpg" },
                large: { name: "large_welcome.jpg", hash: "large_hash", ext: ".jpg", mime: "image/jpeg", path: null, width: 800, height: 600, size: 120000, url: "/assets/news/welcome.jpg" }
              },
              hash: "welcome_hash",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 120000,
              url: "/assets/news/welcome.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-04-15T12:00:00.000Z",
              updatedAt: "2024-04-15T12:00:00.000Z"
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
        content: `# 新スポンサー様のご紹介

この度、新たに**3社**の企業様にスポンサーとしてご支援いただくことになりました。

## 新スポンサー企業様

### 1. 株式会社テクノロジーイノベーション
- **事業内容**: 産業用ロボット開発・製造
- **ご支援内容**: 技術指導および部品提供

### 2. 未来エンジニアリング株式会社  
- **事業内容**: AI・IoTソリューション開発
- **ご支援内容**: ソフトウェア開発支援

### 3. 株式会社メカトロニクス
- **事業内容**: 精密機械部品製造
- **ご支援内容**: 高精度部品の提供

## 感謝の気持ち

私たちの活動にご理解とご支援をいただき、心より感謝申し上げます。

> 「企業様からのご支援により、より高度なロボット開発が可能になります」

## スポンサーシップについて

長岡技科大ロボコンプロジェクトでは、引き続きスポンサー企業様を募集しております。

### スポンサーのメリット
- 技術系学生との交流機会
- 企業PRの場としての活用
- 次世代エンジニア育成への貢献

詳細は[スポンサーシップページ](/sponsorship)をご覧ください。

**皆様のご支援により、世界を目指すことができます！**`,
        date: "2024-03-10",
        image: {
          data: {
            id: 3,
            attributes: {
              name: "sponsor.jpg",
              alternativeText: "スポンサー企業様との会合",
              caption: null,
              width: 800,
              height: 600,
              formats: {
                thumbnail: { name: "thumb_sponsor.jpg", hash: "thumb_hash", ext: ".jpg", mime: "image/jpeg", path: null, width: 150, height: 113, size: 15000, url: "/assets/news/sponsor.jpg" },
                small: { name: "small_sponsor.jpg", hash: "small_hash", ext: ".jpg", mime: "image/jpeg", path: null, width: 400, height: 300, size: 45000, url: "/assets/news/sponsor.jpg" },
                medium: { name: "medium_sponsor.jpg", hash: "medium_hash", ext: ".jpg", mime: "image/jpeg", path: null, width: 600, height: 450, size: 75000, url: "/assets/news/sponsor.jpg" },
                large: { name: "large_sponsor.jpg", hash: "large_hash", ext: ".jpg", mime: "image/jpeg", path: null, width: 800, height: 600, size: 120000, url: "/assets/news/sponsor.jpg" }
              },
              hash: "sponsor_hash",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 120000,
              url: "/assets/news/sponsor.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-03-10T12:00:00.000Z",
              updatedAt: "2024-03-10T12:00:00.000Z"
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
