import { getCategoryByPosts } from '@/api';
import { queryKey } from '@/constants/queryKey';
import { useInfiniteQuery } from '@tanstack/react-query';

const useCategoryByPostsQuery = (id: string) => {
  // console.log(id, !!id);

  const data = useInfiniteQuery(queryKey.filter(id), getCategoryByPosts(id), {
    getNextPageParam: lastPage => lastPage.next_cursor ?? undefined,
  });

  // console.log(data);
  if (!data) throw new Error('Posts data is not found');
  return data;
};

export default useCategoryByPostsQuery;
