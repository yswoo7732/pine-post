import { APIErrorCode, Client } from '@notionhq/client';
import { HttpsProxyAgent } from 'https-proxy-agent';

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
    if (error instanceof Error && 'code' in error) {
      // Notion API specific error handling
      switch (error.code) {
        case APIErrorCode.RateLimited:
          console.log('Rate limited. Please try again later.');
          break;
        case APIErrorCode.ObjectNotFound:
          console.log('Not found. The resource may not exist.');
          break;
        default:
          console.error('Unhandled Notion API error:', error.message);
      }
    } else {
      // Generic error handling
      console.error('Unexpected error:', error.message);
    }
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
    if (error instanceof Error && 'code' in error) {
      // Notion API specific error handling
      switch (error.code) {
        case APIErrorCode.RateLimited:
          console.log('Rate limited. Please try again later.');
          break;
        case APIErrorCode.ObjectNotFound:
          console.log('Not found. The resource may not exist.');
          break;
        default:
          console.error('Unhandled Notion API error:', error.message);
      }
    } else {
      // Generic error handling
      console.error('Unexpected error:', error.message);
    }
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
    if (error instanceof Error && 'code' in error) {
      // Notion API specific error handling
      switch (error.code) {
        case APIErrorCode.RateLimited:
          console.log('Rate limited. Please try again later.');
          break;
        case APIErrorCode.ObjectNotFound:
          console.log('Not found. The resource may not exist.');
          break;
        default:
          console.error('Unhandled Notion API error:', error.message);
      }
    } else {
      // Generic error handling
      console.error('Unexpected error:', error.message);
    }
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
    if (error instanceof Error && 'code' in error) {
      // Notion API specific error handling
      switch (error.code) {
        case APIErrorCode.RateLimited:
          console.log('Rate limited. Please try again later.');
          break;
        case APIErrorCode.ObjectNotFound:
          console.log('Not found. The resource may not exist.');
          break;
        default:
          console.error('Unhandled Notion API error:', error.message);
      }
    } else {
      // Generic error handling
      console.error('Unexpected error:', error.message);
    }
  }
}

async function getPages(id: string) {
  try {
    const res = await client.pages.retrieve({
      page_id: id,
    });
    return res;
  } catch (error) {
    if (error instanceof Error && 'code' in error) {
      // Notion API specific error handling
      switch (error.code) {
        case APIErrorCode.RateLimited:
          console.log('Rate limited. Please try again later.');
          break;
        case APIErrorCode.ObjectNotFound:
          console.log('Not found. The resource may not exist.');
          break;
        default:
          console.error('Unhandled Notion API error:', error.message);
      }
    } else {
      // Generic error handling
      console.error('Unexpected error:', error.message);
    }
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
