import { getPages } from '@/lib/notion';
import { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const response = await getPages(`${id}`);
    res.status(200).json(response);
    console.info('getPagesData: ', response);
  } catch (error) {
    console.error('getPagesData Error: ', error);
  }
}
