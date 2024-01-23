import { IndexPageProps } from '@/types';
import { dehydrate } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { CONFIG } from '@/site.config';
import MetaConfig from '@/components/MetaConfig';
import { getCategoryDatabases } from '@/lib/notion';
import PostListRepresent from '@/components/PostListRepresent';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next/types';
import { queryKey } from '@/constants/queryKey';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    await queryClient.prefetchQuery(
      queryKey.categories(),
      getCategoryDatabases
    );

    // 만약 data가 빈 응답이면 캐시에서 해당 데이터를 제거
    const data = queryClient.getQueryData(queryKey.categories());
    console.log(data, 'queryClient');
    if (!data) {
      queryClient.invalidateQueries(queryKey.categories());
    }
  } catch (error) {
    // 에러 처리
    console.error('Error prefetching data:', error);
  }
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    // revalidate: CONFIG.revalidateTime,
  };
};

const Home: NextPage<IndexPageProps> = () => {
  const meta = {
    title: CONFIG.blog.title,
    description: CONFIG.blog.description,
    type: 'website',
    url: CONFIG.link,
  };

  return (
    <>
      <MetaConfig {...meta} />
      <PostListRepresent />
    </>
  );
};

export default Home;
