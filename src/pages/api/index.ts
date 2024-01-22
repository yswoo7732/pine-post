export const getPagesData = async (id: string) => {
  try {
    const response = await fetch(`/api/getPagesData?id=${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error in getPagesData:', error);
  }
};

export const getBlocksData = async (id: string) => {
  try {
    const response = await fetch(`/api/getBlocksData?id=${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error in getBlocksData:', error);
  }
};

export const getCategory = async () => {
  console.log('getCategory index');

  try {
    const response = await fetch(`/api/getCategoryData`);
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error in getCategory:', error);
  }
};
