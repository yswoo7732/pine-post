import { getTagsByPosts } from '@/api';
import { queryKey } from '@/constants/queryKey';
import { useInfiniteQuery } from '@tanstack/react-query';

const useTagsByPostsQuery = (id: string) => {
  // console.log(id, !!id);
  const data = useInfiniteQuery(queryKey.filter(id), getTagsByPosts(id), {
    getNextPageParam: lastPage => lastPage.next_cursor ?? undefined,
    enabled: !!id,
  });

  // console.log(data);
  if (!data) throw new Error('Posts data is not found');
  return data;
};

export default useTagsByPostsQuery;
