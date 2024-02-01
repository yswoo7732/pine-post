const withTwin = require('./withTwin');
const { execSync } = require('child_process');

const getGitHead = () => {
  try {
    return execSync('git rev-parse HEAD').toString().trim();
  } catch (error) {
    console.error('Error getting Git HEAD:', error);
    return 'unknown-git-head';
  }
};

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      's3.us-west-2.amazonaws.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      'www.notion.so',
      'images.unsplash.com',
      'dev-post.pine.fund',
      '172.23.20.200:3128',
    ],
    formats: ['image/avif', 'image/webp'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 86400, // 1일
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    HTTPS_PROXY: process.env.HTTPS_PROXY,
  },
  // 고정된 빌드 ID 설정
  generateBuildId: async () => {
    // Git의 HEAD 값 가져오기
    const gitHead = getGitHead();

    // Git의 HEAD 값을 빌드 ID로 사용
    return gitHead;
  },
});

module.exports = nextConfig;
