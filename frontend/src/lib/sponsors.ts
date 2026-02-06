// スポンサー・サポーター情報の共通定義

export interface Supporter {
  name: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  active?: boolean; // トップページに表示するかどうか
}

export const supporters: Supporter[] = [
  { name: 'tdk', src: '/assets/sponser/tdk.png', alt: 'TDK', width: 150, height: 50, active: false },
  { name: 'makita', src: '/assets/sponser/makita.png', alt: 'Makita', width: 150, height: 50, active: true },
  { name: 'mjs', src: '/assets/sponser/mjs.png', alt: 'MJS', width: 150, height: 50, active: true },
  { name: 'unext', src: '/assets/sponser/unext.png', alt: 'U-NEXT', width: 150, height: 50, active: false },
  { name: 'sprix', src: '/assets/sponser/sprix.png', alt: 'Sprix', width: 150, height: 50, active: true },
  { name: 'justem', src: '/assets/sponser/justem.png', alt: 'Justem', width: 120, height: 50, active: false },
  { name: 'fieldworks', src: '/assets/sponser/fieldworks.png', alt: 'Fieldworks', width: 150, height: 50, active: true },
  { name: 'noex', src: '/assets/sponser/noex.png', alt: 'Noex', width: 150, height: 50, active: true },
  { name: 'tkf', src: '/assets/sponser/tkf.png', alt: 'TKF', width: 150, height: 50, active: false },
  { name: 'systecom', src: '/assets/sponser/systecom.png', alt: 'Systecom', width: 150, height: 50, active: true },
  { name: 'ocs', src: '/assets/sponser/ocs.png', alt: 'OCS', width: 150, height: 50, active: true },
  { name: 'npm', src: '/assets/sponser/npm.png', alt: 'NPM', width: 150, height: 50, active: true },
  { name: 'tone', src: '/assets/sponser/tone.png', alt: 'TONE', width: 150, height: 50, active: true },
  { name: 'kitagawa', src: '/assets/sponser/kitagawa.webp', alt: 'Kitagawa', width: 150, height: 50, active: true },
  { name: 'gidai', src: '/assets/sponser/gidai.webp', alt: 'Gidai', width: 150, height: 50, active: true },
  { name: 'smc', src: '/assets/sponser/smc.webp', alt: 'SMC', width: 150, height: 50, active: true },
];

// トップページ用（activeなスポンサーのみ）
export const activeSupporters = supporters.filter(s => s.active !== false);
