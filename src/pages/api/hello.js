// pages/api/hello.js
import { v4 as uuidv4 } from 'uuid'; // UUID 생성을 위한 라이브러리 사용
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
  const requestId = uuidv4(); // 요청 ID 생성

  try {
    // 서버 측에서 Notion API 호출 전 로그 출력
    console.log(`Server: [${requestId}] Calling Notion API`);

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
    console.log(`Server: [${requestId}] Notion API response:`, response);

    // 서버 응답
    res.status(200).json({ message: 'Hello' });
  } catch (error) {
    console.error(`Server: [${requestId}] Error calling Notion API`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
