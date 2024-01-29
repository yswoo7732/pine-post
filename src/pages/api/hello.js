// pages/api/hello.js
import { APIErrorCode, Client } from '@notionhq/client';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { generateUniqueTransactionId } from '@/constants';

// 환경 변수를 통해 프록시 설정 적용
const httpsProxy = process.env.HTTPS_PROXY || '';
const agent = new HttpsProxyAgent(httpsProxy);
const requestId = generateUniqueTransactionId();

const client = new Client({
  auth: process.env.NOTION_KEY,
  agent: agent,
});
export default async function handler(req, res) {
  try {
    // 서버 측에서 Notion API 호출 전 로그 출력
    setTimeout(() => {
      console.log(`[${requestId}] Calling Notion API`);
    }, 3000);

    // Notion API 호출
    const response = await client.databases.query({
      database_id: `${process.env.NOTION_DATABASE}`,
      filter: {
        property: 'Status',
        status: {
          equals: 'Published',
        },
      },
      page_size: 10,
    });

    // 서버 측에서 Notion API 호출 후 로그 출력
    setTimeout(() => {
      console.log(`[${requestId}] Notion API response:`, response);
    }, 3000);
    // 서버 응답
    res.status(200).json({ message: 'Hello' });
  } catch (error) {
    console.error(`[${requestId}] Error calling Notion API`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
