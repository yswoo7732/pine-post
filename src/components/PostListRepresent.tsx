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
import SwiperBanner from './SwiperBanner';

const PostListRepresent = ({ data }) => {
  console.log(data);
  // console.log('categories', categories);
  return data.data?.results
    ?.filter((contents: any) => contents.additionalData.length > 0)
    .map((contents: any, index: number) => (
      <div key={index}>
        {contents.category.properties.banner.checkbox && (
          <SwiperBanner
            data={contents.additionalData}
            title={contents.category.properties.title.rich_text[0]?.plain_text}
          />
        )}
        <>
          <h3>{contents.category.properties.title.rich_text[0]?.plain_text}</h3>
          <div key={contents.categoryId}>
            <h4>{contents.category.properties.banner.checkbox}</h4>
            <ContentList
              key={contents.categoryId}
              categoryId={contents.categoryId}
              contents={contents.additionalData}
            />
            {/* {!contents.category.properties.banner.checkbox && (

          )} */}
          </div>
        </>
      </div>
    ));
};

const ContentList = ({ categoryId, contents }) => {
  console.log('contentlist', categoryId);

  // console.log('contents: ', contents, categoryId, slug);
  return (
    <>
      <section
        className="bg-[#fff] mb-3 min-w-full inline-block"
        key={categoryId}
      >
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
    </>
  );
};

export default PostListRepresent;
