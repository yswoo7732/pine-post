import { Page } from '@/types';

export function getAllSelectTagItemsFromPosts(
  selected: string,
  posts: Page[] | undefined
) {
  const key = 'Tags';
  const filteredData = posts?.filter(item => {
    const multiSelect = item.properties.Tags.multi_select;
    return multiSelect.some(option => option.name === selected);
  });
  return filteredData;
}
