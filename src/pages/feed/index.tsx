import React from 'react';
import PostList from '@/components/PostList';

export const getServerSideProps = async (context: any) => {
  const { property, title, id } = context.query;
  console.log(property, title, id);
  return {
    props: {
      id: id,
      property: property,
      title: { text: property === 'category' ? title : '' },
    },
  };
};

const Feed = ({ id, property }) => {
  return <PostList id={id} property={property} />;
};
export default Feed;
