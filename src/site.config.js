const CONFIG = {
  blog: {
    title: '나의 투자메이트 파인(PINE)',
    description: '파인, PINE, 투자, 컨텐츠, 주간머니뉴스',
  },

  // CONFIG configration (required)
  link: process.env.SITE_URL || 'https://post.pine.fund',
  since: 2023, // If leave this empty, current year will be used.
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://pine.fund/assets/thumb_1200x630.jpg', // The link to generate OG image, don't end with a slash
  revalidateTime: 1800, // revalidate time 30분
};

module.exports = { CONFIG };
