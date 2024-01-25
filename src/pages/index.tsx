import { IndexPageProps } from '@/types';
import { dehydrate } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { CONFIG } from '@/site.config';
import MetaConfig from '@/components/MetaConfig';
import { getCategoryDatabases, getFilteredDatabases } from '@/lib/notion';
import PostListRepresent from '@/components/PostListRepresent';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next/types';
import { queryKey } from '@/constants/queryKey';
import getConfig from 'next/config';

// export const getStaticProps: GetStaticProps = async () => {
//   try {
//     // 데이터를 가져오는 비동기 함수 호출
//     const data = await getCategoryDatabases();

//     if (!data) {
//       // 데이터가 없으면 에러 발생
//       throw new Error('Failed to fetch data');
//     }

//     // 각 페이지의 url을 사용하여 추가 데이터를 가져오기
//     const additionalDataPromises = data.results.map(async category => {
//       const categoryId = category.id;
//       const additionalData = await fetchAdditionalData(categoryId);
//       return { categoryId, additionalData, category };
//     });

//     // Promise.all을 사용하여 모든 페이지의 추가 데이터를 기다림
//     const pagesWithData = await Promise.all(additionalDataPromises);

//     return {
//       props: {
//         data: {
//           ...data,
//           results: pagesWithData,
//         },
//       },
//       revalidate: CONFIG.revalidateTime,
//     };
//   } catch (error) {
//     // 데이터를 가져오는 중에 오류가 발생하면 에러를 콘솔에 출력
//     console.error('Error fetching data:', error.message);

//     // 빈 데이터로 반환 또는 에러 처리에 따라 적절히 조치
//     return {
//       props: {
//         data: {},
//       },
//       revalidate: CONFIG.revalidateTime,
//     };
//   }
// };
// 각 페이지의 url을 받아와서 추가 데이터를 가져오는 비동기 함수
// async function fetchAdditionalData(categoryId: string) {
//   const filter = {
//     property: 'category',
//     relation: {
//       contains: categoryId,
//     },
//   };
//   const additionalData = await getFilteredDatabases(filter);

//   if (additionalData?.results) {
//     return additionalData.results;
//   }
// }

// const Home: NextPage<IndexPageProps> = data => {
//   const meta = {
//     title: CONFIG.blog.title,
//     description: CONFIG.blog.description,
//     type: 'website',
//     url: CONFIG.link,
//   };

//   console.log(data);
//   return (
//     <>
//       <MetaConfig {...meta} />
//       <PostListRepresent data={data} />
//     </>
//   );
// };

// export default Home;
// pages/index.js
import { v4 as uuidv4 } from 'uuid'; // UUID 생성을 위한 라이브러리 사용

export default function Home() {
  const requestId = uuidv4(); // 요청 ID 생성
  console.log(`Client: [${requestId}] Load`);

  const fetchNotionAPI = async () => {
    try {
      // 클라이언트 측에서 Notion API 호출 전 로그 출력
      console.log(`Client: [${requestId}] Calling Notion API`);

      // Notion API 호출
      const response = await fetch('/api/hello'); // 서버 측 API 호출

      const data = await response.json();

      // 클라이언트 측에서 Notion API 호출 후 로그 출력
      console.log(`Client: [${requestId}] Notion API response:`, data);
    } catch (error) {
      console.error(`Client: [${requestId}] Error calling Notion API`, error);
    }
  };

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={fetchNotionAPI}>Fetch Notion API</button>
    </div>
  );
}
