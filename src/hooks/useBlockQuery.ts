import { queryKey } from '@/constants/queryKey';
import { Blocks } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

const useBlockQuery = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery<Blocks>({
    queryKey: queryKey.block(`${id}`),
    enabled: false,
  });

  return data;
};

export default useBlockQuery;
