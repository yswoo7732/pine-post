import { getFilteredDatabases } from '@/lib/notion';
import { NextApiRequest, NextApiResponse } from 'next';
import { logger } from '@/logger'; // our logger import

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const jsonData = req.body;

  try {
    const response = await getFilteredDatabases(jsonData);
    res.status(200).json(response);
    logger.info('getFilteredDatabases', response);
  } catch (error) {
    logger.error('getFilteredData Error', error);
    res.status(500).json(error);
  }
};

export default handler;
