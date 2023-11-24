export const getTagsByPosts =
  (id: string) =>
  async ({ pageParam = undefined }) => {
    // console.log('getTagsByPosts@@@', pageParam);
    const filter = {
      property: 'Tags',
      multi_select: {
        contains: id,
      },
    };
    // console.log('sssgetCategetTagsByPosts', id, pageParam);

    const response = await fetch(`/api/getData?cursor=${pageParam}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filter),
    });
    // console.log(response);
    return response.json();
  };

export const getCategoryByPosts =
  (id: string) =>
  async ({ pageParam = undefined }) => {
    // console.log('getCateBY@@@', pageParam);
    const filter = {
      property: 'category',
      relation: {
        contains: id,
      },
    };

    const response = await fetch(`/api/getData?cursor=${pageParam}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filter),
    });
    return response.json();
  };

export const getCategory = async () => {
  // console.log('getCategoryByPosts@@@');
  const response = await fetch(`/api/getCategoryData`);
  return response.json();
};
