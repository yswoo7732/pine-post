import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import React from 'react';
import { nativeConnector } from '@/lib/native';
import { isPine } from '@/lib/utils';
import useCategoryByPostsQuery from '@/hooks/useCategoryByPostsQuery';
import useTagsByPostsQuery from '@/hooks/useTagsByPostsQuery';
import { useRouter } from 'next/router';
import { APP_LINK_WEB } from '@/constants';

const PostList = ({ id, property }) => {
  const router = useRouter();
  const { data, hasNextPage, isFetching, fetchNextPage } =
    property === 'Tags' ? useTagsByPostsQuery(id) : useCategoryByPostsQuery(id);

  function DebouncedLink({ href, index, children }) {
    const [isClickDisabled, setIsClickDisabled] = useState(false);

    const handleClick = () => {
      if (!isClickDisabled) {
        if (isPine()) {
          // PV 트래킹
          nativeConnector.sendAppsFlyerLog('af_content_view', {
            af_action_type: 'view',
            af_content_id: href,
          });
        }
        sessionStorage.setItem(
          `__next_scroll_${window.history.state.idx}`,
          JSON.stringify({
            x: window.pageXOffset,
            y: window.pageYOffset,
          })
        );
        setIsClickDisabled(true);
        setTimeout(() => {
          setIsClickDisabled(false);
        }, 1000);
      }
    };

    return (
      // <div
      //   onClick={() =>
      //     window.open(
      //       `${APP_LINK_WEB}${document.location.origin}${pathname}?id=${query.id}`
      //     )
      //   }
      // >
      //   <div
      //     className="flex items-center gap-4 px-7 py-3 mb-4 active:bg-neutral-10"
      //     onClick={handleClick}
      //   >
      //     {children}
      //   </div>
      // </div>
      <Link href={href}>
        <div
          className="flex items-center gap-4 px-7 py-3 mb-4 active:bg-neutral-10"
          onClick={handleClick}
        >
          {children}
        </div>
      </Link>
    );
  }

  useEffect(() => {
    const handleRouteChange = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if ('scrollPosition' in sessionStorage) {
      window.scrollTo(0, Number(sessionStorage.getItem('scrollPosition')));
      sessionStorage.removeItem('scrollPosition');
    }
  }, []);

  return (
    <article className="p-container">
      {data && (
        <ul>
          {property === 'Tags' && <h4 className="mx-7 py-4">#{id}</h4>}
          {data.pages.map(
            page =>
              page.results?.map((block: any, index: number) => (
                <DebouncedLink
                  href={{
                    pathname: `/${block.properties.slug.rich_text[0].plain_text}`,
                    query: { id: block.id },
                  }}
                  index={index}
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
              ))
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