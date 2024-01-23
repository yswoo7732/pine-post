import { IndexPageProps } from '@/types';
import { dehydrate } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { CONFIG } from '@/site.config';
import MetaConfig from '@/components/MetaConfig';
import { getCategoryDatabases } from '@/lib/notion';
import PostListRepresent from '@/components/PostListRepresent';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next/types';
import { queryKey } from '@/constants/queryKey';

export const getStaticProps: GetStaticProps = async () => {
  const data = await getCategoryDatabases();

  return {
    props: {
      data: data,
    },
    revalidate: CONFIG.revalidateTime,
  };
};

const Home: NextPage<IndexPageProps> = data => {
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
