export const queryKey = {
  scheme: () => ['scheme'],
  posts: () => ['posts'],
  recommend: () => ['recommend'],
  tags: () => ['tags'],
  categories: () => ['categories'],
  filter: (slug: string) => ['filter', slug],
  post: (slug: string) => ['post', slug],
  block: (slug: string) => ['block', slug],
};
