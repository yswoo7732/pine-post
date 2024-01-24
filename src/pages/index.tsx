import { IndexPageProps } from '@/types';
import { dehydrate } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { CONFIG } from '@/site.config';
import MetaConfig from '@/components/MetaConfig';
import { getCategoryDatabases, getFilteredDatabases } from '@/lib/notion';
import PostListRepresent from '@/components/PostListRepresent';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next/types';
import { queryKey } from '@/constants/queryKey';

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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

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

const Home = () => {
  return <></>;
}; // const Home: NextPage<IndexPageProps> = data => {
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

export default Home;
