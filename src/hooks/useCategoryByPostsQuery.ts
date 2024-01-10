import { queryKey } from '@/constants/queryKey';
import { logger } from '@/logger';
// import logger from '@/winston';
import { useInfiniteQuery } from '@tanstack/react-query';

const useCategoryByPostsQuery = (id: string) => {
  const data = useInfiniteQuery(
    queryKey.filter(id),
    async ({ pageParam = undefined }) => {
      const filter = {
        property: 'category',
        relation: {
          contains: id,
        },
      };

      if (pageParam === undefined) {
        // cursor 값이 undefined일 때의 처리
        const res = await fetch('/api/getFilteredData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(filter),
        });
        return res.json();
      }
      const res = await fetch(`/api/getData?cursor=${pageParam}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filter),
      });
      // logger.info('useCategoryByPostsQuery: ', filter);
      return res.json();
    },
    {
      getNextPageParam: lastPage => lastPage.next_cursor,
    }
  );

  if (!data) {
    throw new Error('Posts data is not found');
  } else {
  }
  return data;
};

export default useCategoryByPostsQuery;
