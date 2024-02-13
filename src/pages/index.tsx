import { IndexPageProps } from '@/types';
import { CONFIG } from '@/site.config';
import MetaConfig from '@/components/MetaConfig';
import { getCategoryDatabases, getFilteredDatabases } from '@/lib/notion';
import PostListRepresent from '@/components/PostListRepresent';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next/types';
import { generateUniqueTransactionId } from '@/transactionId';
import { APIErrorCode, Client } from '@notionhq/client';
import { HttpsProxyAgent } from 'https-proxy-agent';

// 환경 변수를 통해 프록시 설정 적용
// const httpsProxy = process.env.HTTPS_PROXY || '';
// const agent = new HttpsProxyAgent(httpsProxy);

// const client = new Client({
// auth: process.env.NOTION_KEY,
// agent: agent,
// });
const requestId = generateUniqueTransactionId();

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(`[${requestId}] getStaticProps1`);
  try {
    // 데이터를 가져오는 비동기 함수 호출
    console.log(`[${requestId}] getStaticProps2`);
    const data = await getCategoryDatabases();
    console.log(`[${requestId}] getStaticProps3`);

    if (!data) {
      // 데이터가 없으면 에러 발생
      throw new Error('Failed to fetch data');
    }

    // 각 페이지의 url을 사용하여 추가 데이터를 가져오기
    const additionalDataPromises = data.results.map(async category => {
      const categoryId = category.id;
      const additionalData = await fetchAdditionalData(categoryId);
      return { categoryId, additionalData, category };
    });

    // Promise.all을 사용하여 모든 페이지의 추가 데이터를 기다림
    const pagesWithData = await Promise.all(additionalDataPromises);
    console.log(`[${requestId}] getStaticProps4`);

    return {
      props: {
        data: {
          ...data,
          results: pagesWithData,
        },
      },
    };
  } catch (error) {
    // 데이터를 가져오는 중에 오류가 발생하면 에러를 콘솔에 출력
    console.error('Error fetching data:', error.message);

    // 빈 데이터로 반환 또는 에러 처리에 따라 적절히 조치
    return {
      props: {
        data: {},
      },
      revalidate: CONFIG.revalidateTime,
    };
  }
};
// 각 페이지의 url을 받아와서 추가 데이터를 가져오는 비동기 함수
async function fetchAdditionalData(categoryId: string) {
  const filter = {
    property: 'category',
    relation: {
      contains: categoryId,
    },
  };

  // console.log(`[${requestId}] Before Fetching filtered data`);
  const additionalData = await getFilteredDatabases(filter);
  // console.log(`[${requestId}] Fetching filtered data`);

  if (additionalData?.results) {
    return additionalData.results;
  }
}

const Home: NextPage<IndexPageProps> = data => {
  console.log(`[${requestId}] getStaticProps5`);

  const meta = {
    title: CONFIG.blog.title,
    description: CONFIG.blog.description,
    type: 'website',
    url: CONFIG.link,
  };

  return (
    <>
      <MetaConfig {...meta} />
      <PostListRepresent data={data} />
    </>
  );
};

export default Home;
// const fetchNotionAPI = async () => {
//   try {
//     setTimeout(() => {
//       console.log(`[${requestId}] Before Calling Notion API`);
//     }, 3000);
//     // Notion API 호출
//     const response = await fetch('/api/hello'); // 서버 측 API 호출

//     const data = await response.json();

//     // 클라이언트 측에서 Notion API 호출 후 로그 출력
//     setTimeout(() => {
//       console.log(`[${requestId}] Notion API response:`, data);
//     }, 3000);
//   } catch (error) {
//     console.error(`[${requestId}] Error calling Notion API`, error);
//   }
// };

// export default function Home({ requestId }) {
//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   // 처음 요청일 때 로그 출력
//   // setTimeout(() => {
//     console.log('First request received.', requestId);
//   // }, 3000);

//   try {
//     // 서버 측에서 Notion API 호출 전 로그 출력
//     setTimeout(() => {
//       console.log(`[${requestId}] Calling Notion API`);
//     }, 3000);

//     // Notion API 호출
//     const response = await client.databases.query({
//       database_id: `${process.env.NOTION_DATABASE}`,
//       filter: {
//         property: 'Status',
//         status: {
//           equals: 'Published',
//         },
//       },
//       page_size: 10,
//     });

//     // 서버 측에서 Notion API 호출 후 로그 출력
//     setTimeout(() => {
//       console.log(`[${requestId}] Notion API response:`, response);
//     }, 3000);
//   } catch (error) {
//     console.error(`[${requestId}] Error calling Notion API`, error);
//   }

//   return {
//     props: {
//       requestId,
//     },
//   };
// }
