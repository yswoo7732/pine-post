import { getCategoryDatabases, getFilteredDatabases } from '@/lib/notion';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const response = await getCategoryDatabases();

  res.status(200).json(response);
}
