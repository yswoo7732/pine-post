import { IndexPageProps } from '@/types';
import { dehydrate } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { CONFIG } from '@/site.config';
import MetaConfig from '@/components/MetaConfig';
import { getCategoryDatabases } from '@/lib/notion';
import PostListRepresent from '@/components/PostListRepresent';
import { GetServerSideProps, NextPage } from 'next/types';
import { queryKey } from '@/constants/queryKey';

export const getServerSideProps: GetServerSideProps = async () => {
  await queryClient.prefetchQuery(queryKey.categories(), getCategoryDatabases);
  console.log('getServerSideProps index');
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      title: { text: '파인 톡톡' },
    },
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
