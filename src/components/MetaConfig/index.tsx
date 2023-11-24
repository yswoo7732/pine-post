import { CONFIG } from 'site.config';
import Head from 'next/head';

export type MetaConfigProps = {
  title: string;
  description: string;
  type: 'Post' | string;
  date?: string;
  image?: string;
  url: string;
};

const MetaConfig: React.FC<MetaConfigProps> = props => {
  return (
    <Head>
      <title>{props.title ?? '투자 콘텐츠'}</title>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <meta name="description" content={props.description} />
      {/* og */}
      <meta property="og:type" content={props.type} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.url} />
      {CONFIG.lang && <meta property="og:locale" content={CONFIG.lang} />}
      {props.image && <meta property="og:image" content={props.image} />}
      {/* twitter */}
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:card" content="summary_large_image" />
      {props.image && <meta name="twitter:image" content={props.image} />}
      {/* post */}
      {props.type === 'Post' && (
        <>
          {/* <meta property="article:published_time" content={props.date} />
          <meta property="article:author" content={CONFIG.profile.name} /> */}
        </>
      )}
    </Head>
  );
};

export default MetaConfig;
