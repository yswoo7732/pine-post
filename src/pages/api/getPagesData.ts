import { getPages } from '@/lib/notion';
import { logger } from '@/logger';
import { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const response = await getPages(`${id}`);
    res.status(200).json(response);
    logger.info('getPagesData: ', response);
  } catch (error) {
    logger.error('getPagesData Error: ', error);
  }
}
