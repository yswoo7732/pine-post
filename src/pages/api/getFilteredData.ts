import { getFilteredDatabases } from '@/lib/notion';
import { NextApiRequest, NextApiResponse } from 'next';
import { logger } from '@/logger'; // our logger import
import { isNotionClientError } from '@notionhq/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const jsonData = req.body;

  try {
    const response = getFilteredDatabases(jsonData);
    res.status(200).json(response);
    // logger.info('getFilteredDatabases', response);
  } catch (error) {
    if (isNotionClientError(error)) {
      console.log('notion client error');
    }
    console.log(error.code);
    res.status(500).json(error);
  }
};

export default handler;
