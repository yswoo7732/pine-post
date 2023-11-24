import { queryKey } from '@/constants/queryKey';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

const usePostsQuery = () => {
  const { data } = useQuery({
    queryKey: queryKey.posts(),
    enabled: false,
    initialData: [],
  });

  return data;
};

export default usePostsQuery;
