import { getDatabases } from '@/lib/notion';
import { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getDatabases();

  res.status(200).json(response);
}
