import { getCategory } from '@/pages/api';
import { queryKey } from '@/constants/queryKey';
import { useQuery } from '@tanstack/react-query';

const useCategoriesQuery = () => {
  const data = useQuery({
    queryKey: queryKey.categories(),
    queryFn: () => getCategory(),
    enabled: false,
  });

  if (!data) throw new Error('Posts data is not found');

  return data;
};

export default useCategoriesQuery;
