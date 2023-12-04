// import logger from '@/winston';

// export const getTagsByPosts =
//   (id: string) =>
//   async ({ pageParam = undefined }) => {
//     const filter = {
//       property: 'Tags',
//       multi_select: {
//         contains: id,
//       },
//     };

//     try {
//       const response = await fetch(
//         `/api/getData?cursor=${pageParam || undefined}`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(filter),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       return await response.json();
//     } catch (error) {
//       logger.error('Error in getTagsByPosts:', error);
//     }
//   };

// // export const getCategoryByPostsCursor =
// //   (id: string) =>
// //   async ({ pageParam }) => {
// //     const filter = {
// //       property: 'category',
// //       relation: {
// //         contains: id,
// //       },
// //     };

// //     try {
// //       const response = await fetch(`/api/getData?cursor=${pageParam}`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(filter),
// //       });

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! Status: ${response.status}`);
// //       }
// //       return await response.json();
// //     } catch (error) {
// //       logger.error('Error in getCategoryByPosts:', error);
// //     }
// //   };

// // export const getCategoryByPosts =
// //   (id: string) =>
// //   async ({ pageParam = undefined }) => {
// //     const filter = {
// //       property: 'category',
// //       relation: {
// //         contains: id,
// //       },
// //     };

// //     let url = '';

// //     if (pageParam !== undefined) {
// //       url = `/api/getData?cursor=${pageParam}`;
// //     } else {
// //       url = `/api/getFilteredData`;
// //     }

// //     try {
// //       const response = await fetch(url, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(filter),
// //       });

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! Status: ${response.status}`);
// //       }
// //       const data = await response.json();

// //       if (!data) return data;
// //     } catch (error) {
// //       logger.error('Error in getCategoryByPosts:', error);
// //     }
// //   };

export const getCategory = async () => {
  try {
    const response = await fetch(`/api/getCategoryData`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    // logger.error('Error in getCategory:', error);
  }
};
