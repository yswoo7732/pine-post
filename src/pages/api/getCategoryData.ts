import { getCategoryDatabases } from '@/lib/notion';
import { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log('getCategory');
    const response = await getCategoryDatabases();
    res.status(200).json(response);
    console.info('getCategoryData: ', response);
  } catch (error) {
    console.error('getCategoryData Error: ', error);
  }
}
