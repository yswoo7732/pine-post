import { queryKey } from '@/constants/queryKey';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { Page } from '@/types';

const usePostQuery = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery<Page>({
    queryKey: queryKey.post(`${id}`),
    enabled: false,
  });

  return data;
};

export default usePostQuery;
