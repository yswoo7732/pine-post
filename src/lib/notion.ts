import { Client } from '@notionhq/client';
import { HttpsProxyAgent } from 'https-proxy-agent';

// 환경 변수를 통해 프록시 설정 적용
const httpsProxy = process.env.HTTPS_PROXY || '';
const agent = new HttpsProxyAgent(httpsProxy);

const client = new Client({
  auth: process.env.NOTION_KEY,
  agent: agent,
});

async function getCategoryDatabases() {
  console.log('getCategoryDatabases');
  const myPosts = await client.databases.query({
    database_id: `${process.env.NOTION_CATEGORY_DB}`,
    page_size: 100,
  });
  return myPosts;
}

async function getDatabases() {
  console.log('getDatabases');
  const myPosts = await client.databases.query({
    database_id: `${process.env.NOTION_DATABASE}`,
    filter: {
      property: 'Status',
      status: {
        equals: 'Published',
      },
    },
    page_size: 3,
  });
  return myPosts;
}

async function getFilteredDatabases(filter) {
  console.log('getFilteredDatabases', filter);
  const filteredRows = await client.databases.query({
    database_id: `${process.env.NOTION_DATABASE}`,
    filter: {
      and: [
        filter,
        {
          property: 'Status',
          status: {
            equals: 'Published',
          },
        },
      ],
    },
    page_size: 3,
  });

  // console.log('getFilteredDatabases-------', filter, filteredRows);
  return filteredRows;
}

async function getDatabasesPages(cursor: string, filter: any) {
  console.log('getDatabasesPages', filter);

  const myPosts = await client.databases.query({
    database_id: `${process.env.NOTION_DATABASE}`,
    filter: {
      and: [
        filter,
        {
          property: 'Status',
          status: {
            equals: 'Published',
          },
        },
      ],
    },
    page_size: 3,
    start_cursor: cursor,
  });
  // console.log("bbbb", myPosts)

  return myPosts;
}

async function getPages(id: string) {
  const myPost = await client.pages.retrieve({
    page_id: id,
  });
  // console.log('getPage', myPost);
  return myPost;
}

async function getBlocks(id: string) {
  id = id.replaceAll('-', '');

  const myBlocks = await client.blocks.children.list({
    block_id: id,
  });
  // console.log('myBlocks', myBlocks);

  return myBlocks;
}

export {
  getDatabases,
  getFilteredDatabases,
  getPages,
  getBlocks,
  getDatabasesPages,
  getCategoryDatabases,
};
