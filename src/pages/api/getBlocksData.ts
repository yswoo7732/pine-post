import { getBlocks } from '@/lib/notion';
import { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const response = await getBlocks(`${id}`);
    res.status(200).json(response);
    // logger.info('getBlocksData: ', response);
  } catch (error) {
    console.error('getBlocksData Error: ', error);
  }
}
