import { getDatabases } from '@/lib/notion';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('data handler');
  const response = await getDatabases();

  res.status(200).json(response);
}
