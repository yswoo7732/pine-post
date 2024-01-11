import { getFilteredDatabases } from '@/lib/notion';
import { NextApiRequest, NextApiResponse } from 'next';
import { logger } from '@/logger'; // our logger import
import { isNotionClientError } from '@notionhq/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const jsonData = req.body;

  try {
    const response = await getFilteredDatabases(jsonData);
    res.status(200).json(response);
    console.log('getFilteredDatabases', response);
  } catch (error) {
    console.error('getFilteredData Error', error);
    res.status(500).json(error);
  }
};

export default handler;
