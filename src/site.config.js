const CONFIG = {
  blog: {
    title: '오늘도 행복한 투자! 파인 톡톡',
    description: '오늘도 행복한 투자! 파인 PINE 톡톡',
  },

  // CONFIG configration (required)
  link: process.env.SITE_URL || 'https://post.pine.fund',
  since: 2023, // If leave this empty, current year will be used.
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL:
    'https://kr.object.fin-ncloudstorage.com/mkt/pine_toktok_og_1200.png', // The link to generate OG image, don't end with a slash
  revalidateTime: 1800, // revalidate time 30분
};

module.exports = { CONFIG };
