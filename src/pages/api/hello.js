// pages/api/hello.js
import { APIErrorCode, Client } from '@notionhq/client';
import { HttpsProxyAgent } from 'https-proxy-agent';

// 환경 변수를 통해 프록시 설정 적용
const httpsProxy = process.env.HTTPS_PROXY || '';
const agent = new HttpsProxyAgent(httpsProxy);

const client = new Client({
  auth: process.env.NOTION_KEY,
  agent: agent,
});
export default async function handler(req, res) {
  try {
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

    // 서버 응답
    res.status(200).json({ message: 'Hello' });
  } catch (error) {
    // console.error(`[${requestId}] Error calling Notion API`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
