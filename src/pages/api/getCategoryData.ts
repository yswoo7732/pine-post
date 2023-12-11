import { getCategoryDatabases } from '@/lib/notion';
import { logger } from '@/logger';
import { NextApiRequest, NextApiResponse } from 'next/types';

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
