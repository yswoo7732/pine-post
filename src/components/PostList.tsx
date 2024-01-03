import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import React from 'react';
import { isPine } from '@/lib/utils';
import useCategoryByPostsQuery from '@/hooks/useCategoryByPostsQuery';
import useTagsByPostsQuery from '@/hooks/useTagsByPostsQuery';
import { APP_LINK_WEB } from '@/constants';

const PostList = ({ id, property, name }) => {
  const { data, hasNextPage, isFetching, fetchNextPage } =
    property === 'Tags' ? useTagsByPostsQuery(id) : useCategoryByPostsQuery(id);

  function DebouncedLink({ href, children }) {
    const [isClickDisabled, setIsClickDisabled] = useState(false);

    const handleClick = e => {
      console.log(href);
      e.preventDefault();
      if (!isClickDisabled) {
        setIsClickDisabled(true);
        setTimeout(() => {
          setIsClickDisabled(false);
        }, 1000);

        if (isPine()) {
          window.open(`${APP_LINK_WEB}${href.pathname}?id=${href.query.id}`);
        } else {
          window.location.href = `${href.pathname}?id=${href.query.id}`;
        }
      }
    };

    return (
      <Link href={href} legacyBehavior>
        <a
          className="flex items-center gap-4 px-7 py-3 mb-4 active:bg-neutral-10"
          onClick={handleClick}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <article className="p-container">
      {data && (
        <ul className="pb-7">
          {property === 'Tags' && <h4 className="mx-7 py-4">#{id}</h4>}
          {property === 'category' && !isPine() && (
            <h4 className="mx-7 py-4">{name}</h4>
          )}
          {data.pages.map(
            page =>
              page.results?.map(
                (block: any, index: number) =>
                  block.properties.slug.rich_text.length > 0 && (
                    <DebouncedLink
                      href={{
                        pathname: `/${block.properties.slug.rich_text[0].plain_text}`,
                        query: { id: block.id },
                      }}
                      key={block.id}
                    >
                      <div className="flex-shrink-0">
                        {block.properties.Icon?.files?.[0] ? (
                          <div className="bg-neutral-10 w-[50px] h-[50px] text-center rounded-full flex items-center justify-center">
                            <Image
                              alt="아이콘"
                              src={block.properties.Icon.files[0].file.url}
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

                      <h5 className=" line-clamp-2">
                        {block.properties?.Name.title[0].plain_text}
                      </h5>
                    </DebouncedLink>
                  )
              )
          )}
          {hasNextPage && (
            <div className="p-container mx-container pb-8">
              <button
                className="font-bold mx-container p-container py-4 min-w-full rounded-[10px] text-center bg-neutral-20 active:bg-neutral-30"
                onClick={() => fetchNextPage()}
                disabled={isFetching}
              >
                더 보기
              </button>
            </div>
          )}
        </ul>
      )}
    </article>
  );
};
export default PostList;
