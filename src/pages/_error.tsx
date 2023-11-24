import { CONFIG } from '@/site.config';
import { NextPageWithLayout, Page } from '../types';
import CustomError from '@/component/Error';
import MetaConfig from '@/components/MetaConfig';

type Props = {
  posts:Page;
};

export async function getStaticProps() {
  // 여기에서 데이터 가져오기
  return {
    props: {
      title: { text: '' },
    },
  };
}

const Error = ({ title }) => {
  return <CustomError />;
};

Error.getLayout = page => {
  return (
    <>
      <MetaConfig
        {...{
          title: CONFIG.blog.title,
          description: CONFIG.blog.description,
          type: 'website',
          url: CONFIG.link,
        }}
      />
      {page}
    </>
  );
};

export default Error;
