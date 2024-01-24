import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { filteredCategory } from '@/lib/utils/filteredCategory';
import SwiperContents from './SwiperBanner';
import { APP_LINK_WEB } from '@/constants';
import { isPine } from '@/lib/utils';
import { nativeConnector } from '@/lib/native';
import { Posts } from '@/types';
import {
  QueryFunctionContext,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import { queryKey } from '@/constants/queryKey';
import { queryClient } from '@/lib/react-query';
import { getCategoryDatabases } from '@/lib/notion';

// const fetchInfiniteData = async (context: {
//   queryKey?: any;
//   pageParam?: any;
// }) => {
//   // 사용자의 id를 API 호출에 포함시킴
//   const { pageParam = 1 } = context;
//   const id = context.queryKey[1]?.id; // queryKey에서 id 추출
//   const filter = {
//     property: 'category',
//     relation: {
//       contains: id,
//     },
//   };

//   const response = await fetch(`/api/getFilteredData?page=${pageParam}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(filter),
//   });
//   const data = await response.json();
//   return data;
// };

const PostListRepresent = ({ data }) => {
  console.log(data);
  // return <></>;
  // 카테고리 DB 조회
  // const {
  //   data: categories,
  //   isLoading: categoriesLoading,
  //   isError: categoriesError,
  // } = useQuery(queryKey.categories(), getCategoryDatabases);
  // // console.log(categories);

  // if (categoriesLoading) {
  //   return <p>Loading categories...</p>;
  // }

  // if (categoriesError) {
  //   return <p>Error loading categories</p>;
  // }

  // console.log('categories', categories);
  return (
    <div>
      <h1>Categories:</h1>
      <ul>
        {data.data?.results
          ?.filter((contents: any) => contents.additionalData.length > 0)
          .map((contents: any) => (
            <>
              <h3>
                {contents.category.properties.title.rich_text[0]?.plain_text}
              </h3>
              <li key={contents.categoryId}>
                {/* 각 카테고리별 콘텐츠 조회 */}
                <ContentList
                  key={contents.categoryId}
                  categoryId={contents.categoryId}
                  contents={contents.additionalData}
                />
              </li>
            </>
          ))}
      </ul>
    </div>
  );
};

const ContentList = ({ categoryId, contents }) => {
  console.log('contentlist', categoryId);

  // console.log('contents: ', contents, categoryId, slug);
  return (
    <ul>
      {/* {banner && <SwiperContents data={contents} title={title} />} */}
      <section
        className="bg-[#fff] mb-3 min-w-full inline-block"
        key={categoryId}
      >
        {/* {title && <h4 className="mx-7 pt-5 line-clamp-2">{title}</h4>} */}
        {contents.map((content: any) => (
          <ul className="mt-3" key={content.id}>
            {content.properties.slug.rich_text.length > 0 && (
              <Link
                href={{
                  pathname: `/${content.properties.slug?.rich_text[0]?.plain_text}`,
                  query: { id: content.id },
                }}
                key={content.id}
                legacyBehavior
              >
                <a
                  onClick={e => {
                    e.preventDefault();
                    if (isPine()) {
                      window.open(
                        `${APP_LINK_WEB}/${content.properties.slug?.rich_text[0]?.plain_text}?id=${content.id}`
                      );
                      // PV 트래킹
                      nativeConnector.sendAppsFlyerLog('af_content_view', {
                        af_action_type: 'view',
                        af_content_id: `${content.properties.slug.rich_text[0].plain_text}`,
                      });
                    } else {
                      window.location.href = `/${content.properties.slug?.rich_text[0]?.plain_text}?id=${content.id}`;
                    }
                  }}
                >
                  <div className="flex items-center gap-4 px-7 py-4 active:bg-neutral-10">
                    <div className="flex-shrink-0">
                      {content?.properties.Icon?.files?.[0] ? (
                        <div className="bg-neutral-10 w-[50px] h-[50px] text-center rounded-full flex items-center justify-center">
                          <Image
                            alt="아이콘"
                            src={content.properties?.Icon.files[0].file.url}
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
                    <h5>{content?.properties?.Name.title[0].plain_text}</h5>
                  </div>
                </a>
              </Link>
            )}
          </ul>
        ))}
        {/* {contents.results?.length > 2 && (
          <MoreLinkButton
            href={{
              pathname: '/feed',
              query: {
                id: categoryId,
                property: 'category',
                // title: title,
              },
            }}
          />
        )} */}
      </section>
    </ul>
  );
};

export default PostListRepresent;
