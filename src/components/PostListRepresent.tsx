import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
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
  const cateByDatas = data?.results?.map((item: any) => {
    const { data } = useCategoryByPostsQuery(item.id);
    return { id: item.id, data: data?.pages[0]?.results };
  }); // 카테고리별 콘텐츠 조회

  const cateIdByPosts = cateByDatas.reduce((acc, item) => {
    acc[item.id] = item.data;
    return acc;
  }, {}); // 카테고리 id를 키로 하는 콘텐츠 객체

  const posts = filteredCategoryData.map(cateData => {
    return { data: cateIdByPosts[cateData.id], ...cateData };
  });

  // const [cateByDatas, setCateByDatas] = useState<any>([]); // 카테고리별 콘텐츠 조회
  // const [posts, setPosts] = useState<any>([]); // 카테고리별 콘텐츠 조회

  // useEffect(() => {
  //   // 클라이언트 측에서만 데이터를 가져오도록 처리
  //   const fetchData = async () => {
  //     const newData = await Promise.all(
  //       data?.results?.map(async (item: { id: string }) => {
  //         // useCategoryByPostsQuery 훅을 직접 호출하지 말고, 해당 훅의 로직을 직접 수행
  //         const filter = {
  //           property: 'category',
  //           relation: {
  //             contains: item.id,
  //           },
  //         };

  //         const response = await fetch(`/api/getFilteredData`, {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(filter),
  //         });
  //         const cateByPostsData = await response.json();

  //         return { id: item.id, data: cateByPostsData?.results };
  //       })
  //     );

  //     setCateByDatas(newData);
  //   };

  //   fetchData();
  // }, [data]);

  // useEffect(() => {
  //   const cateIdByPosts = cateByDatas.reduce(
  //     (acc: { [x: string]: any }, item: { id: string | number; data: any }) => {
  //       acc[item.id] = item.data;
  //       return acc;
  //     },
  //     {}
  //   ); // 카테고리 id를 키로 하는 콘텐츠 객체

  //   const posts = filteredCategoryData.map(cateData => {
  //     return { data: cateIdByPosts[cateData.id], ...cateData };
  //   });

  //   setPosts(posts);
  // }, [cateByDatas]);

  // const cateByDatas = data?.results?.map((item: { id: string; }) => {
  //   const { data: cateByPostsData } = useCategoryByPostsQuery(item.id);
  //   return { id: item.id, data: cateByPostsData?.pages[0].results };
  // });

  return (
    <article className="bg-neutral-20">
      {posts.map(
        post =>
          post.banner &&
          post.data?.length > 1 && (
            <SwiperContents data={post.data} title={post.title} key={post.id} />
          )
      )}
      {posts.map(
        post =>
          !post.banner &&
          post.data?.length > 0 && (
            <section
              className="bg-[#fff] mb-3 min-w-full inline-block"
              key={post.slug}
            >
              {post.title && (
                <h4 className="mx-7 pt-5 line-clamp-2">{post.title}</h4>
              )}
              <ul className="mt-3">
                {post.data?.slice(0, 3).map(
                  (content: any) =>
                    content.properties.slug.rich_text.length > 0 && (
                      <Link
                        href={{
                          pathname: `/${content.properties.slug?.rich_text[0]?.plain_text}`,
                          query: { id: content.id },
                        }}
                        key={content.id}
                        legacyBehavior
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
                    )
                )}
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
