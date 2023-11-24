import { TCategories } from '@/types';

// 카테고리 테이블에서 title, contents만 filter
export function filteredCategory(data: TCategories) {
  const filteredItems = data?.results?.map(item => {
    return {
      id: item.id,
      slug: item.properties.slug?.rich_text?.[0]?.plain_text,
      title: item.properties?.tag?.select?.name,
      banner: item.properties.banner?.checkbox,
    };
  });
  return filteredItems;
}
