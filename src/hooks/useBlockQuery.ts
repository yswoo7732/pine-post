import { queryKey } from '@/constants/queryKey';
import { getBlocksData } from '@/pages/api';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

const useBlockQuery = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data } = useQuery({
    queryKey: queryKey.block(id as string),
    queryFn: () => getBlocksData(id as string),
  });

  return data;
};

export default useBlockQuery;
