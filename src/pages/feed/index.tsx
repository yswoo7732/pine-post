import React from 'react';
import PostList from '@/components/PostList';

export const getServerSideProps = async (context: any) => {
  const { property, title, id } = context.query;
  return {
    props: {
      id: id,
      property: property,
      name: title,
      title: { text: property === 'category' ? title : '' },
    },
  };
};

const Feed = ({ id, property, name }) => {
  return <PostList id={id} property={property} name={name} />;
};
export default Feed;
