import { queryKey } from '@/constants/queryKey';
import { useInfiniteQuery } from '@tanstack/react-query';

const useTagsByPostsQuery = (id: string) => {
  // console.log(id, !!id);
  const data = useInfiniteQuery(
    queryKey.filter(id),
    async ({ pageParam = undefined }) => {
      const filter = {
        property: 'Tags',
        multi_select: {
          contains: id,
        },
      };

      console.log('pageParam', pageParam);

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
      return res.json();
    },
    {
      getNextPageParam: lastPage => lastPage.next_cursor,
    }
  );

  // console.log(data);
  if (!data) throw new Error('Posts data is not found');
  return data;
};

export default useTagsByPostsQuery;
