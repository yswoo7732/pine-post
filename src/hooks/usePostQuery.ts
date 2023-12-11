import { queryKey } from '@/constants/queryKey';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getPagesData } from '@/pages/api';

const usePostQuery = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data } = useQuery({
    queryKey: queryKey.post(id as string),
    queryFn: () => getPagesData(id as string),
  });

  return data;
};

export default usePostQuery;
