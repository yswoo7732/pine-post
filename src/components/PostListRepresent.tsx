import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useCategoriesQuery from '@/hooks/useCategoriesQuery';
import { filteredCategory } from '@/lib/utils/filteredCategory';
import SwiperContents from './SwiperBanner';
import useCategoryByPostsQuery from '@/hooks/useCategoryByPostsQuery';
import MoreLinkButton from '@/component/MoreLinkButton';
import { APP_LINK_WEB } from '@/constants';
import { isPine } from '@/lib/utils';
import { nativeConnector } from '@/lib/native';

// category별로 호출
function PostListRepresent() {
  const { data } = useCategoriesQuery(); // 카테고리 DB 조회
  const filteredCategoryData = filteredCategory(data); // 카테고리 데이터 필터링

  const cateByDatas = data?.results?.map(item => {
    const { data } = useCategoryByPostsQuery(item.id);
    return { id: item.id, data: data?.pages[0].results };
  }); // 카테고리별 콘텐츠 조회

  const cateIdByPosts = cateByDatas.reduce((acc, item) => {
    acc[item.id] = item.data;
    return acc;
  }, {}); // 카테고리 id를 키로 하는 콘텐츠 객체

  const posts = filteredCategoryData.map(cateData => {
    return { data: cateIdByPosts[cateData.id], ...cateData };
  });

  console.log(cateByDatas);

  return (
    <article className="bg-neutral-20">
      {posts.map(post =>
        post.banner
          ? post.data?.length > 1 && (
              <SwiperContents
                data={post.data}
                title={post.title}
                key={post.id}
              />
            )
          : post.data?.length > 0 && (
              <section
                className="bg-[#fff] mb-3 min-w-full inline-block"
                key={post.slug}
              >
                {post.title && (
                  <h4 className="mx-7 pt-5 line-clamp-2">{post.title}</h4>
                )}
                <ul className="mt-3">
                  {post.data?.map((content: any) => (
                    <Link
                      href={{
                        pathname: `/${content.properties.slug.rich_text[0].plain_text}`,
                        query: { id: content.id },
                      }}
                      key={content.id}
                      legacyBehavior
                      // onClick={() =>
                      //   window.open(
                      //     `${APP_LINK_WEB}${document.location.origin}/${content.properties.slug.rich_text[0].plain_text}?id=${content.id}`
                      //   )
                      // }
                    >
                      <a
                        onClick={() => {
                          if (isPine()) {
                            // PV 트래킹
                            nativeConnector.sendAppsFlyerLog(
                              'af_content_view',
                              {
                                af_action_type: 'view',
                                af_content_id: `${content.properties.slug.rich_text[0].plain_text}`,
                              }
                            );
                          }
                        }}
                      >
                        <div className="flex items-center gap-4 px-7 py-4 active:bg-neutral-10">
                          <div className="flex-shrink-0">
                            {content?.properties.Icon?.files?.[0] ? (
                              <div className="bg-neutral-10 w-[50px] h-[50px] text-center rounded-full flex items-center justify-center">
                                <Image
                                  alt="아이콘"
                                  src={
                                    content.properties?.Icon.files[0].file.url
                                  }
                                  width={32}
                                  height={32}
                                  unoptimized={true}
                                />
                              </div>
                            ) : (
                              <Image
                                alt="아이콘"
                                src={'/icon-bg.png'}
                                width={50}
                                height={50}
                              />
                            )}
                          </div>
                          <h5>
                            {content?.properties?.Name.title[0].plain_text}
                          </h5>
                        </div>
                      </a>
                    </Link>
                  ))}
                  {post.data?.length > 2 && (
                    <MoreLinkButton
                      href={{
                        pathname: '/feed',
                        query: {
                          id: post.id,
                          property: 'category',
                          title: post.title,
                        },
                      }}
                    />
                  )}
                </ul>
              </section>
            )
      )}
    </article>
  );
}
export default PostListRepresent;
