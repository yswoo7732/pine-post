import { keyBy } from '.';

// 컨텐츠 테이블의 데이터 배열을 id를 키로 그룹화
export function filteredPosts(posts) {
  const filteredItems = keyBy(posts?.pages?.[0].results, 'id');
  return filteredItems;
}
