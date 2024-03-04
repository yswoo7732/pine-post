/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // React의 개발 모드에서 추가적인 검사와 경고를 활성화하는 기능
  swcMinify: true,
  compiler: { /* CSS-In-JS, 스타일드 컴포넌트 사용 시 */
    styledComponents: true,
  },
  eslint: { 
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
