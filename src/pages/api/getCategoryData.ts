import { getCategoryDatabases } from '@/lib/notion';
import { logger } from '@/logger';
import { NextApiRequest, NextApiResponse } from 'next/types';
// import middleware from '@/pages/middleware';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await getCategoryDatabases();
    res.status(200).json(response);
    logger.info('getCategoryData: ', response);
  } catch (error) {
    logger.error('getCategoryData Error: ', error);
  }
}
