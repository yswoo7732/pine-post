import { getDatabasesPages } from '@/lib/notion';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cursor } = req.query;
  const jsonData = req.body;

  try {
    const response = await getDatabasesPages(cursor as string, jsonData);
    res.status(200).json(response);
    console.info('getData: ', response);
  } catch (e: unknown) {
    console.error('getData Error: ', e);
    res.status(500).json(e);
  }
}
