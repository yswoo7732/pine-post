import { Page } from '@/types';

export function getAllTagsOrCategory(key: 'Tags' | 'category', posts: Page[]) {
  const selectedPosts = posts?.map(post => post?.properties?.[key]);
  const selectedValue = selectedPosts?.flatMap(item => {
    return item[item.type].flatMap((type: { name: any }) => type.name);
  });

  return [...new Set(selectedValue)];

  // const items = [...selectedPosts.map(p => p[key]).flat()];
}
