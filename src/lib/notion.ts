import { Client } from '@notionhq/client';
import { HttpsProxyAgent } from 'https-proxy-agent';
// import logger from '@/winston';

// 환경 변수를 통해 프록시 설정 적용
const httpsProxy = process.env.HTTPS_PROXY || '';
const agent = new HttpsProxyAgent(httpsProxy);

const client = new Client({
  auth: process.env.NOTION_KEY,
  agent: agent,
});

async function getCategoryDatabases() {
  try {
    const res = await client.databases.query({
      database_id: `${process.env.NOTION_CATEGORY_DB}`,
      page_size: 100,
    });
    return res;
  } catch (error) {
    // logger.error(error);
  }
}

async function getDatabases() {
  try {
    const res = await client.databases.query({
      database_id: `${process.env.NOTION_DATABASE}`,
      filter: {
        property: 'Status',
        status: {
          equals: 'Published',
        },
      },
      page_size: 10,
    });
    return res;
  } catch (error) {
    // logger.error(error);
  }
}

async function getFilteredDatabases(filter) {
  try {
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
      page_size: 10,
    });
    return filteredRows;
  } catch (error) {
    // logger.error(error);
  }
}

async function getDatabasesPages(cursor: string, filter: any) {
  try {
    const res = await client.databases.query({
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
      page_size: 10,
      start_cursor: cursor,
    });
    return res;
  } catch (error) {
    // logger.error(error);
  }
}

async function getPages(id: string) {
  try {
    const res = await client.pages.retrieve({
      page_id: id,
    });
    return res;
  } catch (error) {
    // logger.error(error);
  }
}

async function getBlocks(id: string) {
  id = id.replaceAll('-', '');
  const myBlocks = await client.blocks.children.list({
    block_id: id,
  });
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
