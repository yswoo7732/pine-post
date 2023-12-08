import { GetServerSideProps } from 'next/types';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { queryClient } from '@/lib/react-query';
import { queryKey } from '@/constants/queryKey';
import usePostQuery from '@/hooks/usePostQuery';
import useBlockQuery from '@/hooks/useBlockQuery';
import { dehydrate } from '@tanstack/react-query';
import MetaConfig from '@/components/MetaConfig';
import { CONFIG } from '@/site.config';
import { NextPageWithLayout } from '@/types';
import CustomError from '@/components/Error';
import { renderBlock } from '@/components/PageDetail';
import OnelinkButton from '@/components/OnelinkButton';
import { isPine } from '@/lib/utils';
import { getBlocks, getPages } from '@/lib/notion';
import dayjs from 'dayjs';
import { nativeConnector } from '@/lib/native';
import { WEB_LINK } from '@/constants';

export const getServerSideProps: GetServerSideProps = async context => {
  const id = context.query?.id;
  const page_result = await getPages(`${id}`);
  await queryClient.prefetchQuery(queryKey.post(`${id}`), () => page_result);

  const { results } = await getBlocks(`${id}`);
  await queryClient.prefetchQuery(queryKey.block(`${id}`), () => results, {});

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      title: {
        text: '',
        props: { share: 'y' },
      },
    },
  };
};

const Post: NextPageWithLayout = () => {
  const post = usePostQuery();
  const blocks = useBlockQuery();
  const router = useRouter();
  const tags = post?.properties?.Tags.multi_select.map(item => {
    return { id: item.id, name: item.name };
  });

  // console.log('post', post);
  if (!post || !blocks) return <CustomError />;

  const image =
    CONFIG.ogImageGenerateURL ??
    `${CONFIG.ogImageGenerateURL}/${encodeURIComponent('')}.png`;

  const meta = {
    title: post?.properties.Name.title[0].plain_text || '',
    image:
      post?.properties.thumbnail.files?.[0]?.file?.url ||
      post?.properties.thumbnail.files?.[0]?.name ||
      image,
    description:
      post?.properties.description.rich_text[0]?.plain_text ||
      CONFIG.blog.description,
    type: 'website',
    url: `${CONFIG.link}/${post?.properties.slug.rich_text[0].plain_text}?id=${post.id}`,
  };

  return (
    <>
      <MetaConfig {...meta} />
      <div className="p-container px-container">
        <article>
          <h1 className="py-2">{post?.properties.Name.title[0].plain_text}</h1>
          <p className="text-neutral-60 my-2 text-sm font-normal">
            {dayjs(post?.last_edited_time || post?.created_time).format(
              'YYYY-MM-DD'
            )}
          </p>
          <section>
            {blocks?.map(block => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
          </section>
          <section className="pb-32">
            {isPine() && (
              <div className="flex gap-2 mb-8 flex-wrap">
                {tags?.map((tag, idx) => (
                  <div
                    className="font-medium text-neutral-60 border-neutral-20 border rounded-2xl py-1 px-3 active:bg-neutral-100 active:text-neutral-10"
                    key={idx}
                    onClick={() => {
                      {
                        router.push(
                          `/feed?id=${tag.name}&property=Tags&title=${tag.name}`
                        );

                        // PV 트래킹
                        nativeConnector.sendAppsFlyerLog('af_content_view', {
                          af_action_type: 'tag',
                          af_content_id: `${tag.name}`,
                        });
                      }
                    }}
                  >
                    {tag.name}
                  </div>
                ))}
              </div>
            )}
            {isPine() ? (
              post.properties.button_link.rich_text.length > 0 && (
                <OnelinkButton
                  onClick={() => {
                    // PV 트래킹
                    nativeConnector.sendAppsFlyerLog('af_content_view', {
                      af_action_type: 'button',
                      af_content_id:
                        post.properties.button_link.rich_text[0].plain_text,
                    });
                    window.location.href =
                      post.properties.button_link.rich_text[0].plain_text;
                  }}
                  text={post.properties.button_name.rich_text[0]?.plain_text}
                />
              )
            ) : (
              <OnelinkButton
                onClick={() => {
                  window.location.href = WEB_LINK;
                }}
                text={post.properties.button_name.rich_text[0]?.plain_text}
              />
            )}
          </section>
        </article>
      </div>
    </>
  );
};

export default Post;
