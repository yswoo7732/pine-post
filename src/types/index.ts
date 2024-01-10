import { AppProps } from 'next/app';
import { NextPage } from 'next/types';
import { ReactElement, ReactNode } from 'react';

// TODO: refactor types
export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type TTags = {
  [tagName: string]: number;
};

export type TCategories = {
  results: [
    {
      id: string;
      properties: {
        tag: { select: { name: any } };
        banner: { checkbox: any };
        slug: { rich_text: any };
      };
    },
  ];
};

export type File = {
  name: string;
  type: string;
  file: {
    url: string;
    expiry_time: string;
  };
};

export type Page = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover: null | File;
  icon: null | File;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: {
    [x: string]: any;
    Icon: {
      id: string;
      type: string;
      files: File[];
    };
    updated_at: {
      id: string;
      type: string;
      last_edited_time: string;
    };
    Tags: {
      id: string;
      type: string;
      multi_select: any[]; // Change 'any' to a more specific type if you know the expected type of multi_select
    };
    updated_user: {
      id: string;
      type: string;
      last_edited_by: {
        object: string;
        id: string;
      };
    };
    created_at: {
      id: string;
      type: string;
      created_time: string;
    };
    published: {
      id: string;
      type: string;
      date: string | null;
    };
    Status: {
      id: string;
      type: string;
      status: {
        id: string;
        name: string;
        color: string;
      };
    };
    Name: {
      id: string;
      type: string;
      title: Array<{
        type: string;
        text: {
          content: string;
          link: null;
        };
        annotations: {
          bold: boolean;
          italic: boolean;
          strikethrough: boolean;
          underline: boolean;
          code: boolean;
          color: string;
        };
        plain_text: string;
        href: null;
      }>;
    };
  };
  url: string;
  public_url: null;
};

export type Blocks = [
  {
    object: 'list';
    results: [];
    next_cursor: null;
    has_more: false;
    type: 'block';
    block: {};
    id: string;
  },
];

export interface IndexPageProps {
  initialPosts: { pages: Page[]; pageParams: string };
}

export type RecommendData = {
  object: 'list';
  results: Page[];
};

export type RecommendSwiperProps = {
  spaceBetween: string;
  slidesPerView: number;
};

export type Posts = {
  data: [];
  id: string;
  slug: string;
  title: string;
  banner: boolean;
};
